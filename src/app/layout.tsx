import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/utils/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "",
    description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
