import { RequestCard } from "@/components/request-card";
import { SectionHeading } from "@/components/section-heading";
import { requests } from "@/lib/data";

export default function RequestsPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Requests"
        title="依頼一覧"
        description="現在公開中の依頼をカード形式で確認できます。場所や報酬、進行状況がひと目でわかる構成です。"
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {requests.map((request) => (
          <RequestCard key={request.id} request={request} />
        ))}
      </div>
    </div>
  );
}
