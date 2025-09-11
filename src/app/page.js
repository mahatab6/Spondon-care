
import Banner from "@/components/Home/Banner";

import Services from "@/components/Home/services";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Topdoctors from "../components/Home/Topdoctors";

import Promotion from "@/components/Home/Promotion";

import UrgentHelp from "@/components/Home/UrgentHelp";


export default function Home() {
  return (
    <div>

      <Banner></Banner>

      <Services/>
      <UrgentHelp/>
      <h1 className="text-2xl font-extrabold">Spondon care</h1>
      <p className=" text-2xl font-bold">hello</p>
      <Button variant={"default"} className={"font-bold"}>Click me</Button>
      <section>
        <Topdoctors></Topdoctors>
        
      </section>
      <section>
        <Promotion></Promotion>
      </section>

    </div>
  );
}
