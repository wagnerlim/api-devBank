import app from "./app";
import userRoutes from "./modules/user/user.controller";
import Logger from "./shared/library/Logger";

try {
  app.use(userRoutes);
} catch (error) {
  Logger.error(error);
}
