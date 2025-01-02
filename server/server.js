import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as DiscordStrategy } from 'passport-discord';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '../.env' });

const app = express();

// Configure session
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
}));

app.use(cors({
    origin: 'http://localhost:5173', // React App URL
    credentials: true,
}));

app.use(passport.initialize());
app.use(passport.session());

// Discord strategy
passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/auth/discord/callback', // Updated callback URL
    scope: ['identify', 'email'],
}, (accessToken, refreshToken, profile, done) => {
    done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Routes
app.get('/auth/discord', passport.authenticate('discord'));
app.get('/auth/discord/callback',
    passport.authenticate('discord', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication, redirect to React
        res.redirect('http://localhost:5173/dashboard');
    }
);

app.get('/auth/logout', (req, res) => {
    req.logout(err => {
        if (err) return next(err);
        res.redirect('http://localhost:5173/');
    });
});

app.get('/auth/user', (req, res) => {
    res.json(req.user || null);
});

app.listen(5000, () => console.log('Server running on http://localhost:5000')); // Updated port
