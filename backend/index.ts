import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import menuRoutes from './src/routes/menuRouter';
import nutritionRoutes from './src/routes/nutritionRouter';
import { db } from './src/config/dbConnect';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/menu', menuRoutes);
app.use('/nutrition', nutritionRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is the restaurant-antd API!');
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res
  .status(StatusCodes.INTERNAL_SERVER_ERROR)
  .send({
    error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
  });
});

// Handle server shutdown
const shutdown = async (signal: string) => {
  console.log(`Received ${signal}. Closing server...`);

  try {
    server.close(async () => {
      console.log('HTTP server closed.');
      
      await db.$pool.end();
      console.log('Database connection closed.');

      process.exit(0);
    });
  } catch (err) {
    console.error('Error during shutdown:', err);
    process.exit(1);
  }
};

// Gracefully shut down on these signals
['SIGINT', 'SIGTERM'].forEach((signal) => {
  process.on(signal, () => shutdown(signal));
});

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});