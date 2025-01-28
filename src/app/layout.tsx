import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata =
{
  title: "Ateliê de Costura",
  description: "transparência comercial"
};

export default function RootLayout( { children, }: { children: React.ReactNode })
{
  return (
    <html lang="pt-BR">
        {children}
    </html>
  )
}
