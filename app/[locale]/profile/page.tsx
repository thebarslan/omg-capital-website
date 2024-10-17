import Container from "@/app/components/common/container";
import React from "react";
import PashabankLogo from "../../images/logo-pashabank.png";
import Logo from "../../images/logo.png";
import Image from "next/image";

// Define the VDMK type
interface VDMK {
   vdmkTitle: string;
   vdmkFaiz: string;
   vdmkVade: string;
}

// Use the type for your vdmks array
const vdmks: VDMK[] = [
   {
      vdmkTitle: "Hepsiburada VDMK İhracı",
      vdmkFaiz: "Ortalama Basit Faiz Oranı %51",
      vdmkVade: "Ortalama Vade 84 Gün",
   },
   {
      vdmkTitle: "Hepsiburada VDMK İhracı",
      vdmkFaiz: "Ortalama Basit Faiz Oranı %51",
      vdmkVade: "Ortalama Vade 84 Gün",
   },
   {
      vdmkTitle: "Hepsiburada VDMK İhracı",
      vdmkFaiz: "Ortalama Basit Faiz Oranı %51",
      vdmkVade: "Ortalama Vade 84 Gün",
   },
   {
      vdmkTitle: "Hepsiburada VDMK İhracı",
      vdmkFaiz: "Ortalama Basit Faiz Oranı %51",
      vdmkVade: "Ortalama Vade 84 Gün",
   },
   {
      vdmkTitle: "Hepsiburada VDMK İhracı",
      vdmkFaiz: "Ortalama Basit Faiz Oranı %51",
      vdmkVade: "Ortalama Vade 84 Gün",
   },
   {
      vdmkTitle: "Hepsiburada VDMK İhracı",
      vdmkFaiz: "Ortalama Basit Faiz Oranı %51",
      vdmkVade: "Ortalama Vade 84 Gün",
   },
   {
      vdmkTitle: "Hepsiburada VDMK İhracı",
      vdmkFaiz: "Ortalama Basit Faiz Oranı %51",
      vdmkVade: "Ortalama Vade 84 Gün",
   },
];

const Profile = () => {
   return (
      <div className="w-full h-auto min-h-screen flex flex-col">
         <Container>
            <div className="w-full flex flex-col lg:pt-12 pt-6">
               <div className="title-container">
                  <h5 className="text-xl font-semibold">Hello Username</h5>
               </div>
               <div className="vdmks-container w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:mt-10 mt-6">
                  {vdmks.map((vdmk, index) => (
                     <div
                        key={index}
                        className="vdmk-item w-full h-[220px] rounded shadow flex gap-5 flex-col p-6 cursor-pointer"
                     >
                        <div className="logos w-full flex justify-between">
                           <Image
                              src={PashabankLogo}
                              className="w-auto h-[32px]"
                              alt="logo"
                           />
                           <Image
                              src={Logo}
                              className="w-auto h-[32px]"
                              alt="logo"
                           />
                        </div>
                        <div className="texts w-full flex flex-col gap-1 flex-1 justify-center">
                           <h6 className="font-bold text-[18px]">
                              {vdmk.vdmkTitle}
                           </h6>
                           <p className="text-[16px] font-medium mt-3">
                              {vdmk.vdmkFaiz}
                           </p>
                           <p className="text-[16px] font-medium">
                              {vdmk.vdmkVade}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Profile;
