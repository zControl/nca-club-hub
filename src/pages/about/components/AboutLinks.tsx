import { CardButton } from "@/components/composites/CardButton";

export function AboutLinks() {
  return (
    <div className="my-4 flex flex-row gap-4 justify-center">
      <CardButton
        header="Active Teams"
        subText="See our current teams that compete in league play."
        buttonUrl="/teams"
        buttonText="Team Directory"
      />
      <CardButton
        header="Tryouts"
        subText="We hold tryouts each year in spring. Come join us!"
        buttonUrl="/tryouts"
        buttonText="Tryouts Registration"
      />
      <CardButton
        header="Rebel Rec"
        subText="We also offer an exciting local recreation league, Check it out!"
        buttonUrl="/rebelrec"
        buttonText="Rebel Rec Info"
      />
    </div>
  );
}
