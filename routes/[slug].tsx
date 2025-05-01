import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { getPost, Post } from "@/utils/posts.ts";
import { CSS, KATEX_CSS, render } from "$gfm";
import ThemeToggle from "@/islands/ThemeToggle.tsx";
import HomeButton from "@/components/HomeButton.tsx";
import CodeBlockToggle from "@/islands/CodeBlockToggle.tsx";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    try {
      const post = await getPost(ctx.params.slug);
      return ctx.render(post as Post);
    } catch {
      return ctx.renderNotFound();
    }
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <style dangerouslySetInnerHTML={{ __html: KATEX_CSS }} />
      </Head>
      
      <main class="max-w-screen-md px-4 pt-16 mx-auto pb-16 bg-transparent">
        <div class="flex justify-between items-center">
          <h1 class="text-5xl font-sans font-bold">{post.title}</h1>      
          <ThemeToggle />
        </div>
        <time class="text-muted-foreground">
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div
          class="mt-8 markdown-body"
          dangerouslySetInnerHTML={{ __html: render(post.content, {
            disableHtmlSanitization: post.disableHtmlSanitization,
            allowMath: post.allowMath,
          }) }}
        />
        <CodeBlockToggle />
        <div class="flex justify-end items-center mt-8">
          <HomeButton />
        </div>
      </main>
    </>
  );
}
