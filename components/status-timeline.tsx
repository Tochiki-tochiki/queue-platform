import { statusOrder } from "@/lib/data";
import { QueueRequest } from "@/lib/types";
import { getStatusClasses } from "@/lib/utils";

type StatusTimelineProps = {
  currentStatus: QueueRequest["status"];
};

export function StatusTimeline({ currentStatus }: StatusTimelineProps) {
  const activeIndex = statusOrder.indexOf(currentStatus);

  return (
    <div className="grid gap-3 sm:grid-cols-4">
      {statusOrder.map((status, index) => {
        const isPassed = index <= activeIndex;
        return (
          <div
            key={status}
            className={`rounded-2xl border p-4 ${
              isPassed
                ? getStatusClasses(status)
                : "border-slate-200 bg-white text-slate-400"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em]">
              Step {index + 1}
            </p>
            <p className="mt-2 text-sm font-semibold">{status}</p>
          </div>
        );
      })}
    </div>
  );
}
