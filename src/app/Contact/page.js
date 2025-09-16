import { ContactForm } from "@/components/Contact/ContactForm";
import { ContactHero } from "@/components/Contact/ContactHero";
import { ContactInfo } from "@/components/Contact/ContactInfo";
import { FAQSection } from "@/components/Contact/FAQSection";

export default function AboutPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <FAQSection />
    </main>
  );
}
