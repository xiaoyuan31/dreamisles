"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-secondary text-white shadow-md px-6 py-4 flex justify-between items-center">
  <h1 className="text-xl font-bold">Dreamisles by Xiao Yuan Lv</h1>

  <div className="space-x-6">
    <Link href="/" className="hover:text-secondary">
      Home
    </Link>
    <Link href="/blog" className="hover:text-secondary">
      Blog
    </Link>
    <Link href="/about" className="hover:text-secondary">
      About
    </Link>
  </div>
</nav>
  );
}