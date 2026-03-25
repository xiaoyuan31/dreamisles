export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-center py-6 ">
      <p className="text-sm text-white">
        Made with  by Xiao Yuan Lv
        <br/>
        © {new Date().getFullYear()} Xiao Yuan Lv. All rights reserved.
      </p>
    </footer>
  );
}