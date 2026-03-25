import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-center py-6 ">
      <p className="text-sm text-white">
        Made with 🌟 Hope by Xiao Yuan Lv
        <br/>
        © {new Date().getFullYear()} Xiao Yuan Lv. All rights reserved.
      </p>
    </footer>
  );
}