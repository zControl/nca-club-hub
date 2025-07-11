import { useDroppable } from "@dnd-kit/core";
import React, { type ReactElement } from "react";

interface DroppableProps {
  id: string;
  children: React.ReactNode;
}

export function Droppable(props: DroppableProps): ReactElement {
  const { setNodeRef } = useDroppable({
    id: props.id,
  });

  return <div ref={setNodeRef}>{props.children}</div>;
}
