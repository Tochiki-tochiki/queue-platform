"use client";

import { type FormEvent, type ReactNode, useState } from "react";
import { StatusBadge } from "@/components/status-badge";
import { QueueRequest, RequestStatus } from "@/lib/types";

const initialFormState = {
  title: "",
  location: "",
  datetime: "",
  reward: "",
  description: "",
  status: "募集中" as RequestStatus,
};

export function RequestForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [submittedRequest, setSubmittedRequest] = useState<QueueRequest | null>(
    null,
  );

  function updateField<K extends keyof typeof initialFormState>(
    key: K,
    value: (typeof initialFormState)[K],
  ) {
    setFormData((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmittedRequest({
      id: "demo-created-request",
      ...formData,
      clientName: "You",
      tags: ["新規依頼", "デモ"],
    });

    setFormData(initialFormState);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="grid gap-5">
          <FormField label="依頼タイトル">
            <input
              required
              value={formData.title}
              onChange={(event) => updateField("title", event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              placeholder="例: 限定ストアの整理券取得"
            />
          </FormField>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="場所">
              <input
                required
                value={formData.location}
                onChange={(event) => updateField("location", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                placeholder="例: 新宿駅南口"
              />
            </FormField>
            <FormField label="日時">
              <input
                required
                value={formData.datetime}
                onChange={(event) => updateField("datetime", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                placeholder="例: 2026-04-05 07:00"
              />
            </FormField>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="報酬">
              <input
                required
                value={formData.reward}
                onChange={(event) => updateField("reward", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                placeholder="例: 5000円"
              />
            </FormField>
            <FormField label="ステータス">
              <select
                value={formData.status}
                onChange={(event) =>
                  updateField("status", event.target.value as RequestStatus)
                }
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              >
                {["募集中", "マッチ済み", "並び中", "完了"].map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </FormField>
          </div>

          <FormField label="依頼内容">
            <textarea
              required
              rows={6}
              value={formData.description}
              onChange={(event) => updateField("description", event.target.value)}
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 outline-none transition focus:border-slate-400 focus:bg-white"
              placeholder="待機時間や引き継ぎ条件などを記載"
            />
          </FormField>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            ダミー依頼を作成
          </button>
        </div>
      </form>

      <div className="space-y-4">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Preview
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-950">
            {formData.title || "入力内容のプレビュー"}
          </h2>
          <div className="mt-4">
            <StatusBadge status={formData.status} />
          </div>
          <div className="mt-6 grid gap-4 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">場所</p>
              <p className="mt-1">{formData.location || "未入力"}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">日時</p>
              <p className="mt-1">{formData.datetime || "未入力"}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">報酬</p>
              <p className="mt-1">{formData.reward || "未入力"}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">内容</p>
              <p className="mt-1 leading-7">
                {formData.description || "ここに依頼内容が表示されます。"}
              </p>
            </div>
          </div>
        </div>

        {submittedRequest ? (
          <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6 text-sm text-emerald-800 shadow-sm">
            <p className="font-semibold">依頼を作成しました</p>
            <p className="mt-2 leading-7">
              「{submittedRequest.title}」をダミーデータとして受け付けました。実際の保存処理はなく、
              この画面内で確認できるデモ動作です。
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

type FormFieldProps = {
  label: string;
  children: ReactNode;
};

function FormField({ label, children }: FormFieldProps) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-700">
      <span>{label}</span>
      {children}
    </label>
  );
}
