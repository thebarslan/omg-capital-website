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
                        About OMG Capital Advisors
                     </h5>
                  </div>
                  <div className="paragraph-container mt-8">
                     <p className="lg:text-base text-[14px] lg:font-semibold font-medium">
                        OMG Capital Advisors is a leading investment banking
                        firm with over 20 years of experience in providing
                        tailored financial solutions to businesses across
                        various industries. The firm specializes in corporate
                        finance, mergers and acquisitions, debt restructuring,
                        and capital raising, offering a wide range of strategic
                        advisory services to support clients in navigating
                        complex financial landscapes. With a team of seasoned
                        professionals, OMG Capital Advisors combines deep market
                        insight with innovative financial strategies to help
                        clients achieve sustainable growth, optimize capital
                        structures, and maximize shareholder value.
                        <br></br>
                        <br></br>
                        The firm is dedicated to building long-term partnerships
                        and delivering exceptional value through a
                        client-centric approach. Its comprehensive service
                        offerings are designed to address the unique challenges
                        faced by companies at different stages of their growth.
                        Whether guiding businesses through strategic
                        transactions or assisting with capital management, OMG
                        Capital Advisors provides expert guidance and customized
                        solutions to drive successful outcomes.
                        <br></br>
                        <br></br>
                        By leveraging its extensive network and profound
                        industry expertise, the firm plays a pivotal role in
                        empowering clients to make informed financial decisions.
                        OMG Capital Advisors is committed to upholding the
                        highest standards of integrity and excellence,
                        consistently striving to exceed client expectations and
                        contribute to their long-term success in an
                        ever-evolving global market.
                     </p>
                  </div>
               </div>
            </Container>
         </div>
      </div>
   );
};

export default AboutUs;
