# Career Launch Africa

Free hub for youth: **CV Launch** now; Interview Launch and Career Roadmap Launch later.

- No accounts.
- We never store a CV on our servers.
- Create: `/cv/make-word` builds Word and PDF **on the phone**.
- Improve / Tailor: suggestions only. No rebuilt file to download.
- Pause Create by typing **Save** in the chat, then `/cv/save-progress` to download a progress `.txt`. Continue creating later by pasting that file.

Planned public URL: `careerlaunchafrica.org` (v1 can ship on `*.pages.dev`).

## Local

```bash
npm install
npm test
npm run dev
```

## Deploy (Cloudflare Pages)

Build command: `npm run build`  
Output directory: `dist`

Do not add analytics or forms on the Make Word or Save progress pages.
