---
layout: "../../layouts/Expo.astro"
description: 'Multiple widgets for user interfaces related to finance and economics'
slug: 'social'
category: 'Social'
tags: ['social']
title: 'Widget components with tailwind CSS - Social'
visible: true
---

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <h2 class="text-sm">Management Meeting</h2>
      <span class="h-6 px-2 text-xs rounded-full flex items-center justify-center bg-green-100 text-green-600 dark:bg-green-500/30 dark:text-green-300">Success</span>
    </div>
    <button class="inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
      <span class="material-icons"> more_horiz </span>
    </button>
  </header>
  <section class="grid gap-1">
    <h2 class="text-base font-medium">New Design</h2>
    <p class="text-foreground/70">Design a new logo for our website, we are a startup company.</p>
  </section>
  <section class="flex items-center justify-between mt-3">
    <div class="col-start-2 row-start-1 row-end-3 flex-none">
      <dt class="sr-only">Users</dt>
      <dd class="flex justify-start -space-x-1.5">
        <a href="#" class="inline-block -m-0.5">
          <img class="w-6 h-6 rounded-full ring-2 ring-background" src="https://randomuser.me/api/portraits/women/46.jpg" alt="avatar" loading="lazy" />
        </a>
        <a href="#" class="inline-block -m-0.5">
          <img class="w-6 h-6 rounded-full ring-2 ring-background" src="https://randomuser.me/api/portraits/men/45.jpg" alt="avatar" loading="lazy" />
        </a>
        <a href="#" class="inline-block -m-0.5">
          <img class="w-6 h-6 rounded-full ring-2 ring-background" src="https://randomuser.me/api/portraits/women/47.jpg" alt="avatar" loading="lazy" />
        </a>
      </dd>
    </div>
    <div class="flex items-center justify-end gap-4">
      <div class="flex items-center gap-1 font-medium">
        <span class="material-symbols-rounded material-symbols-size-md"> sms </span>
        <span>23</span>
      </div>
      <div class="flex items-center gap-1 font-medium">
        <span class="material-symbols-rounded material-symbols-size-md"> bolt </span>
        <span>287</span>
      </div>
    </div>
  </section>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <h2 class="text-sm font-medium">Michael</h2>
      <span class="text-foreground/70">24 min ago</span>
    </div>
    <div class="flex items-center gap-1">
      <span class="material-symbols-rounded material-symbols-size-md material-symbols-fill text-amber-500"> star </span>
      <span class="font-medium mt-0.5">4</span>
    </div>
  </header>
  <section class="mt-2">
    <p class="text-foreground/70">Hi there! I'm a designer and developer from San Francisco and I'm looking...</p>
  </section>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-between">
    <div class="flex items-center gap-4">
      <span class="inline-flex items-center justify-center w-10 h-10 flex-none rounded-full bg-foreground/5">
        <span class="material-symbols-rounded material-symbols-size-md">edit</span>
      </span>
      <p class="text-sm">Edit this story and share it with your friends</p>
    </div>
  </header>
  <section class="mt-2">
    <p class="truncate text-foreground/70">Hi there! I'm a designer and developer from San Francisco and I'm looking...</p>
  </section>
</article>