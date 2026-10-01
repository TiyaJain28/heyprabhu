import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use – Hey Prabhu",
  description: "Hey Prabhu Terms of Use page.",
};

export default function TermsOfUse() {
  return (
    <LegalPage
      title="Terms of Use"
      description="This page will contain the official Hey Prabhu Terms of Use. The final content will be provided and approved by the Hey Prabhu team."
    />
  );
}
