import Link from "next/link";
import Collections from "./Collections";
import { collections } from "@/data/collections";

const Hero = () => {
  return (
    <section className="w-full h-fit pt-0 relative overflow-visible">
      <div
        className={`flex justify-center md:justify-start flex-col items-center  h-[700px]  bg-no-repeat bg-cover bg-center bg-[url("https://images.pexels.com/photos/1303097/pexels-photo-1303097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")]`}
      >
        <div className="flex justify-center items-center flex-col">
          <p className="text-red-400 text-3xl md:text-9xl py-10 ">
            Christmas Season Sale!
          </p>
          <button className="p-4 m-4 rounded-full items-center text-white bg-black px-8">
            <Link href="/shop">Shop Now</Link>
          </button>
        </div>
      </div>

      <div className="flex md:flex-row flex-wrap justify-center items-center gap-5 -mt-52 px-3">
        {collections.map((collection) => (
          <Collections collection={collection} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
