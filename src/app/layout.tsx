import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zolita",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white p-4 flex items-center justify-center ">
          <Image
            src="/logo.png"
            alt="Zolita"
            width={901}
            height={499}
            className="w-52"
          />
        </header>

        {children}
        <footer className="flex flex-col p-24 gap-5 bg-[#fac806]">
          <div className="flex flex-col gap-0.5">
            <p>Manufactured & Marketed by:</p>
            <h1 className="text-[#bb371c] font-extrabold text-xl">
              SHYAMAL FOOD PRODUCTS
            </h1>
            <p>All Type Of Sauces & Mayonnaise</p>
          </div>
          
          <div className="flex flex-col gap-0.5">
            <a href="tel:+919106498887">+91 91064 98887</a>
            <a href="mailto:zolitafood@gmail.com">zolitafood@gmail.com</a>
          </div>

          <div>
            <p>
              Shreenathji industrial area <br />4 Lothada, Rajkot 360024 <br />
              (Gujarat) India.
            </p>
          </div>
          <p>GST IN: 24H0XPK1926PIZO</p>
        </footer>
      </body>
    </html>
  );
}
