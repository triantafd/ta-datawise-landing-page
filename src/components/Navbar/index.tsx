import Hero from "components/Hero";
import ButtonCta from "components/ButtonCta";
import FullSizeRectangle from "components/Rectangle";
import Content from "components/Content";

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
            <ButtonCta label={'Get the App'} />
          </div >


          <div className="flex items-center lg:hidden">
            <img src="images/menu.svg" alt='' />
          </div >


        </div >
      </div>
      <Hero />
      <FullSizeRectangle text={`over 200,000+ users have chosen COINCASH for everyday payments`} />
      <Content />
    </div >
  );
}

export default Navbar;