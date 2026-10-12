#!/usr/bin/env python3
"""Assemble the companion into self-contained HTML files.

index.html            standalone page (JSZip inlined, works offline and from file://)
dist/companion.html   artifact-ready fragment (no <html>/<head>/<body>; JSZip from cdnjs)
"""
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "src"
JS_ORDER = ["js/core.js", "js/markup.js", "js/diagrams.js", "js/epub.js", "js/reader.js",
            "content/glossary.js", "content/glossary2.js", "content/intro.js", "content/situated.js", "content/situated-1.js", "content/situated-2.js", "content/situated-3.js", "content/grit.js", "content/grit-1.js", "content/grit-2.js", "content/grit-deep.js",
            "js/app.js"]
FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">'
         '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
         '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Barlow+Condensed:wght@500;600&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,600;1,7..72,400&display=swap">')
TITLE = "Situated × Grit Companion"
JSZIP_CDN = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>'


def read(p):
    return (SRC / p).read_text(encoding="utf-8")


def safe(js):
    return js.replace("</script", "<\\/script")


def main():
    css = read("styles.css")
    app = "\n".join(f"/* ---- {p} ---- */\n" + safe(read(p)) for p in JS_ORDER)
    boot = 'if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){SG.boot();});}else{SG.boot();}'
    head = f'<title>{TITLE}</title>\n<meta name="description" content="A study companion for Angela Duckworth\'s Situated and Grit: chapter guides, glossary, diagrams, discussion questions, and a reader with highlights and notes for your own EPUB copies.">\n{FONTS}\n<style>\n{css}\n</style>\n'
    jszip = safe(read("vendor/jszip.min.js"))
    standalone = ("<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n"
                  "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\">\n"
                  + head + "</head>\n<body>\n<noscript>This companion needs JavaScript.</noscript>\n"
                  f"<script>\n{jszip}\n</script>\n<script>\n{app}\n{boot}\n</script>\n</body>\n</html>\n")
    (ROOT / "index.html").write_text(standalone, encoding="utf-8")
    frag = head + JSZIP_CDN + f"\n<script>window.SG_EMBED = true;</script>\n<script>\n{app}\n{boot}\n</script>\n"
    (ROOT / "dist").mkdir(exist_ok=True)
    (ROOT / "dist" / "companion.html").write_text(frag, encoding="utf-8")
    print("index.html", len(standalone) // 1024, "KB; dist/companion.html", len(frag) // 1024, "KB")


if __name__ == "__main__":
    main()
