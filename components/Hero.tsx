import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] flex flex-row justify-center items-center bg-no-repeat bg-cover bg-fixed bg-[url('https://media.istockphoto.com/id/1206800961/photo/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-digital-marketing.jpg?b=1&s=612x612&w=0&k=20&c=mwZYTXRUffNG-igVygp49KPbBT4Dp0va1MxomnP3j9M=')]">
      <div>
        <h4 className="text-1xl m-5 text-gray-700 text-center">
          WELCOME TO THE ATHORSTORE
        </h4>
        <h1 className="text-5xl text-gray-500 text-center">
          Let's Bring the Spring to Your Home
        </h1>
        <div className="flex justify-center items-center mt-8">
          <button className="p-4 m-4 rounded-full items-center text-white bg-black px-8">
            <Link href="/home">Shop Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
