import "dotenv/config";
import express from "express";
import app from "./init";
import "./db";
import rootRouter from "./routers/rootRouter";
import morgan from "morgan";

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(morgan("dev"));
app.use("/static", express.static("assets"));
app.use("/", rootRouter);
