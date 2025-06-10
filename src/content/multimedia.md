---
title: "Widget components with tailwind CSS"
description: "Multiple widgets for user interfaces related to finance and economics"
slug: "multimedia"
category: "Multimedia"
visible: true
---

<section class="columns-2 gap-3 mb-3 break-inside">
  <article class="w-full border break-inside flex items-start flex-col justify-between rounded-xl gap-2 p-4 mb-3 text-xs bg-background border-border">
    <header>
      <button class="flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 bg-foreground text-background">
        <span class="material-symbols-fill material-symbols-md">play_arrow</span>
      </button>
    </header>
    <section class="w-full mt-1 grid gap-1">
      <h2 class="text-xs">Bed time</h2>
      <h3 class="text-sm leading-5 font-semibold">Good Together Filatov</h3>
    </section>
    <div class="flex items-center gap-3">
      <img class="flex-none w-8 h-8 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/68.jpg" alt="cover" loading="lazy" />
      <div class="grid">
        <h5 class="truncate text-xs font-semibold">Sunshine sound</h5>
        <p class="text-xs truncate text-foreground/50">Lookee Stefane</p>
      </div>
    </div>
  </article>
  <article
    class="relative border break-inside flex items-start flex-col justify-between rounded-xl gap-2 p-4 mb-3 text-xs overflow-hidden border-emerald-600/50 bg-white dark:bg-gray-950 dark:text-white"
  >
    <div class="absolute left-1/2 top-0 w-14 h-14 bg-emerald-500/30 blur-2xl"></div>
    <header class="w-full">
      <button class="inline-flex items-center justify-center relative w-8 h-8 z-1">
        <span class="w-full h-full pointer-events-none animate-ping top-0 left-0 rounded-full absolute bg-emerald-600"></span>
        <div class="inline-flex items-center justify-center absolute z-[1] w-full h-full flex-none rounded-full bg-emerald-600 dark:border-gray-950 text-white">
          <span class="material-symbols-fill material-symbols-md">pause</span>
        </div>
      </button>
    </header>
    <section class="w-full mt-1 grid gap-1">
      <h2 class="text-xs">Wake up</h2>
      <h3 class="text-sm leading-5 font-semibold">I Feel It Coming The Weeknd</h3>
    </section>
    <div class="flex items-center gap-3">
      <img class="flex-none w-8 h-8 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" alt="cover" loading="lazy" />
      <div class="grid">
        <h5 class="truncate text-xs font-semibold">Fellip Mathias</h5>
        <p class="text-xs truncate text-gray-500">The look m.Stefane</p>
      </div>
    </div>
  </article>
  <article class="relative flex items-center justify-between gap-4 border break-inside rounded-lg p-3 mb-3 text-xs overflow-hidden bg-background border-border">
    <div class="flex flex-col w-full gap-3">
      <div class="w-full flex items-start justify-between">
        <img
          src="https://images.pexels.com/photos/7586658/pexels-photo-7586658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          data-author="https://www.pexels.com/es-es/@cristian-rojas/"
          alt="cover"
          loading="lazy"
          class="w-16 h-20 object-cover rounded-md"
        />
        <button class="w-8 h-8 rounded-full inline-flex flex-none items-center justify-center transition-all duration-300 hover:bg-foreground/10 focus:ring-2 focus:ring-blue-500">
          <span class="material-symbols-rounded material-symbols-lg text-base">more_horiz</span>
        </button>
      </div>
      <section class="grid gap-2">
        <h2 class="text-sm font-semibold">The best pop sounds</h2>
        <p class="text-xs">The best songs of the moment</p>
        <div class="flex w-full items-center justify-between gap-1">
          <span class="font-medium px-2 py-1 rounded bg-emerald-500/10 text-emerald-500">20 songs</span>
          <button class="flex justify-center items-center rounded-full w-7 h-7 transition-all duration-300 bg-foreground text-background focus:ring-2 focus:ring-foreground">
            <span class="material-symbols-fill material-symbols-sm text-base">play_arrow</span>
          </button>
        </div>
      </section>
    </div>
  </article>
  <article class="relative flex items-center justify-between gap-4 border break-inside rounded-lg p-3 mb-3 text-xs overflow-hidden bg-background border-border">
    <div class="flex flex-col w-full gap-3">
      <div class="w-full flex items-start justify-between">
        <img
          src="https://images.pexels.com/photos/8512648/pexels-photo-8512648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          data-author="https://www.pexels.com/es-es/@bigbagfilms/"
          alt="cover"
          loading="lazy"
          class="w-16 h-20 object-cover rounded-md"
        />
        <button class="w-8 h-8 rounded-full inline-flex flex-none items-center justify-center transition-all duration-300 hover:bg-foreground/10 focus:ring-2 focus:ring-blue-500">
          <span class="material-symbols-rounded material-symbols-lg text-base">more_horiz</span>
        </button>
      </div>
      <section class="grid gap-2">
        <h2 class="text-sm font-semibold">Summer chill vibes</h2>
        <p class="text-xs">The best songs of the moment</p>
        <div class="flex w-full items-center justify-between gap-1">
          <span class="font-medium px-2 py-1 rounded bg-foreground/5">18 songs</span>
          <button class="flex justify-center items-center rounded-full w-7 h-7 transition-all duration-300 bg-foreground/10 text-foreground focus:ring-2 focus:ring-foreground">
            <span class="material-symbols-fill material-symbols-sm text-base">play_arrow</span>
          </button>
        </div>
      </section>
    </div>
  </article>
  <article class="relative flex items-center justify-between border break-inside rounded-lg mb-3 text-xs overflow-hidden bg-background border-border">
    <div class="flex flex-col w-full">
      <div class="w-full grid grid-cols-12 border-b border-border divide-x divide-border">
        <figure class="col-span-7">
          <img
            src="https://images.pexels.com/photos/7586658/pexels-photo-7586658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            data-author="https://www.pexels.com/es-es/@cristian-rojas/"
            alt="cover"
            loading="lazy"
            class="w-full h-20 object-cover"
          />
        </figure>
        <div class="flex items-center justify-end p-3 col-span-5">
          <button class="w-8 h-8 rounded-full inline-flex flex-none items-center justify-center transition-all duration-300 hover:bg-foreground/10 focus:ring-2 focus:ring-blue-500">
            <span class="material-symbols-rounded material-symbols-lg text-base">more_horiz</span>
          </button>
        </div>
      </div>
      <section class="grid gap-2 p-3">
        <h2 class="text-sm font-semibold">The best pop sounds</h2>
        <p class="text-xs">The best songs of the moment</p>
        <div class="flex w-full items-center justify-between gap-1">
          <span class="font-medium px-2 py-1 rounded bg-emerald-500/10 text-emerald-500">20 songs</span>
          <button class="flex justify-center items-center rounded-full w-7 h-7 transition-all duration-300 bg-blue-600 text-white">
            <span class="material-symbols-fill material-symbols-sm text-base">play_arrow</span>
          </button>
        </div>
      </section>
    </div>
  </article>
  <article class="relative flex items-center justify-between border break-inside rounded-lg mb-3 text-xs overflow-hidden bg-background border-border">
    <div class="flex flex-col w-full">
      <div class="w-full min-h-20 relative">
        <img
          src="https://images.pexels.com/photos/7586658/pexels-photo-7586658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          data-author="https://www.pexels.com/es-es/@cristian-rojas/"
          alt="cover"
          loading="lazy"
          class="w-full h-full bject-cover"
        />
      </div>
      <section class="grid gap-2 p-3">
        <h2 class="text-sm font-semibold">The best rock sounds</h2>
        <p class="text-xs">Collection of metal and rock music</p>
        <div class="flex w-full items-center justify-between gap-1">
          <span class="font-medium px-2 py-1 rounded bg-blue-500/10 text-blue-500">20 songs</span>
          <div class="flex justify-center items-center rounded-full w-9 h-9 bg-foreground/2">
            <span class="material-symbols-rounded material-symbols-lg material-symbols-weight-200">equalizer</span>
          </div>
        </div>
      </section>
    </div>
  </article>
</section>

<section class="break-inside grid grid-cols-2 mb-3 gap-3">
  <article class="border relative overflow-hidden break-inside flex flex-col justify-between rounded-xl p-4 text-xs bg-rose-600 border-rose-600 text-white">
    <header class="relative flex items-center justify-between">
      <span class="h-6 px-2 font-semibold rounded-sm flex items-center justify-center bg-white text-rose-700">NEW</span>
      <button class="flex justify-center items-center rounded-full w-7 h-7 transition-all duration-300 bg-white text-rose-700 focus:ring-2 focus:ring-white">
        <span class="material-symbols-fill material-symbols-md">play_arrow</span>
      </button>
    </header>
    <section class="grid gap-1 mt-3">
      <h2 class="text-base font-semibold">The best of Dire Straits Album</h2>
      <p class="text-white/90">Three authors will be present at..</p>
    </section>
    <div class="relative flex items-center justify-between mt-3 gap-3">
      <div class="flex gap-[1px] items-center flex-row justify-between w-full h-9 cursor-pointer">
        <div class="w-0.5 h-[15%] rounded-full bg-white"></div>
        <div class="w-0.5 h-[20%] rounded-full bg-white"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-white"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-white"></div>
        <div class="w-0.5 h-[40%] rounded-full bg-white"></div>
        <div class="w-0.5 h-[40%] rounded-full bg-white"></div>
        <div class="w-0.5 h-[40%] rounded-full bg-white"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-white/50"></div>
        <div class="w-0.5 h-[20%] rounded-full bg-white/50"></div>
        <div class="w-0.5 h-[15%] rounded-full bg-white/50"></div>
        <div class="w-0.5 h-[10%] rounded-full bg-white/50"></div>
      </div>
      <button class="inline-flex items-center justify-center w-7 h-7 flex-none transition-all duration-300 rounded-full hover:bg-white/30 focus:ring-2 focus:ring-white">
        <span class="material-symbols-rounded material-symbols-lg text-base">more_horiz</span>
      </button>
    </div>
  </article>
  <div class="flex flex-col gap-3">
    <article class="border break-inside flex flex-col items-start justify-between gap-2 rounded-xl p-3 flex-1 text-xs bg-background border-border">
      <header class="flex items-start gap-2">
        <img class="w-9 h-9 rounded-full" src="https://randomuser.me/api/portraits/men/41.jpg" alt="avatar" loading="lazy" />
        <h2 class="text-sm font-medium">Jhonatan <br /> Smith</h2>
      </header>
      <div class="flex items-center justify-between w-full gap-4">
        <div class="flex gap-[1px] items-center flex-row justify-between w-full h-9 cursor-pointer">
          <div class="w-0.5 h-[15%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[20%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[30%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[40%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[40%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[30%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[30%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[20%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[15%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[10%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[15%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[20%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[30%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[30%] rounded-full bg-foreground/30"></div>
        </div>
        <button class="flex-none flex justify-center items-center rounded-full w-6 h-6 transition-all duration-300 bg-foreground text-background focus:ring-2 focus:ring-foreground">
          <span class="material-symbols-fill material-symbols-sm">pause</span>
        </button>
      </div>
    </article>
    <article class="border break-inside flex flex-col items-start justify-between gap-2 rounded-xl p-3 flex-1 text-xs bg-background border-border">
      <header class="flex items-start gap-2">
        <img class="w-9 h-9 rounded-full" src="https://randomuser.me/api/portraits/women/40.jpg" alt="avatar" loading="lazy" />
        <h2 class="text-sm font-medium">Marianna <br /> Green</h2>
      </header>
      <div class="flex items-center justify-between w-full gap-4">
        <div class="flex gap-[1px] items-center flex-row justify-between w-full h-9 cursor-pointer">
          <div class="w-0.5 h-[15%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[20%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[30%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[30%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[40%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[40%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[30%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[15%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[20%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[30%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[30%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[30%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[20%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[10%] rounded-full bg-foreground/30"></div>
        </div>
        <button class="flex-none flex justify-center items-center rounded-full w-6 h-6 transition-all duration-300 bg-foreground text-background focus:ring-2 focus:ring-foreground">
          <span class="material-symbols-fill material-symbols-sm">play_arrow</span>
        </button>
      </div>
    </article>
  </div>
</section>

<article class="relative flex items-center justify-between gap-4 border break-inside rounded-lg p-4 mb-3 text-xs overflow-hidden bg-background border-border">
  <div class="grid w-full gap-3">
    <div class="w-full flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <img class="flex-none w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/67.jpg" alt="cover" loading="lazy" />
        <div class="grid">
          <h5 class="truncate text-sm font-medium">Sunshine sound</h5>
          <p class="text-xs text-gray-500">Lookee Stefane</p>
        </div>
      </div>
      <button class="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 hover:bg-foreground/10 focus:ring-2 focus:ring-foreground">
        <span class="material-symbols-fill material-symbols-lg">more_horiz</span>
      </button>
    </div>
    <div class="w-full flex justify-between items-center">
      <button
        class="flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-foreground/10 focus:ring-2 focus:ring-foreground focus:bg-foreground focus:text-background"
      >
        <span class="material-symbols-fill material-symbols-md">repeat</span>
      </button>
      <button
        class="flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-foreground/10 focus:ring-2 focus:ring-foreground focus:bg-foreground focus:text-background"
      >
        <span class="material-symbols-fill material-symbols-md">skip_previous</span>
      </button>
      <button class="flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 bg-foreground text-background">
        <span class="material-symbols-fill material-symbols-md">play_arrow</span>
      </button>
      <button
        class="flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-foreground/10 focus:ring-2 focus:ring-foreground focus:bg-foreground focus:text-background"
      >
        <span class="material-symbols-fill material-symbols-md">skip_next</span>
      </button>
      <button
        class="flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-foreground/10 focus:ring-2 focus:ring-foreground focus:bg-foreground focus:text-background"
      >
        <span class="material-symbols-fill material-symbols-md">shuffle</span>
      </button>
    </div>
  </div>
</article>
<article class="relative flex items-center justify-between border break-inside rounded-lg mb-3 text-xs overflow-hidden bg-background border-border">
  <div class="grid w-full divide-y divide-border">
    <div class="w-full flex items-center justify-between gap-4 p-4">
      <div class="flex items-center gap-3">
        <img class="flex-none w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/57.jpg" alt="cover" loading="lazy" />
        <div class="grid">
          <h5 class="truncate text-sm font-medium">Mariam Green</h5>
          <p class="text-xs text-gray-500">The look stefane and lookee</p>
        </div>
      </div>
      <button class="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 hover:bg-foreground/10 focus:ring-2 focus:ring-foreground">
        <span class="material-symbols-fill material-symbols-lg">more_horiz</span>
      </button>
    </div>
    <div class="w-full flex justify-between items-center p-4">
      <button
        class="flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-foreground/10 focus:ring-2 focus:ring-foreground focus:bg-foreground focus:text-background"
      >
        <span class="material-symbols-fill material-symbols-md">repeat</span>
      </button>
      <button
        class="flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-foreground/10 focus:ring-2 focus:ring-foreground focus:bg-foreground focus:text-background"
      >
        <span class="material-symbols-fill material-symbols-md">skip_previous</span>
      </button>
      <button class="flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 bg-foreground text-background">
        <span class="material-symbols-fill material-symbols-md">play_arrow</span>
      </button>
      <button
        class="flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-foreground/10 focus:ring-2 focus:ring-foreground focus:bg-foreground focus:text-background"
      >
        <span class="material-symbols-fill material-symbols-md">skip_next</span>
      </button>
      <button
        class="flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 hover:bg-foreground/10 focus:ring-2 focus:ring-foreground focus:bg-foreground focus:text-background"
      >
        <span class="material-symbols-fill material-symbols-md">shuffle</span>
      </button>
    </div>
  </div>
</article>

<article class="relative flex items-center flex-col justify-between gap-4 border break-inside rounded-xl mb-3 text-xs overflow-hidden bg-background border-border">
  <section class="relative">
    <button
      class="absolute top-3 right-3 z-10 inline-flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:bg-white/20 text-white focus:ring-2 focus:ring-white"
    >
      <span class="material-symbols-fill material-symbols-lg">more_horiz</span>
    </button>
    <img
      src="https://images.pexels.com/photos/28096553/pexels-photo-28096553/free-photo-of-musica-musico-rock-roca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      data-author="https://www.pexels.com/es-es/@keksopad-1753273998/"
      class="w-full max-w-full"
      alt="music"
      loading="lazy"
    />
    <div class="w-full absolute right-0 bottom-0 p-3">
      <div class="rounded-2xl flex gap-4 p-4 items-center w-full bg-blue-900/20 backdrop-blur-md text-white">
        <div class="flex-1 grid">
          <h2 class="text-base font-medium">David Martín</h2>
          <p class="truncate text-white/80">The best music for your ears</p>
        </div>
        <button class="inline-flex items-center justify-center z-[1] w-8 h-8 flex-none rounded-full bg-white text-black transition-all duration-200 hover:ring-2 ring-white">
          <span class="material-symbols-fill material-symbols-lg">play_arrow</span>
        </button>
      </div>
    </div>
  </section>
  <section class="w-full grid gap-2 px-2 pb-2">
    <div
      class="w-full px-4 py-2 rounded-lg flex flex-row items-center group cursor-pointer transition-colors duration-200 ring-2 ring-transparent gap-4 relative hover:bg-gray-100 dark:hover:bg-gray-900 focus-within:ring-rose-500 focus-within:bg-rose-50 focus-within:hover:bg-rose-50 dark:focus-within:hover:bg-rose-500/10 dark:focus-within:bg-rose-500/10"
    >
      <div class="flex-1 flex items-center gap-3">
        <img
          src="https://images.pexels.com/photos/8044064/pexels-photo-8044064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          data-author="https://www.pexels.com/es-es/@anthonyshkraba-production/"
          class="w-11 h-11 rounded-full object-cover"
          alt="avatar"
          loading="lazy"
        />
        <div class="flex-1 grid">
          <h2 class="text-sm font-medium">Tatianna Jaquez</h2>
          <p class="text-xs truncate">Alone in the dark</p>
        </div>
      </div>
      <button
        class="inline-flex items-center justify-center z-[1] w-8 h-8 flex-none group rounded-full transition-colors duration-300 ring-2 ring-transparent focus:bg-rose-600 focus:text-white focus:ring-rose-600 hover:bg-gray-300 dark:hover:bg-gray-800 dark:focus:hover:bg-rose-600"
      >
        <span class="material-symbols-rounded material-symbols-lg text-rose-600 group-focus-within:text-white">favorite</span>
      </button>
    </div>
    <div
      class="w-full px-4 py-2 rounded-lg flex flex-row items-center group cursor-pointer transition-colors duration-200 ring-2 ring-transparent gap-4 relative hover:bg-gray-100 dark:hover:bg-gray-900 focus-within:ring-rose-500 focus-within:bg-rose-50 focus-within:hover:bg-rose-50 dark:focus-within:hover:bg-rose-500/10 dark:focus-within:bg-rose-500/10"
    >
      <div class="flex-1 flex items-center gap-3">
        <img
          src="https://images.pexels.com/photos/3388900/pexels-photo-3388900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          data-author="https://www.pexels.com/es-es/@papa-yaw-956993/"
          class="w-11 h-11 rounded-full object-cover"
          alt="avatar"
          loading="lazy"
        />
        <div class="flex-1 grid">
          <h2 class="text-sm font-medium">Anthony Shkraba</h2>
          <p class="text-xs truncate">First time in the city &amp; I love it</p>
        </div>
      </div>
      <button
        class="inline-flex items-center justify-center z-[1] w-8 h-8 flex-none group rounded-full transition-colors duration-300 ring-2 ring-transparent focus:bg-rose-600 focus:text-white focus:ring-rose-600 hover:bg-gray-300 dark:hover:bg-gray-800 dark:focus:hover:bg-rose-600"
      >
        <span class="material-symbols-rounded material-symbols-lg text-rose-600 group-focus-within:text-white">favorite</span>
      </button>
    </div>
  </section>
</article>

<article class="relative flex items-center justify-between gap-4 border break-inside rounded p-4 mb-3 text-xs overflow-hidden bg-background border-border">
  <div class="w-full flex items-center justify-start gap-3">
    <img
      class="flex-none w-16 h-16 rounded-full object-cover"
      src="https://images.pexels.com/photos/17413080/pexels-photo-17413080/free-photo-of-hombre-silueta-musica-concierto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      data-author="https://www.pexels.com/es-es/@riccardo-vespa-594469796/"
      alt="album cover"
      loading="lazy"
    />
    <div class="grid flex-1 gap-2">
      <div class="flex items-center justify-between gap-4">
        <div class="grid">
          <h2 class="text-sm font-medium">Roman RSK</h2>
          <p class="text-xs truncate text-foreground/70">The sound of the future</p>
        </div>
        <button class="inline-flex items-center justify-center z-[1] w-7 h-7 flex-none rounded-full bg-gradient-to-tr from-rose-500 to-amber-600 text-white">
          <span class="material-symbols-fill material-symbols-sm">pause</span>
        </button>
      </div>
      <div class="w-full flex-1 flex items-center justify-between gap-4">
        <span class="font-medium">01:30</span>
        <div class="w-full flex items-center justify-between h-4 gap-0.5">
          <div class="w-0.5 h-[10%] rounded bg-foreground"></div>
          <div class="w-0.5 h-[20%] rounded bg-foreground"></div>
          <div class="w-0.5 h-[30%] rounded bg-foreground"></div>
          <div class="w-0.5 h-[30%] rounded bg-foreground"></div>
          <div class="w-0.5 h-[30%] rounded bg-foreground"></div>
          <div class="w-0.5 h-[43%] rounded bg-foreground"></div>
          <div class="w-0.5 h-[45%] rounded bg-foreground"></div>
          <div class="w-0.5 h-[48%] rounded bg-foreground"></div>
          <div class="w-0.5 h-[50%] rounded bg-foreground"></div>
          <div class="w-0.5 h-[60%] rounded bg-foreground"></div>
          <div class="w-0.5 h-[70%] rounded bg-foreground"></div>
          <div class="w-0.5 h-[35%] rounded bg-foreground/20"></div>
          <div class="w-0.5 h-[30%] rounded bg-foreground/20"></div>
          <div class="w-0.5 h-[80%] rounded bg-foreground/20"></div>
          <div class="w-0.5 h-[70%] rounded bg-foreground/20"></div>
          <div class="w-0.5 h-[60%] rounded bg-foreground/20"></div>
          <div class="w-0.5 h-[50%] rounded bg-foreground/20"></div>
          <div class="w-0.5 h-[40%] rounded bg-foreground/20"></div>
        </div>
        <span class="font-medium">03:45</span>
      </div>
    </div>
  </div>
</article>

<article class="relative gap-4 break-inside rounded-xl mb-3 text-sm overflow-hidden bg-black">
  <img
    src="https://images.pexels.com/photos/8044064/pexels-photo-8044064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    data-author="https://www.pexels.com/es-es/@anthonyshkraba-production/"
    class="w-full h-full max-w-full absolute top-0 left-0 object-cover pointer-events-none z-0"
    alt="avatar"
    loading="lazy"
  />
  <div class="flex items-center flex-col justify-between backdrop-blur-sm bg-black/50">
    <div class="relative z-1 grid w-full p-4">
      <div class="w-full flex items-center justify-between gap-4">
        <div class="grid flex-1">
          <h2 class="text-base font-medium text-white">Adrian Sava</h2>
          <p class="text-sm truncate text-white/60">Love is in the air &amp; the music</p>
        </div>
        <button
          class="inline-flex items-center justify-center z-[1] w-8 h-8 flex-none group rounded-full transition-colors duration-300 ring-2 ring-transparent text-white focus:bg-white focus:text-black"
        >
          <span class="material-symbols-fill material-symbols-lg">more_horiz</span>
        </button>
      </div>
      <div class="py-4 flex items-center justify-between">
        <button class="w-8 h-8 rounded-full inline-flex items-center justify-center flex-none text-white hover:bg-white/10 focus:ring-2 focus:ring-white transition-all duration-300">
          <span class="material-symbols-fill material-symbols-md">repeat</span>
        </button>
        <button class="w-8 h-8 rounded-full inline-flex items-center justify-center flex-none text-white hover:bg-white/10 focus:ring-2 focus:ring-white transition-all duration-300">
          <span class="material-symbols-fill material-symbols-lg">skip_previous</span>
        </button>
        <button class="w-9 h-9 rounded-full inline-flex items-center justify-center flex-none bg-white text-black focus:ring-2 focus:ring-white transition-all duration-300">
          <span class="material-symbols-fill material-symbols-lg">play_arrow</span>
        </button>
        <button class="w-8 h-8 rounded-full inline-flex items-center justify-center flex-none text-white hover:bg-white/10 focus:ring-2 focus:ring-white transition-all duration-300">
          <span class="material-symbols-fill material-symbols-lg">skip_next</span>
        </button>
        <button class="w-8 h-8 rounded-full inline-flex items-center justify-center flex-none text-white hover:bg-white/10 focus:ring-2 focus:ring-white transition-all duration-300">
          <span class="material-symbols-fill material-symbols-lg">speed_2x</span>
        </button>
      </div>
      <div class="flex items-center justify-between gap-4">
        <span class="text-xs font-semibold text-white">1:30</span>
        <div class="flex flex-1 items-center justify-between h-6 gap-0.5">
          <div class="w-0.5 h-[10%] rounded bg-white"></div>
          <div class="w-0.5 h-[20%] rounded bg-white"></div>
          <div class="w-0.5 h-[30%] rounded bg-white"></div>
          <div class="w-0.5 h-[40%] rounded bg-white"></div>
          <div class="w-0.5 h-[40%] rounded bg-white"></div>
          <div class="w-0.5 h-[50%] rounded bg-white"></div>
          <div class="w-0.5 h-[50%] rounded bg-white"></div>
          <div class="w-0.5 h-[60%] rounded bg-white"></div>
          <div class="w-0.5 h-[30%] rounded bg-white"></div>
          <div class="w-0.5 h-[30%] rounded bg-white"></div>
          <div class="w-0.5 h-[45%] rounded bg-white"></div>
          <div class="w-0.5 h-[88%] rounded bg-white"></div>
          <div class="w-0.5 h-[30%] rounded bg-white"></div>
          <div class="w-0.5 h-[22%] rounded bg-white/20"></div>
          <div class="w-0.5 h-[20%] rounded bg-white/20"></div>
          <div class="w-0.5 h-[18%] rounded bg-white/20"></div>
          <div class="w-0.5 h-[16%] rounded bg-white/20"></div>
          <div class="w-0.5 h-[36%] rounded bg-white/20"></div>
          <div class="w-0.5 h-[30%] rounded bg-white/20"></div>
          <div class="w-0.5 h-[28%] rounded bg-white/20"></div>
          <div class="w-0.5 h-[26%] rounded bg-white/20"></div>
          <div class="w-0.5 h-[24%] rounded bg-white/20"></div>
          <div class="w-0.5 h-[22%] rounded bg-white/20"></div>
          <div class="w-0.5 h-[18%] rounded bg-white/20"></div>
          <div class="w-0.5 h-[10%] rounded bg-white/20"></div>
          <div class="w-0.5 h-[12%] rounded bg-white/20"></div>
          <div class="w-0.5 h-[14%] rounded bg-white/20"></div>
          <div class="w-0.5 h-[16%] rounded bg-white/20"></div>
          <div class="w-0.5 h-[18%] rounded bg-white/20"></div>
          <div class="w-0.5 h-[22%] rounded bg-white/20"></div>
        </div>
        <span class="text-xs font-semibold text-white">3:00</span>
      </div>
    </div>
    <section class="w-full grid gap-1 px-2 pb-2">
      <div
        class="w-full px-4 py-2 rounded-lg flex flex-row items-center group cursor-pointer transition-colors duration-200 ring-2 ring-transparent gap-4 relative text-white hover:bg-white/10 focus-within:ring-white/40 focus-within:bg-white/20 focus-within:hover:bg-white/20"
      >
        <div class="flex-1 flex items-center gap-3">
          <img
            src="https://images.pexels.com/photos/8044064/pexels-photo-8044064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            data-author="https://www.pexels.com/es-es/@anthonyshkraba-production/"
            class="w-11 h-11 rounded-full object-cover"
            alt="avatar"
            loading="lazy"
          />
          <div class="flex-1 grid">
            <h2 class="text-sm font-medium">Tatianna Jaquez</h2>
            <p class="text-xs truncate text-white/60">Alone in the dark</p>
          </div>
        </div>
        <button
          class="inline-flex items-center justify-center z-[1] w-8 h-8 flex-none group rounded-full transition-colors duration-300 ring-2 ring-transparent focus:bg-amber-500 focus:text-white focus:ring-amber-500 hover:bg-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke-width="2"
              class="transition-colors duration-200 stroke-white group-focus:stroke-white group-focus:fill-white"
              d="M1 8.4C1 4 4.5 3 6.5 3C9 3 11 5 12 6.5C13 5 15 3 17.5 3c2 0 5.5 1 5.5 5.4C23 15 12 21 12 21S1 15 1 8.4Z"></path>
          </svg>
        </button>
      </div>
      <div
        class="w-full px-4 py-2 rounded-lg flex flex-row items-center group cursor-pointer transition-colors duration-200 ring-2 ring-transparent gap-4 relative text-white hover:bg-white/10 focus-within:ring-white/40 focus-within:bg-white/20 focus-within:hover:bg-white/20"
      >
        <div class="flex-1 flex items-center gap-3">
          <img
            src="https://images.pexels.com/photos/3388900/pexels-photo-3388900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            data-author="https://www.pexels.com/es-es/@papa-yaw-956993/"
            class="w-11 h-11 rounded-full object-cover"
            alt="avatar"
            loading="lazy"
          />
          <div class="flex-1 grid">
            <h2 class="text-sm font-medium">Anthony Shkraba</h2>
            <p class="text-xs truncate text-white/60">First time in the city &amp; I love it</p>
          </div>
        </div>
        <button
          class="inline-flex items-center justify-center z-[1] w-8 h-8 flex-none group rounded-full transition-colors duration-300 ring-2 ring-transparent focus:bg-amber-500 focus:text-white focus:ring-amber-500 hover:bg-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke-width="2"
              class="transition-colors duration-200 stroke-white group-focus:stroke-white group-focus:fill-white"
              d="M1 8.4C1 4 4.5 3 6.5 3C9 3 11 5 12 6.5C13 5 15 3 17.5 3c2 0 5.5 1 5.5 5.4C23 15 12 21 12 21S1 15 1 8.4Z"></path>
          </svg>
        </button>
      </div>
      <div
        class="w-full px-4 py-2 rounded-lg flex flex-row items-center group cursor-pointer transition-colors duration-200 ring-2 ring-transparent gap-4 relative text-white hover:bg-white/10 focus-within:ring-white/40 focus-within:bg-white/20 focus-within:hover:bg-white/20"
      >
        <div class="flex-1 flex items-center gap-3">
          <img
            src="https://images.pexels.com/photos/9009499/pexels-photo-9009499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            data-author="https://www.pexels.com/es-es/@yankrukov/"
            class="w-11 h-11 rounded-full object-cover"
            alt="avatar"
            loading="lazy"
          />
          <div class="flex-1 grid">
            <h2 class="text-sm font-medium">Fabrizio Verrecchia</h2>
            <p class="text-xs truncate text-white/60">The best music</p>
          </div>
        </div>
        <button class="inline-flex items-center justify-center z-[1] w-8 h-8 flex-none group rounded-full transition-colors duration-300 ring-2 ring-transparent bg-rose-500 text-white">
          <span class="material-symbols-fill material-symbols-sm">favorite</span>
        </button>
      </div>
    </section>
  </div>
</article>

<article class="relative overflow-hidden break-inside rounded p-px mb-3 text-sm">
  <div class="absolute -top-4 -left-4 -right-8 -bottom-4 flex z-0 blur-md transition-all duration-500">
    <div class="flex-1 bg-amber-600"></div>
    <div class="flex-1 bg-rose-600"></div>
    <div class="flex-1 bg-red-600"></div>
    <div class="flex-1 bg-pink-600"></div>
    <div class="flex-1 bg-blue-600"></div>
    <div class="flex-1 bg-cyan-600"></div>
    <div class="flex-1 bg-green-600"></div>
  </div>
  <div class="flex items-center justify-between relative z-1 w-full rounded gap-4 p-3 bg-background">
    <div class="w-full flex items-center justify-start gap-4">
      <img class="flex-none rounded-full w-9 h-9" src="https://randomuser.me/api/portraits/men/77.jpg" alt="avatar" loading="lazy" />
      <div class="flex gap-px items-center flex-row justify-between w-full h-9 cursor-pointer">
        <div class="w-0.5 h-[15%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[20%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[20%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[24%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[28%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[34%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[35%] rounded-full bg-foreground/20"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-foreground/20"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-foreground/20"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-foreground/20"></div>
        <div class="w-0.5 h-[20%] rounded-full bg-foreground/20"></div>
        <div class="w-0.5 h-[25%] rounded-full bg-foreground/20"></div>
        <div class="w-0.5 h-[15%] rounded-full bg-foreground/20"></div>
        <div class="w-0.5 h-[10%] rounded-full bg-foreground/20"></div>
        <div class="w-0.5 h-[15%] rounded-full bg-foreground/20"></div>
        <div class="w-0.5 h-[20%] rounded-full bg-foreground/20"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-foreground/20"></div>
        <div class="w-0.5 h-[10%] rounded-full bg-foreground/20"></div>
      </div>
    </div>
    <div class="inline-flex items-center justify-end gap-1 flex-1 p-1 rounded bg-foreground/5">
      <button class="flex justify-center items-center rounded w-7 h-7 transition-colors duration-300 text-black dark:text-white">
        <span class="material-symbols-fill material-symbols-md">skip_previous</span>
      </button>
      <button class="flex justify-center items-center rounded w-7 h-7 transition-colors duration-300 bg-white text-black">
        <span class="material-symbols-fill material-symbols-md">pause</span>
      </button>
      <button class="flex justify-center items-center rounded w-7 h-7 transition-colors duration-300 text-black dark:text-white">
        <span class="material-symbols-fill material-symbols-md">skip_next</span>
      </button>
    </div>
  </div>
</article>

<article class="flex items-center overflow-hidden break-inside rounded-xl mb-3 p-4 gap-4 text-xs border bg-background border-border">
  <img class="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/17.jpg" alt="avatar" loading="lazy" />
  <h2 class="font-medium text-sm">Leonardo Brown</h2>
  <div class="inline-flex items-center justify-center flex-1 gap-1 p-1 rounded-full border border-border bg-foreground/5">
    <button class="flex justify-center items-center rounded-full w-7 h-7 transition-colors duration-300 text-black dark:text-white hover:bg-foreground/5">
      <span class="material-symbols-fill material-symbols-md">skip_previous</span>
    </button>
    <button class="flex justify-center items-center rounded-full w-7 h-7 transition-colors duration-300 bg-foreground text-background">
      <span class="material-symbols-fill material-symbols-sm material-symbols-weight-200">pause</span>
    </button>
    <button class="flex justify-center items-center rounded-full w-7 h-7 transition-colors duration-300 text-black dark:text-white hover:bg-foreground/5">
      <span class="material-symbols-fill material-symbols-md">skip_next</span>
    </button>
  </div>
</article>

<article class="relative flex items-center justify-between gap-4 border break-inside rounded-xl py-4 mb-3 text-xs overflow-hidden bg-background border-border">
  <div class="w-full flex flex-col overflow-hidden">
    <div class="space-y-4 relative overflow-hidden">
      <section class="flex items-center justify-between px-4">
        <h2 class="text-base font-semibold">Recommended</h2>
      </section>
      <section class="flex items-center justify-start overflow-auto pl-4 gap-2 pb-2">
        <div class="w-full max-w-20 flex-none flex flex-col gap-1 group">
          <div class="h-14 rounded overflow-hidden">
            <img
              src="https://images.pexels.com/photos/9008763/pexels-photo-9008763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="https://www.pexels.com/es-es/@yankrukov/"
              alt="Cover"
              class="w-full h-full max-w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div class="w-full">
            <h4 class="truncate font-medium">The saxo of the 80s</h4>
            <p class="truncate">Yan Krukau and Pavel</p>
          </div>
        </div>
        <div class="w-full max-w-20 flex-none flex flex-col gap-1 group">
          <div class="h-14 rounded overflow-hidden">
            <img
              src="https://images.pexels.com/photos/8044098/pexels-photo-8044098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="https://www.pexels.com/es-es/@anthonyshkraba-production/"
              alt="Cover"
              class="w-full h-full max-w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div class="w-full">
            <h4 class="truncate font-medium">The saxo of the 80s</h4>
            <p class="truncate">Yan Krukau and Pavel</p>
          </div>
        </div>
        <div class="w-full max-w-20 flex-none flex flex-col gap-1 group">
          <div class="h-14 rounded overflow-hidden">
            <img
              src="https://images.pexels.com/photos/8132766/pexels-photo-8132766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="https://www.pexels.com/es-es/@anna-pou/"
              alt="Cover"
              class="w-full h-full max-w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div class="w-full">
            <h4 class="truncate font-medium">The saxo of the 80s</h4>
            <p class="truncate">Yan Krukau and Pavel</p>
          </div>
        </div>
        <div class="w-full max-w-20 flex-none flex flex-col gap-1 group">
          <div class="h-14 rounded overflow-hidden">
            <img
              src="https://images.pexels.com/photos/8132766/pexels-photo-8132766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              data-author="https://www.pexels.com/es-es/@anna-pou/"
              alt="Cover"
              class="w-full h-full max-w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div class="w-full">
            <h4 class="truncate font-medium">The saxo of the 80s</h4>
            <p class="truncate">Yan Krukau and Pavel</p>
          </div>
        </div>
      </section>
      <section class="flex items-center justify-between px-4">
        <h2 class="text-base font-semibold">Recommended artists</h2>
      </section>
      <section class="flex items-center justify-start overflow-auto pl-4 gap-1 pb-2">
        <button class="w-full flex-none max-w-14 grid place-items-center p-1 rounded-md transition-colors duration-200 hover:bg-foreground/5">
          <img class="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/76.jpg" alt="avatar" loading="lazy" />
          <h2 class="text-xs font-medium mt-1">Jhon</h2>
        </button>
        <button class="w-full flex-none max-w-14 grid place-items-center p-1 rounded-md transition-colors duration-200 hover:bg-foreground/5">
          <img class="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/women/76.jpg" alt="avatar" loading="lazy" />
          <h2 class="text-xs font-medium mt-1">Tina</h2>
        </button>
        <button class="w-full flex-none max-w-14 grid place-items-center p-1 rounded-md transition-colors duration-200 hover:bg-foreground/5">
          <img class="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/78.jpg" alt="avatar" loading="lazy" />
          <h2 class="text-xs font-medium mt-1">Jhonas</h2>
        </button>
        <button class="w-full flex-none max-w-14 grid place-items-center p-1 rounded-md transition-colors duration-200 hover:bg-foreground/5">
          <img class="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/79.jpg" alt="avatar" loading="lazy" />
          <h2 class="text-xs font-medium mt-1">Mathiaz</h2>
        </button>
        <button class="w-full flex-none max-w-14 grid place-items-center p-1 rounded-md transition-colors duration-200 hover:bg-foreground/5">
          <img class="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/16.jpg" alt="avatar" loading="lazy" />
          <h2 class="text-xs font-medium mt-1">Fabio</h2>
        </button>
        <button class="w-full flex-none max-w-14 grid place-items-center p-1 rounded-md transition-colors duration-200 hover:bg-foreground/5">
          <img class="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/46.jpg" alt="avatar" loading="lazy" />
          <h2 class="text-xs font-medium mt-1">Miller</h2>
        </button>
        <button class="w-full flex-none max-w-14 grid place-items-center p-1 rounded-md transition-colors duration-200 hover:bg-foreground/5">
          <img class="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/women/86.jpg" alt="avatar" loading="lazy" />
          <h2 class="text-xs font-medium mt-1">Jessy</h2>
        </button>
        <button class="w-full flex-none max-w-14 grid place-items-center p-1 rounded-md transition-colors duration-200 hover:bg-foreground/5">
          <img class="flex-none rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/36.jpg" alt="avatar" loading="lazy" />
          <h2 class="text-xs font-medium mt-1">Jack</h2>
        </button>
      </section>
      <section class="flex items-center justify-between px-4">
        <h2 class="text-base font-semibold">Top 10 albums</h2>
      </section>
      <section class="flex items-center justify-start overflow-auto pl-4 gap-2 pb-2">
        <div class="flex flex-col gap-1 w-full max-w-[4rem]">
          <img
            src="https://images.pexels.com/photos/9008763/pexels-photo-9008763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            data-author="https://www.pexels.com/es-es/@yankrukov/"
            alt="Cover"
            class="w-full object-cover rounded"
          />
          <div class="w-full">
            <h4 class="truncate font-medium">The saxo of the 80s</h4>
            <p class="truncate">Yan Krukau and Pavel</p>
          </div>
        </div>
        <div class="flex flex-col gap-1 w-full max-w-[4rem]">
          <img
            src="https://images.pexels.com/photos/8044098/pexels-photo-8044098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            data-author="https://www.pexels.com/es-es/@anthonyshkraba-production/"
            alt="Cover"
            class="w-full object-cover rounded"
          />
          <div class="w-full">
            <h4 class="truncate font-medium">The saxo of the 80s</h4>
            <p class="truncate">Yan Krukau and Pavel</p>
          </div>
        </div>
        <div class="flex flex-col gap-1 w-full max-w-[4rem]">
          <img
            src="https://images.pexels.com/photos/8132766/pexels-photo-8132766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            data-author="https://www.pexels.com/es-es/@anna-pou/"
            alt="Cover"
            class="w-full object-cover rounded"
          />
          <div class="w-full">
            <h4 class="truncate font-medium">The saxo of the 80s</h4>
            <p class="truncate">Yan Krukau and Pavel</p>
          </div>
        </div>
        <div class="flex flex-col gap-1 w-full max-w-[4rem]">
          <img
            src="https://images.pexels.com/photos/8132766/pexels-photo-8132766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            data-author="https://www.pexels.com/es-es/@anna-pou/"
            alt="Cover"
            class="w-full object-cover rounded"
          />
          <div class="w-full">
            <h4 class="truncate font-medium">The saxo of the 80s</h4>
            <p class="truncate">Yan Krukau and Pavel</p>
          </div>
        </div>
        <div class="flex flex-col gap-1 w-full max-w-[4rem]">
          <img
            src="https://images.pexels.com/photos/8132766/pexels-photo-8132766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            data-author="https://www.pexels.com/es-es/@anna-pou/"
            alt="Cover"
            class="w-full object-cover rounded"
          />
          <div class="w-full">
            <h4 class="truncate font-medium">The saxo of the 80s</h4>
            <p class="truncate">Yan Krukau and Pavel</p>
          </div>
        </div>
        <div class="flex flex-col gap-1 w-full max-w-[4rem]">
          <img
            src="https://images.pexels.com/photos/8132766/pexels-photo-8132766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            data-author="https://www.pexels.com/es-es/@anna-pou/"
            alt="Cover"
            class="w-full object-cover rounded"
          />
          <div class="w-full">
            <h4 class="truncate font-medium">The saxo of the 80s</h4>
            <p class="truncate">Yan Krukau and Pavel</p>
          </div>
        </div>
      </section>
    </div>
    <div class="w-full flex justify-between items-center pt-4 px-4">
      <button class="flex justify-center items-center rounded-full w-9 h-9 transition-all duration-300 hover:bg-foreground/5 focus:bg-foreground focus:text-background">
        <span class="material-symbols-fill material-symbols-md">shuffle</span>
      </button>
      <button class="flex justify-center items-center rounded-full w-9 h-9 transition-all duration-300 hover:bg-foreground/5 focus:bg-foreground focus:text-background">
        <span class="material-symbols-fill material-symbols-md">skip_previous</span>
      </button>
      <button class="flex justify-center items-center rounded-full w-9 h-9 transition-colors duration-300 bg-gray-900 text-white dark:bg-gray-100 dark:text-black">
        <span class="material-symbols-fill material-symbols-md">play_arrow</span>
      </button>
      <button class="flex justify-center items-center rounded-full w-9 h-9 transition-all duration-300 hover:bg-foreground/5 focus:bg-foreground focus:text-background">
        <span class="material-symbols-fill material-symbols-md">skip_next</span>
      </button>
      <button class="flex justify-center items-center rounded-full w-9 h-9 transition-all duration-300 hover:bg-foreground/5 focus:bg-foreground focus:text-background">
        <span class="material-symbols-fill material-symbols-md">mic</span>
      </button>
    </div>
  </div>
</article>
