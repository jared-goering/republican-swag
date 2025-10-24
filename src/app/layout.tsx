import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "American-Made GOP Campaign Merch | Midwest Printing",
  description: "U.S.-made blanks, Midwest printing, FEC-savvy proofs. Campaign-fast merch for Republican candidates.",
  keywords: "Republican campaign merchandise, GOP campaign gear, political merchandise, campaign t-shirts, FEC compliant printing, Made in USA campaign materials",
  authors: [{ name: "GOP Merch Co." }],
  creator: "GOP Merch Co.",
  publisher: "GOP Merch Co.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gopmerchco.com",
    siteName: "GOP Merch Co.",
    title: "American-Made GOP Campaign Merch | Midwest Printing",
    description: "U.S.-made blanks, Midwest printing, FEC-savvy proofs. Campaign-fast merch for Republican candidates.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GOP Merch Co. - American-Made Campaign Merchandise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "American-Made GOP Campaign Merch | Midwest Printing",
    description: "U.S.-made blanks, Midwest printing, FEC-savvy proofs. Campaign-fast merch for Republican candidates.",
    images: ["/og-image.jpg"],
  },
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
    // other: "your-other-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Do all campaign items need FEC disclaimers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Not all items require disclaimers. Small items like buttons, pens, and similar promotional materials under a certain size threshold are exempt from disclaimer requirements under FEC small item rules. We help determine which items need disclaimers and ensure proper placement."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What qualifies as Made in USA for campaign merchandise?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Made in USA claims must be substantiated. We offer 100% U.S.-made blanks when available and clearly distinguish between domestic and imported materials. All claims are properly qualified and documented according to FTC guidelines."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are your typical turnaround times?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "We provide proofs within 24-48 hours and typical production is 7-10 business days. Rush orders are available for tight campaign deadlines. Timeline depends on product type, quantities, and current production schedule."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you handle rush orders for campaign events?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we understand campaign timelines are often tight. We offer expedited proofs (24 hours) and rush production options. Contact us with your deadline and we'll work to accommodate your campaign schedule."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${leagueSpartan.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
