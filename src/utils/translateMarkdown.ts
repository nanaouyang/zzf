import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/rainbow.css';

export const translateMarkdown = (text = '') => {
  const renderer = new marked.Renderer();
  renderer.code = function(code, language) {
    return `<pre><code class="language-${language}" lang=${language}>${
      hljs.highlightAuto(code).value
    }</code><a style="position: absolute;right: 10px;top: 10px;color:#8c8c8ccc;border:none">复制代码</a></pre>`;
  };
  return marked(text, {
    renderer: renderer,
    gfm: true,
    pedantic: false,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: true,
    xhtml: true,
    // highlight: function(code: string) {
    //   return hljs.highlightAuto(code).value;
    // },
  });
};
