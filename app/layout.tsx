import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MemoryProvider } from "./context/MemoryContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex flex-col min-h-screen">
           <MemoryProvider>
          {children}
          </MemoryProvider>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}