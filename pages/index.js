import ContainerHomeDefault from "@/components/layout/ContainerHomeDefault";
import Image from "next/image";

export default function Home() {
  return (
    <ContainerHomeDefault title="">
      <div className="flex flex-col max-w-sm mt-28 m-auto text-justify p-5 rounded-lg shadow-lg bg-white text-black text-sm">
        <div className="m-auto mb-3">
          <Image className="rounded-lg" src={"/assets/images/logo.png"} height={80} width={160} alt="logo"/>
        </div>
        <h3 className="text-center mb-3 font-medium text-black text-xl justify-center items-center">Proxify Job Like Application Form</h3>
        This is a Proxify Like Job Application form. This involves getting the user details through authentication
        and then proceeding to fill up their application form as required.
      </div>
    </ContainerHomeDefault>
  )
}
