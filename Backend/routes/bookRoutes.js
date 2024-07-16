import express from "express";
import { bookstores } from "../models/bookModels.js";

//router() is only use for routing purpose
const router = express.Router();
//If somone post a book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).json({
        message: "send all required field",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    console.log(newBook);
    //Saving the book details to database
    bookstores.create(newBook);

    return res.json({ status: "sent succesfully" });
  } catch (error) {
    console.log(error);
  }
});

//To get book from database
router.get("/", async (req, res) => {
  try {
    const books = await bookstores.find({});
    // console.log(books);
    return res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error" });
  }
});

//Find a book by given id from database
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await bookstores.find({ _id: id });
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json("Couldn't find it");
  }
});

//Find update a book by given id
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).json({
        message: "send all required field",
      });
    }
    const id = req.params.id;

    const result = await bookstores.findByIdAndUpdate({ _id: id }, req.body);
    if (result === null) {
      res.status(400).json("Document not found");
    }
    return res.status(200).json("Updated successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Not updated!");
  }
});

//To delete a book from fatabse
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await bookstores.findByIdAndDelete({ _id: id });
    if (!result) {
      return res.status(400).json("Book not found");
    }
    console.log(result);
    return res.status(200).json("Deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

export default router;
