import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function AboutTryoutsTile() {
  return (
    <>
      <div className="w-full py-4 px-8 flex flex-row justify-around">
        <Card>
          <CardTitle>How It Works</CardTitle>
          <CardContent>
            <div>blah</div>
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Tryout Guide</CardTitle>
        </Card>
        <Card>
          <CardTitle>Tryout Guide</CardTitle>
        </Card>
      </div>
    </>
  );
}
