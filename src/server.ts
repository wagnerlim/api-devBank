import app from "./app";
import Logger from "./shared/library/Logger";

try {
  app;
} catch (error) {
  Logger.error(error);
}
