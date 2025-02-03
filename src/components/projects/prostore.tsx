import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function Prostore() {
  return (
    <div className="flex flex-row p-4 bg-slate-800 text-white w-96 h-96 ">
      {/* Dialog for Fullscreen Image */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative w-full h-40 overflow-hidden group cursor-pointer">
            {/* Background image with dark overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundImage: "url('/images/prostore.png')" }}
            />
            {/* Gradient overlay to darken bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </DialogTrigger>

        <DialogContent className="max-w-[70vw] max-h-[70vh] p-0 fixed ">
          <DialogTitle className="sr-only">Prostore Image</DialogTitle>
          <div className="relative overflow-auto">
            <Image
              src="/images/prostore.png"
              alt="Prostore"
              width={0}
              height={0}
              sizes="100vw"
              className="object-fill w-full h-full"
              priority
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
