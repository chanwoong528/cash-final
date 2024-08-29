import AuthSession from "@/app/(provider)/AuthSession"




export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <body>
        <AuthSession>
          {children}
        </AuthSession>
      </body>
    </html>
  )
}