import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full h-screen pt-0 ">
      <div className="border-b-4 border-gray-900 relative ">
        <div className=" w-full h-[600px]">
          <img
            src="heroimage1.jpeg"
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <p className="text-red-400 text-9xl">Shop</p>
      </div> */}
      <div className="grid grid-cols-1 gap-40 md:gap-20 absolute -bottom-20 right-0 left-0 px-10">
        <div className="flex justify-center items-center flex-col">
          <p className="text-red-400 text-5xl md:text-9xl">
            Christmas Season Sale
          </p>
          <button className="p-4 m-4 rounded-full items-center text-white bg-black px-8">
            <Link href="/shop">Shop Now</Link>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className=" relative w-full h-full rounded-lg max-w-[500px]">
            <img
              src="https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="fashion woman"
              className="h-full rounded-2xl object-cover"
            />
            <div className="flex flex-col justify-start items-start  absolute bottom-5 md:bottom-28 left-5  text-center">
              <h5 className="text-gray-200 text-lg md:text-xl font-semibold">
                Shop the collection
              </h5>
              <h3 className=" text-xl md:text-3xl text-white font-bold">
                Fashion Woman
              </h3>
            </div>
          </div>
          <div className=" relative w-full h-full rounded-lg max-w-[500px]">
            <img
              src="https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="fashion woman"
              className="h-full rounded-2xl object-cover"
            />
            <div className="flex flex-col justify-start items-start  absolute bottom-5 md:bottom-28 left-5  text-center">
              <h5 className="text-gray-200 text-lg md:text-xl font-semibold">
                Shop the collection
              </h5>
              <h3 className=" text-xl md:text-3xl text-white font-bold">
                Fashion Woman
              </h3>
            </div>
          </div>
          <div className=" relative w-full h-full rounded-lg max-w-[500px]">
            <img
              src="https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="fashion woman"
              className="h-full rounded-2xl object-cover"
            />
            <div className="flex flex-col justify-start items-start  absolute bottom-5 md:bottom-28 left-5  text-center">
              <h5 className="text-gray-200 text-lg md:text-xl font-semibold">
                Shop the collection
              </h5>
              <h3 className=" text-xl md:text-3xl text-white font-bold">
                Fashion Woman
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <div className="w-full relative h-screen flex flex-row justify-center items-center bg-no-repeat bg-cover bg-center bg-[url('https://media.istockphoto.com/id/1206800961/photo/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-digital-marketing.jpg?b=1&s=612x612&w=0&k=20&c=mwZYTXRUffNG-igVygp49KPbBT4Dp0va1MxomnP3j9M=')]">
      <div className=" ">
        <h4 className="text-1xl m-5 text-gray-700 text-center">
          WELCOME TO THE ATHORSTORE
        </h4>
        <h1 className="text-5xl text-gray-500 text-center">
          Let's Bring the Spring to Your Home
        </h1>
        <div className="flex justify-center items-center mt-8">
          <button className="p-4 m-4 rounded-full items-center text-white bg-black px-8">
            <Link href="/shop">Shop Now</Link>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 absolute -bottom-32 right-0 left-0">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="fashion woman"
              className="rounded-lg h-3/4"
            />
            <h3 className="text-4xl text-gray-500">Fashion Woman</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="fashion woman"
              className="rounded-lg h-3/4"
            />
            <h3 className="text-4xl text-gray-500">Fashion Woman</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="fashion woman"
              className="rounded-lg h-3/4"
            />
            <h3 className="text-4xl text-gray-500">Fashion Woman</h3>
          </div>
        </div>
      </div>
    </div> */
}

{
  /* 
  <div className="grid grid-cols-3 gap-4 absolute -bottom-32 right-0 left-0">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="fashion woman"
              className="rounded-lg h-3/4"
            />
            <h3 className="text-4xl text-gray-500">Fashion Woman</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="fashion woman"
              className="rounded-lg h-3/4"
            />
            <h3 className="text-4xl text-gray-500">Fashion Woman</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="fashion woman"
              className="rounded-lg h-3/4"
            />
            <h3 className="text-4xl text-gray-500">Fashion Woman</h3>
          </div>
        </div>
         */
}
