import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";

function Layout() {
  const { isRTL } = useLanguage();
  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen flex flex-col bg-navy text-white"
    >
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function RootLayout() {
  return (
    <LanguageProvider>
      <Layout />
    </LanguageProvider>
  );
}
