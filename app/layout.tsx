import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { JetBrains_Mono, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";
import { appName, logoSrc } from "@/app/layout.shared";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    title: appName,
    icons: {
        icon: logoSrc,
    },
};

export default function Layout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${manrope.variable} ${jetbrainsMono.variable}`}
            suppressHydrationWarning
        >
            <body className="flex flex-col min-h-screen">
                <RootProvider theme={{ defaultTheme: "dark" }}>
                    {children}
                </RootProvider>
                <Analytics />
            </body>
        </html>
    );
}
