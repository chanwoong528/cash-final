export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <h1>Authlayout</h1>
        {children}
      </body>
    </html>
  )
}