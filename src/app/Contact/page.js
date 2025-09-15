import { ContactForm } from "@/components/Contact/ContactForm";
import { ContactHero } from "@/components/Contact/ContactHero";
import { ContactInfo } from "@/components/Contact/ContactInfo";

export default function AboutPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
