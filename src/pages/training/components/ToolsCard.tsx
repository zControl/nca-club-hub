import { Card, CardContent, CardTitle } from "@/components/ui/card";
export function ToolsCard() {
  return (
    <Card>
      <CardTitle className="text-center">TOOLS</CardTitle>
      <CardContent className="flex flex-row gap-2 items-center justify-center">
        <div>
          VARIOUS TOOLS HERE LIKE ARROWS, TEXT, COLORS, SHAPES, DIFFERENT LINES,
          EFFECTS, OTHER STUFF...
        </div>
      </CardContent>
    </Card>
  );
}
