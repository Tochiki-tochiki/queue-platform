import { QueueRequest } from "@/lib/types";

export function getStatusClasses(status: QueueRequest["status"]) {
  switch (status) {
    case "募集中":
      return "border-emerald-200 bg-emerald-50 text-emerald-700";
    case "マッチ済み":
      return "border-sky-200 bg-sky-50 text-sky-700";
    case "並び中":
      return "border-amber-200 bg-amber-50 text-amber-700";
    case "完了":
      return "border-slate-200 bg-slate-100 text-slate-600";
    default:
      return "border-slate-200 bg-slate-50 text-slate-600";
  }
}
