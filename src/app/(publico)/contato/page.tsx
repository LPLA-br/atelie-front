import Link from "next/link";

export default function Page()
{
  return (
    <div className="bg-blue-300 h-screen p-8 flex flex-col items-center justify-center">
      <div className="bg-red-500 h-3/4 w-3/4 flex flex-col items-center justify-center">
        <div className="font-serif text-8xl"> (84) 991223345 </div>
        <a className="font-serif text-8xl" href="www.instagram.com"> @insta </a>
      </div>
    </div>
  )
}
