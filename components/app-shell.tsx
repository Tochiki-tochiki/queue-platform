import Link from "next/link";
import { ReactNode } from "react";
import { NavLink } from "@/components/nav-link";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
              QP
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-950">queue-platform</p>
              <p className="text-xs text-slate-500">行列並び代行のデモ</p>
            </div>
          </Link>
          <nav className="flex flex-wrap items-center justify-end gap-2 text-sm font-medium text-slate-600">
            <NavLink href="/">トップ</NavLink>
            <NavLink href="/requests">依頼一覧</NavLink>
            <NavLink href="/requests/new">依頼作成</NavLink>
            <NavLink href="/mypage">マイページ</NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-500 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <p>デモ用プロトタイプ。ダミーデータで動作します。</p>
          <p>Next.js + TypeScript + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
