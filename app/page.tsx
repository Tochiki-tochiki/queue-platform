import Link from "next/link";
import { RequestCard } from "@/components/request-card";
import { SectionHeading } from "@/components/section-heading";
import { requests } from "@/lib/data";

export default function Home() {
  const featuredRequests = requests.slice(0, 3);

  return (
    <div className="space-y-16 pb-8">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.06),_transparent_35%),linear-gradient(135deg,_#f8fafc,_#eef2ff_55%,_#f8fafc)] px-6 py-12 shadow-sm sm:px-10 lg:px-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-slate-300 bg-white/80 px-4 py-1 text-sm font-medium text-slate-600">
              行列対応を、見える依頼に。
            </span>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                行列並び代行を、安心して依頼できるデモプラットフォーム
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                queue-platform は、限定商品の購入待機やイベント入場列などの依頼を、
                わかりやすいステータスと報酬条件つきで一覧・応募・管理できるプロトタイプです。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/requests"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                依頼一覧を見る
              </Link>
              <Link
                href="/requests/new"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                依頼を作成する
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">対応できるシーン</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li>限定グッズ販売の待機列</li>
                <li>ポップアップストアの入場整理券</li>
                <li>人気イベント当日の先着受付</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-slate-50 shadow-sm">
              <p className="text-sm font-medium text-slate-300">デモの価値</p>
              <p className="mt-4 text-3xl font-semibold">5画面</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                一覧、詳細、作成、マイページまでをつないだ、提案やデモに使いやすい構成です。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "信頼感のある依頼表示",
            body: "場所、日時、報酬、進行状況をカードで整理し、必要な情報を短時間で把握できます。",
          },
          {
            title: "シンプルな応募導線",
            body: "詳細ページからすぐ応募できるため、デモでも利用体験が直感的に伝わります。",
          },
          {
            title: "依頼者・応募者の両視点",
            body: "マイページで案件の状態をまとめて確認でき、運用イメージを説明しやすくしています。",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Featured Requests"
          title="サンプル依頼"
          description="ダミーデータで構成した依頼をカード形式で表示しています。"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredRequests.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))}
        </div>
      </section>
    </div>
  );
}
