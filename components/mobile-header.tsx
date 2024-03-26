import { Menu } from "lucide-react";

import { Sidebar } from "~/components/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
export function MobileHeader() {
  return (
    <div className="fixed top-0 z-50 flex h-[50px] w-full items-center border-b bg-green-500 px-6 lg:hidden">
      <MobileSidebar />
    </div>
  );
}

function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="z-[100] p-0" side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
