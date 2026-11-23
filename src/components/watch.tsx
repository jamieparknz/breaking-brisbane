"use client";

import { useState } from "react";
import { Dialog } from "radix-ui";
import { X, Play } from "lucide-react";
import { videos, asset, site, type Video } from "@/content/site";

function embedSrc(v: Video) {
  if (v.kind === "youtube") return `https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0&playsinline=1`;
  if (v.kind === "instagram") return `${v.url.replace(/\/?$/, "/")}embed/`;
  return "";
}

function Tile({ v, i, onOpen }: { v: Video; i: number; onOpen: () => void }) {
  const poster = v.kind === "youtube" ? v.poster ?? `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg` : v.poster;
  const tall = i % 3 === 0;
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative block w-full overflow-hidden bg-neutral-900 text-left focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white ${tall ? "aspect-[4/5] md:row-span-2 md:aspect-auto md:h-full" : "aspect-[4/5] md:aspect-[4/3]"}`}
    >
      {v.kind === "file" ? (
        <video src={asset(v.src)} poster={asset(v.poster)} muted playsInline preload="none" className="absolute inset-0 h-full w-full object-cover" aria-hidden />
      ) : poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={asset(poster)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      ) : null}
      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 to-transparent p-4 pt-16 text-white">
        <span className="font-medium">{v.title}</span>
        <span className="grid size-11 shrink-0 place-items-center bg-signal transition-transform group-hover:scale-110"><Play className="size-4 fill-current" aria-hidden /></span>
      </span>
      <span className="sr-only">Play video</span>
    </button>
  );
}

/** "Watch Jamie" reel. Renders nothing until site.ts has at least one video. */
export function Watch() {
  const [open, setOpen] = useState<number | null>(null);
  if (videos.length === 0) return null;
  const list = videos.slice(0, 6);
  const v = open === null ? null : list[open];
  return (
    <section id="watch" aria-labelledby="watch-title" className="dark bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 id="watch-title" className="text-h2 mb-10">Watch {site.instructor}</h2>
        <div className="grid gap-3 md:auto-rows-[minmax(0,1fr)] md:grid-cols-3">
          {list.map((item, i) => <Tile key={i} v={item} i={i} onOpen={() => setOpen(i)} />)}
        </div>
      </div>
      <Dialog.Root open={v !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[70] bg-black/90 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed inset-0 z-[71] grid place-items-center p-4 outline-none" aria-describedby={undefined}>
            <Dialog.Title className="sr-only">{v?.title}</Dialog.Title>
            {v && (
              <div className={v.kind === "instagram" ? "aspect-[9/16] h-[85svh] max-w-full bg-black" : "aspect-video w-full max-w-5xl bg-black"}>
                {v.kind === "file" ? (
                  <video src={asset(v.src)} poster={asset(v.poster)} controls autoPlay playsInline className="h-full w-full" />
                ) : (
                  <iframe src={embedSrc(v)} title={v.title} className="h-full w-full" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen loading="lazy" />
                )}
              </div>
            )}
            <Dialog.Close className="fixed top-4 right-4 grid size-12 place-items-center bg-white text-ink" aria-label="Close video"><X className="size-5" /></Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
