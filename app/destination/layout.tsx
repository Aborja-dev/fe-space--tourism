import { BACKGROUNDS } from "@/app/lib/constants";
import { barlowCondensed } from "@/app/lib/fonts";
import Header from "@/app/ui/Header/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <main className="flex flex-col" style={
          {
            backgroundImage: `url(${BACKGROUNDS.TECHNOLOGY.desktop.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }
            }>
            <Header />
          
     <section className='py-12 max-w-[1110px] mx-auto h-full grid grid-cols-2'>
      <h2 className={
        `${barlowCondensed.className} 
        text-hxs text-white uppercase tracking-widest mb-6
        col-span-2
        `}>
        <span className='pr-6 text-[#666] font-bold'>01</span>
        pick your destination
      </h2>
      {children}
     </section>
        </main>
      );
}
