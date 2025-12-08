import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/src/components/ui/theme-provider";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "CS Portfolio",
  description: "Computer Science Portfolio",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.className} antialiased min-h-screen bg-background text-foreground transition-colors`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
    </>
  );
}
