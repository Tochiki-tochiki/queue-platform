import { QueueRequest } from "@/lib/types";
import { getStatusClasses } from "@/lib/utils";

type StatusBadgeProps = {
  status: QueueRequest["status"];
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${getStatusClasses(
        status,
      )}`}
    >
      {status}
    </span>
  );
}
