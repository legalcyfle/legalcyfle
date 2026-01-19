import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-maroon mb-6 mt-8 font-serif text-4xl font-bold first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-maroon mb-4 mt-6 font-serif text-3xl font-bold">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-maroon mb-3 mt-4 font-serif text-2xl font-bold">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-maroon mb-2 mt-3 font-serif text-xl font-bold">
      {children}
    </h4>
  ),
  p: ({ children }) => {
    // Check if the paragraph contains the AD_BLOCK placeholder
    const childText = String(children);
    if (childText.includes("[[AD_BLOCK]]")) {
      return (
        <div
          className="my-2 flex justify-center overflow-hidden"
          dangerouslySetInnerHTML={{
            __html: `
              <ins class="adsbygoogle"
                style="display:block; text-align:center; min-width: 250px;"
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-5892936530350741"
                data-ad-slot="5536160107">
              </ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
            `,
          }}
        />
      );
    }
    return (
      <p className="mb-3 text-stone-700 dark:text-stone-300">{children}</p>
    );
  },
  ul: ({ children }) => (
    <ul className="mb-4 list-inside list-disc space-y-2 text-stone-700 dark:text-stone-300">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-inside list-decimal space-y-2 text-stone-700 dark:text-stone-300">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="ml-2">{children}</li>,
  blockquote: () => (
    <div
      className="my-2 flex justify-center overflow-hidden"
      dangerouslySetInnerHTML={{
        __html: `
          <ins class="adsbygoogle"
            style="display:block; text-align:center; min-width: 250px;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-5892936530350741"
            data-ad-slot="5536160107">
          </ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        `,
      }}
    />
  ),
  code: ({ children, ...rest }) => {
    const inline = "inline" in rest && rest.inline;
    return inline ? (
      <code className="rounded bg-stone-100 px-2 py-1 font-mono text-sm text-stone-800">
        {children}
      </code>
    ) : (
      <code className="my-4 block overflow-auto rounded-lg bg-stone-900 p-4 font-mono text-sm text-stone-100 dark:text-stone-300">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="my-4 overflow-auto rounded-lg bg-stone-900 p-4 text-stone-100">
      {children}
    </pre>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-saffron hover:text-saffron-dark font-medium underline transition-colors"
    >
      {children}
    </a>
  ),
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="my-4 h-auto max-w-full rounded-lg shadow-lg"
    />
  ),
  table: ({ children }) => (
    <div className="my-4 overflow-x-auto">
      <table className="w-full border-collapse border border-stone-300">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-stone-300 bg-stone-100 px-4 py-2 text-left font-semibold">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-stone-300 px-4 py-2 dark:border-stone-700">
      {children}
    </td>
  ),
  hr: () => <hr className="my-2 border-stone-300 dark:border-stone-700" />,
};

export function ReactMarkdownRenderer({
  content,
  className = "",
}: MarkdownRendererProps) {
  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
