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
            backgroundImage: `url(${BACKGROUNDS.DESTINATION.desktop.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }
            }>
            <Header />
          
     <section className='py-12 max-w-[1300px] ml-auto h-full'>
      <h2 className={
        `${barlowCondensed.className} 
        text-hxs text-white uppercase tracking-widest mb-6
        w-full
        `}>
        <span className='pr-6 text-[#666] font-bold'>03</span>
        space launch 101
      </h2>
      {children}
     </section>
        </main>
      );
}