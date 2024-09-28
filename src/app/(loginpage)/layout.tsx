import "../globals.css";
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
         <body>{children}</body>
      </html>
   );
}
