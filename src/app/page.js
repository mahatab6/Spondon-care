
import Banner from "@/components/Home/Banner";

import Services from "@/components/Home/services";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Topdoctors from "../components/Home/Topdoctors";
import DoctorReviews from "@/components/Home/DoctorReviews";

import Promotion from "@/components/Home/Promotion";

import UrgentHelp from "@/components/Home/UrgentHelp";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <div>
      
      <Banner></Banner>
      <Navbar></Navbar>
      <Services />
      <Services />
      <UrgentHelp />
      <section>
        <Topdoctors></Topdoctors>
        <DoctorReviews />
        <Promotion></Promotion>
      </section>


    </div >
  );
}
