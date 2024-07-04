import cn from "classnames";
import s from "@/components/icons/icon.module.css";

export function iconClasses(className?: string) {
  return cn(s.icon, "icon", className);
}
