import { Router, Request, Response } from "express";
import UserService from "./user.service";

const userRoutes = Router();

userRoutes.get("/hello", UserService.hello);

export default userRoutes;
