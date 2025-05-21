import { PageSections } from "@/components/common/PageSections";
import { Tile } from "@/components/composites/Tile";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LabeledValue } from "@/components/ui/labeled-value";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { Header4 } from "@/components/ui/typography";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { IceCream } from "lucide-react";

function AvatarTile() {
  return (
    <Tile
      title="User Avatar"
      description="User Avatar shows the user's profile picture, or falls back to initials."
    >
      <Avatar>
        <AvatarImage src="/avatar-2.jpg" alt="Avatar" />
        <AvatarFallback>AZ</AvatarFallback>
      </Avatar>
    </Tile>
  );
}

function BadgeTile() {
  return (
    <Tile
      title="Badge"
      description="A badge can show status or be a flag for something."
    >
      <div className="grid grid-cols-1 gap-y-6 mb-4">
        <div className="flex gap-6">
          <Badge>Basic</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
        <div className="flex gap-6">
          <Badge variant="warning">Warning</Badge>
          <Badge variant="highlight">Highlight</Badge>
          <Badge variant="success">Success</Badge>
        </div>
        <div className="flex gap-6">
          <Badge variant="info">Info</Badge>
          <Badge variant="error">Error</Badge>
        </div>
      </div>
    </Tile>
  );
}

function ButtonTile() {
  return (
    <Tile title="Button" description="A button is a clickable element.">
      <Header4>Colors</Header4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="highlight">Highlight</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button>
          <IceCream />
          With Icon
        </Button>
        <Button disabled>
          <Spinner />
          Disabled
        </Button>
      </div>
      <Separator className="my-4" />
      <Header4>Sizes</Header4>
      <div className="flex flex-row gap-2 mt-4">
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="sm">Small</Button>
        <Button size="icon">
          <IceCream />
        </Button>
      </div>
    </Tile>
  );
}

function SeparatorTile() {
  return (
    <Tile title="Separator" description="A separator is a thin line.">
      <div className="flex flex-col gap-4">
        <p>Horizontal</p>
        <Separator />
        <p>Vertical</p>
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
          <Separator orientation="vertical" />
          <p>Custom</p>
          <Separator orientation="vertical" />
        </div>
      </div>
    </Tile>
  );
}

function LabeledValueTile() {
  return (
    <Tile
      title="Labeled Value"
      description="A labeled value is a pair of a label and a value."
    >
      <LabeledValue label="Label" value="Value" />
    </Tile>
  );
}

const sections = [
  { id: "avatar", title: "Avatar", children: <AvatarTile /> },
  { id: "badge", title: "Badge", children: <BadgeTile /> },
  { id: "button", title: "Button", children: <ButtonTile /> },
  { id: "separator", title: "Separator", children: <SeparatorTile /> },
  {
    id: "labeled-value",
    title: "Labeled Value",
    children: <LabeledValueTile />,
  },
];

export const BasicExample = () => {
  return <PageSections sections={sections} />;
};
