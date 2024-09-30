import "../globals.css";

// Context Provider'ları import et
import { UserProvider } from "../contexts/AuthContext";
import { InvestorProvider } from "../contexts/InvestorContext";
import { NewsProvider } from "../contexts/NewsContext";

export const metadata = {
  title: "OMG Capital - Admin",
  description: "OMG Capital Admin",
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
              {children}
            </NewsProvider>
          </InvestorProvider>
        </UserProvider>
      </body>
    </html>
  );
}
