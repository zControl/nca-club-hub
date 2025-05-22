import { PageContainer } from "@/components/common/PageContainer";
import { EmailUsCard } from "@/features/contact/components/EmailUsCard";
import { MailingListSignupForm } from "@/features/contact/components/MailingListSignupForm";
import { SocialButtons } from "@/features/contact/components/SocialButtons";

export function ContactPage() {
  return (
    <PageContainer title="Contact" description="Contact Us">
      <SocialButtons />
      <EmailUsCard />
      <MailingListSignupForm />
    </PageContainer>
  );
}
