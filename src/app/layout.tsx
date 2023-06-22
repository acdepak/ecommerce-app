import { AppFooter, AppHeader } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Slings for Babies",
  description: "Get the best matching sling for you and your baby.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
