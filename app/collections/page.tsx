import { Suspense } from "react";
import CollectionsContent from "@/components/CollectionsContent";

export default function CollectionsPage() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading collections...</div>}>
      <CollectionsContent />
    </Suspense>
  );
}
