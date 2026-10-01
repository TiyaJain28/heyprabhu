import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy – Hey Prabhu",
  description: "Hey Prabhu Privacy Policy page.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="This page will contain the official Hey Prabhu Privacy Policy. The final content will be provided and approved by the Hey Prabhu team."
    />
  );
}
