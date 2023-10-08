import ButtonCta from "components/ButtonCta";

function Hero() {
  return (
    /*     < !--Hero Section-- > */
    <section id="hero" className="relative w-full">
      {/*       <!-- Container For Image & Content --> */}
      <div
        className="container flex flex-col mx-auto lg:py-24 p-12 lg:flex-row"
      >
        {/*      <!-- Content --> */}
        <div className="flex flex-col space-y-10 lg:mt-10 xl:mb-20  w-full sm:w-1/2 md:w-1/3 xl:w-1/2 ">
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
            <ButtonCta label={'Get It On Chrome'} />
          </div>
        </div>

        {/* <!-- Image --> */}
        <div className="hidden sm:flex sm:flex-row-reverse absolute sm:right-0 sm:-bottom-[2px] pt-8">
          <img
            src="images/iphone-desktop.svg"
            alt=""
            className="z-0 sm:w-1/2 md:w-3/4 lg:w-full"
          />
        </div>
      </div>
      <div className="flex sm:hidden relative pt-14 justify-center items-center top-[2px] -ml-[5px]">
        <img
          src="images/iphone-desktop.svg"
          alt=""
          className="z-0"
        />
      </div>
    </section>
  );
}

export default Hero;