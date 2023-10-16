import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <>
      <nav className="bg-blue-800 p-4">
        <div className="flex flex-row items-center">
          <div className="flex-none">
            <ul className="flex flex-row items-center justify-around text-red-500 gap-7">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/calendar">Calendar</Link>
              </li>
              <li>
                <Link href="/logout">Logout</Link>
              </li>
            </ul>
          </div>
          <div className="grow"></div>
          <div className="flex-none">
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </>
  );
}
