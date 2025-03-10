import express from 'express';
import routes from './routes';
import { resolve } from 'node:path';
import './database';

class App {
  constructor() {
    this.app = express();

    this.niddlewares();
    this.routes();
  }

  niddlewares() {
    this.app.use(express.json());
    this.app.use(
      '/product-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    );
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
