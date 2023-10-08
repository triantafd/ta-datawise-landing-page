import React, { useState, useEffect } from 'react';
import TextFieLd from "components/TextField";

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailRegex.test(email)
}

function Footer() {
  const [email, setEmail] = useState<string>('');

  const isEmailValid = validateEmail(email)

  return (
    /*     < !--Fotter Section-- > */
    <section id="footer">
      <div className='bg-gradient-dark'>
        <div
          className="mt-60 container flex flex-col  mx-auto p-12 pb-6 lg:mb-0"
        >
          {/*      <!-- Content --> */}
          <div className="flex flex-col space-y-24 lg:mt-0">
            <div className="flex flex-col space-y-2">
              <h1
                className="header1 text-center text-white"
              >
                Get Started <span className='text-primary'>today</span>
              </h1>
              <p
                className="body2 text-center text-white"
              >
                Sing up to receive email updates on new products announcements, special promotions sales and more.
              </p>
            </div >

            <div className="flex items-center text-center mx-auto">
              <div
                className="flex lg:space-x-3 items-center bg-white p-2  shadow-md rounded-sm"
              >
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Type your email address here"
                  className="body2 p-2 px-4 text-center  md:text-left placeholder:md:text-left focus:outline-none"
                >
                </input>
                <TextFieLd label={'Sign Up'} onClick={() => { }} disabled={!isEmailValid} />
              </div>
            </div>


            <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0 w-full">
              <div className="text-center">
                <img src="images/COINCASH-white.svg" alt='' />
              </div>

              <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-8 lg:space-y-0 items-center text-center">
                <a href="/" className="label2 text-white hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </a>

                <a href="/" className="label2 text-white hover:text-primary  transition-colors duration-300">
                  Terms and conditions
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section >
  );
}

export default Footer;