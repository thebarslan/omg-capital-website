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
                  <div className="title-container2 mt-5">
                     <h5 className="text-2xl font-bold">
                        Our team provides the best investment advising.
                     </h5>
                  </div>
                  <div className="text-container-inside mt-6">
                     <p className="text-[15px] font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                     </p>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Team;
