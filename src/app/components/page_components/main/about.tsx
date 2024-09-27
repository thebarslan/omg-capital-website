import React from "react";
import Container from "../../common/container";

const About = () => {
   return (
      <div className="lg:mt-14 lg:mb-14 mt-12 mb-6 w-full h-auto">
         <Container>
            <div className="w-full flex flex-col">
               <div className="main-container w-full lg:gap-12 gap-2 flex lg:flex-row flex-col">
                  {/* u */}
                  <div className="text-container flex-1 flex flex-col py-6">
                     <div className="title-container">
                        <h5 className="text-[15px]  text-logoGray">
                           About OMG Capital Advisors
                        </h5>
                     </div>
                     {/* <div className="title-container2 mt-5">
                        <h5 className="text-2xl font-bold">
                           Since the firm&apos;s founding in 1994, OMG Capital
                           Advisors has employed the same core investment
                           philosophy.
                        </h5>
                     </div> */}
                     <div className="text-container-inside mt-6">
                        <p className="text-[15px] font-medium">
                           OMG Capital Advisors is a leading investment banking
                           firm with over 20 years of experience in providing
                           tailored financial solutions to businesses across
                           various industries. The firm specializes in corporate
                           finance, mergers and acquisitions, debt
                           restructuring, and capital raising, offering a wide
                           range of strategic advisory services to support
                           clients in navigating complex financial landscapes.
                           With a team of seasoned professionals, OMG Capital
                           Advisors combines deep market insight with innovative
                           financial strategies to help clients achieve
                           sustainable growth, optimize capital structures, and
                           maximize shareholder value.
                        </p>
                     </div>
                     <div className="button-container mt-8">
                        <a
                           href="/about-us"
                           className="px-8 py-[6px] bg-[#ffffff2e] border-2 border-black text-blackk rounded-md hover:bg-logoRed hover:border-logoRed hover:text-white transition-all duration-300 text-[15px]"
                        >
                           READ MORE
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default About;
