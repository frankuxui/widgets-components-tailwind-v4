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

<article class="overflow-hidden border break-inside rounded-xl text-xs mb-3 border-border bg-background text-foreground" data-filter="social">
  <header class="relative p-4 min-h-16 bg-gradient-to-r from-emerald-500 to-emerald-900">
    <span class="absolute top-3 right-3 inline-flex items-center justify-center font-medium text-xs text-white">NEW</span>
    <img
      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
      alt="avatar"
      class="w-12 h-12 rounded-full absolute top-full -translate-y-1/2 border-4 border-background"
      loading="lazy"
    />
  </header>
  <section class="pb-4 pt-8 px-4 flex items-center justify-between gap-4">
    <div class="grid flex-1 gap-0.5">
      <h2 class="font-semibold text-sm">Cynthia Houston</h2>
      <p>Applied at February 10, 2025</p>
    </div>
    <button class="flex-none inline-flex items-center justify-center px-3 h-7 focus:ring-2 transition-colors duration-300 rounded bg-emerald-500 text-white hover:saturate-150">
      Follow
    </button>
  </section>
</article>

<article class="border break-inside rounded-xl text-xs mb-3 p-4 border-border bg-background text-foreground" data-filter="social">
  <img
    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
    alt="avatar"
    class="w-10 h-10 rounded-full"
    loading="lazy"
  />
  <h2>David Johnson</h2>
</article>

<article class="border break-inside rounded-xl text-xs mb-3 p-4 border-border bg-background text-foreground" data-filter="social">
  <img
    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
    alt="avatar"
    class="w-10 h-10 rounded-full"
    loading="lazy"
  />
  <h2>Emily Davis</h2>
</article>

<section class="break-inside mb-3 gap-3 columns-2 items-start">
  <article class="group overflow-hidden relative border break-inside rounded-xl mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    <img
      class="w-full max-w-full h-full min-h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      src="https://images.pexels.com/photos/3760956/pexels-photo-3760956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      data-author="Sound On"
      alt="portada"
      data-author-profile="https://www.pexels.com/es-es/@sound-on/"
    />
    <div class="absolute bottom-0 left-0 w-full p-2">
      <div class="overflow-hidden relative z-2 w-full rounded p-3 bg-black/20 backdrop-blur-md text-white">
        <div class="relative z-2">
          <h2 class="text-sm font-semibold">Sound On</h2>
          <p>Blender Animation</p>
        </div>
        <div class="z-0 absolute bottom-0 translate-y-full top-auto left-0 w-full h-full transition-transform duration-300 group-hover:translate-y-0 bg-black/30"></div>
      </div>
    </div>
  </article>
  <article class="relative overflow-hidden border break-inside rounded-xl mb-3 text-xs border-border bg-background text-foreground inset-shadow-sm" data-filter="social">
    <div class="z-1 flex items-start justify-start absolute bottom-0 left-0 w-full h-full p-3 bg-black/15 backdrop-blur-xs text-foreground">
      <div class="w-full flex items-center justify-between gap-2">
        <span class="h-5 px-1.5 inline-flex items-center justify-center font-medium text-[10px] rounded bg-white text-black">NEW</span>
        <button class="inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full bg-foreground/5 focus:ring-primary hover:bg-foreground/10">
          <span class="material-symbols-rounded material-symbols-md">close</span>
        </button>
      </div>
    </div>
    <div class="z-3 absolute bottom-0 left-0 w-full h-1/2 gap-1 p-3 flex justify-center flex-col items-start bg-black/40 backdrop-blur-sm text-white">
      <h2 class="text-sm font-medium">Description</h2>
      <p>Design a new logo for our website...</p>
    </div>
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
      <p class="font-semibold leading-6 text-base">Web Design templates</p>
      <div class="w-full flex items-center justify-between gap-2">
        <div class="inline-flex items-center justify-start gap-2">
          <img src="https://cdn.worldvectorlogo.com/logos/facebook-reaction-love.svg" alt="like" class="w-4 h-4" />
          <span class="font-semibold">24</span>
        </div>
        <span class="text-foreground/70">2 min ago</span>
      </div>
    </section>
  </article>
  <article class="border break-inside rounded-xl p-3 mb-3 text-xs border-border bg-background text-foreground" data-filter="social"></article>
  <article class="border break-inside rounded-xl p-3 mb-3 text-xs border-border bg-background text-foreground" data-filter="social"></article>
  <article class="border break-inside rounded-xl p-3 mb-3 text-xs border-border bg-background text-foreground" data-filter="social"></article>
  <article class="border break-inside rounded-xl p-3 mb-3 text-xs border-border bg-background text-foreground" data-filter="social"></article>
  <article class="border break-inside rounded-xl p-3 mb-3 text-xs border-border bg-background text-foreground" data-filter="social"></article>
</section>
