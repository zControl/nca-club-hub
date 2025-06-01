import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export function TryoutExpectationsTile() {
  return (
    <>
      <div className="w-full py-4 px-8 flex flex-row justify-around">
        <Card>
          <CardTitle>How It Works</CardTitle>
          <CardDescription>
            <p>
              The Tryout... It can be exciting. It can be nerve-racking. It can
              be stressful. It can be rewarding. A player's first introduction
              to select soccer is The Tryout. For a young athlete the pressure
              of being evaluated, of being tested- is a rite of passage into the
              next level of their development. However, this does not need to be
              an overwhelming experience. It can be one that challenges them and
              provides direction in where there is still the most potential to
              improve their game. NC Alliance wants to make the first experience
              with the club a positive one. We want to provide an opportunity
              for all players to grow into complete soccer players. That is why
              our evaluation process focuses on 4 main components of their game:
            </p>
          </CardDescription>
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
