"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 flex flex-col items-center justify-start py-16 px-4">
      <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-8">
        Text Display
      </h1>
      <div className="w-full max-w-2xl flex flex-col gap-6">
        <textarea
          className="w-full h-40 rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 p-4 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="ここにテキストを入力..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="w-full min-h-32 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-6">
          {text ? (
            <p className="text-zinc-800 dark:text-zinc-100 text-lg whitespace-pre-wrap leading-relaxed">
              {text}
            </p>
          ) : (
            <p className="text-zinc-400 text-base">入力したテキストがここに表示されます</p>
          )}
        </div>
      </div>
    </div>
  );
}
