import { Suspense } from "react";
import ViewerPage from "./ViewerPage";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#1a1a1a]" />}>
      <ViewerPage />
    </Suspense>
  );
}
