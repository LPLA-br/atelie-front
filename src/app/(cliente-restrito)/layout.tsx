export const metadata = {
  title: 'Gerencial Ateliê',
  description: 'none',
}

export default function RootLayout({ children, }: { children: React.ReactNode })
{
  return (
    <html lang="pt-BR">
      <body className="h-full">
        <h1> TRANSPARÊNCIA CLIENTE </h1>
        {children}
      </body>
    </html>
  )
}
