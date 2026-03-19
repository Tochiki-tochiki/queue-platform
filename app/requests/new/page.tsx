import { RequestForm } from "@/components/request-form";
import { SectionHeading } from "@/components/section-heading";

export default function NewRequestPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Create"
        title="依頼作成"
        description="フォーム入力だけで依頼作成のデモを確認できます。保存先は持たず、`useState` によるクライアント側の挙動で構成しています。"
      />
      <RequestForm />
    </div>
  );
}
