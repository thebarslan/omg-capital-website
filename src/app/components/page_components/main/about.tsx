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
                     <div className="title-container2 mt-5">
                        <h5 className="text-2xl font-bold">
                           Since the firm&apos;s founding in 1994, OMG Capital
                           Advisors has employed the same core investment
                           philosophy.
                        </h5>
                     </div>
                     <div className="text-container-inside mt-6">
                        <p className="text-[15px] font-medium">
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor incididunt ut labore et
                           dolore magna aliqua. Ut enim ad minim veniam, quis
                           nostrud exercitation ullamco laboris nisi ut aliquip
                           ex ea commodo consequat. Duis aute irure dolor in
                           reprehenderit in voluptate velit esse cillum dolore
                           eu fugiat nulla pariatur. Excepteur sint occaecat
                           cupidatat non proident, sunt in culpa qui officia
                           deserunt mollit anim id est laborum.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default About;
