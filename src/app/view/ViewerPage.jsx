"use client";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const CVViewer = dynamic(() => import("../cv/CVViewer"), { ssr: false });

export default function ViewerPage() {
  const searchParams = useSearchParams();
  const file = searchParams.get("file");

  if (!file) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center text-white">
        No file specified.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center py-8 px-4">
      <CVViewer file={file} />
    </div>
  );
}
