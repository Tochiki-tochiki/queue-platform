import Link from "next/link";
import { notFound } from "next/navigation";
import { StatusBadge } from "@/components/status-badge";
import { StatusTimeline } from "@/components/status-timeline";
import { requests } from "@/lib/data";

type RequestDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function RequestDetailPage({
  params,
}: RequestDetailPageProps) {
  const { id } = await params;
  const request = requests.find((item) => item.id === id);

  if (!request) {
    notFound();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Request Detail
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {request.title}
            </h1>
          </div>
          <StatusBadge status={request.status} />
        </div>

        <dl className="mt-8 grid gap-6 sm:grid-cols-2">
          <InfoItem label="場所" value={request.location} />
          <InfoItem label="日時" value={request.datetime} />
          <InfoItem label="報酬" value={request.reward} />
          <InfoItem label="依頼者" value={request.clientName} />
        </dl>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-slate-900">依頼内容</h2>
          <p className="mt-3 text-sm leading-8 text-slate-600">
            {request.description}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-slate-900">タグ</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {request.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <aside className="space-y-6">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-950">応募アクション</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            条件とステータスを確認したうえで、この依頼へ応募できます。
          </p>
          <button className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            応募する
          </button>
          <Link
            href="/requests"
            className="mt-3 inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            一覧へ戻る
          </Link>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-950">進行ステータス</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            現在の状況がどの段階にあるかを視覚的に表示しています。
          </p>
          <div className="mt-5">
            <StatusTimeline currentStatus={request.status} />
          </div>
        </div>
      </aside>
    </div>
  );
}

type InfoItemProps = {
  label: string;
  value: string;
};

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <dt className="text-sm font-semibold text-slate-900">{label}</dt>
      <dd className="mt-2 text-sm leading-7 text-slate-600">{value}</dd>
    </div>
  );
}
