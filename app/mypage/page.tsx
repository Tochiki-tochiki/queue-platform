import Link from "next/link";
import { StatusBadge } from "@/components/status-badge";
import { requests } from "@/lib/data";

export default function MyPage() {
  const activeRequests = requests.filter((request) => request.status !== "完了");
  const completedRequests = requests.filter((request) => request.status === "完了");

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              My Page
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              マイページ
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              自分が管理している依頼や現在の進行状況をまとめて確認できます。
            </p>
          </div>
          <Link
            href="/requests/new"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            新しい依頼を作成
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <SummaryCard label="公開中" value={`${activeRequests.length}件`} />
          <SummaryCard label="完了" value={`${completedRequests.length}件`} />
          <SummaryCard label="応募待ち" value="2件" />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-950">進行中の依頼</h2>
          <div className="mt-5 space-y-4">
            {activeRequests.map((request) => (
              <div
                key={request.id}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {request.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{request.location}</p>
                  </div>
                  <StatusBadge status={request.status} />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  日時: {request.datetime}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-950">活動メモ</h2>
          <div className="mt-5 space-y-4">
            {[
              "応募状況とマッチ済み案件を一つの画面で確認できるようにしています。",
              "詳細ページでは応募ボタンから次アクションを提示できます。",
              "このページはダッシュボード用途のデモとして使える構成です。",
            ].map((note) => (
              <div
                key={note}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600"
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

type SummaryCardProps = {
  label: string;
  value: string;
};

function SummaryCard({ label, value }: SummaryCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-slate-950">{value}</p>
    </div>
  );
}
