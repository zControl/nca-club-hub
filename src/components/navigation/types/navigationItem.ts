import { JSX } from "react";

export interface NavigationItem {
  title: string;
  href: string;
  description?: string;
  tooltip?: string;
  icon?: JSX.Element;
}