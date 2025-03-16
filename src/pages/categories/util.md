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

<!--  Deporte  -->

<section class="break-inside mb-3 gap-3 columns-2 items-start">
  <article class="overflow-hidden border break-inside rounded-xl mb-3 text-xs border-border bg-background text-foreground inset-shadow-sm" data-filter="social">
    <header class="w-full relative p-4">
      <div
        class="h-16 z-0 pointer-events-none absolute top-0 left-0 w-full overflow-hidden rounded-lg bg-gray-950/[2.5%] after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10 before:pointer-events-none before:z-[1] before:absolute before:bottom-0 before:left-0 before:w-full before:h-12 before:bg-gradient-to-t before:from-background before:to-transparent">
      </div>
      <div class="relative grid gap-1">
        <span class="material-symbols-rounded material-symbols-lg">snowboarding</span>
        <h2>Snowboarding</h2>
      </div>
    </header>
    <section class="grid gap-3 px-4 pb-4">
      <p class="font-semibold leading-6 text-lg">The best snowboarding in the world</p>
      <div class="w-full flex items-center justify-between gap-2">
        <div class="inline-flex items-center justify-start gap-2">
          <img src="https://cdn.worldvectorlogo.com/logos/facebook-reaction-love.svg" alt="like" class="w-4 h-4" />
          <span class="font-semibold">24</span>
        </div>
        <span class="text-foreground/70">2 min ago</span>
      </div>
    </section>
  </article>
  <article class="overflow-hidden border break-inside rounded-xl mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    <div class="grid divide-y divide-border">
      <div class="flex items-center justify-between divide-x divide-border transition-colors duration-200 hover:bg-foreground/5 hover:inset-shadow-sm">
        <div class="flex flex-col items-start flex-1 p-3">
          <p class="text-sm font-medium">Adrian</p>
          <p class="text-foreground/50">32 min ago</p>
        </div>
        <div class="inline-flex items-center justify-center h-full flex-none p-3">
          <span class="material-symbols-rounded material-symbols-md">emoji_events</span>
        </div>
      </div>
      <div class="flex items-center justify-between divide-x divide-border transition-colors duration-200 hover:bg-foreground/5 hover:inset-shadow-sm">
        <div class="flex flex-col items-start flex-1 p-3">
          <p class="text-sm font-medium">Marloon</p>
          <p class="text-foreground/50">45 min ago</p>
        </div>
        <div class="inline-flex items-center justify-center h-full flex-none p-3">
          <span class="material-symbols-rounded material-symbols-md">emoji_events</span>
        </div>
      </div>
      <div class="flex items-center justify-between divide-x divide-border transition-colors duration-200 hover:bg-foreground/5 hover:inset-shadow-sm">
        <div class="flex flex-col items-start flex-1 p-3">
          <p class="text-sm font-medium">Lucas</p>
          <p class="text-foreground/50">1 hour ago</p>
        </div>
        <div class="inline-flex items-center justify-center h-full flex-none p-3">
          <span class="material-symbols-rounded material-symbols-md">emoji_events</span>
        </div>
      </div>
    </div>
  </article>
</section>

<!--  Social  -->

<section class="break-inside mb-3 gap-3 columns-2 items-start">
  <article class="overflow-hidden border break-inside rounded-xl mb-3 text-xs border-border bg-background text-foreground inset-shadow-sm" data-filter="social">
    <header class="w-full relative pt-4 px-4 pb-2">
      <div
        class="h-16 z-0 pointer-events-none absolute top-0 left-0 w-full overflow-hidden rounded-lg bg-gray-950/[2.5%] after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10 before:pointer-events-none before:z-[1] before:absolute before:bottom-0 before:left-0 before:w-full before:h-12 before:bg-gradient-to-t before:from-background before:to-transparent">
      </div>
      <div class="relative grid gap-1">
        <span class="material-symbols-rounded material-symbols-lg">face_5</span>
        <h2>Face events</h2>
      </div>
    </header>
    <section class="grid gap-3 px-4 pb-4">
      <p class="font-semibold leading-6 text-lg">Web Design templates</p>
      <div class="w-full flex items-center justify-between gap-2">
        <div class="inline-flex items-center justify-start gap-2">
          <img src="https://cdn.worldvectorlogo.com/logos/facebook-reaction-love.svg" alt="like" class="w-4 h-4" />
          <span class="font-semibold">24</span>
        </div>
        <span class="text-foreground/70">2 min ago</span>
      </div>
    </section>
  </article>
  <article class="flex flex-col overflow-hidden border break-inside rounded-xl mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    <header class="flex flex-col items-start p-4">
      <h2 class="text-base font-medium">Widgets</h2>
      <p class="text-foreground/70">23 new messages</p>
    </header>
    <div class="grid border-t border-border divide-y divide-border">
      <div class="flex items-center justify-between divide-x divide-border transition-colors duration-200 hover:bg-foreground/5 hover:inset-shadow-sm">
        <div class="flex flex-col items-start flex-1 p-3">
          <p class="text-sm font-medium">Adrian</p>
          <p class="text-foreground/50">32 min ago</p>
        </div>
        <div class="inline-flex items-center justify-center h-full flex-none p-3">
          <button>
            <span class="material-symbols-rounded material-symbols-md">phone_enabled</span>
          </button>
        </div>
      </div>
      <div class="flex items-center justify-between divide-x divide-border transition-colors duration-200 hover:bg-foreground/5 hover:inset-shadow-sm">
        <div class="flex flex-col items-start flex-1 p-3">
          <p class="text-sm font-medium">Marloon</p>
          <p class="text-foreground/50">45 min ago</p>
        </div>
        <div class="inline-flex items-center justify-center h-full flex-none p-3">
          <button>
            <span class="material-symbols-rounded material-symbols-md">phone_enabled</span>
          </button>
        </div>
      </div>
    </div>
  </article>
</section>
