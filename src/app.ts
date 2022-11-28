import Express from "express";
import Cors from "cors";
import Logger from "morgan";

export const app: any = Express();

app.use(Express.json());
app.use(Cors());
app.use(Logger("dev"));

