import Footer from "@/app/(components)/common/Footer";
import Header from "@/app/(components)/common/Header/Header";
import AuthSession from "@/app/(provider)/AuthSession";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body>
        <AuthSession>
          <Header />
          {children}
          <Footer />
        </AuthSession>
      </body>
    </html>
  );
}
