import { cva } from "class-variance-authority";

export const colorVariants = cva("hover:cursor-move", {
  variants: {
    color: {
      default: "bg-yellow-400 border-yellow-600 text-yellow-800",
      red: "bg-red-400 border-red-600 text-red-800",
      blue: "bg-blue-400 border-blue-600 text-blue-800",
      yellow: "bg-yellow-400 border-yellow-600 text-yellow-800",
      green: "bg-green-400 border-green-600 text-green-800",
    },
  },
});

export const sizeVariants = cva("", {
  variants: {
    size: {
      default: "h-10 w-10 text-base",
      small: "h-8 w-8 text-xs",
      medium: "h-10 w-10 text-sm",
      large: "h-12 w-12 text-base",
      huge: "h-16 w-16 text-lg",
    },
  },
});
