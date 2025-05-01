import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts, Post } from "@/utils/posts.ts";
import ThemeToggle from "../islands/ThemeToggle.tsx";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto pb-16">
      <div class="flex justify-between items-center">
        <h1 class="text-5xl" style="font-family: 'Clarity City', sans-serif; font-weight: 900;">Blog Template 2.0</h1>
        <ThemeToggle />
      </div>
      <div class="mt-8">
        {posts.map(post => <PostCard post={post} />)}
      </div>
    </main>
  );
}

function PostCard(props: { post: Post }) {
  const { post } = props;
  return (
    <div class="py-8 border-t border-muted">
      <a class="sm:col-span-2" href={`/${post.slug}`}>
        <h3 class="text-3xl font-bold">
          {post.title}
        </h3>
        <time class="text-muted-foreground">
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div class="mt-4">
          {post.snippet}
        </div>
      </a>
    </div>
  );
}
