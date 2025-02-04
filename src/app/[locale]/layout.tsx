import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Montserrat, Alexandria, Cairo } from "next/font/google";
import "../style/globals.css"; 
import { ModalProvider } from "../context/modalContext";
import Footer from "../components/footer/footer";
import WhatsAppButton from "../components/utility/whatsApp";
import NavBar from "../components/header/navBar";

const alexandria = Alexandria({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-alexandria",
});
const cairo = Cairo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cairo",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "EVE",
  description: "",
  
};
export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${montserrat.variable} ${inter.variable} ${alexandria.variable} ${cairo.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <ModalProvider>
            <NavBar />
            <WhatsAppButton />
            {children}
            <Footer />
          </ModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
