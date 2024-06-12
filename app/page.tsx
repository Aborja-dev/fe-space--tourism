import { BACKGROUNDS } from "@/app/lib/constants";
import Header from "@/app/ui/Header/Header";
import Banner from "@/app/ui/Home/Banner";

export default function Home() {  
  return (
    <main className="flex h-[1024px] flex-col" style={
      {
        backgroundImage: `url(${BACKGROUNDS.HOME.desktop.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }
        }>
        <Header />
      <Banner />
    </main>
  );
}
