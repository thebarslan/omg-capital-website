import Container from "@/app/components/common/container";
import React from "react";

const AboutUs = () => {
   return (
      <div className="w-full h-auto team flex flex-col">
         <div className="slider w-full flex max-h-[500px] h-full">
            <div className="about-item w-screen max-h-[500px] lg:h-[500px] md:h-[250px] h-[200px] relative">
               <div className="absolute left-0 top-0 bg-[#0000007a] w-full h-full z-[20]"></div>
               <div className="hero-bigger-container h-full w-full">
                  <Container>
                     <div className="hero-container w-full flex relative z-[200] lg:h-[500px] md:h-[250px] h-[200px] text-white items-end justify-center">
                        <h5 className="lg:text-6xl lg:font-extrabold font-bold lg:mb-12 text-2xl mb-4">
                           ABOUT US
                        </h5>
                     </div>
                  </Container>
               </div>
            </div>
         </div>
         <div className="firm-inside w-full lg:mt-24 mt-12 lg:mb-24 mb-12">
            <Container>
               <div className="firm-inside-container">
                  <div className="title-container w-full">
                     <h5 className="lg:text-4xl text-2xl font-bold">
                        About OMG Capital Team
                     </h5>
                  </div>
                  <div className="paragraph-container mt-8">
                     <p>
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
                        Their collaborative and dynamic team environment fosters
                        innovative thinking and meticulous execution, ensuring
                        that clients receive the highest standard of service in
                        every engagement. The OMG Capital Team is committed to
                        building strong, lasting relationships with their
                        clients, guiding them through complex financial
                        transactions and strategic decisions with integrity,
                        professionalism, and a focus on achieving optimal
                        outcomes.
                     </p>
                  </div>
               </div>
            </Container>
         </div>
      </div>
   );
};

export default AboutUs;
