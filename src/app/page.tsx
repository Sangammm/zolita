import Image from "next/image";
import { ImageData } from "./images";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:px-24 sm:py-10 px-5 py-5 gap-5">
      {ImageData.map((image) => (
        <Image
          src={`/${image.path}`}
          alt={image.name}
          key={image.path}
          height={1280}
          width={1280}
          className="sm:max-w-2xl max-w-full"
        />
      ))}
    </main>
  );
}
