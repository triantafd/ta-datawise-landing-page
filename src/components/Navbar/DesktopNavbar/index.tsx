import ButtonCta from "components/ButtonCta";

const DesktopNavbar = () => {
  return (
    <div>
      <div className="hidden items-center space-x-8 font-bold lg:flex">
        <a href="/" className="label1 text-black hover:text-primary transition-colors duration-300"
        >Features</a>
        <a href="/" className="label1 text-black hover:text-primary transition-colors duration-300"
        >Pricing</a>
        <a href="/" className="label1 text-black hover:text-primary transition-colors duration-300"
        >Resources</a>
        <ButtonCta label={'Get the App'} />
      </div >
    </div >
  );
}

export default DesktopNavbar;