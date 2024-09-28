import NavbarLeft from "../components/page_components/admin/navbarleft";
import "../globals.css";
export const metadata = {
   title: "OMG Capital - Admin",
   description: "Admin",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body>
            <div className="flex overflow-x-hidden">
               <NavbarLeft />
               <div className="lg:pt-20 lg:pl-10 pl-16 pt-16 lg:pr-6 pr-2 w-full">
                  {children}
               </div>
            </div>
         </body>
      </html>
   );
}
