import dynamic from "next/dynamic";

const CVViewer = dynamic(() => import("./CVViewer"), { ssr: false });

export default function CVPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center py-8 px-4">
      <CVViewer />
    </div>
  );
}
