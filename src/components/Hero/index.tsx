import TextFieLd from "components/TextField";

function Hero() {
  return (
    /*     < !--Hero Section-- > */
    <section id="hero" className="relative flex flex-col">
      {/*       <!-- Container For Image & Content --> */}
      <div
        className="container flex flex-col mx-auto py-24 p-12 pb-0 lg:flex-row lg:mb-0 "
      >
        {/*      <!-- Content --> */}
        <div className="flex flex-col space-y-10 md:mt-10 lg:mb-16  lg:w-1/2">
          <h1
            className="header1 text-left text-black"
          >
            You can buy anything with <span className='text-primary'>COINCASH</span>
          </h1>
          <p
            className="body2 lg:mt-0 lg:mx-0"
          >
            The easiest way to use your cryptocurrencies for everyday purchases.
          </p>

          {/*    <!-- Buttons Container --> */}
          <div
            className="flex  w-full space-x-4 lg:justify-start"
          >
            <TextFieLd label={'Get It On Chrome'} />
          </div>
        </div>

        {/* <!-- Image --> */}
        <div className="hidden lg:flex lg:absolute right-0">

          <img
            src="images/iphone-desktop.svg"
            alt=""
            className=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;