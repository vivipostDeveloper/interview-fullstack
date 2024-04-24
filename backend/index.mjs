import express from 'express';
import bodyParser from 'body-parser';

import notificationRoute from './routes/notificationRoute.mjs';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/notification", notificationRoute);

app.listen(PORT, () => {
    console.log(`Interview backend running on port: ${PORT}`);
});