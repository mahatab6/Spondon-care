import Services from "@/components/Home/services";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Services/>
      <h1 className="text-2xl font-extrabold">Spondon care</h1>
      <p className=" text-2xl font-bold">hello</p>
      <Button variant={"outline"} className={"font-bold"}>Click me</Button>
    </div>
  );
}
