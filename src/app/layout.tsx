import type { Metadata } from "next";
import { SplashLoader } from "@/components/site/splash-loader";
import {
  Geist,
  Geist_Mono,
  Inter,
  Noto_Sans,
  Nunito_Sans,
  Figtree,
  Roboto,
  Raleway,
  DM_Sans,
  Public_Sans,
  Outfit,
  EB_Garamond,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const notoSans = Noto_Sans({ variable: "--font-noto-sans", subsets: ["latin"] });
const nunitoSans = Nunito_Sans({ variable: "--font-nunito-sans", subsets: ["latin"] });
const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"] });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"], weight: ["400", "500", "700"] });
const raleway = Raleway({ variable: "--font-raleway", subsets: ["latin"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const publicSans = Public_Sans({ variable: "--font-public-sans", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });
const ebGaramond = EB_Garamond({ variable: "--font-eb-garamond", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const fontVariables = [
  geistSans,
  geistMono,
  inter,
  notoSans,
  nunitoSans,
  figtree,
  roboto,
  raleway,
  dmSans,
  publicSans,
  outfit,
  ebGaramond,
]
  .map((f) => f.variable)
  .join(" ");

export const metadata: Metadata = {
  title: "KEOS & KTern Design System",
  description: "The visual and experience layer behind KEOS & KTern â€” color, type, motion, and interaction, unified and themeable.",
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", dark);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <SplashLoader />
        {children}
      </body>
    </html>
  );
}
