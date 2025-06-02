import { ContentPane } from "@/components/common/page/ContentPane";
import { PageContainer } from "@/components/common/page/PageContainer";
import { PageSections } from "@/components/common/page/PageSections";
import { EmailUsCard } from "@/features/contact/components/EmailUsCard";
import { MailingListSignupForm } from "@/features/contact/components/MailingListSignupForm";
import { SocialButtons } from "@/features/contact/components/SocialButtons";

export function ContactPage() {
  const sections = [
    { id: "socials", title: "Socials", children: <SocialButtons /> },
    { id: "email-us", title: "Email Us", children: <EmailUsCard /> },
    {
      id: "mailing-list",
      title: "Mailing List",
      children: <MailingListSignupForm />,
    },
  ];
  return (
    <PageContainer title="Contact" description="Contact Us">
      <ContentPane wrapperClassName="bg-nca-blue" contentClassName="max-w-4xl">
        <PageSections sections={sections} />
      </ContentPane>
    </PageContainer>
  );
}
