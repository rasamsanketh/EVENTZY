import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-8">
      <div className="flex justify-between items-center">
        <p className="text-sm">© {new Date().getFullYear()} Eventzy. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-yellow-400 transition-all">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400 transition-all">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400 transition-all">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
