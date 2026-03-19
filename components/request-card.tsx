import Link from "next/link";
import { QueueRequest } from "@/lib/types";
import { StatusBadge } from "@/components/status-badge";

type RequestCardProps = {
  request: QueueRequest;
};

export function RequestCard({ request }: RequestCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-lg font-semibold leading-8 text-slate-900">
          {request.title}
        </h2>
        <StatusBadge status={request.status} />
      </div>

      <dl className="mt-5 grid gap-3 text-sm text-slate-600">
        <div className="flex flex-col gap-1">
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Location
          </dt>
          <dd>{request.location}</dd>
        </div>
        <div className="flex flex-col gap-1">
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Datetime
          </dt>
          <dd>{request.datetime}</dd>
        </div>
        <div className="flex flex-col gap-1">
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Reward
          </dt>
          <dd className="text-base font-semibold text-slate-900">{request.reward}</dd>
        </div>
      </dl>

      <p className="mt-5 line-clamp-3 text-sm leading-7 text-slate-600">
        {request.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {request.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
          >
            #{tag}
          </span>
        ))}
      </div>

      <Link
        href={`/requests/${request.id}`}
        className="mt-6 inline-flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
      >
        詳細を見る
      </Link>
    </article>
  );
}
