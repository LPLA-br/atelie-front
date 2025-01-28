export const metadata = {
  title: 'Gerencial Ateliê',
  description: 'none',
}

export default function RootLayout({ children, }: { children: React.ReactNode })
{
  return (
    <html lang="pt-BR">
      <body className="h-full">
        <div className="bg-red-400 flex flex-col">
          <h1> GERENCIAL ATELIÊ </h1>
        </div>
        {children}
      </body>
    </html>
  )
}
