import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/modular-router', (req, res) => {
    res.send('MODULAR ROUTER');
});

export default router;