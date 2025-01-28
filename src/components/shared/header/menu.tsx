import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home } from "lucide-react";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full gap-1">
        <Button asChild variant="ghost" className="text-xl">
          <Link href="/">
            <Home /> Начало
          </Link>
        </Button>

        <Button asChild variant="ghost" className="text-xl">
          <Link href="/cv">
            <Home /> CV
          </Link>
        </Button>
      </nav>
    </div>
  );
};

export default Menu;
