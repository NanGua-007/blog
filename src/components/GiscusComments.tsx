"use client";

import { useEffect, useRef } from "react";

const GISCUS_CONFIG = {
  repo: "NanGua-007/blog" as `${string}/${string}`,
  repoId: "R_kgDOSZ-vVQ",
  category: "Announcements",
  categoryId: "DIC_kwDOSZ-vVc4C8woh",
};

export default function GiscusComments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (GISCUS_CONFIG.repoId === "YOUR_REPO_ID") return;

    const container = ref.current;
    if (!container || container.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", GISCUS_CONFIG.repo);
    script.setAttribute("data-repo-id", GISCUS_CONFIG.repoId);
    script.setAttribute("data-category", GISCUS_CONFIG.category);
    script.setAttribute("data-category-id", GISCUS_CONFIG.categoryId);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "dark_dimmed");
    script.setAttribute("data-lang", "zh-CN");
    script.setAttribute("data-loading", "lazy");
    script.async = true;
    script.crossOrigin = "anonymous";
    container.appendChild(script);
  }, []);

  if (GISCUS_CONFIG.repoId === "YOUR_REPO_ID") {
    return (
      <div className="p-6 rounded-lg border border-dashed border-zinc-700 text-center text-sm text-zinc-500">
        <p className="mb-2 font-medium text-zinc-400">评论功能尚未配置</p>
        <p>
          请按照{" "}
          <a
            href="https://giscus.app/zh-CN"
            className="underline underline-offset-4 transition-colors duration-200 hover:text-[var(--eva-orange)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Giscus 配置指南
          </a>{" "}
          设置后，修改{" "}
          <code className="bg-zinc-800 px-1 rounded text-xs text-zinc-300">
            src/components/GiscusComments.tsx
          </code>{" "}
          中的配置即可启用评论。
        </p>
      </div>
    );
  }

  return <div ref={ref} className="mt-12" />;
}
