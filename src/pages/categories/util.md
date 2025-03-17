---
layout: '../../layouts/Expo.astro'
description: 'Multiple widgets for user interfaces related to finance and economics'
slug: 'util'
category: 'util'
tags: ['util']
title: 'Widget components with tailwind CSS - Social'
visible: true
---

<article class="overflow-hidden border break-inside rounded-xl mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-between divide-x divide-border">
    <div class="flex items-center gap-2 flex-1 p-4">
      <h2 class="text-base font-medium">Social Media</h2>
    </div>
    <div class="h-full flex-none inline-flex items-center justify-center p-4">
      <button class="inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
        <span class="material-symbols-rounded">more_horiz</span>
      </button>
    </div>
  </header>
  <section class="pb-4 relative divide-y divide-border">
    <div
      class="z-0 opacity-80 pointer-events-none h-4 absolute bottom-0 left-0 w-full hidden border-t border-border border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10">
    </div>
    <div class="relative flex items-center justify-start gap-2 p-4 border-t border-border">
      <div
        class="z-0 opacity-80 pointer-events-none h-full absolute top-0 left-0 w-full hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10">
      </div>
      <span class="material-symbols-rounded material-symbols-fill text-amber-500 text-sm">star</span>
      <h2 class="text-4xl font-semibold">8.5</h2>
    </div>
    <div class="grid gap-2 p-4">
      <div class="flex items-center justify-start gap-1">
        <div class="grid w-full max-w-1/2 gap-0.5">
          <span class="text-xs font-medium">50%</span>
          <div class="h-3 w-full rounded-full bg-blue-600"></div>
        </div>
        <div class="grid w-full max-w-1/3 gap-0.5">
          <span class="text-xs font-medium">30%</span>
          <div class="h-3 w-full rounded-full bg-green-600"></div>
        </div>
        <div class="grid w-full max-w-1/4 gap-0.5">
          <span class="text-xs font-medium">20%</span>
          <div class="h-3 w-full rounded-full bg-lime-500"></div>
        </div>
      </div>
      <div class="flex items-center mt-2 gap-3">
        <div class="inline-flex items-center justify-start gap-2">
          <span class="w-2 h-2 rounded-full bg-blue-600"></span>
          <span class="font-medium">Exelent</span>
        </div>
        <div class="inline-flex items-center justify-start gap-2">
          <span class="w-2 h-2 rounded-full bg-green-600"></span>
          <span class="font-medium">Good</span>
        </div>
        <div class="inline-flex items-center justify-start gap-2">
          <span class="w-2 h-2 rounded-full bg-lime-500"></span>
          <span class="font-medium">Average</span>
        </div>
      </div>
      <p class="mt-1 text-foreground/70">Design a new logo for our website, we are a startup company.</p>
    </div>
  </section>
</article>

<!--  Social  -->

<section class="break-inside mb-3 gap-3 columns-2 items-start">..</section>

<article
  class="overflow-hidden relative border break-inside rounded-xl p-4 mb-3 gap-2 text-xs border-border bg-background text-foreground after:absolute after:top-0 after:left-0 after:w-full after:h-4 after:hidden after:border-x after:border-b after:border-border after:border-x-(--pattern-fg) after:bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] after:bg-[size:10px_10px] after:bg-fixed after:[--pattern-fg:var(--color-danger)]/15 md:after:block dark:after:[--pattern-fg:var(--color-white)]/10 before:absolute before:bottom-0 before:left-0 before:w-full before:h-4 before:hidden before:border-x before:border-t before:border-border before:border-x-(--pattern-fg) before:bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] before:bg-[size:10px_10px] before:bg-fixed before:[--pattern-fg:var(--color-danger)]/15 md:before:block dark:before:[--pattern-fg:var(--color-white)]/10"
  data-filter="social">
  <div
    class="absolute left-0 top-0 h-full w-4 border-r border-border hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-danger)]/15 lg:col-start-3 lg:block dark:[--pattern-fg:var(--color-white)]/10">
  </div>
  <div
    class="absolute right-0 top-0 h-full w-4 border-l border-border hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-danger)]/15 lg:col-start-3 lg:block dark:[--pattern-fg:var(--color-white)]/10">
  </div>
  ...
</article>

<section class="relative w-full flex items-center justify-between gap-3 mb-3">
  <article class="w-full max-w-1/2 border break-inside rounded-xl p-3 text-xs border-border bg-background text-foreground">
    <div class="flex items-center justify-start w-full gap-3">
      <img class="flex-none w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/60.jpg" alt="avatar" loading="lazy" />
      <h2 class="text-sm font-medium">Marcos</h2>
    </div>
  </article>
  <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full inline-flex items-center justify-center border border-border bg-background">
    <span class="material-symbols-rounded material-symbols-lg text-foreground">multiple_stop</span>
  </div>
  <article class="w-full max-w-1/2 border break-inside rounded-xl p-3 text-xs border-border bg-background text-foreground">
    <div class="flex items-center justify-end w-full gap-3">
      <h2 class="text-sm font-medium">Patrick</h2>
      <img class="flex-none w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/57.jpg" alt="avatar" loading="lazy" />
    </div>
  </article>
</section>
