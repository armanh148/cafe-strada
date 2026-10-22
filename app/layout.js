import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Café Strada — Boutique Dining, Artisan Coffee & Celebrations | Clifton, Karachi",
  description:
    "Located at Bungalow F-64/1, Block 4, Clifton, Karachi. Experience gourmet continental steaks, creamy Alfredo pasta, artisan coffees, breakfast, and private event packages for birthdays & bridal showers.",
  keywords: [
    "Cafe Strada",
    "Cafe Strada Karachi",
    "Cafe Strada Clifton",
    "Cafe Strada menu",
    "birthday party cafe karachi",
    "bridal shower venue karachi",
    "steaks clifton karachi",
    "continental food karachi",
  ],
  openGraph: {
    title: "Café Strada — Clifton, Karachi",
    description:
      "Boutique continental dining, artisan coffee, and private celebration venue in Clifton Block 4, Karachi.",
    url: "https://www.facebook.com/cafestrada.pk/",
    siteName: "Café Strada",
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="antialiased selection:bg-[#D9FB36] selection:text-[#23150D]">
        {children}
      </body>
    </html>
  );
}
