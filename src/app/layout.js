import { Geist, Geist_Mono, Outfit, Ovo } from "next/font/google";
import "./globals.css";





const outfit = Outfit({
 
  subsets: ["latin"],
  weight:["400","500","600","700","800","900"]
});

const ovo = Ovo({

  subsets: ["latin"],
  weight:["400"]
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of Nikesh Sharma",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.className} ${ovo.className} h-full antialiased`}
      data-locator-target="Antigravity://file/${projectPath}${filePath}:${line}:${column}"

    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
