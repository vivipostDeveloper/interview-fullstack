import mysql from 'mysql2';
import mysqlPromise from 'mysql2/promise';

const dbData = {
    host: '144.202.109.16',
    user: 'vivipost_interviewee',
    password: '7uI6}K\}7*WP',
    database: 'VIVIPOST_DB_INTERVIEW',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

export const pool = mysql.createPool(dbData);

export const poolPromise = mysqlPromise.createPool(dbData);