import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions – Hey Prabhu",
  description: "Hey Prabhu Terms and Conditions page.",
};

export default function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms and Conditions"
      description="This page will contain the official Hey Prabhu Terms and Conditions. The final content will be provided and approved by the Hey Prabhu team."
    />
  );
}
