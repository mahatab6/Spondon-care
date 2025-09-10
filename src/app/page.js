import Banner from "@/components/Home/Banner";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-2xl font-extrabold">Spondon care</h1>
      <p className=" text-2xl font-bold">hello</p>
      <Button variant={"outline"} className={"font-bold"}>Click me</Button>
    </div>
  );
}
