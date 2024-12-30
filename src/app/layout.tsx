import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata =
{
  title: "Ateliê de Costura",
  description: "transparência comercial"
};

export default function RootLayout( { children, }: { children: React.ReactNode })
{
  return (
    <html lang="pt-br">
      <body>
        <div className="bg-orange-400 flex justify-left items-center p-4 h-64">
          <h1 className="font-serif font-bold text-5xl"> Ateliê de Costura </h1>
          <div className="bg-black mx-4 w-1 h-full"></div>
          <Link className="text-center px-16 w-80 w-max text-3xl hover:translate-y-2" href="/"> Início </Link>
          <Link className="text-center px-16 w-80 w-max text-3xl hover:translate-y-2" href="/precos"> Preços </Link>
          <Link className="text-center px-16 w-80 w-max text-3xl hover:translate-y-2" href="/cliente"> Area do Cliente </Link>
          <Link className="text-center px-16 w-80 w-max text-3xl hover:translate-y-2" href="/contato"> Contato </Link>
        </div>
        {children}
        <div className="bg-blue-400 p-4 flex flex-col items-center justify-center">
          <p className="font-serif text-2xl"> Ateliê de Costura 2025 </p>
          <div className="flex flex-row items-center justify-center">
            <Link className="font-serif p-4 text-2xl" href="/termos"> Termos de serviço </Link>
            <Link className="font-serif p-4 text-2xl" href="/privacidade">Politica de Privacidade</Link>
            <Link className="font-serif p-4 text-2xl" href="/ajuda"> Ajuda </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
