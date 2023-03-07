import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

import { upload } from "./config";

const app = express();
app.use(express.json());
app.use(cors());

app.post(
  "/create",
  upload.single("file"),
  async (req: Request, res: Response): Promise<express.Response> => {
    try {
      return res.status(201).json({ message: req.file?.originalname });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
);



const PORT = 8000;
const server = app.listen(process.env.PORT || PORT, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
