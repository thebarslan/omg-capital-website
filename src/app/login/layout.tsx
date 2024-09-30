import "../globals.css";

import { UserProvider } from "../contexts/AuthContext";
import { InvestorProvider } from "../contexts/InvestorContext";
import { NewsProvider } from "../contexts/NewsContext";

export const metadata = {
  title: "OMG Capital - Login Account",
  description: "OMG Capital Login Account",
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
            <NewsProvider>{children}</NewsProvider>
          </InvestorProvider>
        </UserProvider>
      </body>
    </html>
  );
}
