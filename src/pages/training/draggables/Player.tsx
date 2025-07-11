import { Coin } from "@/components/ui/coin";
import { type ReactElement } from "react";
import { DraggableChip } from "../components/DraggableChip";

interface PlayerProps {
  id: string;
  name?: string;
  number?: number;
  color?: "red" | "blue" | "yellow" | "green";
}
export function Player(props: PlayerProps): ReactElement {
  return (
    <DraggableChip
      id={props.id}
      data={{ type: "player" }}
      className="flex items-center justify-center"
    >
      {props.name && (
        <span className="text-xs font-semibold text-white">{props.name}</span>
      )}
      <Coin value={props.number || 99} />
    </DraggableChip>
  );
}
