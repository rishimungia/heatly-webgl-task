import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import JotaiProvider from "@/components/provider/JotaiProvider";
import StateProvider from "@/components/provider/StateProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Power.Three",
    description: "WebGL dev task for Heatly",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <JotaiProvider>
                <StateProvider>
                    <body className={`${geistSans.variable} antialiased`}>
                        {children}
                    </body>
                </StateProvider>
            </JotaiProvider>
        </html>
    );
}
