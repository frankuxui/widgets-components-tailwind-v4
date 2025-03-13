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
      <span class="h-6 px-2 text-xs rounded-full flex items-center justify-center bg-success/20">Success</span>
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
      <span class="font-medium text-sm mt-0.5">4</span>
    </div>
  </header>
  <section class="mt-1">
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

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-3">
      <span class="flex flex-none items-center justify-center font-medium w-5 h-5 text-xs rounded-full transition-colors bg-foreground text-background">3</span>
      <span class="material-symbols-rounded material-symbols-size-lg">calendar_month</span>
      <span class="font-medium text-sm">December 2025</span>
    </div>
    <button class="inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
      <span class="material-symbols-rounded material-symbols-size-xl">keyboard_arrow_down</span>
    </button>
  </div>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <h2 class="text-base font-medium">Team Meeting</h2>
      <button class="flex items-center justify-center w-6 h-6 rounded-sm transition-colors duration-200 hover:bg-foreground/5 focus:bg-foreground/10">
        <span class="material-symbols-rounded material-symbols-size-sm">edit</span>
      </button>
    </div>
    <button class="inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
      <span class="material-icons"> more_horiz </span>
    </button>
  </header>
  <p class="mt-1 text-foreground/70">Design a new logo for our website, we are a startup company.</p>
</article>

<article class="border break-inside rounded-xl mb-3 text-xs overflow-hidden border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-between p-3 border-b border-border bg-foreground/5">
    <div class="flex items-center gap-2">
      <h2 class="text-base font-medium">Startup</h2>
      <button class="flex items-center justify-center w-6 h-6 rounded-sm transition-colors duration-200 hover:bg-foreground/5 focus:bg-foreground/10">
        <span class="material-symbols-rounded material-symbols-size-sm">edit</span>
      </button>
    </div>
    <button class="inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
      <span class="material-icons"> more_horiz </span>
    </button>
  </header>
  <div class="flex items-center justify-start p-3 gap-4">
    <div class="inline-flex items-center justify-center w-9 h-9 flex-none rounded-full bg-warning/20">
      <span class="material-symbols-rounded material-symbols-size-md">rocket_launch</span>
    </div>
    <p class="text-foreground/70">Design a new logo for our website, we are a startup company.</p>
  </div>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="flex justify-between items-center w-full">
    <div class="flex flex-col justify-center items-center py-1 px-3 rounded-md border-foreground/10 bg-foreground/5">
      <span class="font-medium">Jun</span>
      <span class="text-xs font-medium text-danger">23</span>
    </div>
    <img class="flex-none w-10 h-10 rounded-xl" src="https://randomuser.me/api/portraits/women/21.jpg" alt="avatar" loading="lazy" />
    <hr class="border h-6 border-border">
    <div class="flex flex-col justify-center items-start">
      <span class="text-sm font-medium">Wednesday</span>
      <span class="text-foreground/70">08:00 PM - 18:30 PM</span>
    </div>
  </div>
</article>

<article class="relative overflow-hidden border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="absolute pointer-events-none left-1/2 top-0 w-14 h-14 bg-danger/30 blur-2xl"></div>
  <div class="absolute pointer-events-none left-0 top-0 w-14 h-14 bg-success/30 blur-2xl"></div>
  <div class="flex justify-between items-center w-full relative">
    <div class="flex flex-col justify-center items-center w-12 h-12 rounded-full text-foreground bg-foreground/10">
      <span class="font-medium">Jun</span>
      <span class="text-xs font-medium">23</span>
    </div>
    <hr class="border h-6 border-gray-300 dark:border-gray-800">
    <div class="flex flex-col justify-center items-start">
      <span class="text-sm font-medium">Thursday</span>
      <span class="text-foreground/70">08:00 PM - 18:30 PM</span>
    </div>
    <button class="px-2 h-7 text-xs rounded inline-flex items-center justify-center font-medium transition-colors duration-300 text-background bg-foreground"> Details </button>
  </div>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="w-full flex items-center justify-between">
    <header class="flex items-center gap-3">
      <span class="text-sm font-medium">01</span>
      <div class="flex items-center gap-4">
        <img class="flex-none w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/women/82.jpg" alt="avatar" loading="lazy" />
        <div class="flex-auto">
          <span class="text-foreground/70">September 2023</span>
          <h2 class="text-sm font-medium block">Caroline</h2>
        </div>
      </div>
    </header>
    <button class="inline-flex items-center justify-center w-9 h-9 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
      <span class="material-symbols-rounded material-symbols-size-lg">phone_enabled</span>
    </button>
  </div>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="w-full flex items-center justify-between">
    <header class="flex items-center gap-3">
      <span class="text-sm font-medium">02</span>
      <div class="flex items-center gap-4">
        <img class="flex-none w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/women/85.jpg" alt="avatar" loading="lazy" />
        <div class="flex-auto">
          <span class="text-foreground/70">December 2023</span>
          <h2 class="text-sm font-medium block">Marilyn</h2>
        </div>
      </div>
    </header>
    <input type="checkbox" class="h-5 px-[2px] w-[36px] relative flex-none cursor-pointer appearance-none rounded-full bg-gray-300 dark:bg-gray-700 before:transition-transform before:duration-200 before:pointer-events-none before:absolute before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-4 before:rounded-full before:content-[''] before:transform before:translate-x-0 before:bg-white focus:bg-gray-400 dark:focus:bg-gray-600 focus:checked:bg-primary checked:bg-primary checked:before:translate-x-full checked:before:bg-white" />
  </div>
</article>