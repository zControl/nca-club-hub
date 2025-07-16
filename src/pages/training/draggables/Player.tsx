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
      <div className="flex flex-col gap-1 items-center">
        {props.showName && props.name && (
          <span className="text-sm font-semibold text-white text-center max-w-18 overflow-auto wrap-anywhere">
            {props.name}
          </span>
        )}
        <ColorChip
          value={props.showNumber ? props.number : undefined}
          color={props.color}
          size={props.size}
        />
      </div>
    </DraggableChip>
  );
}
