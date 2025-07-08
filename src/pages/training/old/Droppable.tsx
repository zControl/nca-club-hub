import { useDroppable } from "@dnd-kit/core";
import React, { type ReactElement } from "react";

interface DroppableProps {
  id: string;
  children: React.ReactNode;
}

export function Droppable(props: DroppableProps): ReactElement {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style: React.CSSProperties = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
