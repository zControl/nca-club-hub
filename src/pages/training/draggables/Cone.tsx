import type { ReactElement } from "react";
import { DraggableChip } from "../components/DraggableChip";

interface ConeProps {
  id: string;
  size?: "small" | "medium" | "large";
  color?: "red" | "blue" | "yellow";
}
export function Cone(props: ConeProps): ReactElement {
  return (
    <DraggableChip
      id={props.id}
      data={{ type: "cone" }}
      className="flex items-center justify-center"
    >
      <div className="text-xs font-semibold text-white">
        {props.size || "small"}
      </div>
      <div className="text-xs font-semibold text-white">
        {props.color || "red"}
      </div>
    </DraggableChip>
  );
}
