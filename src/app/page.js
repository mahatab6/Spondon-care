import Banner from "@/components/Home/Banner";

import Services from "@/components/Home/services";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Topdoctors from "../components/Home/Topdoctors";
import DoctorReviews from "@/components/Home/DoctorReviews";

import Promotion from "@/components/Home/Promotion";

import UrgentHelp from "@/components/Home/UrgentHelp";
import Specialization from "@/components/Home/Specialization";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Services />
      <UrgentHelp />
      <Specialization />
      <Topdoctors />
      <DoctorReviews />
      <Promotion />
    </div>
  );
}
