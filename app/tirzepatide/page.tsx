import { ProductHero } from "@/components/product-hero";
import { BenefitsSection } from "@/components/benefits-section";
import { ProductHowItWorks } from "@/components/product-how-it-works";
import { QualitySection } from "@/components/quality-section";
import { FaqSection, type FaqItemType } from "@/components/faq-section";

const TIRZEPATIDE_FAQS: FaqItemType[] = [
  {
    q: "What happens if I'm not approved for the medication?",
    a: "If you are not prescribed the desired medication from our team of medical providers, you will be notified and receive a full refund for all cost incurred. This includes a cancellation of any subscription memberships you selected.",
  },
  {
    q: "What is the administration and dosage protocol?",
    a: `Altara's approach to both oral and injectable tirzepatide administration involves a personalized dosage strategy. The medication starts at a lower dose and is gradually increased based on your body's response to minimize side effects. You will receive comprehensive instructions on how to self-administer the medication, ensuring comfort and confidence.

For oral tirzepatide:
Administered using an oral syringe, which dispenses rather than injects.
Measure the dose by pulling the plunger until you reach the appropriate volume as marked on the syringe, and administer it underneath the tongue.
You will receive comprehensive instructions on how to self-administer the medication, ensuring comfort and confidence in managing your medication. Regular follow-ups with your healthcare provider will help monitor your progress and adjust the dosage as needed to optimize your results and minimize side effects.

Disclaimer: Individual results may vary. Always consult with your healthcare provider before starting any new medication to ensure it is appropriate for your condition. Follow your healthcare provider's instructions for dosage and administration. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Not approved by the FDA for safety or efficacy. Prescription required.`,
  },
  {
    q: "How does tirzepatide work?",
    a: "Tirzepatide activates both glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) receptors, which help regulate blood sugar levels and reduce appetite.",
  },
  {
    q: "Are there alternatives to compounded tirzepatide?",
    a: "Yes, FDA-approved versions of tirzepatide—such as Mounjaro or Zepbound—should be considered as an alternative option.",
  },
  {
    q: "What are common side effects of tirzepatide?",
    a: "Common side effects of tirzepatide include nausea, vomiting, diarrhea, constipation, abdominal pain, decreased appetite, injection site reactions (such as redness, swelling, or pain), fatigue, and gastrointestinal issues like heartburn, gas, and bloating. Serious side effects, although less common, can include thyroid tumors, pancreatitis, and severe allergic reactions. Always consult your healthcare provider for personalized advice and to report any side effects. For more information, please read the \"information safety info\" page.",
  },
  {
    q: "Is compounded tirzepatide FDA-approved?",
    a: "Compounded tirzepatide is not approved nor evaluated for safety, effectiveness, or quality by the FDA. Brand-name medications such as Zepbound® (tirzepatide) and Mounjaro® (tirzepatide) are FDA-approved and not compounded. Compounded versions of tirzepatide are not affiliated with, endorsed by, approved by, or intended to replace the FDA-approved products manufactured by Eli Lilly.",
  },
  {
    q: "How much weight can I lose on tirzepatide?",
    a: "People lost an average of over 20% bodyweight in a 72-week clinical trial study of tirzepatide, but not without lifestyle changes. Along with a reduced calorie diet and increased exercise. In a 72-week clinical study of tirzepatide, adults with obesity and weight-related medical problems achieved 20.9% weight loss.",
  },
  {
    q: "Can I start on a higher dosage?",
    a: "If you're currently taking the medication and switching from another provider, you can choose to maintain your current dose, increase it, or decrease it. This information is asked during the ordering process to ensure you're purchasing the correct medication for you.",
  },
  {
    q: "What is Compounded Tirzepatide?",
    a: "Compounded tirzepatide is a medication created by licensed compounding pharmacies, customized for individual patient needs. It is prepared with tirzepatide and formulated to support healthy blood sugar regulation, weight management, and metabolic health. This medication works by mimicking the GLP-1 and GIP hormones, helping to regulate insulin release, lower glucagon levels, slow stomach emptying, and reduce appetite.",
  },
];

export default function TirzepatidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[hsl(var(--bone))] to-[hsl(var(--sage))]">
      <ProductHero />
      <BenefitsSection />
      <div
        style={{
          background:
            "radial-gradient(ellipse at center, #001a33 0%, #002d52 50%, #0a3d66 100%)",
        }}
      >
        <ProductHowItWorks />
        <QualitySection />
      </div>
      <FaqSection
        title="Frequently Asked Questions"
        subheading="Everything you need to know about Tirzepatide"
        items={TIRZEPATIDE_FAQS}
      />
    </main>
  );
}
