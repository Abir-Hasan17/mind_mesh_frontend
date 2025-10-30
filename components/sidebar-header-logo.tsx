import { Brain } from "lucide-react";

export function SidebarHeaderLogo() {
  return (
    <div className="flex p-2 items-center">
      <Brain className="text-primary" />
      <p className="font-medium text-lg px-2">Mind Mesh</p>
    </div>
  );
}
