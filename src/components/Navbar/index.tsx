import Hero from "components/Hero";
import TextFieLd from "components/TextField";

function Navbar() {
  return (
    <div className='bg-gradient-light'>

      <div className="nav container mx-auto p-12 flex flex-col" >

        <div className="flex items-center justify-between" >

          <div className="flex items-center space-x-20" >
            <img src="images/COINCASH.svg" alt='' />

          </div >

          <div className="hidden items-center space-x-8 font-bold lg:flex">
            <a href="/" className="label1 text-black hover:text-primary transition-colors duration-300"
            >Features</a>

            <a href="/" className="label1 text-black hover:text-primary transition-colors duration-300"
            >Pricing</a>

            <a href="/" className="label1 text-black hover:text-primary transition-colors duration-300"
            >Resources</a>
            <TextFieLd label={'Get the App'} />
          </div >


          <div className="flex items-center lg:hidden">
            <img src="images/menu.svg" alt='' />
          </div >


        </div >
      </div>
      <Hero />
    </div >
  );
}

export default Navbar;