import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <Link href='/' className="flex items-center space-x-2">
        <Image
          src="https://cdn.freelogodesign.org/files/559d9fa0aad14b8cb8e2993cd1da143a/thumb/logo_200x200.png?v=0"
          width={50}
          height={50}
          className="rounded-full"
          alt="logo"
        />
        <h1>DANBLOG</h1>
      </Link>
      <div>
        <Link href="https://danipinion.vercel.app" className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#0060ff] flex items-center rounded-full text-center"> See my portofolio</Link>
      </div>
    </header>
  );
};

export default Header;
