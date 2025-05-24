import { type JSX } from "react";

export interface NavigationItem {
  href: string;
  title: string;
  short?: string;
  description?: string;
  tooltip?: string;
  icon?: JSX.Element;
}