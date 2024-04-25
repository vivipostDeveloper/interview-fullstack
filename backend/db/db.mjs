import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: '144.202.109.16',
    user: 'vivipost_interviewee',
    password: '7uI6}K\}7*WP',
    database: 'VIVIPOST_DB_INTERVIEW',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;