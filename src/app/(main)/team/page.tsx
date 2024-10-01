import React from "react";

import OnurAydogan from "../../assets/images/team/onuraydogan.webp";
import UmutAydogan from "../../assets/images/team/umutaydogan.webp";
import MuratGulkan from "../../assets/images/team/muratgulkan.webp";
import NebilIlseven from "../../assets/images/team/nebililseven.webp";
import BoraOruc from "../../assets/images/team/boraoruc.webp";

import Image from "next/image";
import Container from "@/app/components/common/container";
const Team = () => {
   return (
      <div className="w-full h-auto team flex flex-col">
         <div className="slider w-full flex max-h-[500px] h-full">
            <div className="team-item w-screen max-h-[500px] lg:h-[500px] md:h-[250px] h-[160px] relative">
               <div className="absolute left-0 top-0 bg-[#0000007a] w-full h-full z-[20]"></div>
               <div className="hero-bigger-container h-full w-full">
                  <Container>
                     <div className="hero-container w-full flex relative z-[200] lg:h-[500px] md:h-[250px] h-[160px] text-white items-end justify-center">
                        <h5 className="lg:text-6xl lg:font-extrabold font-bold lg:mb-12 text-2xl mb-4">
                           OUR TEAM
                        </h5>
                     </div>
                  </Container>
               </div>
            </div>
         </div>
         <div className="team-inside w-full lg:mt-24 mt-12 lg:mb-24 mb-12">
            <Container>
               <div className="w-full flex flex-col">
                  <div className="title-container w-full">
                     <h5 className="lg:text-4xl text-2xl font-bold">
                        About OMG Capital Team
                     </h5>
                  </div>
                  <div className="paragraph-container mt-8">
                     <p className="lg:text-base text-[14px] lg:font-semibold font-medium">
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
                  <div className="team-inside-container w-full flex flex-col gap-20 lg:mt-24 mt-12">
                     <div className="team-item-part w-full flex justify-between lg:gap-12 gap-0 lg:flex-row flex-col">
                        <div className="image-container lg:w-[380px] aspect-square w-full">
                           <Image
                              src={OnurAydogan}
                              alt="onur-aydogan"
                              className="w-full h-full object-cover"
                           />
                        </div>
                        <div className="text-container w-full flex-1 flex flex-col h-full lg:gap-6 gap-5 lg:pt-10 pt-6">
                           <h5 className="text-3xl font-bold">Onur AYDOĞAN</h5>
                           <h5 className="lg:text-base text-[15px] text-logoGray">
                              Onur Aydoğan is the Managing Partner and Chief
                              Investment Officer of OMG Capital Advisors. He has
                              held senior leadership roles at renowned
                              institutions, including Wellington Management,
                              Merrill Lynch, and RBS in both Boston and London.
                              Onur has extensive experience in originating and
                              executing structured lending deals across various
                              industries and financial institutions in emerging
                              markets. He has led transactions with Development
                              Finance Institutions (DFIs), focusing on
                              responsible lending practices for SMEs in Turkey.
                              Additionally, he managed Emerging Market fixed
                              income portfolios exceeding USD 1 billion in
                              assets under management (AUM) across multiple
                              asset classes while based in Boston and New York.
                              Onur holds an MBA and a BSc in Mechanical
                              Engineering from the University of Massachusetts.
                           </h5>
                        </div>
                     </div>
                     <div className="team-item-part w-full flex justify-between lg:gap-12 gap-0 lg:flex-row flex-col">
                        <div className="image-container lg:w-[380px] aspect-square w-full">
                           <Image
                              src={UmutAydogan}
                              alt="umut-aydogan"
                              className="w-full h-full object-cover"
                           />
                        </div>
                        <div className="text-container w-full flex-1 flex flex-col h-full lg:gap-6 gap-5 lg:pt-10 pt-6">
                           <h5 className="text-3xl font-bold">Umut AYDOĞAN</h5>
                           <h5 className="lg:text-base text-[15px] text-logoGray">
                              Assistant General Manager of OMG Capital Advisors,
                              Umut Aydoğan started his career in Yapı Kredi Bank
                              in 2003, thereafter worked for İşbank in Capital
                              Markets Division between 2006 and 2013. He went on
                              to work as an Operation Executive between 2013 –
                              2014 in Halk Pension Fund Management where he
                              established and managed internal control coupled
                              with fund risk management systems. Umut Aydoğan
                              continued his career in Ünlü&Co as COO Ünlü
                              Portfolio Management between 2014 and 2020,where
                              he also served the company as a member of the
                              Board. Umut&apos;s professional specialties along
                              with his extensive experience in capital markets
                              operations in Turkey, include execution and
                              administration of ABS issuance operations and
                              structured financial products.
                           </h5>
                        </div>
                     </div>
                     <div className="team-item-part w-full flex justify-between lg:gap-12 gap-0 lg:flex-row flex-col">
                        <div className="image-container lg:w-[380px] aspect-square w-full">
                           <Image
                              src={MuratGulkan}
                              alt="murat-gulkan"
                              className="w-full h-full object-cover"
                           />
                        </div>
                        <div className="text-container w-full flex-1 flex flex-col h-full lg:gap-6 gap-5 lg:pt-10 pt-6">
                           <h5 className="text-3xl font-bold">Murat GÜLKAN</h5>
                           <h5 className="lg:text-base text-[15px] text-logoGray">
                              Managing Partner, currently serving as the
                              Chairman and CEO of OMG Capital Advisors. Murat
                              Gülkan was formerly the CEO and CIO at Ünlü&Co.
                              Portfolio Management in İstanbul, responsible for
                              defining the main strategies, investment
                              procedures as well as developing a corresponding
                              product array. The products included mutual funds,
                              Real Estate Investment Funds and, in a first for a
                              non-bank-affiliated company, a full catalogue of
                              structured products. He later served as the
                              Advisor to the Board of Unlu&Co in its effort to
                              establish an investment bank. An industrial
                              engineer by education, Murat started his career in
                              capital markets and investment banking area in
                              1993 and has held various senior positions in the
                              industry, including managing director and co-head
                              of emerging Europe equities at Deutsche Bank in
                              London.
                           </h5>
                        </div>
                     </div>
                     <div className="team-item-part w-full flex justify-between lg:gap-12 gap-0 lg:flex-row flex-col">
                        <div className="image-container lg:w-[380px] aspect-square w-full">
                           <Image
                              src={NebilIlseven}
                              alt="nebil-ilseven"
                              className="w-full h-full object-cover"
                           />
                        </div>
                        <div className="text-container w-full flex-1 flex flex-col h-full lg:gap-6 gap-5 lg:pt-10 pt-6">
                           <h5 className="text-3xl font-bold">Nebil İLSEVEN</h5>
                           <h5 className="lg:text-base text-[15px] text-logoGray">
                              Managing Partner of OMG Capital Advisors, Nebil
                              İlseven comes from a professional background in
                              finance and investment banking in a number of
                              domestic and international financial institutions
                              in Turkey. During his career in the financial
                              sector, he also served as the Senior Vice
                              President of the Banking Authority during the
                              banking sector re-structuring period in 2001-2004
                              with responsibilities in asset management
                              structures and asset resolutions activities
                              including credit re-structuring, loan sales,
                              corporate asset dispositions and related legal
                              works. He is currently holding board memberships
                              and executive committee chair positions in a
                              number of companies with engagements in
                              international media content aggregation works,
                              hospitality sector, aviation, real estate
                              development, digital platforms and financial
                              services industry.
                           </h5>
                        </div>
                     </div>
                     <div className="team-item-part w-full flex justify-between lg:gap-12 gap-0 lg:flex-row flex-col">
                        <div className="image-container lg:w-[380px] aspect-square w-full">
                           <Image
                              src={BoraOruc}
                              alt="bora-oruc"
                              className="w-full h-full object-cover"
                           />
                        </div>
                        <div className="text-container w-full flex-1 flex flex-col h-full lg:gap-6 gap-5 lg:pt-10 pt-6">
                           <h5 className="text-3xl font-bold">Bora ORUÇ</h5>
                           <h5 className="lg:text-base text-[15px] text-logoGray">
                              Managing Partner of OMG Capital Advisors, Bora
                              holds a B.S. degree in Economics from Middle East
                              Technical University and an MBA from University of
                              Cambridge. He started his career at the Capital
                              Markets Board of Turkey in 1999 and served in
                              different departments. Between 2014 and 2020 he
                              served as the Executive Vice Chairperson at the
                              CMB Turkey. His areas of responsibilities covered
                              the regulation and surveillance processes of
                              public companies, IPOs, financial instruments, all
                              financial market infrastructures, institutional
                              investors, investment banks, brokerage houses and
                              relationships with IFIs and other international
                              agencies. Between 2017 and 2020 Mr Oruç served as
                              a member of the G20 Standing Committee on
                              Regulatory Cooperation and as the Chairperson of
                              the Central Securities Depository of Turkey. Bora
                              also serves as a non-executive director at BtcTurk
                              Inc., Inveo Investment Holding Inc. and İş
                              Investment Trust Inc.
                           </h5>
                        </div>
                     </div>
                  </div>
               </div>
            </Container>
         </div>
      </div>
   );
};

export default Team;
