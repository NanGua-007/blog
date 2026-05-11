import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="relative z-10 flex flex-col flex-1 items-center">
      <main className="flex-1 w-full max-w-2xl px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 mb-2">
            Blog
          </h1>
          <p className="text-zinc-500">记录想法、技术与生活。</p>
        </div>

        {posts.length === 0 ? (
          <p className="text-zinc-500">还没有文章，开始写第一篇吧。</p>
        ) : (
          <ul className="space-y-10">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/posts/${post.slug}`} className="block group">
                  <time className="text-sm text-zinc-500">
                    {post.date}
                  </time>
                  <h2 className="text-xl font-semibold text-zinc-100 transition-colors duration-200 group-hover:text-[var(--eva-orange)]">
                    {post.title}
                  </h2>
                  <p className="mt-1 text-zinc-400 leading-relaxed">
                    {post.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>

      <footer className="w-full max-w-2xl px-6 py-8 text-center text-sm text-zinc-600">
        <p>
          Powered by{" "}
          <a
            href="https://nextjs.org"
            className="underline underline-offset-4 transition-colors duration-200 hover:text-[var(--eva-orange)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
          {" + "}
          <a
            href="https://giscus.app"
            className="underline underline-offset-4 transition-colors duration-200 hover:text-[var(--eva-orange)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Giscus
          </a>
        </p>
      </footer>
    </div>
  );
}
