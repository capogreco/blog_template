import { h } from "preact";
import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/globals.css" />
        <link rel="stylesheet" href="/markdown-dark.css" />
        <script id="theme-script" dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // On page load or when changing themes, best to add inline in \`head\` to avoid FOUC
              const savedTheme = localStorage.getItem("theme");
              const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              
              if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
                document.documentElement.classList.add("dark");
              } else {
                document.documentElement.classList.remove("dark");
              }
            })();
          `,
        }} />
      </Head>
      <Component />
    </>
  );
}