import React from "react";
import Container from "../../common/container";
import TeamSquare from "../../../assets/images/team/teamsquare.webp";
import Image from "next/image";

const Team = () => {
   return (
      <div className="w-full flex h-auto bg-[#f3f2f2] lg:pt-4 pt-4 lg:pb-4 pb-12">
         <Container>
            <div className="w-full flex lg:gap-12 gap-0 lg:flex-row flex-col">
               <div className="image-container md:w-[400px] aspect-square flex items-center">
                  <Image
                     src={TeamSquare}
                     alt="team"
                     className="w-full object-cover aspect-[8/6]"
                  />
               </div>
               <div className="text-container flex-1 flex flex-col justify-center">
                  <div className="title-container">
                     <h5 className="text-[15px]  text-logoGray">
                        About OMG Capital Team
                     </h5>
                  </div>
                  {/* <div className="title-container2 mt-5">
                     <h5 className="text-2xl font-bold">
                        Our team provides the best investment advising.
                     </h5>
                  </div> */}
                  <div className="text-container-inside mt-6">
                     <p className="text-[15px] font-medium">
                        The OMG Capital Team is composed of highly experienced
                        investment banking professionals with a diverse
                        background in finance, economics, and strategic
                        consulting. With over 20 years of combined experience in
                        local and international markets, the team brings a
                        wealth of expertise in corporate finance, mergers and
                        acquisitions, debt restructuring, and capital raising.
                        Each member is dedicated to delivering exceptional value
                        through a client-centric approach, leveraging deep
                        industry knowledge and strategic insight to provide
                        customized financial solutions that support sustainable
                        growth and long-term success for their clients.
                        <br></br>
                        <br></br>
                     </p>
                  </div>
                  <div className="button-container mt-3">
                     <a
                        href="/about-us"
                        className="px-8 py-[6px] bg-[#ffffff2e] border-2 border-black text-blackk rounded-md hover:bg-logoRed hover:border-logoRed hover:text-white transition-all duration-300 text-[15px]"
                     >
                        READ MORE
                     </a>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Team;
