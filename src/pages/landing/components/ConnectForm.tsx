import { Hero } from "@/components/ui/hero";
import { EmailUsCard } from "@/features/contact/components/EmailUsCard";
import { MailingListSignupForm } from "@/features/contact/components/MailingListSignupForm";

export function ConnectForm() {
  return (
    <Hero sectionTitle="Connect with us">
      <div className="flex md:flex-row flex-col justify-around space-y-2 px-2">
        <EmailUsCard />
        <MailingListSignupForm />
      </div>
    </Hero>
  );
}
