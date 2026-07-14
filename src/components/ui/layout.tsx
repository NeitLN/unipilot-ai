import * as React from "react";
import { cn } from "./utils";

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props} />;
}

export function Stack({ className, gap = "md", ...props }: React.HTMLAttributes<HTMLDivElement> & { gap?: "sm" | "md" | "lg" }) {
  return <div className={cn("flex flex-col", gap === "sm" && "gap-4", gap === "md" && "gap-6", gap === "lg" && "gap-8", className)} {...props} />;
}

export function ResponsiveGrid({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]", className)} {...props} />;
}
