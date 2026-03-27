import React, { useState } from "react";
import { Book } from "../lib/book";

interface Props {
  book: Book;
}

const BookCard: React.FC<Props> = ({ book }) => {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <div
      onClick={() => setShowQuote(!showQuote)} style={{ width: '200px' }}
      className="bg-black/50 p-4 m-2 rounded-lg cursor-pointer transition-transform transform hover:scale-105"
    >
      <h2 className="text-white font-bold">{book.title}</h2>
      <p className="text-gray-300">{book.author}</p>
      {showQuote && <p className="text-green-300 italic mt-2">{book.quote}</p>}
    </div>
  );
};

export default BookCard;