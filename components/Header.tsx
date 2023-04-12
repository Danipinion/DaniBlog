import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.jpg";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className=" ">
            <Link className="flex justify-center items-center gap-3" href="/">
              <Image src={logo} alt="logo" className="w-10 h-10 rounded-full" />
              <p className="font-bold text-xl">Danipinion</p>
            </Link>
          </div>

          <div className="flex md:items-center gap-3 md:gap-12">
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-gray-100  text-sky-600 hover:bg-sky-600 px-5 py-2.5 text-sm font-medium hover:text-white shadow transition-all duration-200"
                  href="https://danipinion.vercel.app"
                >
                  Porto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
