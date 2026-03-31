import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
// import './../styles/globals.css'
import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}