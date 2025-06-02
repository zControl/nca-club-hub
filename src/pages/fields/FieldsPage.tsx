import { PageContainer } from "@/components/common/page/PageContainer";
import { UnderConstruction } from "@/components/common/page/UnderConstruction";
import { Hero } from "@/components/ui/hero";
export function FieldsPage() {
  return (
    <PageContainer title="Contact" description="Contact Us">
      <Hero sectionTitle="Fields">
        <UnderConstruction
          items={[
            {
              title: "Description",
              description:
                "North County Alliance is blessed to have access to one of the county's best maintained city parks.  Bender Fields in Lynden, WA is home to multiple soccer, baseball and lacrosse fields serving adult and youth athletics all year long.",
            },
            {
              title: "Bender Fields Map Component",
              description:
                "Show an integrated google maps with centered on bender fields.",
            },
            {
              title: "Field Maps Images and Downloads",
              description:
                "Provide field numbers and maps for the different setups, Rec, etc.",
            },

            {
              title: "Local Lynden Businesses",
              description:
                "Table of links to hotels, restaurants, etc. in the Lynden area.",
            },
          ]}
        />
      </Hero>
    </PageContainer>
  );
}
