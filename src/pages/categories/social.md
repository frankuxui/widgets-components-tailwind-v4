---
layout: '../../layouts/Expo.astro'
description: 'Multiple widgets for user interfaces related to finance and economics'
slug: 'social'
category: 'Social'
tags: ['social']
title: 'Widget components with tailwind CSS - Social'
visible: true
---

<article
  class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground"
  data-filter="social">
  <header class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <h2 class="text-sm">Management Meeting</h2>
      <span class="h-6 px-2 text-xs rounded-full flex items-center justify-center bg-success/20">Success</span>
    </div>
    <button
      class="inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
      <span class="material-icons">more_horiz</span>
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
          <img
            class="w-6 h-6 rounded-full ring-2 ring-background"
            src="https://randomuser.me/api/portraits/women/46.jpg"
            alt="avatar"
            loading="lazy"
          />
        </a>
        <a href="#" class="inline-block -m-0.5">
          <img
            class="w-6 h-6 rounded-full ring-2 ring-background"
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="avatar"
            loading="lazy"
          />
        </a>
        <a href="#" class="inline-block -m-0.5">
          <img
            class="w-6 h-6 rounded-full ring-2 ring-background"
            src="https://randomuser.me/api/portraits/women/47.jpg"
            alt="avatar"
            loading="lazy"
          />
        </a>
      </dd>
    </div>
    <div class="flex items-center justify-end gap-4">
      <div class="flex items-center gap-1 font-medium">
        <span class="material-symbols-rounded material-symbols-md">sms</span>
        <span>23</span>
      </div>
      <div class="flex items-center gap-1 font-medium">
        <span class="material-symbols-rounded material-symbols-md">bolt</span>
        <span>287</span>
      </div>
    </div>
  </section>
</article>

<section class="break-inside grid grid-cols-2 mb-3 gap-3">
  <div class="flex flex-col gap-3">
    <article
      class="relative overflow-hidden group flex flex-col justify-start gap-2 border break-inside rounded-xl p-3 text-xs border-border bg-background text-foreground"
      data-filter="social">
      <div class="absolute pointer-events-none left-0 top-0 w-14 h-14 bg-success/20 blur-2xl"></div>
      <header class="w-full flex items-center justify-start gap-3">
        <span
          class="font-medium text-sm w-7 h-7 inline-flex flex-none items-center justify-center rounded-full bg-foreground/10 backdrop-blur-sm">
          M
        </span>
        <h2 class="text-sm font-medium">Teams</h2>
      </header>
      <section class="flex items-center justify-between mt-2">
        <h3 class="font-medium">Management Meeting</h3>
        <button
          class="inline-flex flex-none items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
          <span class="material-symbols-rounded material-symbols-lg">edit_note</span>
        </button>
      </section>
    </article>
    <article
      class="flex flex-col justify-start gap-2 border break-inside rounded-xl text-xs border-border bg-background text-foreground"
      data-filter="social">
      <header class="w-full grid grid-cols-12 border-b divide-x divide-border border-border">
        <div class="col-span-8 p-3">
          <h2 class="text-sm font-medium">Workspace</h2>
        </div>
        <div class="col-span-4 p-3">
          <span
            class="flex items-center justify-center w-5 h-5 text-[11px] rounded-full font-medium bg-green-200 text-black">
            2
          </span>
        </div>
      </header>
      <section class="flex items-center justify-between p-3">
        <div class="block">
          <dt class="sr-only">Users</dt>
          <dd class="flex justify-start -space-x-0.5">
            <a href="#" class="inline-block">
              <img
                class="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950"
                src="https://randomuser.me/api/portraits/women/14.jpg"
                alt="avatar"
                loading="lazy"
              />
            </a>
            <a href="#" class="inline-block">
              <img
                class="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950"
                src="https://randomuser.me/api/portraits/men/19.jpg"
                alt="avatar"
                loading="lazy"
              />
            </a>
          </dd>
        </div>
        <span class="material-symbols-rounded material-symbols-lg">workspaces</span>
      </section>
    </article>
  </div>
  <article
    class="group flex flex-col justify-start border break-inside rounded-xl text-xs border-border bg-background text-foreground"
    data-filter="social">
    <header class="flex items-center justify-between p-3">
      <h2 class="text-base font-bold">Meeting</h2>
      <button
        class="flex-none inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
        <span class="material-icons">more_horiz</span>
      </button>
    </header>
    <section class="flex items-center justify-between p-3 gap-3 border-y border-border">
      <div class="flex-none inline-flex items-center justify-center rounded-full w-6 h-6 bg-foreground/10">
        <span class="material-symbols-rounded material-symbols-weight-500 material-symbols-md">check</span>
      </div>
      <p class="text-foreground/80">We are a startup company.</p>
    </section>
    <div class="grid p-4 gap-3">
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
  </article>
</section>

<article
  class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground"
  data-filter="social">
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
    <p class="text-foreground/70">Hi there! I'm a designer and developer from San Francisco and I'm looking...</p>
  </section>
</article>

<article
  class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground"
  data-filter="social">
  <header class="flex items-center justify-between">
    <div class="flex items-center gap-4">
      <span class="inline-flex items-center justify-center w-10 h-10 flex-none rounded-full bg-foreground/5">
        <span class="material-symbols-rounded material-symbols-md">edit</span>
      </span>
      <p class="text-sm">Edit this story and share it with your friends and family.</p>
    </div>
  </header>
  <section class="mt-2">
    <p class="truncate text-foreground/70">
      Hi there! I'm a designer and developer from San Francisco and I'm looking...
    </p>
  </section>
</article>

<article
  class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground"
  data-filter="social">
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-3">
      <span
        class="flex flex-none items-center justify-center font-medium w-5 h-5 text-xs rounded-full transition-colors bg-foreground text-background">
        3
      </span>
      <span class="material-symbols-rounded material-symbols-lg">calendar_month</span>
      <span class="font-medium text-sm">December 2025</span>
    </div>
    <button
      class="inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
      <span class="material-symbols-rounded material-symbols-xl">keyboard_arrow_down</span>
    </button>
  </div>
</article>

<article
  class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground"
  data-filter="social">
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-3">
      <span
        class="flex flex-none items-center justify-center font-medium w-5 h-5 text-xs rounded-full transition-colors bg-foreground text-background">
        3
      </span>
      <span class="material-symbols-rounded material-symbols-lg">calendar_month</span>
      <span class="font-medium text-sm">December 2025</span>
    </div>
    <button
      class="inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
      <span class="material-symbols-rounded material-symbols-xl">keyboard_arrow_down</span>
    </button>
  </div>
</article>

<article
  class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground"
  data-filter="social">
  <header class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <h2 class="text-base font-medium">Team Meeting</h2>
      <button
        class="flex items-center justify-center w-6 h-6 rounded-sm transition-colors duration-200 hover:bg-foreground/5 focus:bg-foreground/10">
        <span class="material-symbols-rounded material-symbols-sm">edit</span>
      </button>
    </div>
    <button
      class="inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
      <span class="material-icons">more_horiz</span>
    </button>
  </header>
  <p class="mt-1 text-foreground/70">Design a new logo for our website, we are a startup company.</p>
</article>

<article
  class="border break-inside rounded-xl mb-3 text-xs overflow-hidden border-border bg-background text-foreground"
  data-filter="social">
  <header class="flex items-center justify-between p-3 border-b border-border bg-foreground/5">
    <div class="flex items-center gap-2">
      <h2 class="text-base font-medium">Startup</h2>
      <button
        class="flex items-center justify-center w-6 h-6 rounded-sm transition-colors duration-200 hover:bg-foreground/5 focus:bg-foreground/10">
        <span class="material-symbols-rounded material-symbols-sm">edit</span>
      </button>
    </div>
    <button
      class="inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
      <span class="material-icons">more_horiz</span>
    </button>
  </header>
  <div class="flex items-center justify-start p-3 gap-4">
    <div class="inline-flex items-center justify-center w-9 h-9 flex-none rounded-full bg-warning/20">
      <span class="material-symbols-rounded material-symbols-md">rocket_launch</span>
    </div>
    <p class="text-foreground/70">Design a new logo for our website, we are a startup company.</p>
  </div>
</article>

<section class="break-inside grid grid-cols-2 mb-3 gap-3">
  <div class="flex flex-col gap-3">
    <article
      class="flex flex-col justify-start gap-2 border break-inside rounded-xl text-xs border-border bg-background text-foreground"
      data-filter="social">
      <header class="relative w-full flex items-center justify-between gap-3 px-3 pt-3 pb-5 border-b border-border">
        <h2 class="text-base font-bold">Company</h2>
        <button
          class="flex-none inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
          <span class="material-icons">more_horiz</span>
        </button>
      </header>
      <section class="relative flex items-center justify-between mt-2 p-4">
        <div
          class="overflow-hidden absolute top-0 -mt-8 font-medium p-1 text-sm w-10 h-10 inline-flex flex-none items-center justify-center rounded-full border border-border bg-background">
          <span class="inline-flex items-center justify-center w-full h-full rounded-full bg-foreground/5">M</span>
        </div>
        <h3 class="font-medium">Management Meeting</h3>
        <button
          class="inline-flex flex-none items-center justify-center w-8 h-8 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
          <span class="material-symbols-rounded material-symbols-md">favorite</span>
        </button>
      </section>
    </article>
    <article
      class="flex flex-col justify-start gap-2 border break-inside p-3 rounded-xl text-xs border-border bg-background text-foreground"
      data-filter="social">
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
  <article
    class="group flex flex-col justify-start border break-inside rounded-xl text-xs border-border bg-background text-foreground"
    data-filter="social">
    <header class="flex items-center justify-between p-3">
      <img
        class="flex-none w-12 h-12 rounded-full ring-2 ring-foreground border-2 border-background"
        src="https://randomuser.me/api/portraits/men/86.jpg"
        alt="avatar"
        loading="lazy"
      />
      <button
        class="flex-none inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
        <span class="material-icons">more_horiz</span>
      </button>
    </header>
    <section class="flex items-start justify-start flex-col gap-1 px-3 pb-3 border-b border-border">
      <h2 class="inline-flex items-center text-base font-medium gap-1">
        <span>Alexander</span>
        <span class="material-symbols-rounded material-symbols-fill material-symbols-sm text-primary">
          check_circle
        </span>
      </h2>
      <p class="text-foreground/80">President of the company</p>
    </section>
    <section class="p-3">
      <p>President is the highest-ranking officer in a corporation.</p>
    </section>
  </article>
</section>

<article
  class="border break-inside rounded-xl mb-3 text-xs overflow-hidden border-border bg-background text-foreground"
  data-filter="social">
  <header class="flex items-center justify-between p-3 gap-4 border-b border-border">
    <div class="grid">
      <div class="flex items-center gap-2">
        <h2 class="text-base font-medium">Widget name</h2>
        <button
          class="flex items-center justify-center w-6 h-6 rounded-sm transition-colors duration-200 hover:bg-foreground/5 focus:bg-foreground/10">
          <span class="material-symbols-rounded material-symbols-sm">edit</span>
        </button>
      </div>
      <span class="truncate text-foreground/70">Created in september 2023</span>
    </div>
    <div class="col-start-2 row-start-1 row-end-3 flex-none">
      <dt class="sr-only">Users</dt>
      <dd class="flex justify-start -space-x-1.5">
        <a href="#" class="inline-block -m-0.5">
          <img
            class="w-6 h-6 rounded-full ring-2 ring-background"
            src="https://randomuser.me/api/portraits/women/46.jpg"
            alt="avatar"
            loading="lazy"
          />
        </a>
        <a href="#" class="inline-block -m-0.5">
          <img
            class="w-6 h-6 rounded-full ring-2 ring-background"
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="avatar"
            loading="lazy"
          />
        </a>
        <a href="#" class="inline-block -m-0.5">
          <img
            class="w-6 h-6 rounded-full ring-2 ring-background"
            src="https://randomuser.me/api/portraits/women/47.jpg"
            alt="avatar"
            loading="lazy"
          />
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

<article
  class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground"
  data-filter="social">
  <div class="flex justify-between items-center w-full">
    <div class="flex flex-col justify-center items-center py-1 px-3 rounded-md border-foreground/10 bg-foreground/5">
      <span class="font-medium">Jun</span>
      <span class="text-xs font-medium text-danger">23</span>
    </div>
    <img
      class="flex-none w-10 h-10 rounded-xl"
      src="https://randomuser.me/api/portraits/women/21.jpg"
      alt="avatar"
      loading="lazy"
    />
    <hr class="border h-6 border-border" />
    <div class="flex flex-col justify-center items-start gap-1">
      <span class="text-sm font-medium">Wednesday</span>
      <span class="text-foreground/70">08:00 PM - 18:30 PM</span>
    </div>
  </div>
</article>

<article
  class="relative overflow-hidden border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground"
  data-filter="social">
  <div class="absolute pointer-events-none left-1/2 top-0 w-14 h-14 bg-danger/30 blur-2xl"></div>
  <div class="absolute pointer-events-none left-0 top-0 w-14 h-14 bg-success/30 blur-2xl"></div>
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
    <button
      class="px-2 h-7 text-xs rounded inline-flex items-center justify-center font-medium transition-colors duration-300 text-background bg-foreground">
      Details
    </button>
  </div>
</article>

<section class="relative w-full flex items-center justify-between gap-3 mb-3">
  <article
    class="w-full max-w-1/2 border break-inside rounded-xl p-3 text-xs border-border bg-background text-foreground">
    <div class="flex items-center justify-start w-full gap-3">
      <img
        class="flex-none w-10 h-10 rounded-full object-cover"
        src="https://randomuser.me/api/portraits/men/60.jpg"
        alt="avatar"
        loading="lazy"
      />
      <h2 class="text-sm font-medium">Marcos</h2>
    </div>
  </article>
  <div
    class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full inline-flex items-center justify-center border border-border bg-background">
    <span class="material-symbols-rounded material-symbols-lg text-foreground">compare_arrows</span>
  </div>
  <article
    class="w-full max-w-1/2 border break-inside rounded-xl p-3 text-xs border-border bg-background text-foreground">
    <div class="flex items-center justify-end w-full gap-3">
      <h2 class="text-sm font-medium">Patrick</h2>
      <img
        class="flex-none w-10 h-10 rounded-full object-cover"
        src="https://randomuser.me/api/portraits/men/57.jpg"
        alt="avatar"
        loading="lazy"
      />
    </div>
  </article>
</section>

<article
  class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground"
  data-filter="social">
  <div class="w-full flex items-center justify-between">
    <header class="flex items-center gap-3">
      <span class="text-sm font-medium">01</span>
      <div class="flex items-center gap-4">
        <img
          class="flex-none w-10 h-10 rounded-full"
          src="https://randomuser.me/api/portraits/women/82.jpg"
          alt="avatar"
          loading="lazy"
        />
        <div class="flex-auto">
          <span class="text-foreground/70">September 2023</span>
          <h2 class="text-sm font-medium block">Caroline</h2>
        </div>
      </div>
    </header>
    <button
      class="inline-flex items-center justify-center w-9 h-9 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
      <span class="material-symbols-rounded material-symbols-lg">phone_enabled</span>
    </button>
  </div>
</article>

<article
  class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground"
  data-filter="social">
  <div class="w-full flex items-center justify-between">
    <header class="flex items-center gap-3">
      <span class="material-symbols-rounded material-symbols-lg material-symbols-weight-400">check</span>
      <div class="flex items-center gap-4">
        <img
          class="flex-none w-10 h-10 rounded-full"
          src="https://randomuser.me/api/portraits/women/85.jpg"
          alt="avatar"
          loading="lazy"
        />
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

<article
  class="relative overflow-hidden border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground"
  data-filter="social">
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
    <button
      class="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 hover:bg-danger/10 focus:bg-danger/20 text-danger">
      <span class="material-symbols-rounded material-symbols-lg">delete</span>
    </button>
  </section>
</article>

<article
  class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground"
  data-filter="social">
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
          <span class="material-symbols-rounded material-symbols-fill material-symbols-sm text-primary">
            check_circle
          </span>
        </a>
        <span class="text-foreground/70">Tester &amp; Developer</span>
      </div>
    </div>
    <span class="px-2 h-6 flex items-center justify-center uppercase text-xs rounded bg-primary text-white">NEW</span>
  </div>
</article>

<article
  class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground"
  data-filter="social">
  <div class="flex items-center justify-between gap-4">
    <div class="flex items-center gap-4">
      <img
        class="flex-none w-10 h-10 rounded-full"
        src="https://randomuser.me/api/portraits/men/85.jpg"
        alt="avatar"
        loading="lazy"
      />
      <div class="flex-auto">
        <h2 class="text-sm font-medium">Alexander</h2>
        <span class="text-foreground/70">Last seen 2 hours ago</span>
      </div>
    </div>
    <button
      class="flex flex-none items-center justify-center w-9 h-9 transition-all rounded-full focus:ring-2 focus:ring-primary hover:bg-foreground/5">
      <span class="material-symbols-rounded material-symbols-lg">edit</span>
    </button>
  </div>
</article>

<article
  class="border break-inside rounded-xl mb-3 text-xs border-border bg-background text-foreground"
  data-filter="social">
  <div class="flex items-center justify-between divide-x divide-border">
    <div class="flex items-center gap-4 p-4 h-full flex-1">
      <img
        class="flex-none w-10 h-10 rounded-full"
        src="https://randomuser.me/api/portraits/men/86.jpg"
        alt="avatar"
        loading="lazy"
      />
      <div class="flex-auto">
        <h2 class="text-sm font-medium">Fredrick</h2>
        <span class="text-foreground/70">Last seen 2 hours ago</span>
      </div>
    </div>
    <div class="p-4 h-full">
      <button
        class="flex flex-none items-center justify-center w-9 h-9 transition-all rounded-full focus:ring-2 focus:ring-primary hover:bg-foreground/5">
        <span class="material-symbols-rounded material-symbols-xl">camera</span>
      </button>
    </div>
  </div>
</article>

<article
  class="border break-inside rounded-xl divide-y mb-3 text-xs divide-border border-border bg-background text-foreground"
  data-filter="social">
  <header class="flex items-center justify-between p-3">
    <div class="flex items-center gap-2">
      <h2 class="font-medium text-sm">Director Meeting</h2>
    </div>
    <button
      class="flex flex-none items-center justify-center w-7 h-7 transition-all rounded hover:bg-foreground/5 focus:ring-2 focus:ring-primary">
      <span class="material-symbols-rounded material-symbols-xl">keyboard_arrow_down</span>
    </button>
  </header>
  <section class="flex justify-between items-center p-3">
    <div class="flex items-center gap-3">
      <img
        class="flex-none w-10 h-10 rounded-full object-cover"
        src="https://randomuser.me/api/portraits/men/61.jpg"
        alt="avatar"
        loading="lazy"
      />
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
  <article
    class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 text-xs border-border bg-background text-foreground"
    data-filter="social">
    <header>
      <span class="material-symbols-rounded material-symbols-xl">bed</span>
    </header>
    <section>
      <h2 class="text-sm">Bed time</h2>
      <h3 class="text-base font-semibold">10:00 PM</h3>
    </section>
    <p class="mt-auto text-xs text-foreground/70">Set your bedtime and wake up time...</p>
  </article>
  <article
    class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 text-xs border-border bg-background text-foreground"
    data-filter="social">
    <header>
      <span class="material-symbols-rounded material-symbols-xl">notifications</span>
    </header>
    <section>
      <h2 class="text-sm">Wake up</h2>
      <h3 class="text-base font-semibold">6:00 AM</h3>
    </section>
    <p class="mt-auto text-foreground/70">Set your bedtime and wake up time...</p>
  </article>
  <article
    class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 text-xs border-border bg-background text-foreground"
    data-filter="social">
    <header>
      <span class="material-symbols-rounded material-symbols-xl">calendar_month</span>
    </header>
    <section>
      <h2 class="text-sm">Calendar</h2>
      <h3 class="text-base font-semibold">December, 24</h3>
    </section>
    <p class="mt-auto text-foreground/70">Set your bedtime and wake up time...</p>
  </article>
  <article
    class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 text-xs border-border bg-background text-foreground"
    data-filter="social">
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
            <img
              class="w-6 h-6 rounded-full ring-2 ring-background"
              src="https://randomuser.me/api/portraits/women/47.jpg"
              alt="avatar"
              loading="lazy"
            />
          </a>
          <a href="#" class="inline-block -ml-0.5">
            <img
              class="w-6 h-6 rounded-full ring-2 ring-background"
              src="https://randomuser.me/api/portraits/men/48.jpg"
              alt="avatar"
              loading="lazy"
            />
          </a>
          <a href="#" class="inline-block -ml-0.5">
            <img
              class="w-6 h-6 rounded-full ring-2 ring-background"
              src="https://randomuser.me/api/portraits/women/49.jpg"
              alt="avatar"
              loading="lazy"
            />
          </a>
        </dd>
      </div>
      <h5 class="w-6 h-6 inline-flex flex-none font-medium items-center justify-center rounded-full bg-foreground/10">
        3
      </h5>
    </div>
  </article>
</section>

<section class="break-inside grid grid-cols-2 mb-3 gap-3">
  <div class="flex flex-col gap-3">
    <article
      class="group flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 text-xs border-border bg-background text-foreground"
      data-filter="social">
      <header class="w-full flex items-center justify-between">
        <h2 class="text-sm font-medium">Members</h2>
        <span class="flex items-center justify-center w-5 h-5 text-[11px] rounded-full font-medium bg-warning/50">
          5
        </span>
      </header>
      <section class="flex items-center justify-between mt-2">
        <div class="block">
          <dt class="sr-only">Users</dt>
          <dd class="flex justify-start -space-x-1">
            <a href="#" class="inline-block">
              <img
                class="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950"
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt="avatar"
                loading="lazy"
              />
            </a>
            <a href="#" class="inline-block">
              <img
                class="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950"
                src="https://randomuser.me/api/portraits/men/13.jpg"
                alt="avatar"
                loading="lazy"
              />
            </a>
            <a href="#" class="inline-block">
              <span
                class="flex items-center justify-center text-[11px] font-medium w-6 h-6 rounded-full bg-rose-200 ring-2 ring-white dark:bg-gray-600 dark:ring-gray-950">
                +3
              </span>
            </a>
          </dd>
        </div>
        <span
          class="material-symbols-rounded material-symbols-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          north_east
        </span>
      </section>
    </article>
    <article
      class="group flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 text-xs border-border bg-background text-foreground"
      data-filter="social">
      <header class="w-full flex items-center justify-between">
        <h2 class="text-sm font-bold">Members</h2>
        <span
          class="flex items-center justify-center w-5 h-5 text-[11px] rounded-full font-medium bg-green-200 text-black">
          2
        </span>
      </header>
      <section class="flex items-center justify-between mt-2">
        <div class="block">
          <dt class="sr-only">Users</dt>
          <dd class="flex justify-start -space-x-1.5">
            <a href="#" class="inline-block -ml-1">
              <img
                class="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950"
                src="https://randomuser.me/api/portraits/women/14.jpg"
                alt="avatar"
                loading="lazy"
              />
            </a>
            <a href="#" class="inline-block -ml-1">
              <img
                class="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950"
                src="https://randomuser.me/api/portraits/men/15.jpg"
                alt="avatar"
                loading="lazy"
              />
            </a>
          </dd>
        </div>
        <span
          class="material-symbols-rounded material-symbols-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          north_east
        </span>
      </section>
    </article>
  </div>
  <article
    class="group flex flex-col justify-start border break-inside rounded-xl text-xs border-border bg-background text-foreground"
    data-filter="social">
    <header class="flex items-center justify-between p-4">
      <span
        class="h-6 px-2 text-xs font-medium rounded flex items-center leading-5 justify-center bg-emerald-200 dark:bg-emerald-500/30 dark:text-emerald-300">
        NEW
      </span>
      <button
        class="inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-all rounded-full focus:ring-primary hover:bg-foreground/5">
        <span class="material-icons">more_horiz</span>
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
            <img
              class="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950"
              src="https://randomuser.me/api/portraits/women/48.jpg"
              alt="avatar"
              loading="lazy"
            />
          </a>
          <a href="#" class="inline-block -m-1">
            <img
              class="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950"
              src="https://randomuser.me/api/portraits/men/15.jpg"
              alt="avatar"
              loading="lazy"
            />
          </a>
          <a href="#" class="inline-block -m-1">
            <img
              class="w-6 h-6 rounded-full ring-2 ring-white dark:ring-gray-950"
              src="https://randomuser.me/api/portraits/women/37.jpg"
              alt="avatar"
              loading="lazy"
            />
          </a>
        </dd>
      </div>
      <span
        class="material-symbols-rounded material-symbols-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        north_east
      </span>
    </div>
  </article>
</section>
