import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

import { users } from "./data";

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", async (req: Request, res: Response) => {
   return res.status(200).json(users);
});


const PORT = 8000;
const server = app.listen(process.env.PORT || PORT, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   };
});