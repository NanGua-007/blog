import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import GiscusComments from "@/components/GiscusComments";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="relative z-10 flex flex-col flex-1 items-center">
      <article className="flex-1 w-full max-w-2xl px-6 py-16">
        <Link
          href="/"
          className="inline-block mb-8 text-sm text-zinc-500 transition-colors duration-200 hover:text-[var(--eva-orange)]"
        >
          ← 返回首页
        </Link>

        <header className="mb-10">
          <time className="text-sm text-zinc-500">
            {post.date}
          </time>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-invert max-w-none prose-a:text-[var(--eva-orange)] prose-a:no-underline hover:prose-a:underline">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <GiscusComments />
        </div>
      </article>
    </div>
  );
}
