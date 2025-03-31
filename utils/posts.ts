import { extract } from "$std/encoding/front_matter.ts";
import { join } from "$std/path/posix.ts";

const DIRECTORY = "./posts";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  snippet: string;
  content: string;
  disableHtmlSanitization: boolean;
  allowMath: boolean;
}

// Get posts.
export async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir(DIRECTORY);
  const promises = [];
  for await (const file of files) {
    if (file.name.startsWith(".")) continue;
    const slug = file.name.replace(".md", "");
    promises.push(getPost(slug));
  }
  const posts = await Promise.all(promises) as Post[];
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}

// Get post.
export async function getPost(slug: string): Promise<Post | null> {
  const filePath = join(DIRECTORY, `${slug}.md`);
  const text = await Deno.readTextFile(filePath);
  const { attrs, body } = extract(text) as {
    attrs: {
      title: string;
      published_at: string;
      snippet: string;
      disable_html_sanitization: boolean;
      allow_math: boolean;
    };
    body: string;
  };

  return {
    slug,
    title: attrs.title,
    publishedAt: new Date(attrs.published_at),
    content: body,
    snippet: attrs.snippet,
    disableHtmlSanitization: attrs.disable_html_sanitization,
    allowMath: attrs.allow_math,
  };
}
