import { ColorChip } from "@/components/ui/color-chip";
import type { PlayerItem } from "@/pages/training/draggables/types";
import { type ReactElement } from "react";
import { DraggableChip } from "../components/DraggableChip";

export function Player(props: PlayerItem): ReactElement {
  return (
    <DraggableChip
      id={props.id}
      data={{ type: "player" }}
      className="flex items-center justify-center"
    >
      {props.name && (
        <span className="text-xs font-semibold text-white">{props.name}</span>
      )}
      <ColorChip value={props.number} color={props.color} size={props.size} />
    </DraggableChip>
  );
}
