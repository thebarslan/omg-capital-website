import type { Metadata } from "next";
import "../globals.css";
import Header from "../components/common/header";
import Footer from "../components/common/footer";

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
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   );
}
