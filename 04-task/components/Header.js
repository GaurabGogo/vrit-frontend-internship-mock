// components/Header.js
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
            <p className="relative hover:underline-animation">Home</p>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/protected">
                <p className="relative hover:underline-animation">Protected</p>
              </Link>
            </li>
            <li>
              <Link href="/clientprotected">
                <p className="relative hover:underline-animation">
                  Client Protected
                </p>
              </Link>
            </li>
            <li>
              {session ? (
                <button
                  onClick={() => signOut()}
                  className="relative p-2 bg-white rounded-sm hover:bg-slate-100 cursor-pointer text-gray-800 transition-all duration-300 ease-in-out"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={() => signIn()}
                  className="relative p-2 bg-white rounded-sm hover:bg-slate-100 cursor-pointer  text-gray-800 transition-all duration-300 ease-in-out"
                >
                  Sign In
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
