import "../globals.css";
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
         <body>{children}</body>
      </html>
   );
}
