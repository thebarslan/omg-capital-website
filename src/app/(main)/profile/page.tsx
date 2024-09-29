import Container from "@/app/components/common/container";
import React from "react";

const Profile = () => {
   return (
      <div className="w-full h-auto team flex flex-col">
         <div className="slider w-full flex max-h-[300px] h-full">
            <div className="profile-item w-screen max-h-[300px] lg:h-[300px] md:h-[250px] h-[160px] relative">
               <div className="absolute left-0 top-0 bg-[#0000007a] w-full h-full z-[20]"></div>
               <div className="hero-bigger-container h-full w-full">
                  <Container>
                     <div className="hero-container w-full flex relative z-[200] lg:h-[300px] md:h-[250px] h-[160px] text-white items-end justify-center">
                        <h5 className="lg:text-6xl lg:font-extrabold font-bold lg:mb-12 text-2xl mb-4">
                           PROFILE
                        </h5>
                     </div>
                  </Container>
               </div>
            </div>
         </div>
         <div className="my-16 w-full flex flex-col h-auto">
            <Container>
               <div className="title-container w-full flex items-center justify-start">
                  <h5 className="lg:text-3xl font-bold text-lg">
                     Welcome, username
                  </h5>
               </div>
            </Container>
         </div>
      </div>
   );
};

export default Profile;
