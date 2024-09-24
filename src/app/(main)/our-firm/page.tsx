import Container from "@/app/components/common/container";
import React from "react";

const OurFirm = () => {
   return (
      <div className="w-full h-auto team flex flex-col">
         <div className="slider w-full flex max-h-[500px] h-full">
            <div className="firm-item w-screen max-h-[500px] lg:h-[500px] md:h-[250px] h-[200px] relative">
               <div className="absolute left-0 top-0 bg-[#0000007a] w-full h-full z-[20]"></div>
               <div className="hero-bigger-container h-full w-full">
                  <Container>
                     <div className="hero-container w-full flex relative z-[200] lg:h-[500px] md:h-[250px] h-[200px] text-white items-end justify-center">
                        <h5 className="lg:text-6xl lg:font-extrabold font-bold lg:mb-12 text-2xl mb-4">
                           OUR FIRM
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
                     <h5 className="text-4xl font-bold">
                        OMG Capital Advisors
                     </h5>
                  </div>
                  <div className="paragraph-container mt-8">
                     <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit.
                        Vitae faucibus mi ornare sed per ante. Facilisi sed
                        ornare eget cursus netus lacinia ornare. Senectus
                        senectus mi vulputate ac nisi mi. Euismod adipiscing
                        tristique eu, cursus facilisis justo. Luctus etiam
                        taciti convallis aliquet senectus lectus. Rutrum mattis
                        laoreet finibus morbi suscipit interdum in. Hac sodales
                        vulputate neque elementum tellus justo platea rhoncus.
                        Conubia vestibulum turpis nec natoque interdum aliquam
                        pellentesque nisl. Finibus sollicitudin pellentesque mi
                        urna potenti. Elit suspendisse vulputate quis facilisis
                        semper maximus. Lobortis class blandit mattis eu
                        elementum pharetra ornare gravida tempor? Diam orci
                        phasellus erat, malesuada nisi duis torquent. Mi euismod
                        nostra risus nunc nascetur ut. Gravida inceptos pretium
                        massa sodales elementum egestas. Nulla commodo dui;
                        phasellus donec eget vehicula.
                     </p>
                  </div>
               </div>
            </Container>
         </div>
      </div>
   );
};

export default OurFirm;
