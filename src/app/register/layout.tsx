import "../globals.css";
export const metadata = {
   title: "OMG Capital - Create Account",
   description: "OMG Capital Create Account",
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
