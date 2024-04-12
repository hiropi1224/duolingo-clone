import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import { isAdmin } from "~/lib/admin";

const App = dynamic(() => import("./_components/app"), { ssr: false });

export default function AdminPage() {
  if (!isAdmin()) {
    redirect("/");
  }

  return <App />;
}
