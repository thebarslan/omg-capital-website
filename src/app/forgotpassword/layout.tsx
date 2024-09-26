import "../globals.css";
export const metadata = {
   title: "OMG Capital - Forgot Password",
   description: "OMG Capital Forgot Password",
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
