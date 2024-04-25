import { Router } from 'express';

// Database pool
import pool from '../db/db.mjs';

// Time formatter
import TimeAgo from 'javascript-time-ago';
import es from 'javascript-time-ago/locale/es';
TimeAgo.addDefaultLocale(es);
const timeAgo = new TimeAgo('es-MX')

const router = Router();

router.get('/', async (req, res) => {
    try {
        // Get notifications from database (Library: mysql2/promise)


        // Format date (Library: javascript-time-ago)
        

        res.json(); // Return notifications
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;