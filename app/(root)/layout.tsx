import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";
import ToasterProvider from "@/lib/poviders/toastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Momoko-Store",
    description: "Ecommerce-Store",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ClerkProvider>
                    <ToasterProvider />
                    <NavBar />
                    {children}
                </ClerkProvider>
            </body>
        </html>
    );
}
