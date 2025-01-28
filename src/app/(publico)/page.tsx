import Image from "next/image";

export default function Page()
{
  return (
    <div>

      <div className="bg-green-300 flex items-center justify-center text-center h-screen">
        <Image src={"/tecido02.png"} width={1067} height={560} alt="tecido" style={{height:"100%",width:"100%",objectFit:"cover"}}></Image>
        <div className="w-1/2">
          <p className="font-serif text-4xl"> Confecção de roupas sob medida </p>
        </div>
      </div>

      <div className="bg-red-300 flex items-center justify-center h-screen">
        <div className="w-1/2">
          <p className="font-serif text-4xl text-center"> Consertos e ajustes para peças </p>
        </div>
        <Image src={"/tecido01.png"} width={864} height={505} alt="tecido" style={{height:"100%",width:"100%",objectFit:"cover"}}></Image>
      </div>

    </div>
  )
}
