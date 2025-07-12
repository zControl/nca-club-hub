import { useDraggable } from "@dnd-kit/core";
import React, { type ReactElement } from "react";

export interface DraggableChipProps {
  id: string;
  data?: Record<string, unknown>;
  children: React.ReactNode;
  className?: string;
}

export function DraggableChip(props: DraggableChipProps): ReactElement {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
    data: props.data,
  });

  const style: React.CSSProperties | undefined = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={props.className || ""}
    >
      {props.children}
    </div>
  );
}
