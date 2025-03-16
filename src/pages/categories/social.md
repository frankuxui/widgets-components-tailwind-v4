---
layout: '../../layouts/Expo.astro'
description: 'Multiple widgets for user interfaces related to finance and economics'
slug: 'social'
category: 'Social'
tags: ['social']
title: 'Widget components with tailwind CSS - Social'
visible: true
---

<article class="overflow-hidden border break-inside rounded-xl mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <header class="relative flex items-center justify-between p-4 border-b border-border">
    <div
      class="opacity-50 z-0 pointer-events-none h-full absolute top-0 left-0 w-full hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10">
    </div>
    <div class="z-[1] relative flex items-center gap-2">
      <h2 class="text-base font-medium">Management</h2>
      <span class="h-6 px-2 text-xs rounded-full flex items-center justify-center bg-emerald-100">Success</span>
    </div>
    <button class="z-[1] relative inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full focus:ring-primary bg-foreground/5 backdrop-blur-sm">
      <span class="material-symbols-rounded">more_horiz</span>
    </button>
  </header>
  <div class="px-4 pb-4 pt-3">
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
          <span class="material-symbols-rounded material-symbols-md">thumb_up</span>
          <span>23</span>
        </div>
        <div class="flex items-center gap-1 font-medium">
          <span class="material-symbols-rounded material-symbols-md">bolt</span>
          <span>287</span>
        </div>
      </div>
    </section>
  </div>
</article>

<article class="overflow-hidden border break-inside rounded-xl mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <header class="w-full relative flex items-center justify-between px-4 pt-4">
    <div class="z-[1] absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-background to-transparent"></div>
    <div
      class="z-0 opacity-80 pointer-events-none h-full absolute top-0 left-0 w-full hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10">
    </div>
    <div class="z-[1] relative flex items-center gap-2">
      <h2 class="text-base font-medium">Management Meeting</h2>
    </div>
    <button class="z-[1] relative inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full border border-border bg-background focus:ring-primary">
      <span class="material-symbols-rounded">more_horiz</span>
    </button>
  </header>
  <div class="w-full mt-1">
    <p class="px-4 text-foreground/70">Design a new logo for our website, we are a startup company.</p>
    <section class="flex items-center justify-between mt-3 p-4 border-t border-border">
      <div class="col-start-2 row-start-1 row-end-3 flex-none">
        <dt class="sr-only">Users</dt>
        <dd class="flex justify-start -space-x-1.5">
          <a href="#" class="inline-block -m-0.5">
            <img class="w-6 h-6 rounded-full ring-2 ring-background" src="https://randomuser.me/api/portraits/women/26.jpg" alt="avatar" loading="lazy" />
          </a>
          <a href="#" class="inline-block -m-0.5">
            <img class="w-6 h-6 rounded-full ring-2 ring-background" src="https://randomuser.me/api/portraits/men/35.jpg" alt="avatar" loading="lazy" />
          </a>
          <a href="#" class="inline-block -m-0.5">
            <img class="w-6 h-6 rounded-full ring-2 ring-background" src="https://randomuser.me/api/portraits/women/49.jpg" alt="avatar" loading="lazy" />
          </a>
        </dd>
      </div>
      <div class="flex items-center justify-end">
        <button class="flex items-center gap-1 font-medium px-2 h-8 rounded-full cursor-pointer hover:text-primary focus:ring-2 focus:ring-primary hover:bg-primary/15">
          <span class="material-symbols-rounded material-symbols-md">sentiment_satisfied</span>
          <span>23</span>
        </button>
        <button class="flex items-center gap-1 font-medium px-2 h-8 rounded-full cursor-pointer hover:text-success focus:ring-2 focus:ring-success hover:bg-success/15">
          <span class="material-symbols-rounded material-symbols-md">bolt</span>
          <span>287</span>
        </button>
      </div>
    </section>
  </div>
</article>

<article class="flex items-center justify-between gap-2 border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="flex items-center gap-2">
    <div class="flex-none w-10 h-10 rounded-xl flex items-center justify-center text-lg font-semibold bg-violet-100 text-violet-500 dark:bg-violet-600/50 dark:text-white">
      <span class="material-symbols-rounded material-symbols-lg">palette</span>
    </div>
    <div class="flex-auto">
      <h2 class="text-sm font-medium block">New widget</h2>
      <p class="text-xs text-gray-600 dark:text-gray-400">Design a new logo for website...</p>
    </div>
  </div>
  <button class="flex-none inline-flex items-center justify-center w-9 h-9 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
    <span class="material-symbols-rounded material-symbols-lg">forward</span>
  </button>
</article>

<section class="break-inside grid grid-cols-2 mb-3 gap-3">
  <div class="flex flex-col gap-3">
    <article
      class="relative overflow-hidden group flex flex-col justify-start gap-2 border break-inside rounded-xl p-3 text-xs border-border bg-background text-foreground"
      data-filter="social">
      <div class="absolute pointer-events-none left-0 top-0 w-14 h-14 bg-success/20 blur-2xl"></div>
      <header class="w-full flex items-center justify-start gap-3">
        <span class="font-medium text-sm w-7 h-7 inline-flex flex-none items-center justify-center rounded-full bg-foreground/10 backdrop-blur-sm">M</span>
        <h2 class="text-sm font-medium">Teams</h2>
      </header>
      <section class="flex items-center justify-between mt-2">
        <h3 class="font-medium">Management Meeting</h3>
        <button class="inline-flex flex-none items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
          <span class="material-symbols-rounded material-symbols-lg">edit_note</span>
        </button>
      </section>
    </article>
    <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl text-xs border-border bg-background text-foreground" data-filter="social">
      <header class="w-full grid grid-cols-12 border-b divide-x divide-border border-border">
        <div class="col-span-8 p-3">
          <h2 class="text-sm font-medium">Workspace</h2>
        </div>
        <div class="col-span-4 p-3">
          <span class="flex items-center justify-center w-5 h-5 text-[11px] rounded-full font-medium bg-green-200 text-black">2</span>
        </div>
      </header>
      <section class="flex items-center justify-between p-3">
        <div class="block">
          <dt class="sr-only">Users</dt>
          <dd class="flex justify-start -space-x-0.5">
            <a href="#" class="inline-block">
              <img class="w-7 h-7 rounded-full ring-2 ring-white dark:ring-gray-950" src="https://randomuser.me/api/portraits/women/14.jpg" alt="avatar" loading="lazy" />
            </a>
            <a href="#" class="inline-block">
              <img class="w-7 h-7 rounded-full ring-2 ring-white dark:ring-gray-950" src="https://randomuser.me/api/portraits/men/19.jpg" alt="avatar" loading="lazy" />
            </a>
          </dd>
        </div>
        <span class="material-symbols-rounded material-symbols-lg">workspaces</span>
      </section>
    </article>
  </div>
  <article class="relative group flex flex-col justify-start border break-inside rounded-xl text-xs border-border bg-background text-foreground" data-filter="social">
    <header class="flex items-center justify-between p-3">
      <h2 class="text-base font-bold">Meeting</h2>
      <button class="flex-none inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
        <span class="material-symbols-rounded">more_horiz</span>
      </button>
    </header>
    <section class="flex items-center justify-between p-3 gap-2 border-y border-border">
      <div class="flex-none inline-flex items-center justify-center rounded-full w-6 h-6 bg-foreground/10">
        <span class="material-symbols-rounded material-symbols-weight-500 material-symbols-md">check</span>
      </div>
      <p class="text-foreground/80">We are a startup company.</p>
    </section>
    <div class="grid p-4 gap-2">
      <div class="flex items-center justify-between">
        <label for="enabled" class="text-sm font-medium">Enabled</label>
        <input
          id="enabled"
          type="checkbox"
          class="h-5 px-0.5 w-9 relative flex-none cursor-pointer appearance-none rounded-full bg-foreground/15 before:transition-transform before:duration-200 before:pointer-events-none before:absolute before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-4 before:rounded-full before:content-[''] before:transform before:translate-x-0 before:bg-white focus:bg-foreground/20 focus:checked:bg-primary checked:bg-primary checked:before:translate-x-full checked:before:bg-white"
        />
      </div>
      <p class="text-foreground/70">Enabled or disabled the meeting.</p>
    </div>
    <div
      class="z-0 opacity-80 pointer-events-none h-4 absolute bottom-0 left-0 w-full hidden border-t border-border border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10">
    </div>
  </article>
</section>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <h2 class="text-sm font-medium">Michael</h2>
      <span class="text-foreground/70">24 min ago</span>
    </div>
    <div class="flex items-center gap-1">
      <span class="material-symbols-rounded material-symbols-md material-symbols-fill text-amber-500">star</span>
      <span class="font-medium text-sm mt-0.5">4</span>
    </div>
  </header>
  <section class="mt-1">
    <p class="text-foreground/70">Hi there! I'm a designer 😊😊 and developer from San Francisco and I'm looking...</p>
  </section>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-between">
    <div class="flex items-center gap-4">
      <span class="inline-flex items-center justify-center w-10 h-10 flex-none rounded-full bg-foreground/5">
        <span class="material-symbols-rounded material-symbols-md">edit</span>
      </span>
      <p class="text-sm">Edit this story and share it with your friends and family.</p>
    </div>
  </header>
  <section class="mt-2">
    <p class="truncate text-foreground/70">Hi there! I'm a designer and developer from San Francisco and I'm looking...</p>
  </section>
</article>

<article class="flex items-center justify-between gap-6 border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-start gap-4">
    <figure class="flex justify-center items-center bg-gray-100 dark:bg-gray-900 w-11 h-11 rounded-full">
      <span class="material-symbols-rounded material-symbols-lg">calendar_month</span>
    </figure>
    <div class="flex-1 grid">
      <span class="text-foreground/50">SCHEDULE DATE</span>
      <span class="text-sm font-medium block">Sat 24, September</span>
    </div>
  </header>
  <button class="inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
    <span class="material-symbols-rounded material-symbols-xl">keyboard_arrow_down</span>
  </button>
</article>

<article
  class="flex items-center justify-between border break-inside divide-x divide-border rounded-xl mb-3 text-xs border-border bg-background text-foreground"
  data-filter="social">
  <header class="flex items-center justify-start flex-1 gap-4 p-4">
    <figure class="flex justify-center items-center w-11 h-11 rounded-full bg-success/20">
      <span class="material-symbols-rounded material-symbols-lg">calendar_month</span>
    </figure>
    <div class="flex-1 grid">
      <span class="text-foreground/50">SCHEDULE DATE</span>
      <span class="text-sm font-medium block">Wed 22, November</span>
    </div>
  </header>
  <section class="flex-none h-full inline-flex items-center justify-center p-4">
    <button class="inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
      <span class="material-symbols-rounded material-symbols-xl">keyboard_arrow_down</span>
    </button>
  </section>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <h2 class="text-sm font-medium">Team Meeting</h2>
      <button class="flex items-center justify-center w-6 h-6 rounded-sm transition-colors duration-200 hover:bg-foreground/5 focus:bg-foreground/10">
        <span class="material-symbols-rounded material-symbols-sm">edit</span>
      </button>
    </div>
    <button class="inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
      <span class="material-symbols-rounded">more_horiz</span>
    </button>
  </header>
  <p class="mt-1 text-foreground/70">Design a new logo for our website, we are a startup company.</p>
</article>

<article class="border break-inside grid rounded-xl mb-3 text-xs divide-y divide-border border-border bg-background text-foreground" data-filter="social">
  <section class="flex items-center justify-between gap-2 p-4">
    <div class="inline-flex items-center gap-2">
      <img src="https://randomuser.me/api/portraits/men/88.jpg" class="w-8 h-8 flex-none rounded-full" />
      <div class="flex-1 grid">
        <h2 class="text-sm font-medium">Jhonard</h2>
        <p>Dolor sit amet consec adipi sc...</p>
      </div>
    </div>
    <button class="flex items-center justify-center w-6 h-6 rounded-sm transition-colors duration-200 hover:bg-foreground/5 focus:bg-foreground/10">
      <span class="material-symbols-rounded material-symbols-sm">edit</span>
    </button>
  </section>
  <section class="flex items-center justify-between gap-2 p-4">
    <div class="inline-flex items-center gap-2">
      <img src="https://randomuser.me/api/portraits/men/86.jpg" class="w-8 h-8 flex-none rounded-full" />
      <div class="flex-1 grid">
        <h2 class="text-sm font-medium">Marcos Lopez</h2>
        <p>Dolor sit amet consec adipi sc...</p>
      </div>
    </div>
    <button class="flex items-center justify-center w-6 h-6 rounded-sm transition-colors duration-200 hover:bg-foreground/5 focus:bg-foreground/10">
      <span class="material-symbols-rounded material-symbols-sm">edit</span>
    </button>
  </section>
</article>

<article class="border break-inside grid rounded-xl mb-3 text-xs overflow-hidden divide-y divide-border border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-between divide-x divide-border">
    <div class="flex flex-1 items-center gap-3 p-4">
      <div class="w-9 h-9 inline-flex items-center justify-center rounded-full flex-none bg-foreground/5">
        <span class="material-symbols-rounded material-symbols-md">groups</span>
      </div>
      <div class="flex-1 grid">
        <h2 class="text-sm font-medium">Members</h2>
        <p class="text-foreground/70">List of members in the team</p>
      </div>
    </div>
    <div class="p-4 h-full inline-flex flex-none items-center justify-center">
      <button class="inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
        <span class="material-symbols-rounded material-symbols-lg">keyboard_arrow_down</span>
      </button>
    </div>
  </header>
  <section class="flex items-center justify-between gap-2 p-4">
    <div class="inline-flex items-center gap-2">
      <img src="https://randomuser.me/api/portraits/women/88.jpg" class="w-8 h-8 flex-none rounded-full" />
      <div class="flex-1 grid">
        <h2 class="text-sm font-medium">Alice Anderson</h2>
        <p>Dolor sit amet consec adipi sc...</p>
      </div>
    </div>
    <button class="flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-200 hover:bg-foreground/5 focus:bg-foreground/10">
      <span class="material-symbols-rounded material-symbols-sm">edit</span>
    </button>
  </section>
  <section class="flex items-center justify-between gap-2 p-4">
    <div class="inline-flex items-center gap-2">
      <img src="https://randomuser.me/api/portraits/men/36.jpg" class="w-8 h-8 flex-none rounded-full" />
      <div class="flex-1 grid">
        <h2 class="text-sm font-medium">Jarry Smith</h2>
        <p>Dolor sit amet consec adipi sc...</p>
      </div>
    </div>
    <button class="flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-200 hover:bg-foreground/5 focus:bg-foreground/10">
      <span class="material-symbols-rounded material-symbols-sm">edit</span>
    </button>
  </section>
</article>

<article class="overflow-hidden border break-inside grid rounded-xl mb-3 text-xs divide-y divide-border border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-between divide-x divide-border">
    <div class="flex flex-1 items-center gap-3 p-4">
      <span class="material-symbols-rounded material-symbols-xl">workspaces</span>
      <div class="flex-1 grid">
        <h2 class="text-sm font-medium">Workspaces</h2>
        <p class="truncate text-foreground/70">List of workspaces in the team</p>
      </div>
    </div>
    <div class="p-4 h-full inline-flex flex-none items-center justify-center">
      <button class="inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
        <span class="material-symbols-rounded material-symbols-lg">keyboard_arrow_down</span>
      </button>
    </div>
  </header>
  <section class="flex items-center justify-between gap-2 p-4 min-h-16">
    <div class="inline-flex items-center gap-2">
      <img src="https://cdn.worldvectorlogo.com/logos/pixelfed-social-icon-brand-color-.svg" class="w-8 h-8 flex-none rounded-full" />
      <div class="flex-1 grid">
        <h2 class="text-sm font-medium">Pixelfed</h2>
        <p>Dolor sit amet consec adipi sc...</p>
      </div>
    </div>
    <button class="flex items-center justify-center w-6 h-6 rounded-sm transition-colors duration-200 hover:bg-foreground/5 focus:bg-foreground/10">
      <span class="material-symbols-rounded material-symbols-sm">edit</span>
    </button>
  </section>
  <section class="flex items-center justify-between gap-2 p-4 min-h-16">
    <div class="inline-flex items-center gap-2">
      <img src="https://cdn.worldvectorlogo.com/logos/firefox-3.svg" class="w-8 h-8 flex-none rounded-full" />
      <div class="flex-1 grid">
        <h2 class="text-sm font-medium">Firefox</h2>
        <p>Dolor sit amet consec adipi sc...</p>
      </div>
    </div>
    <button class="flex items-center justify-center w-6 h-6 rounded-sm transition-colors duration-200 hover:bg-foreground/5 focus:bg-foreground/10">
      <span class="material-symbols-rounded material-symbols-sm">edit</span>
    </button>
  </section>
  <section class="relative flex items-center justify-end min-h-16 divide-x divide-border">
    <div class="absolute -left-10 top-0 h-full w-full max-w-[260px] inline-flex items-center gap-2 flex-1 p-4 z-[1] bg-background">
      <img src="https://cdn.worldvectorlogo.com/logos/chrome.svg" class="w-8 h-8 flex-none rounded-full" />
      <div class="flex-1 grid">
        <h2 class="text-sm font-medium">Chrome</h2>
        <p>Dolor sit amet consec adipi sc...</p>
      </div>
    </div>
    <div class="flex divide-x divide-foreground/10 h-full">
      <button class="cursor-pointer flex-none p-4 h-full flex items-center justify-center bg-primary/10">
        <span class="material-symbols-rounded material-symbols-md text-primary">archive</span>
      </button>
      <button class="cursor-pointer flex-none p-4 h-full flex items-center justify-center bg-danger/10">
        <span class="material-symbols-rounded material-symbols-md text-danger">delete</span>
      </button>
    </div>
  </section>
</article>

<section class="break-inside mb-3 gap-3 columns-2 items-start">
  <article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    <header class="flex items-center justify-between gap-3">
      <img class="flex-none w-9 h-9 rounded-full" src="https://randomuser.me/api/portraits/men/85.jpg" alt="avatar" loading="lazy" />
      <button class="inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
        <span class="material-symbols-rounded">more_horiz</span>
      </button>
    </header>
    <section class="mt-1.5 grid gap-1">
      <h2 class="text-sm font-medium">Fabian Ruiz</h2>
      <p>Dolor sit amet consec adipi sc...</p>
    </section>
    <section class="flex items-center justify-between gap-2 mt-3">
      <div class="inline-flex items-center -space-x-1.5">
        <span class="rounded-full border-2 border-background">
          <img src="https://cdn.worldvectorlogo.com/logos/facebook-reaction-like.svg" alt="like" class="w-4 h-4" />
        </span>
        <span class="rounded-full border-2 border-background">
          <img src="https://cdn.worldvectorlogo.com/logos/facebook-reaction-love.svg" alt="like" class="w-4 h-4" />
        </span>
        <span class="rounded-full border-2 border-background">
          <img src="https://cdn.worldvectorlogo.com/logos/facebook-reaction-haha.svg" alt="like" class="w-4 h-4" />
        </span>
      </div>
      <span class="text-foreground/70">2 min ago</span>
    </section>
  </article>
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
  <article class="border break-inside rounded-xl text-xs mb-3 border-border bg-background text-foreground" data-filter="social">
    <header class="flex items-center justify-start gap-2 p-3">
      <img src="https://frankuxui.com/images/frankuxui_frontend_developer_ux_ui_designer.png" alt="Fotografía de frankuxui" class="h-5/12 w-5/12 object-cover rounded-full" />
      <h2 class="text-sm font-medium mt-2">
        Frank <br /> Esteban
      </h2>
    </header>
    <section class="flex flex-col items-start gap-2 border-t p-3 border-border">
      <p>Apacionado del frontend y el diseño de interfaces...</p>
      <a
        href="https://frankuxui.com/"
        class="px-3 h-6 rounded font-medium inline-flex items-center justify-center transition-colors duration-300 bg-indigo-100 text-indigo-500 hover:bg-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-400 dark:hover:bg-indigo-500/40">
        Leer más
      </a>
    </section>
  </article>
  <article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    <span class="material-symbols-rounded material-symbols-fill material-symbols-md text-danger">favorite</span>
    <section>
      <h2>Events</h2>
      <h3 class="text-base font-semibold text-rose-600">Favorites</h3>
    </section>
    <div class="flex items-center justify-between w-full mt-3">
      <span class="flex items-center justify-center h-5 px-1 gap-1 rounded text-sm bg-rose-100 text-rose-500 dark:bg-rose-500/20 dark:text-rose-400">
        <span class="material-symbols-rounded material-symbols-sm material-symbols-weight-500">south_east</span>
        <span class="text-xs mt-[1px] font-medium">15%</span>
      </span>
      <h5 class="font-semibold">23</h5>
    </div>
  </article>
  <article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    <header class="flex items-center gap-2 justify-start">
      <img class="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/women/65.jpg" alt="avatar" loading="lazy" />
      <div class="flex flex-col">
        <h2 class="text-sm font-medium leading-snug">
          Alice
          <br />
          Anderson
        </h2>
      </div>
    </header>
    <p class="text-xs mt-2 text-gray-500 dark:text-gray-400">Personal assistant from company</p>
    <button class="mt-3 flex-none w-full px-3 border h-7 text-xs flex items-center justify-center rounded-full transition-colors duration-200 border-border hover:bg-foreground/5">
      Connect
    </button>
  </article>
  <article
    class="border break-inside rounded-xl mb-3 text-xs border-border bg-background text-foreground relative overflow-hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10"
    data-filter="social">
    <header class="relative flex items-center gap-2 justify-start px-4 py-6 min-h-14">
      <img
        class="absolute -bottom-3 border-2 border-background ring-1 ring-border w-11 h-11 rounded-full"
        src="https://randomuser.me/api/portraits/women/66.jpg"
        alt="avatar"
        loading="lazy"
      />
    </header>
    <section class="px-4 pt-6 pb-4 border-t border-border bg-background">
      <div class="flex items-center justify-between gap-2">
        <h2 class="text-sm font-medium leading-snug">
          Mary
          <br />
          Anderson
        </h2>
        <button class="inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
          <span class="material-symbols-rounded">more_horiz</span>
        </button>
      </div>
      <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Personal assistant from company</p>
      <button
        class="mt-3 flex-none w-full px-3 border h-7 text-xs flex items-center justify-center rounded-full transition-colors duration-200 border-border hover:bg-foreground/5">
        Connect
      </button>
    </section>
  </article>
  <article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    <header class="flex items-center gap-2 justify-start">
      <img class="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/men/66.jpg" alt="avatar" loading="lazy" />
      <div class="flex flex-col">
        <h2 class="text-sm font-medium leading-snug">
          Armando
          <br />
          Ortega
        </h2>
      </div>
    </header>
    <p class="text-xs mt-2 text-gray-500 dark:text-gray-400">Personal assistant from company</p>
    <button class="mt-3 flex-none w-full px-3 border h-7 text-xs flex items-center justify-center rounded-full transition-colors duration-200 border-border hover:bg-foreground/5">
      Connect
    </button>
  </article>
  <article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    <header class="flex items-start gap-2">
      <img class="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/men/41.jpg" alt="avatar" loading="lazy" />
      <h2 class="text-sm font-medium">
        Jhonatan
        <br />
        Smith
      </h2>
    </header>
    <div class="flex items-center justify-between w-full mt-3">
      <span class="flex items-center justify-center px-2 h-5 text-[11px] rounded font-medium bg-amber-100 text-black">Missing</span>
      <button class="inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
        <span class="material-symbols-rounded">more_horiz</span>
      </button>
    </div>
  </article>
  <article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    <header class="flex items-start gap-2">
      <img class="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/women/40.jpg" alt="avatar" loading="lazy" />
      <h2 class="text-sm font-medium">
        Marianna
        <br />
        Green
      </h2>
    </header>
    <div class="flex items-center justify-between w-full mt-3">
      <span class="flex items-center justify-center px-2 h-5 text-[11px] rounded font-medium bg-green-100 text-black">Online</span>
      <button class="inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
        <span class="material-symbols-rounded">more_horiz</span>
      </button>
    </div>
  </article>
  <article
    class="overflow-hidden border break-inside rounded-xl mb-3 flex flex-col divide-y divide-border text-xs border-border bg-background text-foreground"
    data-filter="social">
    <header class="flex items-start gap-2 p-4">
      <img class="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/men/42.jpg" alt="avatar" loading="lazy" />
      <h2 class="text-sm font-medium">
        Angel
        <br />
        Llorente
      </h2>
    </header>
    <div class="flex items-center justify-between w-full p-4 bg-foreground/5">
      <span class="flex items-center justify-center px-2 h-5 text-[11px] rounded font-medium bg-background shadow-xs">Inactive</span>
      <button class="inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
        <span class="material-symbols-rounded">more_horiz</span>
      </button>
    </div>
  </article>
  <article
    class="border break-inside rounded-xl px-3 py-20 mb-3 text-xs border-border bg-background text-foreground hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10"
    data-filter="social">
    ...
  </article>
  <article class="border break-inside rounded-xl p-3 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">...</article>
  <article class="border break-inside rounded-xl p-3 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">...</article>
</section>

<article class="border break-inside rounded-xl mb-3 text-xs overflow-hidden border-border bg-background text-foreground" data-filter="social">
  <section class="flex items-center justify-between divide-x divide-border gap-2 w-full">
    <div class="flex items-center justify-start gap-2 p-3">
      <div class="w-full min-w-10 max-w-12 flex flex-col border border-border rounded overflow-hidden">
        <div class="flex items-center justify-center font-medium p-1 uppercase text-xs bg-danger text-white">ENE</div>
        <div class="flex items-center justify-center font-medium p-1">18</div>
      </div>
      <div class="w-full min-w-10 max-w-12 flex flex-col border border-border rounded overflow-hidden">
        <div class="flex items-center justify-center font-medium p-1 uppercase text-xs bg-danger text-white">ENE</div>
        <div class="flex items-center justify-center font-medium p-1">28</div>
      </div>
    </div>
    <header class="flex items-center justify-between flex-1 p-3">
      <div class="grid flex-1">
        <h2 class="text-sm font-semibold block">Vacations</h2>
        <p class="text-foreground/60">You have 10 days</p>
      </div>
      <button class="inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
        <span class="material-symbols-rounded">more_horiz</span>
      </button>
    </header>
  </section>
</article>

<article class="overflow-hidden border break-inside rounded-xl mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-between divide-x divide-border">
    <div class="flex items-center gap-2 flex-1 p-4">
      <h2 class="text-base font-medium">Social Media</h2>
    </div>
    <div class="h-full flex-none inline-flex items-center justify-center p-4">
      <div class="flex-none inline-flex items-center justify-center rounded-full w-6 h-6 bg-foreground/10">
        <span class="material-symbols-rounded material-symbols-weight-400 material-symbols-sm">check</span>
      </div>
    </div>
  </header>
  <section class="py-4 relative border-t border-border divide-y divide-border">
    <div
      class="z-0 opacity-80 pointer-events-none h-4 absolute bottom-0 left-0 w-full hidden border-t border-border border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10">
    </div>
    <div
      class="z-0 opacity-80 pointer-events-none h-4 absolute top-0 left-0 w-full hidden border-border border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10">
    </div>
    <div class="grid gap-2 p-4">
      <h2 class="font-semibold text-xl">Web trends design <br /> template</h2>
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

<article class="border break-inside rounded-xl mb-3 text-xs overflow-hidden border-border bg-background text-foreground" data-filter="social">
  <section class="flex items-center justify-between divide-x divide-border w-full">
    <div class="flex items-center justify-start gap-2 p-3">
      <div class="w-full min-w-10 max-w-12 flex flex-col border border-border rounded overflow-hidden">
        <div class="flex items-center justify-center font-medium p-1 uppercase text-xs bg-foreground text-background">ENE</div>
        <div class="flex items-center justify-center font-medium p-1">3</div>
      </div>
      <div class="w-full min-w-10 max-w-12 flex flex-col border border-border rounded overflow-hidden">
        <div class="flex items-center justify-center font-medium p-1 uppercase text-xs bg-foreground text-background">ENE</div>
        <div class="flex items-center justify-center font-medium p-1">11</div>
      </div>
    </div>
    <header class="flex items-center justify-between flex-1 p-3 h-full">
      <div class="grid flex-1">
        <h2 class="text-sm font-semibold block">Vacations</h2>
        <p class="text-foreground/60">You have 9 days</p>
      </div>
      <span class="material-symbols-rounded material-symbols-lg material-symbols-weight-400">cottage</span>
    </header>
  </section>
</article>

<article class="border break-inside rounded-xl mb-3 text-xs overflow-hidden border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-between p-3 border-b border-border bg-foreground/5">
    <div class="flex items-center gap-2">
      <h2 class="text-base font-medium">Startup</h2>
      <button class="flex items-center justify-center w-6 h-6 rounded-sm transition-colors duration-200 hover:bg-foreground/5 focus:bg-foreground/10">
        <span class="material-symbols-rounded material-symbols-sm">edit</span>
      </button>
    </div>
    <button class="inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
      <span class="material-symbols-rounded">more_horiz</span>
    </button>
  </header>
  <div class="flex items-center justify-start p-3 gap-4">
    <div class="inline-flex items-center justify-center w-9 h-9 flex-none rounded-full bg-warning/20">
      <span class="material-symbols-rounded material-symbols-md">rocket_launch</span>
    </div>
    <p class="text-foreground/70">Design a new logo for our website, we are a startup company.</p>
  </div>
</article>

<article class="group border break-inside rounded-xl mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="grid grid-cols-12 gap-3 p-3">
    <div class="flex flex-col gap-2 items-center flex-none h-full col-span-2">
      <a class="inline-block" href="#">
        <img class="rounded-full max-w-none w-9 h-9" src="https://randomuser.me/api/portraits/women/24.jpg" alt="Avatar" />
      </a>
    </div>
    <div class="col-span-10">
      <div class="flex-1 relative">
        <button class="absolute top-2 right-2 inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
          <span class="material-symbols-rounded material-symbols-md">more_horiz</span>
        </button>
        <div class="flex items-center gap-2">
          <a class="font-medium text-sm" href="#">Carmen Ramsey</a>
          <span class="text-foreground/50">2 min ago</span>
        </div>
        <p class="mt-0.5 text-foreground/70">Dolor sit 😂😂😂 smod <br /> olor sit ame tetur.</p>
        <div class="flex items-center gap-2 mt-1">
          <a class="inline-flex items-center gap-1" href="#">
            <span class="material-symbols-rounded material-symbols-fill material-symbols-sm text-rose-500">favorite</span>
            <span class="font-bold">12</span>
          </a>
          <button class="py-1 px-4 font-medium transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-white/10 rounded-md">Repply</button>
        </div>
      </div>
    </div>
  </div>
  <div class="p-2">
    <div class="relative h-[76px] border-2 border-dashed rounded-lg border-rose-200 bg-rose-50 dark:bg-rose-500/15 dark:border-rose-600/30">
      <div
        class="absolute -left-6 -top-4 rotate-2 grid grid-cols-12 gap-3 p-3 rounded-lg w-full max-w-[290px] shadow-[2px_5px_43px_-4px_#c3005961_,_1px_-1px_3px_-1px_#04000024] bg-white dark:bg-gray-900">
        <div class="flex flex-col gap-2 items-center flex-none h-full col-span-2">
          <a class="inline-block" href="#">
            <img class="rounded-full max-w-none w-9 h-9" src="https://randomuser.me/api/portraits/men/47.jpg" alt="Avatar" />
          </a>
        </div>
        <div class="col-span-10">
          <div class="flex-1 relative pr-10">
            <button
              class="flex absolute right-0 top-0 group-hover:flex items-center justify-center rounded-full w-8 h-8 transition-all bg-rose-200 text-rose-700 hover:bg-rose-300 dark:bg-rose-500/20 dark:text-rose-400 dark:hover:bg-rose-500/30 focus:ring-2 focus:ring-rose-500">
              <span class="material-symbols-rounded material-symbols-sm">delete</span>
            </button>
            <div class="flex items-center gap-2">
              <a class="font-medium text-sm" href="#">Stephan Mills</a>
              <span class="text-foreground/50">3 min ago</span>
            </div>
            <p class="mt-0.5 text-xs text-foreground/70">Dolor sit ametei usm odolor sit amet onse tetur</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>

<section class="break-inside grid grid-cols-2 mb-3 gap-3">
  <div class="flex flex-col gap-3">
    <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl text-xs border-border bg-background text-foreground" data-filter="social">
      <header class="relative w-full flex items-center justify-between gap-3 px-3 pt-3 pb-5 border-b border-border">
        <h2 class="text-base font-bold">Company</h2>
        <button class="flex-none inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
          <span class="material-symbols-rounded">more_horiz</span>
        </button>
      </header>
      <section class="relative flex items-center justify-between mt-2 p-4">
        <div
          class="overflow-hidden absolute top-0 -mt-8 font-medium p-1 text-sm w-10 h-10 inline-flex flex-none items-center justify-center rounded-full border border-border bg-background">
          <span class="inline-flex items-center justify-center w-full h-full rounded-full bg-foreground/5">M</span>
        </div>
        <h3 class="font-medium">Management Meeting</h3>
        <button class="inline-flex flex-none items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
          <span class="material-symbols-rounded material-symbols-md material-symbols-weight-500">favorite</span>
        </button>
      </section>
    </article>
    <article class="flex flex-col justify-start gap-2 border break-inside p-3 rounded-xl text-xs border-border bg-background text-foreground" data-filter="social">
      <header class="w-full flex items-center justify-between gap-3">
        <h2 class="text-sm font-medium">Workspace</h2>
        <div class="flex-none inline-flex items-center justify-center rounded-full w-5 h-5 bg-foreground/10">
          <span class="material-symbols-rounded material-symbols-weight-400 material-symbols-sm">check</span>
        </div>
      </header>
      <section class="w-full">
        <p class="text-foreground/70">Last seen 2 hours ago</p>
      </section>
    </article>
  </div>
  <article class="group flex flex-col justify-start border break-inside rounded-xl text-xs border-border bg-background text-foreground" data-filter="social">
    <header class="relative flex items-center justify-between p-3">
      <div class="pointer-events-none z-[1] absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-background to-transparent"></div>
      <div
        class="z-0 opacity-80 pointer-events-none h-full absolute top-0 left-0 w-full hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10">
      </div>
      <img
        class="relative z-[1] flex-none w-12 h-12 rounded-full ring-2 ring-foreground border-2 border-background"
        src="https://randomuser.me/api/portraits/men/86.jpg"
        alt="avatar"
        loading="lazy"
      />
      <button
        class="relative z-[1] flex-none inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5 backdrop-blur-sm">
        <span class="material-symbols-rounded">more_horiz</span>
      </button>
    </header>
    <section class="flex items-start justify-start flex-col gap-1 px-3 pb-3 border-b border-border">
      <h2 class="inline-flex items-center text-base font-medium gap-1">
        <span>Alexander</span>
        <span class="material-symbols-rounded material-symbols-sm text-primary">check_circle</span>
      </h2>
      <p class="text-foreground/80">President of the company</p>
    </section>
    <section class="p-3">
      <p>President is the highest-ranking officer in a corporation.</p>
    </section>
  </article>
</section>

<article class="border break-inside rounded-xl mb-3 text-xs overflow-hidden border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-between p-3 gap-4 border-b border-border">
    <div class="grid gap-0.5">
      <div class="flex items-center gap-2">
        <h2 class="text-base font-medium">Widget name</h2>
        <button class="flex items-center justify-center w-6 h-6 rounded-sm transition-colors duration-200 hover:bg-foreground/5 focus:bg-foreground/10">
          <span class="material-symbols-rounded material-symbols-sm">edit</span>
        </button>
      </div>
      <span class="truncate text-foreground/70">Created in september 2023</span>
    </div>
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
  </header>
  <div class="flex items-center justify-between">
    <div class="flex-none p-3 border-r border-border">
      <div class="inline-flex items-center justify-center w-9 h-9 flex-none rounded-full bg-primary/10">
        <span class="material-symbols-rounded material-symbols-lg">camera</span>
      </div>
    </div>
    <div class="p-3">
      <p class="flex-1 text-foreground/70">Design a new logo for our website, we are a startup company.</p>
    </div>
  </div>
</article>

<article class="border break-inside rounded-xl mb-3 text-xs overflow-hidden border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-between border-b divide-x divide-border border-border">
    <div class="grid flex-1 gap-0.5 p-3">
      <div class="flex items-center gap-2">
        <h2 class="text-base font-medium">Certificate authors</h2>
        <span class="material-symbols-rounded material-symbols-fill material-symbols-weight-400 material-symbols-sm text-primary">check_circle</span>
      </div>
      <span class="truncate text-foreground/70">23 minutes ago</span>
    </div>
    <div class="flex-none p-3 gap-2 h-full fex-none inline-flex flex-col items-center justify-center">
      <span class="text-foreground/60">Authors</span>
      <div class="w-full">
        <dt class="sr-only">Users</dt>
        <dd class="w-full flex justify-start -space-x-1.5">
          <a href="#" class="inline-block -m-0.5">
            <img class="w-6 h-6 rounded-full ring-2 ring-background" src="https://randomuser.me/api/portraits/women/46.jpg" alt="avatar" loading="lazy" />
          </a>
          <a href="#" class="inline-block -m-0.5">
            <img class="w-6 h-6 rounded-full ring-2 ring-background" src="https://randomuser.me/api/portraits/men/45.jpg" alt="avatar" loading="lazy" />
          </a>
        </dd>
      </div>
    </div>
  </header>
  <div class="flex items-center justify-between">
    <div class="flex-none p-3 border-r border-border">
      <div class="inline-flex items-center justify-center w-9 h-9 flex-none rounded-full bg-primary/10">
        <span class="material-symbols-rounded material-symbols-lg">workspace_premium</span>
      </div>
    </div>
    <div class="p-3 relative">
      <div
        class="opacity-50 z-0 pointer-events-none h-full absolute top-0 left-0 w-full hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10">
      </div>
      <p class="flex-1 text-foreground/70">Design a new logo for our website, we are a startup company.</p>
    </div>
  </div>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="flex justify-between items-center w-full">
    <div class="flex flex-col justify-center items-center py-1 px-3 rounded-md border-foreground/10 bg-foreground/5">
      <span class="font-medium">Jun</span>
      <span class="text-xs font-medium text-danger">23</span>
    </div>
    <img class="flex-none w-10 h-10 rounded-xl" src="https://randomuser.me/api/portraits/women/21.jpg" alt="avatar" loading="lazy" />
    <hr class="border h-6 border-border" />
    <div class="flex flex-col justify-center items-start gap-1">
      <span class="text-sm font-medium">Wednesday</span>
      <span class="text-foreground/70">08:00 PM - 18:30 PM</span>
    </div>
  </div>
</article>

<article class="relative overflow-hidden border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="absolute pointer-events-none left-1/2 top-0 w-14 h-14 bg-danger/20 blur-2xl"></div>
  <div class="absolute pointer-events-none left-0 top-0 w-14 h-14 bg-success/20 blur-2xl"></div>
  <div class="flex justify-between items-center w-full relative">
    <div class="flex flex-col justify-center items-center w-12 h-12 rounded-full text-foreground bg-foreground/10">
      <span class="font-medium">Jun</span>
      <span class="text-xs font-medium">23</span>
    </div>
    <hr class="border h-6 border-border" />
    <div class="flex flex-col justify-center items-start gap-1">
      <span class="text-sm font-medium">Thursday</span>
      <span class="text-foreground/70">08:00 PM - 18:30 PM</span>
    </div>
    <button class="px-2 h-7 text-xs rounded inline-flex items-center justify-center font-medium transition-colors duration-300 text-background bg-foreground">Details</button>
  </div>
</article>

<article class="overflow-hidden border break-inside grid rounded-xl mb-3 text-xs divide-y divide-border border-border bg-background text-foreground" data-filter="social">
  <section class="overflow-hidden relative flex items-center justify-between gap-2 p-4">
    <div
      class="z-0 pointer-events-none absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-100/40 via-blue-50/50 to-transparent dark:from-blue-500/10 dark:via-transparent">
    </div>
    <div class="relative inline-flex items-center gap-3">
      <img src="https://randomuser.me/api/portraits/men/88.jpg" class="w-9 h-9 flex-none rounded-full" />
      <div class="flex-1 grid">
        <h2 class="text-sm font-medium">Alisssoon</h2>
        <h3 class="font-medium text-blue-500">Software Engineer</h3>
      </div>
    </div>
    <button
      class="relative z-[1] px-2 h-7 text-xs rounded inline-flex items-center justify-center font-medium transition-colors duration-300 bg-foreground/10 hover:bg-foreground/15">
      Connect
    </button>
  </section>
  <section class="overflow-hidden relative flex items-center justify-between gap-2 p-4">
    <div
      class="z-0 pointer-events-none absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-100/40 via-emerald-50/50 to-transparent dark:from-emerald-500/10 dark:via-transparent">
    </div>
    <div class="relative inline-flex items-center gap-3">
      <img src="https://randomuser.me/api/portraits/men/86.jpg" class="w-9 h-9 flex-none rounded-full" />
      <div class="flex-1 grid">
        <h2 class="text-sm font-medium">Julianno R. Martins</h2>
        <h3 class="font-medium text-emerald-500">Frontend Developer</h3>
      </div>
    </div>
    <button
      class="relative z-[1] px-2 h-7 text-xs rounded inline-flex items-center justify-center font-medium transition-colors duration-300 bg-foreground/10 hover:bg-foreground/15">
      Connect
    </button>
  </section>
  <section class="overflow-hidden relative flex items-center justify-between gap-2 p-4">
    <div
      class="z-0 pointer-events-none absolute top-0 left-0 w-full h-full bg-gradient-to-r from-rose-100/40 via-rose-50/50 to-transparent dark:from-rose-500/10 dark:via-transparent">
    </div>
    <div class="relative inline-flex items-center gap-3">
      <img src="https://randomuser.me/api/portraits/women/86.jpg" class="w-9 h-9 flex-none rounded-full" />
      <div class="flex-1 grid">
        <h2 class="text-sm font-medium">Martha Benitez</h2>
        <h3 class="font-medium text-rose-500">Backend Developer</h3>
      </div>
    </div>
    <button
      class="relative z-[1] px-2 h-7 text-xs rounded inline-flex items-center justify-center font-medium transition-colors duration-300 bg-foreground/10 hover:bg-foreground/15">
      Connect
    </button>
  </section>
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
      <span class="material-symbols-rounded material-symbols-lg">phone_enabled</span>
    </button>
  </div>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="w-full flex items-center justify-between">
    <header class="flex items-center gap-3">
      <span class="material-symbols-rounded material-symbols-lg material-symbols-weight-400">check</span>
      <div class="flex items-center gap-4">
        <img class="flex-none w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/women/85.jpg" alt="avatar" loading="lazy" />
        <div class="flex-auto">
          <span class="text-foreground/70">December 2023</span>
          <h2 class="text-sm font-medium block">Marilyn</h2>
        </div>
      </div>
    </header>
    <input
      type="checkbox"
      class="h-5 px-0.5 w-9 relative flex-none cursor-pointer appearance-none rounded-full bg-foreground/15 before:transition-transform before:duration-200 before:pointer-events-none before:absolute before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-4 before:rounded-full before:content-[''] before:transform before:translate-x-0 before:bg-white focus:bg-foreground/20 focus:checked:bg-primary checked:bg-primary checked:before:translate-x-full checked:before:bg-white"
    />
  </div>
</article>

<article class="relative overflow-hidden border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="absolute pointer-events-none top-0 left-1/2 w-12 h-12 bg-danger/30 blur-2xl"></div>

  <section class="relative z-[1] flex items-center justify-between">
    <div class="flex items-center gap-4">
      <a href="#">
        <img
          class="flex-none w-10 h-10 rounded-full ring-2 ring-pink-500 border-2 border-background"
          src="https://randomuser.me/api/portraits/men/82.jpg"
          alt="avatar"
          loading="lazy"
        />
      </a>
      <div class="flex-auto">
        <a href="#" class="text-sm font-medium block">Jhonathan Doe</a>
        <span class="text-foreground/70">Web Developer</span>
      </div>
    </div>
    <button class="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 hover:bg-danger/10 focus:bg-danger/20 text-danger">
      <span class="material-symbols-rounded material-symbols-lg">delete</span>
    </button>
  </section>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="flex items-center justify-between gap-4">
    <div class="flex items-center gap-4">
      <a href="#">
        <img
          class="flex-none w-12 h-12 rounded-full ring-2 ring-primary border-2 border-background"
          src="https://randomuser.me/api/portraits/men/86.jpg"
          alt="avatar"
          loading="lazy"
        />
      </a>
      <div class="flex-auto grid gap-0.5">
        <a href="#" class="flex text-sm items-center font-medium gap-1">
          <span>Anthony</span>
          <span class="material-symbols-rounded material-symbols-fill material-symbols-sm text-primary">check_circle</span>
        </a>
        <span class="text-foreground/70">Tester &amp; Developer</span>
      </div>
    </div>
    <span class="px-2 h-6 flex items-center justify-center uppercase text-xs rounded bg-primary text-white">NEW</span>
  </div>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="flex items-center justify-between gap-4">
    <div class="flex items-center gap-4">
      <img class="flex-none w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/men/85.jpg" alt="avatar" loading="lazy" />
      <div class="flex-auto">
        <h2 class="text-sm font-medium">Alexander</h2>
        <span class="text-foreground/70">Last seen 2 hours ago</span>
      </div>
    </div>
    <button class="flex flex-none items-center justify-center w-8 h-8 transition-all rounded-full focus:ring-2 focus:ring-primary hover:bg-foreground/5">
      <span class="material-symbols-rounded material-symbols-md">edit</span>
    </button>
  </div>
</article>

<article class="border break-inside rounded-xl mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="flex items-center justify-between divide-x divide-border">
    <div class="flex items-center gap-4 p-4 h-full flex-1">
      <img class="flex-none w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/men/86.jpg" alt="avatar" loading="lazy" />
      <div class="flex-auto">
        <h2 class="text-sm font-medium">Fredrick</h2>
        <span class="text-foreground/70">Last seen 2 hours ago</span>
      </div>
    </div>
    <div class="p-4 h-full">
      <button class="flex flex-none items-center justify-center w-9 h-9 transition-all rounded-full focus:ring-2 focus:ring-primary hover:bg-foreground/5">
        <span class="material-symbols-rounded material-symbols-xl">camera</span>
      </button>
    </div>
  </div>
</article>

<article class="border break-inside rounded-xl divide-y mb-3 text-xs divide-border border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-between p-3">
    <div class="flex items-center gap-2">
      <h2 class="font-medium text-sm">Director Meeting</h2>
    </div>
    <button class="flex flex-none items-center justify-center w-7 h-7 transition-all rounded hover:bg-foreground/5 focus:ring-2 focus:ring-primary">
      <span class="material-symbols-rounded material-symbols-xl">keyboard_arrow_down</span>
    </button>
  </header>
  <section class="flex justify-between items-center p-3">
    <div class="flex items-center gap-3">
      <img class="flex-none w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/61.jpg" alt="avatar" loading="lazy" />
      <div class="flex-col items-start flex-auto">
        <a href="#" class="text-sm font-medium block">Marc Jacobs</a>
        <span class="text-foreground/70">3 min ago</span>
      </div>
    </div>
    <button
      class="flex items-center justify-center cursor-pointer rounded-full font-medium h-7 px-3 text-xs bg-foreground/10 text-foreground hover:bg-foreground/15 focus:bg-foreground/20">
      Message
    </button>
  </section>
</article>

<section class="grid grid-cols-2 gap-3 mb-3">
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 text-xs border-border bg-background text-foreground" data-filter="social">
    <header>
      <span class="material-symbols-rounded material-symbols-xl">bed</span>
    </header>
    <section>
      <h2 class="text-sm">Bed time</h2>
      <h3 class="text-base font-semibold">10:00 PM</h3>
    </section>
    <p class="mt-auto text-xs text-foreground/70">Set your bedtime and wake up time...</p>
  </article>
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 text-xs border-border bg-background text-foreground" data-filter="social">
    <header>
      <span class="material-symbols-rounded material-symbols-xl">notifications</span>
    </header>
    <section>
      <h2 class="text-sm">Wake up</h2>
      <h3 class="text-base font-semibold">6:00 AM</h3>
    </section>
    <p class="mt-auto text-foreground/70">Set your bedtime and wake up time...</p>
  </article>
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 text-xs border-border bg-background text-foreground" data-filter="social">
    <header>
      <span class="material-symbols-rounded material-symbols-xl">calendar_month</span>
    </header>
    <section>
      <h2 class="text-sm">Calendar</h2>
      <h3 class="text-base font-semibold">December, 24</h3>
    </section>
    <p class="mt-auto text-foreground/70">Set your bedtime and wake up time...</p>
  </article>
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 text-xs border-border bg-background text-foreground" data-filter="social">
    <header>
      <span class="material-symbols-rounded material-symbols-xl">thumb_up</span>
    </header>
    <section>
      <h2 class="text-sm">Interactions</h2>
      <h3 class="text-base font-semibold">Monday, 12</h3>
    </section>
    <div class="flex items-center justify-between w-full mt-auto">
      <div class="col-start-2 row-start-1 row-end-3 flex-none">
        <dt class="sr-only">Users</dt>
        <dd class="flex justify-start -space-x-0.5">
          <a href="#" class="inline-block -ml-0.5">
            <img class="w-6 h-6 rounded-full ring-2 ring-background" src="https://randomuser.me/api/portraits/women/47.jpg" alt="avatar" loading="lazy" />
          </a>
          <a href="#" class="inline-block -ml-0.5">
            <img class="w-6 h-6 rounded-full ring-2 ring-background" src="https://randomuser.me/api/portraits/men/48.jpg" alt="avatar" loading="lazy" />
          </a>
          <a href="#" class="inline-block -ml-0.5">
            <img class="w-6 h-6 rounded-full ring-2 ring-background" src="https://randomuser.me/api/portraits/women/49.jpg" alt="avatar" loading="lazy" />
          </a>
        </dd>
      </div>
      <h5 class="w-6 h-6 inline-flex flex-none font-medium items-center justify-center rounded-full bg-foreground/10">3</h5>
    </div>
  </article>
</section>

<section class="break-inside grid grid-cols-2 mb-3 gap-3">
  <div class="flex flex-col gap-3">
    <article class="group flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 text-xs border-border bg-background text-foreground" data-filter="social">
      <header class="w-full flex items-center justify-between">
        <h2 class="text-sm font-medium">Members</h2>
        <span class="flex items-center justify-center w-5 h-5 text-[11px] rounded-full font-medium bg-warning/50">5</span>
      </header>
      <section class="flex items-center justify-between mt-2">
        <div class="block">
          <dt class="sr-only">Users</dt>
          <dd class="flex justify-start -space-x-1">
            <a href="#" class="inline-block">
              <img class="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950" src="https://randomuser.me/api/portraits/women/12.jpg" alt="avatar" loading="lazy" />
            </a>
            <a href="#" class="inline-block">
              <img class="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950" src="https://randomuser.me/api/portraits/men/13.jpg" alt="avatar" loading="lazy" />
            </a>
            <a href="#" class="inline-block">
              <span class="flex items-center justify-center text-[11px] font-medium w-6 h-6 rounded-full bg-rose-200 ring-2 ring-white dark:bg-gray-600 dark:ring-gray-950">
                +3
              </span>
            </a>
          </dd>
        </div>
        <span class="material-symbols-rounded material-symbols-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">north_east</span>
      </section>
    </article>
    <article class="group flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 text-xs border-border bg-background text-foreground" data-filter="social">
      <header class="w-full flex items-center justify-between">
        <div class="flex-1 grid">
          <h2 class="text-sm font-bold">Members</h2>
          <p class="text-foreground/70">2 hours ago</p>
        </div>
        <span class="flex items-center justify-center w-5 h-5 text-[11px] rounded-full font-medium bg-green-200 text-black">2</span>
      </header>
      <section class="flex items-center justify-between mt-2">
        <div class="block">
          <dt class="sr-only">Users</dt>
          <dd class="flex justify-start -space-x-1.5">
            <a href="#" class="inline-block -ml-1">
              <img class="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950" src="https://randomuser.me/api/portraits/women/14.jpg" alt="avatar" loading="lazy" />
            </a>
            <a href="#" class="inline-block -ml-1">
              <img class="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950" src="https://randomuser.me/api/portraits/men/15.jpg" alt="avatar" loading="lazy" />
            </a>
          </dd>
        </div>
        <span class="material-symbols-rounded material-symbols-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">north_east</span>
      </section>
    </article>
  </div>
  <article class="group flex flex-col justify-start border break-inside rounded-xl text-xs border-border bg-background text-foreground" data-filter="social">
    <header class="flex items-center justify-between p-4">
      <span class="h-6 px-2 text-xs font-medium rounded flex items-center leading-5 justify-center bg-emerald-200 dark:bg-emerald-500/30 dark:text-emerald-300">NEW</span>
      <button class="inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
        <span class="material-symbols-rounded">more_horiz</span>
      </button>
    </header>
    <section class="grid gap-2 px-4">
      <h2 class="text-base font-bold">Project members</h2>
      <p class="text-foreground/70">03:00 PM - 05:00 PM</p>
    </section>
    <div class="flex items-center justify-between mt-auto p-4 border-t border-border">
      <div class="block">
        <dt class="sr-only">Users</dt>
        <dd class="flex justify-start -space-x-1.5">
          <a href="#" class="inline-block -m-1">
            <img class="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950" src="https://randomuser.me/api/portraits/women/48.jpg" alt="avatar" loading="lazy" />
          </a>
          <a href="#" class="inline-block -m-1">
            <img class="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950" src="https://randomuser.me/api/portraits/men/15.jpg" alt="avatar" loading="lazy" />
          </a>
          <a href="#" class="inline-block -m-1">
            <img class="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950" src="https://randomuser.me/api/portraits/women/37.jpg" alt="avatar" loading="lazy" />
          </a>
        </dd>
      </div>
      <span class="material-symbols-rounded material-symbols-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">north_east</span>
    </div>
  </article>
</section>

<article class="border break-inside rounded-xl text-xs mb-3 border-border bg-background text-foreground" data-filter="social">
  <div class="flex items-center justify-between p-3 gap-6">
    <header class="flex items-center space-x-3">
      <div class="flex flex-none justify-center items-center rounded font-medium border border-border px-2 h-8 gap-1">
        <span class="material-symbols-rounded material-symbols-md">calendar_month</span>
        <span>Feb, 24</span>
      </div>
      <p class="text-xs">This is a notification from the system</p>
    </header>
    <div class="flex-none inline-flex items-center justify-center rounded-full w-6 h-6 bg-foreground/10">
      <span class="material-symbols-rounded material-symbols-weight-500 material-symbols-md">check</span>
    </div>
  </div>
</article>

<article class="border break-inside rounded-xl text-xs mb-3 p-4 border-border bg-background text-foreground" data-filter="social">
  <div class="flex items-start flex-col">
    <header class="flex items-center gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2500"
        height="2500"
        fill="none"
        stroke-width="1.5"
        class="h-10 w-10 text-foreground"
        viewBox="-0.17090198558635983 0.482230148717937 41.14235318283891 40.0339509076386">
        <text x="-9999" y="-9999">ChatGPT</text><path
          d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835A9.964 9.964 0 0 0 18.306.5a10.079 10.079 0 0 0-9.614 6.977 9.967 9.967 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 7.516 3.35 10.078 10.078 0 0 0 9.617-6.981 9.967 9.967 0 0 0 6.663-4.834 10.079 10.079 0 0 0-1.243-11.813zM22.498 37.886a7.474 7.474 0 0 1-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.496zM6.392 31.006a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.649a7.504 7.504 0 0 1-10.24-2.744zM4.297 13.62A7.469 7.469 0 0 1 8.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.01L7.04 23.856a7.504 7.504 0 0 1-2.743-10.237zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .113-.01l8.052 4.648a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.65-1.132zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.05-4.645a7.497 7.497 0 0 1 11.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.5v5l-4.331 2.5-4.331-2.5V18z"
          fill="currentColor">
        </path>
      </svg>
      <div class="grid flex-1">
        <h2 class="font-medium text-sm">Software engineer</h2>
        <p class="truncate text-xs">Offering a job for a software engineer</p>
      </div>
    </header>
    <div class="flex flex-wrap gap-1 mt-3">
      <span class="px-1 h-5 rounded inline-flex items-center justify-center font-medium bg-foreground/10">Full time</span>
      <span class="px-1 h-5 rounded inline-flex items-center justify-center font-medium bg-foreground/10">Remote</span>
      <span class="px-1 h-5 rounded inline-flex items-center justify-center font-medium bg-foreground/10">Senior</span>
      <span class="px-1 h-5 rounded inline-flex items-center justify-center font-medium bg-foreground/10">Frontend</span>
    </div>
  </div>
  <div class="flex items-center justify-between gap-6 mt-3">
    <div class="flex items-center gap-2">
      <div class="flex-none inline-flex items-center justify-center rounded-full w-4 h-4 bg-foreground/10">
        <span class="material-symbols-rounded material-symbols-weight-500 material-symbols-xs">check</span>
      </div>
      <p class="text-foreground/60">3 minutes ago</p>
    </div>
    <span class="text-sm font-semibold">&euro; 50,000</span>
  </div>
</article>

<article class="border break-inside rounded-xl text-xs mb-3 p-4 border-border bg-background text-foreground" data-filter="social">
  <div class="flex items-start flex-col">
    <header class="flex items-center gap-4">
      <img src="https://cdn.worldvectorlogo.com/logos/spotify-2.svg" class="w-10 h-10 flex-none max-w-full" />
      <div class="grid flex-1">
        <h2 class="font-medium text-sm">Marketing manager</h2>
        <p class="truncate text-xs">Offering a job for a marketing manager</p>
      </div>
    </header>
    <div class="flex flex-wrap gap-1 mt-3">
      <span class="px-1 h-5 rounded inline-flex items-center justify-center font-medium bg-foreground/10">Full time</span>
      <span class="px-1 h-5 rounded inline-flex items-center justify-center font-medium bg-foreground/10">Remote</span>
      <span class="px-1 h-5 rounded inline-flex items-center justify-center font-medium bg-foreground/10">Senior</span>
      <span class="px-1 h-5 rounded inline-flex items-center justify-center font-medium bg-foreground/10">Frontend</span>
    </div>
  </div>
  <div class="flex items-center justify-between gap-6 mt-3">
    <div class="flex items-center gap-2">
      <div class="flex-none inline-flex items-center justify-center rounded-full w-4 h-4 bg-foreground/10">
        <span class="material-symbols-rounded material-symbols-weight-500 material-symbols-xs">check</span>
      </div>
      <p class="text-foreground/60">22 minutes ago</p>
    </div>
    <span class="text-sm font-semibold">&euro; 38,500</span>
  </div>
</article>

<article class="border break-inside rounded-xl text-xs mb-3 border-border bg-background text-foreground" data-filter="social">
  <div class="flex items-start flex-col p-4">
    <header class="flex items-center gap-4">
      <img src="https://cdn.worldvectorlogo.com/logos/pixelfed-social-icon-brand-color-.svg" class="w-10 h-10 flex-none max-w-full" />
      <div class="grid flex-1">
        <h2 class="font-medium text-sm">Project manager</h2>
        <p class="truncate text-xs">Offering a job for a project manager</p>
      </div>
    </header>
    <div class="flex flex-wrap gap-1 mt-3">
      <span class="px-1 h-5 rounded inline-flex items-center justify-center font-medium bg-success/15">Full time</span>
      <span class="px-1 h-5 rounded inline-flex items-center justify-center font-medium bg-success/15">Remote</span>
      <span class="px-1 h-5 rounded inline-flex items-center justify-center font-medium bg-success/15">Senior</span>
      <span class="px-1 h-5 rounded inline-flex items-center justify-center font-medium bg-success/15">Frontend</span>
    </div>
  </div>
  <div class="flex items-center justify-between gap-6 border-t border-border p-4">
    <div class="flex items-center gap-2">
      <div class="flex-none inline-flex items-center justify-center rounded-full w-4 h-4 bg-foreground/10">
        <span class="material-symbols-rounded material-symbols-weight-500 material-symbols-xs">check</span>
      </div>
      <p class="text-foreground/60">22 minutes ago</p>
    </div>
    <span class="text-sm font-semibold">&euro; 38,500</span>
  </div>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-between gap-3">
    <div class="flex items-center justify-start gap-3">
      <img class="rounded-full max-w-none w-6 h-6" src="https://randomuser.me/api/portraits/women/74.jpg" alt="Avatar" />
      <div class="flex items-center gap-2 w-full flex-1">
        <a class="font-medium" href="#">Natalia</a>
        <span class="text-foreground/60">3 minutes ago</span>
      </div>
    </div>
    <button class="inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
      <span class="material-symbols-rounded">more_horiz</span>
    </button>
  </header>
  <section class="w-full mt-1">
    <p class="text-xs">Dolor sit ameteiusmod consectetur adipi scing elit. Nulla nec purus feugiat, vestibulum.</p>
  </section>
  <section class="flex items-center justify-between w-full mt-3">
    <div class="flex items-center justify-start gap-2">
      <a class="inline-flex items-center gap-1" href="#">
        <span class="material-symbols-rounded material-symbols-fill material-symbols-md text-danger">favorite</span>
        <span class="text-sm font-bold">2</span>
      </a>
    </div>
    <a class="inline-flex items-center">
      <span class="-m-1 rounded-full border-2 border-background">
        <img src="https://cdn.worldvectorlogo.com/logos/facebook-reaction-like.svg" alt="like" class="w-4 h-4" />
      </span>
      <span class="-m-1 rounded-full border-2 border-background">
        <img src="https://cdn.worldvectorlogo.com/logos/facebook-reaction-love.svg" alt="like" class="w-4 h-4" />
      </span>
      <span class="-m-1 rounded-full border-2 border-background">
        <img src="https://cdn.worldvectorlogo.com/logos/facebook-reaction-haha.svg" alt="like" class="w-4 h-4" />
      </span>
      <span class="text-sm font-bold ml-3">33</span>
    </a>
  </section>
</article>

<article class="overflow-hidden border break-inside rounded-xl mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <section class="p-6 relative border-t border-border divide-y divide-border">
    <div
      class="z-0 opacity-80 pointer-events-none h-4 absolute bottom-0 left-0 w-full hidden border-t border-border border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10">
    </div>
    <div
      class="z-0 opacity-80 pointer-events-none h-4 absolute top-0 left-0 w-full hidden border-b border-border border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10">
    </div>
    <div
      class="z-0 opacity-80 pointer-events-none h-full absolute top-0 left-0 w-4 hidden border-b border-border border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10">
    </div>
    <div
      class="z-0 opacity-80 pointer-events-none h-full absolute top-0 right-0 w-4 hidden border-b border-border border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10">
    </div>
    <div class="grid gap-2 p-2 place-items-start">
      <span class="px-2 h-5 rounded inline-flex items-center justify-center font-medium bg-emerald-200 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400">NEW</span>
      <div class="w-full flex items-center justify-between gap-2">
        <h2 class="font-semibold text-base">Draw a minimal <br />logo for a startup</h2>
        <div class="w-12 h-12 rounded-full inline-flex items-center justify-center flex-none bg-indigo-500/10">
          <span class="material-symbols-rounded material-symbols-lg">draw</span>
        </div>
      </div>
      <p class="text-foreground/70">Design a new logo for our website, we are a startup company.</p>
    </div>
  </section>
</article>

<section class="break-inside grid grid-cols-2 mb-3 gap-3">
  <div class="flex flex-col gap-3">
    <article class="border break-inside rounded-xl p-3 text-xs border-border bg-background text-foreground" data-filter="social">...</article>
    <article class="border break-inside rounded-xl p-3 text-xs border-border bg-background text-foreground" data-filter="social">...</article>
  </div>
  <article class="border break-inside rounded-xl p-3 text-xs border-border bg-background text-foreground" data-filter="social">...</article>
</section>

<section class="break-inside grid grid-cols-2 mb-3 gap-3 columns-2">
  <article class="border break-inside rounded-xl p-3 text-xs border-border bg-background text-foreground" data-filter="social">...</article>
  <article class="border break-inside rounded-xl p-3 text-xs border-border bg-background text-foreground" data-filter="social">...</article>
  <article class="border break-inside rounded-xl p-3 text-xs border-border bg-background text-foreground" data-filter="social">...</article>
  <article class="border break-inside rounded-xl p-3 text-xs border-border bg-background text-foreground" data-filter="social">...</article>
  <article class="border break-inside rounded-xl p-3 text-xs border-border bg-background text-foreground" data-filter="social">...</article>
  <article class="border break-inside rounded-xl p-3 text-xs border-border bg-background text-foreground" data-filter="social">...</article>
</section>
