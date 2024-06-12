import { BACKGROUNDS } from "@/app/lib/constants";
import Header from "@/app/ui/Header/Header";



export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <main className="flex h-[1024px] flex-col" style={
          {
            backgroundImage: `url(${BACKGROUNDS.HOME.desktop.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }
            }>
            <Header />
          {children}
        </main>
      );
}
