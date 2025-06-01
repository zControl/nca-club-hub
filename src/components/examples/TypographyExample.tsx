import { PageSections } from "@/components/common/page/PageSections";
import { Tile } from "@/components/composites/Tile";
import {
  BlockQuote,
  Header1,
  Header2,
  Header3,
  Header4,
  Paragraph,
  TextBlock,
} from "@/components/ui/typography";

function HeadingsTile() {
  return (
    <Tile
      title="Headings"
      description="Headings are used to break up different sections of content."
    >
      <div className="flex flex-col gap-2">
        <Header1>Header 1</Header1>
        <Header2>Header 2</Header2>
        <Header3>Header 3</Header3>
        <Header4>Header 4</Header4>
      </div>
    </Tile>
  );
}

function ParagraphTile() {
  return (
    <Tile
      title="Text"
      description="Sections of text that are separated from each other.."
    >
      <Header4>Paragraph</Header4>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nam eum
        explicabo repellendus iure alias corrupti quaerat. Excepturi cum fuga
        est possimus animi qui, perferendis repellat! Temporibus rem quo nobis!
      </Paragraph>
      <Header4>Block Quote</Header4>
      <BlockQuote>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nam eum
        explicabo repellendus iure alias corrupti quaerat. Excepturi cum fuga
        est possimus animi qui, perferendis repellat! Temporibus rem quo nobis!
      </BlockQuote>
      <Header4>Text Block</Header4>
      <TextBlock>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In maiores
        illum aliquid et porro, tenetur libero animi aliquam, repellat odit
        molestiae! Quisquam maxime consectetur asperiores. Reprehenderit,
        deleniti sit! Aut, eaque?
      </TextBlock>
    </Tile>
  );
}

const sections = [
  { id: "headings", title: "Headings", children: <HeadingsTile /> },
  { id: "paragraph", title: "Paragraph", children: <ParagraphTile /> },
];

export const TypographyExample = () => {
  return <PageSections sections={sections} />;
};
