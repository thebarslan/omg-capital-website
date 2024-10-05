import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import { UserProvider } from "../context/UserContext";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider messages={messages}>
          <UserProvider>
            <Header locale={locale} />
            {children}
            <Footer locale={locale} />
          </UserProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
