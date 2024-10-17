import Container from "@/app/components/common/container";
import React from "react";

const Abs = () => {
   return (
      <div className="w-full h-auto team flex flex-col">
         <Container>
            <div className="inside-container w-full h-auto lg:py-12 py-8">
               <div className="what-is-abs w-full flex flex-col lg:mt-6 mt-1">
                  <div className="title-container">
                     <h5 className="lg:text-2xl text-2xl font-bold">
                        What is an Asset Backed Security (ABS)?
                     </h5>
                  </div>
                  <div className="text-container-inside mt-4">
                     <p className="text-[15px] font-medium">
                        Asset-backed securities (ABS) is a type of financial
                        investment that is collateralized by an underlying pool
                        of assets that generate income or cash flows. ABSs
                        appeal to income-oriented investors, as they pay a
                        steady stream of interest, like bonds. For investors,
                        buying an ABS affords the opportunity of a revenue
                        stream. The ABS allows them to participate in a wide
                        variety of income-generating assets that aren’t
                        available in any other investment.
                     </p>
                  </div>
               </div>
               <div className="how-abs-work w-full flex flex-col mt-12">
                  <div className="title-container">
                     <h5 className="lg:text-2xl text-2xl font-bold">
                        How does ABS Work?
                     </h5>
                  </div>
                  <div className="text-container-inside mt-4">
                     <p className="text-[15px] font-medium">
                        Asset-backed securities (ABS) are created through a
                        process called securitization. This involves pooling
                        various income-generating assets—such as loans, leases,
                        or receivables—into a single financial instrument, which
                        is then sold to investors. The visual representation of
                        this process, as shown in the chart, highlights the key
                        entities and flow of transactions involved in ABS.
                     </p>
                  </div>
                  <div className="list px-4 mt-8">
                     <ul className="list-disc *:mb-7 *:*:font-medium text-[15px]">
                        <li>
                           <p>
                              <span className="font-semibold">Investors:</span>{" "}
                              Investors purchase ABS, which are issued as VDMK
                              (Varlığa Dayalı Menkul Kıymet) securities. They
                              pay the issuance price for these securities.
                           </p>
                        </li>
                        <li>
                           <p>
                              <span className="font-semibold">
                                 Asset Financing Fund:
                              </span>{" "}
                              This fund acts as the intermediary in the ABS
                              structure. It buys the underlying assets from the
                              Kaynak Kuruluş (Originator), which is the entity
                              selling the assets, and issues the ABS to
                              investors.
                           </p>
                        </li>
                        <li>
                           <p>
                              <span className="font-semibold">Originator:</span>{" "}
                              The originator sells the assets (such as loans or
                              receivables) to the Asset Financing Fund. In
                              return, it receives the value of the transferred
                              assets from the fund.
                           </p>
                        </li>
                        <li>
                           <p>
                              <span className="font-semibold">Debtor:</span> The
                              debtor is the party responsible for making
                              payments on the underlying assets (loans or
                              receivables). The cash flows generated by these
                              payments are transferred to the Asset Financing
                              Fund.
                           </p>
                        </li>
                        <li>
                           <p>
                              <span className="font-semibold">
                                 Payment to Investors:
                              </span>{" "}
                              Over time, the fund uses the cash flows from the
                              underlying assets to pay back the investors,
                              including both principal and interest on their ABS
                              investment.
                           </p>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Abs;
