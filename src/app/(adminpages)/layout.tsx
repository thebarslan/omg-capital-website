import NavbarLeft from "../components/page_components/admin/navbarleft";
import "../globals.css";
import { NewsProvider } from "../contexts/NewsContext"; // NewsProvider'ı ekleyin
import { UserProvider } from "../contexts/AuthContext"; // UserProvider'ı ekleyin
import { InvestorProvider } from "../contexts/InvestorContext"; // Eğer bir InvestorProvider var ise ekleyin

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
        <UserProvider>
          <InvestorProvider>
            <NewsProvider>
              <div className="flex overflow-x-hidden">
                <NavbarLeft />
                <div className="lg:pt-20 lg:pl-10 pl-16 pt-16 lg:pr-6 pr-2 w-full">
                  {children}
                </div>
              </div>
            </NewsProvider>
          </InvestorProvider>
        </UserProvider>
      </body>
    </html>
  );
}
