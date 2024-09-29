import "../globals.css";
import { InvestorProvider } from "@/app/contexts/InvestorContext"; // Adjust the import path as needed

export const metadata = {
   title: "OMG Capital - Investment Application",
   description: "OMG Capital - Investment Application",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body>
            <InvestorProvider>
               {children}
            </InvestorProvider>
         </body>
      </html>
   );
}
