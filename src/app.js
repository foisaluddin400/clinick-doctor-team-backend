import express from "express";
import cors from 'cors';

export const app = express();

const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(err?.status || 500).json({
    success: false,
    message: err?.message || "Something is wrong",
  });
  next();
};

app.use(express.json());

app.get('/', (req, res) => {
  res.send("doctor server is running");
});