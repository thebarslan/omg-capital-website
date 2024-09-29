import type { Metadata } from "next";
import "../globals.css";
import Header from "../components/common/header";
import Footer from "../components/common/footer";

// Context Provider'ları import et
import { UserProvider } from "../contexts/AuthContext";
import { InvestorProvider } from "../contexts/InvestorContext";
import { NewsProvider } from "../contexts/NewsContext";

export const metadata: Metadata = {
   title: "OMG Capital Advisors",
   description: "OMG Capital Advisors",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`antialiased`}>
            <UserProvider>
               <InvestorProvider>
                  <NewsProvider>
                     <Header />
                     {children}
                     <Footer />
                  </NewsProvider>
               </InvestorProvider>
            </UserProvider>
         </body>
      </html>
   );
}
