import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { container } from "tsyringe";
import BookController from "./library/BookController";
dotenv.config();

const app = express();

const port = process.env.PORT;

const bookController = container.resolve(BookController);
app.listen(port, () => {
  console.log("App is listening on port ", port);
});

app.use("/library", bookController.routes());
