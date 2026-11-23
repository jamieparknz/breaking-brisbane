# Adding Jamie's videos

The site looks finished with no video. Add clips and two things light up:
the **hero** turns into a full-bleed video, and a **Watch Jamie** reel (up to 6 tiles, opens in a lightbox) appears under it.
Everything is set in `src/content/site.ts`.

## 1. Hero video (one clip)

Pick 6 to 15 seconds that loop cleanly: one strong round, filmed landscape, steady camera, good light.
It plays muted, autoplays, loops, and is hidden for visitors who ask for reduced motion (they see the poster).

```bash
mkdir -p public/video
# H.264, 1080p (use 1280:-2 for 720p), no audio, web-optimised. Aim for under 8 MB; raise -crf to 28-30 if bigger.
ffmpeg -i raw.mov -t 15 -an -vf "scale=1920:-2,fps=30" -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 26 -preset slow -movflags +faststart public/video/hero.mp4
# Poster frame (shown before the video loads and for reduced motion). -ss picks the second.
ffmpeg -ss 2 -i public/video/hero.mp4 -frames:v 1 -q:v 3 public/video/hero.jpg
ls -lh public/video/hero.mp4   # check it is under 8 MB
```

Then in `site.ts`:

```ts
export const heroVideo = { src: "/video/hero.mp4", poster: "/video/hero.jpg" };
```

## 2. Watch Jamie reel (3 to 6 clips)

Mix local files and embeds in one `videos` array. Order = order on the page; the 1st and 4th tiles are tall.

Local file: name them `reel-1.mp4`, `reel-2.mp4` ... with matching `reel-1.jpg` posters. Keep audio if you like:

```bash
ffmpeg -i clip.mov -vf "scale=1280:-2" -c:v libx264 -pix_fmt yuv420p -crf 24 -preset slow -c:a aac -b:a 128k -movflags +faststart public/video/reel-1.mp4
ffmpeg -ss 1 -i public/video/reel-1.mp4 -frames:v 1 -q:v 3 public/video/reel-1.jpg
```

```ts
export const videos: Video[] = [
  { kind: "file", src: "/video/reel-1.mp4", poster: "/video/reel-1.jpg", title: "Toprock in the cypher" },
  { kind: "youtube", id: "VIDEO_ID", title: "Battle round" },            // id from youtube.com/watch?v=VIDEO_ID; thumbnail is automatic
  { kind: "instagram", url: "https://www.instagram.com/reel/CODE/", title: "Footwork drill", poster: "/video/ig-1.jpg" }, // add a poster jpg (screenshot a frame)
];
```

Reel videos use `preload="none"`, so nothing downloads until someone taps a tile.

## 3. Photo of Jamie (optional)

Save a portrait (4:5, about 1200×1500, under 400 KB) as `public/photos/jamie.jpg` and set `export const jamiePhoto = "/photos/jamie.jpg";`. Until then a drawing of a cypher shows.

## 4. Publish

```bash
npm run dev      # check at http://localhost:3000
npm run deploy
```
No stock footage or AI-generated dancers, please: real clips only.
