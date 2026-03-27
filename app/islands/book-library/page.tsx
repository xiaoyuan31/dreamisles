"use client";
import React from "react";
import BookCard from "../../components/BookCard";
import { Book } from "../../lib/book";
import Stars from "@/app/components/Stars";

const books: Book[] = [
  {
    title: "Dhammapada",
    author: "Buddha",
    quote: "All that we are is the result of what we have thought.",
  },
  {
    title: "Little Prince",
    author: "Antoine de Saint-Exupéry",
    quote: "It is only with the heart that one can see rightly.",
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    quote: "It matters not what someone is born, but what they grow to be.",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    quote:
      "When you want something, all the universe conspires in helping you to achieve it.",
  },
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    quote:
      "You have power over your mind—not outside events. Realize this, and you will find strength.",
  },
  {
    title: "1984",
    author: "George Orwell",
    quote: "War is peace. Freedom is slavery. Ignorance is strength.",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    quote:
      "You never really understand a person until you consider things from his point of view.",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    quote: "I declare after all there is no enjoyment like reading!",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    quote: "There is nothing like looking, if you want to find something.",
  },
  {
    title: "Siddhartha",
    author: "Hermann Hesse",
    quote:
      "Wisdom cannot be imparted. Wisdom that a wise man tries to impart always sounds like foolishness.",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    quote:
      "Don't ever tell anybody anything. If you do, you start missing everybody.",
  },
  {
    title: "The Little Engine That Could",
    author: "Watty Piper",
    quote: "I think I can. I think I can. I think I can.",
  },
  {
    title: "The Giving Tree",
    author: "Shel Silverstein",
    quote:
      "And she loved a little boy very, very much—even more than she loved herself.",
  },
  { title: "Moby Dick", author: "Herman Melville", quote: "Call me Ishmael." },
  {
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    quote: "Curiouser and curiouser!",
  },
  {
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    quote: "Where you tend a rose, my lad, a thistle cannot grow.",
  },
  {
    title: "Anne of Green Gables",
    author: "L.M. Montgomery",
    quote:
      "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?",
  },
  {
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    quote: "Once a king or queen of Narnia, always a king or queen of Narnia.",
  },
  {
    title: "Winnie-the-Pooh",
    author: "A.A. Milne",
    quote:
      "You're braver than you believe, stronger than you seem, and smarter than you think.",
  },
  {
    title: "The Odyssey",
    author: "Homer",
    quote:
      "There is a time for many words, and there is also a time for sleep.",
  },
  {
    title: "Les Misérables",
    author: "Victor Hugo",
    quote: "Even the darkest night will end and the sun will rise.",
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    quote: "I am no bird; and no net ensnares me.",
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    quote: "Beware; for I am fearless, and therefore powerful.",
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    quote: "Listen to them, the children of the night. What music they make!",
  },
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    quote: "You become responsible, forever, for what you have tamed.",
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    quote:
      "You forget what you want to remember, and you remember what you want to forget.",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    quote:
      "Words can be like X-rays if you use them properly—they’ll go through anything.",
  },
  {
    title: "The Tale of Peter Rabbit",
    author: "Beatrix Potter",
    quote: "Even the smallest one can change the course of the future.",
  },
  {
    title: "Charlotte's Web",
    author: "E.B. White",
    quote: "You have been my friend. That in itself is a tremendous thing.",
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    quote: "It was a pleasure to burn.",
  },
  {
    title: "The Little Match Girl",
    author: "Hans Christian Andersen",
    quote: "She sold matches, one, two, three, four.",
  },
  {
    title: "The Wind in the Willows",
    author: "Kenneth Grahame",
    quote:
      "Believe me, my young friend, there is nothing—absolutely nothing—half so much worth doing as simply messing about in boats.",
  },
  {
    title: "Coraline",
    author: "Neil Gaiman",
    quote: "Being brave doesn’t mean you go looking for trouble.",
  },
  {
    title: "Matilda",
    author: "Roald Dahl",
    quote: "Somewhere inside all of us is the power to change the world.",
  },
  {
    title: "The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    quote: "Courage, dear heart.",
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    quote: "Victorious warriors win first and then go to war.",
  },
  {
    title: "The Prophet",
    author: "Kahlil Gibran",
    quote: "Work is love made visible.",
  },
  {
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    quote: "But man is not made for defeat.",
  },
  {
    title: "Walden",
    author: "Henry David Thoreau",
    quote: "Rather than love, than money, than fame, give me truth.",
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    quote:
      "Pain and suffering are always inevitable for a large intelligence and a deep heart.",
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    quote: "The mystery of human existence lies not in just staying alive.",
  },
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    quote: "All human wisdom is contained in these two words—Wait and Hope.",
  },
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    quote: "It was the best of times, it was the worst of times.",
  },
  {
    title: "Les Misérables",
    author: "Victor Hugo",
    quote: "To love or have loved, that is enough. Ask nothing further.",
  },
  {
    title: "The Secret",
    author: "Rhonda Byrne",
    quote:
      "Ask once, believe you have received, and all you have to do to receive is feel good.",
  },
  {
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    quote: "Be impeccable with your word.",
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    quote: "Whatever the mind can conceive and believe, it can achieve.",
  },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    quote: "Realize deeply that the present moment is all you ever have.",
  },
  {
    title: "Awaken the Giant Within",
    author: "Tony Robbins",
    quote: "The only limit to your impact is your imagination and commitment.",
  },
  {
    title: "The Road Less Traveled",
    author: "M. Scott Peck",
    quote: "Life is difficult. This is a great truth.",
  },
  {
    title: "Man’s Search for Meaning",
    author: "Viktor E. Frankl",
    quote:
      "When we are no longer able to change a situation, we are challenged to change ourselves.",
  },
];

const App: React.FC = () => {
  return (
    <>
      <div className="relative justify-center items-center px-10 min-h-screen flex flex-col items-center justify-center text-white overflow-hidden px-6">
        {/* 🌿 Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b082c] via-[#040b0c] to-black">
          {/* ✨ Stars Background */}
          <Stars />

      {/* 🌟 Always-on Ambient Fireflies */}
      <div className="firefly ambient" style={{ top: "20%", left: "20%" }}></div>
      <div className="firefly ambient" style={{ top: "40%", left: "70%" }}></div>
      <div className="firefly ambient" style={{ top: "70%", left: "30%" }}></div>
      <div className="firefly ambient" style={{ top: "60%", left: "80%" }}></div>

          <div className="absolute flex justify-center p-6 inset-0 overflow-auto mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {books.map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
