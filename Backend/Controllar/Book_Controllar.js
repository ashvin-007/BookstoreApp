const Book = require('../Model/Book_Model');  // CommonJS syntax

const getBook = async (req, res) => {  // Function declaration without export keyword
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error fetching books:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { getBook };  // CommonJS export
