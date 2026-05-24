import { Html, Head, Main, NextScript } from "next/document";

const themeScript = `
(function() {
  try {
    var mode = localStorage.getItem('mode') || 'auto';
    document.documentElement.classList.add(mode);
  } catch(e) {}
})();
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
