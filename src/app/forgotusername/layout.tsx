import "../globals.css";
export const metadata = {
   title: "OMG Capital - Forgot Username",
   description: "OMG Capital Forgot Username",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
}
