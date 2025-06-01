import { ImageInfoCard } from "@/components/composites/ImageInfoCard";
import { Content } from "@/components/ui/Content";

const goals = [
  {
    title: "Player Development",
    img: "/goals/goal-1.webp",
    description: "Foster individual technical and tactical skills",
    details:
      "Implement structured training programs that emphasize age-appripriate skill development including dribbling, passing, shooting, and ball control.  Focus on continuos improvement and development of each player's individual abilities.",
  },
  {
    title: "Team Unity",
    img: "/goals/goal-2.webp",
    description: "Build strong team dynamics and camaraderie",
    details:
      "Create a culture of encouragement, communication, and trust among players. Instill the values of giving maximum effort and supportive behavior on and off the field.  We celebrate each other's successes and learn from challenges together.",
  },
  {
    title: "Love of the Game",
    img: "/goals/goal-3.webp",
    description: "Maintain an engaging soccer environment",
    details:
      "Incorporate fun and engaging learning activities into training sessions. Encourage creativity and self-expression on the field, and celebrate the joy of playing soccer. Organize occasional fun events like parent-child matches or skills competitions to keep the atmosphere light and enjoyable.",
  },
  {
    title: "Sportsmanship",
    img: "/goals/goal-4.webp",
    description: "Teach the values of integrity and respect",
    details:
      "Teach players to respect teammates, opponents, coaches, referees, and the game itself. Implement a code of conduct that emphasizes fair play, positive communication, and gracious behavior in both victory and defeat.",
  },
  {
    title: "Access For All",
    img: "/goals/goal-1.webp",
    description: "Ensure competitve soccer is accessible to all",
    details:
      "Ensure families of all economic backgrounds have access to play competitive soccer. We offer scholarship programs to assist families that are in need.",
  },
];

export function GoalsTile() {
  return (
    <Content wrapperClassName="bg-nca-blue" contentClassName="bg-card p-6">
      {goals.map((goal, index) => (
        <ImageInfoCard
          key={goal.title}
          title={goal.title}
          img={goal.img}
          description={goal.description}
          details={goal.details}
          layout={index % 2 === 0 ? "left" : "right"}
        />
      ))}
      <div className="flex justify-center">
        <div>Hello Bottom Of Goal Cards</div>
      </div>
    </Content>
  );
}
