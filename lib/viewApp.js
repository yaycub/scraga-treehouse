import express from 'express';
import app from './app.js';
import path from 'path';
import { fileURLToPath } from 'url';
import pageRoutes from './controllers/pages.js';
import notFound from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';

app.set('view engine', 'pug');
app.set('views', path.resolve(path.dirname(fileURLToPath(import.meta.url)), './views'));

app.use(express.static('public'));

app.use('/', pageRoutes);

app.use(notFound);
app.use(errorMiddleware);

export default app;