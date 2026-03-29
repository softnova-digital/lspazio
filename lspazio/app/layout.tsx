import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Lspazio - Architecture & Interior Design",
  description: "Modern Architecture and Interior Design",
};
//  demo 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Oswald:400,500,600,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

        {/* CSS Stylesheets */}
        <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/magnific-popup.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/loader.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        <link rel="stylesheet" type="text/css" href="/css/flaticon.min.css" />
        <link rel="stylesheet" type="text/css" href="/plugins/revolution/revolution/css/settings.css" />
        <link rel="stylesheet" type="text/css" href="/plugins/revolution/revolution/css/navigation.css" />
      </head>
      <body>
        <div className="page-wraper">
          <Header />
          <div className="page-content">{children}</div>
          <Footer />
        </div>

        {/* JavaScript Plugins required for Revolution Slider */}
        <script src="/js/jquery-3.7.1.min.js" defer></script>
        <script src="/plugins/revolution/revolution/js/jquery.themepunch.tools.min.js" defer></script>
        <script src="/plugins/revolution/revolution/js/jquery.themepunch.revolution.min.js" defer></script>
        <script src="/plugins/revolution/revolution/js/extensions/revolution-plugin.js" defer></script>
        <script src="/js/rev-script-1.js" defer></script>
      </body>
    </html>
  );
}

