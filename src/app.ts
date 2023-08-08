import express from "express";
import dotenv from "dotenv"
import routeLoader from "./loaders/route.loader";
dotenv.config()
console.log(process.env)

class App {
  private app: express.Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.APP_PORT;
    routeLoader(this.app);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App start in port ${this.port}`)
    });
  }
}

const app = new App();
app.listen();