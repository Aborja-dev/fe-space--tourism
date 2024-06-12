import { BACKGROUNDS } from "@/app/lib/constants";
import Banner from "@/app/ui/Banner";
import Navbar from "@/app/ui/Navbar";
import Image from "next/image";

export default function Home() {
  console.log(BACKGROUNDS.HOME.desktop.src);
  
  return (
    <main className="flex h-[1024px] flex-col" style={
      {
        backgroundImage: `url(${BACKGROUNDS.HOME.desktop.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }
        }>
        <Navbar />
      <Banner />
    </main>
  );
}
