import { QueueRequest } from "@/lib/types";

export const requests: QueueRequest[] = [
  {
    id: "tokyo-pop-up-1",
    title: "渋谷ポップアップストアの入場待機",
    location: "東京都渋谷区・渋谷PARCO前",
    datetime: "2026-03-24 08:00",
    reward: "4,500円",
    description:
      "限定アパレル販売の整理券取得を目的とした待機依頼です。開店1時間前から並び、整理券取得後に引き継ぎをお願いします。",
    status: "募集中",
    clientName: "Aki",
    tags: ["限定販売", "整理券", "午前中"],
  },
  {
    id: "yokohama-event-2",
    title: "ライブ会場グッズ列の先頭付近確保",
    location: "神奈川県横浜市・Kアリーナ横浜",
    datetime: "2026-03-27 06:30",
    reward: "7,000円",
    description:
      "ライブ物販の待機列に早朝から並んでいただく依頼です。会場スタッフの指示に従い、安全に対応できる方を想定しています。",
    status: "マッチ済み",
    clientName: "Mika",
    tags: ["ライブ", "早朝", "グッズ購入"],
  },
  {
    id: "ikebukuro-cafe-3",
    title: "コラボカフェ当日受付の順番待ち",
    location: "東京都豊島区・池袋駅東口",
    datetime: "2026-03-29 09:15",
    reward: "3,500円",
    description:
      "人気コラボカフェの当日受付枠を確保したい方向けの依頼です。待機中はチャットで状況共有をお願いします。",
    status: "並び中",
    clientName: "Sora",
    tags: ["カフェ", "受付", "連絡重視"],
  },
  {
    id: "akihabara-figure-4",
    title: "秋葉原限定フィギュア販売の待機代行",
    location: "東京都千代田区・秋葉原UDX付近",
    datetime: "2026-03-31 07:00",
    reward: "6,000円",
    description:
      "数量限定フィギュア販売に向けた待機依頼です。整列場所の変更がありうるため、柔軟に対応できる方を探しています。",
    status: "完了",
    clientName: "Ren",
    tags: ["フィギュア", "限定品", "柔軟対応"],
  },
];

export const statusOrder: QueueRequest["status"][] = [
  "募集中",
  "マッチ済み",
  "並び中",
  "完了",
];
