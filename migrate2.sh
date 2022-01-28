 echo "---
slug: /`grep 'original-url :' "$@"  | cut -d '/' -f 4,6`
id: `grep  'article-id : ' "$@" | cut -d ':' -f 2 | tr ' ' 'Z' `
---"| cat - "$@" > /tmp/out && cp /tmp/out "$@.mdx"
