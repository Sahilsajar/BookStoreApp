import express from "express";
import mongoose from "mongoose";
// import { bookstores } from "./models/bookModels.js";
import bookRoute from "./routes/bookRoutes.js";
import cors from "cors";

const portnum = 3000;
const app = express();
const mdatabase =
  "mongodb+srv://root:1389@bookstores.qtwabqe.mongodb.net/Bookstores?retryWrites=true&w=majority&appName=Bookstores";

//Middleware for parsing request body;
app.use(express.json());

//Here we are using 3000 port if anohter port from other method is trying to access this request then it will show error there with help of cors we fixed that only client with this particular server{3000} can access it .
//Middleware for handling cors policy:
//two methods: app,use(cors())//Allow origin with default cors(*);
app.use(cors());
//method 2: Allow custom origins;
//  app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeaders: ['Content-Type']
//  }))

app.get("/", (req, res) => {
  res.send("hello world");
});

//suppose there are more model other than book so there will be so many routes so we divide by transferring it to other folder
app.use("/books", bookRoute);

mongoose
  .connect(mdatabase)
  .then(() => {
    console.log("Database connected succesfully!");

    //It will only listen when database is connected
    app.listen(portnum, () => {
      console.log("Port is connected succesfully!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
