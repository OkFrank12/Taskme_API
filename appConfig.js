import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

export const appConfig = (app) => {
  app.use(cors());
  app.use(morgan("dev"));
  app.use(helmet());

  app.get("/", (req, res) => {
    try {
      return res.status(200).json({
        message: "Welcome to Taskme: A Task Application API",
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  });
};
