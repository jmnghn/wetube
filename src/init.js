import '@babel/polyfill';
import dotenv from 'dotenv';

dotenv.config();

import './db';
import app from './app';

import './models/Video';
import './models/Comment';
import './models/User';


const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`[O] Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
