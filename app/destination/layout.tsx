import { BACKGROUNDS } from "@/app/lib/constants";
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
          {children}
        </main>
      );
}
