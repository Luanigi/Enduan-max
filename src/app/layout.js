import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SessionWrapper from "@/components/SessionWrapper";
import { UserProvider } from '../UserContext';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enduan max",
  description: "A non-censored, knowledge based, social-media plattform for having fun and learning!",
  icon: '/icon.png',
};

export default function RootLayout({ children }) {
  return (
    <UserProvider>
    <SessionWrapper>
    <html lang="en">
      <head>
      <link rel="icon" href="./favicon.ico" type="image/png" sizes="32x32" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
    </SessionWrapper>
    </UserProvider>
  );
}
