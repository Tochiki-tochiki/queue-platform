export type RequestStatus = "募集中" | "マッチ済み" | "並び中" | "完了";

export type QueueRequest = {
  id: string;
  title: string;
  location: string;
  datetime: string;
  reward: string;
  description: string;
  status: RequestStatus;
  clientName: string;
  tags: string[];
};
