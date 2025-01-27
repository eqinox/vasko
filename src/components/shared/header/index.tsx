import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-white rounded-t-3xl px-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex-start ml-4">
            <Image
              src="/images/V.png"
              alt={`${APP_NAME} logo`}
              height={100}
              width={100}
              className="max-sm:w-[70px] max-sm:h-[70px]"
              priority={true}
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
