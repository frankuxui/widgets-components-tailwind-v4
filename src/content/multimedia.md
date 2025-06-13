---
title: "Widget components with tailwind CSS"
description: "Multiple widgets for user interfaces related to finance and economics"
slug: "multimedia"
category: "Multimedia"
visible: true
---

<article class="relative flex items-center justify-between border break-inside rounded-lg mb-3 text-sm overflow-hidden bg-background border-border">
  <div class="flex items-center justify-start gap-4 p-4 border-r border-border">
    <img
      src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=200&w=200"
      data-author="https://unsplash.com/es/@gabrielgurrola"
      alt="Album cover"
      class="w-10 h-10 rounded-full object-cover"
    />
    <span class="w-8 h-8 rounded-full inline-flex flex-none items-center justify-center">
      <svg data-icon="equalizer" xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 -960 960 960" fill="currentColor" ><path d="M263.06-212q-22.06 0-36.56-14.58Q212-241.15 212-263.5v-104q0-21.14 14.63-35.82T263.44-418q21.56 0 36.06 14.68Q314-388.64 314-367.5v104q0 22.35-14.73 36.92Q284.53-212 263.06-212Zm216.92 0q-21.98 0-36.23-14.51-14.25-14.52-14.25-36.78v-434.03q0-21.23 14.56-35.95Q458.63-748 480.31-748q21.69 0 36.44 14.74 14.75 14.74 14.75 35.98v434.02q0 22.27-14.77 36.76-14.77 14.5-36.75 14.5Zm217.08 0q-22.06 0-36.56-14.58Q646-241.15 646-263.4v-244.1q0-21.14 14.63-35.82T697.44-558q21.56 0 36.06 14.68Q748-528.64 748-507.5v244.1q0 22.25-14.73 36.82Q718.53-212 697.06-212Z" ></path></svg >
    </span>
  </div>
  <div class="flex items-center flex-1 p-4">
    <div class="flex-1 flex-col items-start flex">
      <h2 class="text-base font-semibold text-foreground">Audioslave</h2>
      <p class="text-xs text-foreground/70">Like a Stone</p>
    </div>
    <button class="w-8 h-8 rounded-full inline-flex flex-none items-center justify-center hover:bg-foreground/5 focus:ring-2 focus:bg-background">
      <svg data-icon="more-horiz" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="currentColor" ><path d="M213.07-406q-30.59 0-52.21-21.79-21.63-21.78-21.63-52.37 0-30.59 21.79-52.21Q182.8-554 213.39-554q30.59 0 52.22 21.79 21.62 21.78 21.62 52.37 0 30.59-21.78 52.21Q243.66-406 213.07-406Zm266.77 0q-30.59 0-52.21-21.79Q406-449.57 406-480.16q0-30.59 21.79-52.21Q449.57-554 480.16-554q30.59 0 52.21 21.79Q554-510.43 554-479.84q0 30.59-21.79 52.21Q510.43-406 479.84-406Zm266.77 0q-30.59 0-52.22-21.79-21.62-21.78-21.62-52.37 0-30.59 21.78-52.21Q716.34-554 746.93-554q30.59 0 52.21 21.79 21.63 21.78 21.63 52.37 0 30.59-21.79 52.21Q777.2-406 746.61-406Z" ></path></svg >
    </button>
  </div>
</article>

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
        <svg data-icon="more-horiz" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="currentColor" ><path d="M213.07-406q-30.59 0-52.21-21.79-21.63-21.78-21.63-52.37 0-30.59 21.79-52.21Q182.8-554 213.39-554q30.59 0 52.22 21.79 21.62 21.78 21.62 52.37 0 30.59-21.78 52.21Q243.66-406 213.07-406Zm266.77 0q-30.59 0-52.21-21.79Q406-449.57 406-480.16q0-30.59 21.79-52.21Q449.57-554 480.16-554q30.59 0 52.21 21.79Q554-510.43 554-479.84q0 30.59-21.79 52.21Q510.43-406 479.84-406Zm266.77 0q-30.59 0-52.22-21.79-21.62-21.78-21.62-52.37 0-30.59 21.78-52.21Q716.34-554 746.93-554q30.59 0 52.21 21.79 21.63 21.78 21.63 52.37 0 30.59-21.79 52.21Q777.2-406 746.61-406Z" ></path></svg >
      </button>
    </div>
    <div class="w-full flex justify-between items-center">
      <button class="flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-foreground/10 focus:bg-foreground focus:text-background">
        <svg data-icon="repeat" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg >
      </button>
      <button class="flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-foreground/10 focus:bg-foreground focus:text-background">
        <svg data-icon="skip-previous-outline" xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 -960 960 960" fill="currentColor" ><path d="M244.62-297.69v-364.62q0-12.75 8.63-21.37 8.62-8.63 21.38-8.63t21.37 8.63q8.62 8.62 8.62 21.37v364.62q0 12.75-8.63 21.37-8.63 8.63-21.39 8.63-12.75 0-21.37-8.63-8.61-8.62-8.61-21.37Zm414.53-7.16L441.92-450.08q-8.23-5.61-12.15-13.15T425.85-480q0-9.23 3.92-16.77 3.92-7.54 12.15-13.15l217.23-145.23q4.62-3.62 9.85-4.62 5.23-1 10.23-1 14.46 0 25.31 9.94 10.84 9.95 10.84 26.22v289.22q0 16.27-10.84 26.22-10.85 9.94-25.31 9.94-5 0-10.23-1t-9.85-4.62ZM655.38-480Zm0 100v-200L504.77-480l150.61 100Z" ></path></svg >
      </button>
      <button class="flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 bg-foreground text-background">
        <svg data-icon="play-fill" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" ><path d="M340-302.23v-355.54q0-15.84 10.87-26 10.87-10.15 25.37-10.15 4.53 0 9.5 1.31 4.97 1.3 9.49 3.92l279.84 178.15q8.24 5.62 12.35 13.46 4.12 7.85 4.12 17.08 0 9.23-4.12 17.08-4.11 7.84-12.35 13.46L395.23-271.31q-4.53 2.62-9.52 3.92-4.98 1.31-9.51 1.31-14.51 0-25.35-10.15-10.85-10.16-10.85-26Z" ></path></svg >
      </button>
      <button class="flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-foreground/10 focus:bg-foreground focus:text-background">
        <svg data-icon="skip-next-outline" xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 -960 960 960" fill="currentColor" ><path d="M655.38-297.69v-364.62q0-12.75 8.63-21.37 8.63-8.63 21.39-8.63 12.75 0 21.37 8.63 8.61 8.62 8.61 21.37v364.62q0 12.75-8.63 21.37-8.62 8.63-21.38 8.63T664-276.32q-8.62-8.62-8.62-21.37Zm-410.76-37.7v-289.22q0-16.27 10.84-26.22 10.85-9.94 25.31-9.94 5 0 10.23 1t9.85 4.62l217.23 145.23q8.23 5.61 12.15 13.15t3.92 16.77q0 9.23-3.92 16.77-3.92 7.54-12.15 13.15L300.85-304.85q-4.62 3.62-9.85 4.62-5.23 1-10.23 1-14.46 0-25.31-9.94-10.84-9.95-10.84-26.22Zm60-144.61Zm0 100 150.61-100-150.61-100v200Z" ></path></svg >
      </button>
      <button class="flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 hover:bg-foreground/10 focus:bg-foreground focus:text-background">
        <svg data-icon="shuffle" xmlns="http://www.w3.org/2000/svg" height="22px" width="22px" viewBox="0 -960 960 960" fill="currentColor" ><path d="M605.61-148q-15.74 0-25.87-10.63-10.12-10.63-10.12-26.38 0-15.76 10.62-25.87Q590.87-221 606.61-221h83.01L572.77-337.85q-10.92-10.92-10.81-24.69.12-13.77 11.42-25.08 11.31-11.3 24.89-11.3t24.88 11.3L739-272.15v-82.08q0-15.75 10.63-25.88 10.63-10.12 26.38-10.12 15.76 0 25.87 10.12Q812-369.98 812-354.23v157.07q0 20.37-14.4 34.76-14.39 14.4-34.76 14.4H605.61Zm-447.69-9.92q-11.69-11.7-11.69-25.08 0-13.39 11.69-25.08L688.85-739h-83.24q-15.74 0-25.87-10.63-10.12-10.63-10.12-26.38 0-15.76 10.62-25.87Q590.87-812 606.61-812h156.23q20.37 0 34.76 14.4 14.4 14.39 14.4 34.76v156.07q0 15.75-10.13 25.88-10.13 10.12-25.88 10.12-15.76 0-26.37-10.62Q739-592.02 739-607.77v-81.08L208.08-157.92q-11.31 11.3-24.89 11.5-13.57.19-25.27-11.5Zm.39-594.39q-11.31-11.3-11.12-24.88.2-13.58 11.43-24.89 11.23-11.3 25.07-11.3 13.85 0 24.77 11.3l176.85 177.62q11.3 11.31 11.11 24.88-.19 13.58-11.11 24.57-11.18 11.24-24.82 11.24t-24.95-11.31L158.31-752.31Z" ></path></svg >
      </button>
    </div>
  </div>
</article>

<article class="relative border overflow-hidden break-inside grid grid-cols-12 rounded-xl mb-3 text-xs bg-background text-foreground border-border">
  <div class="relative col-span-4">
    <img
      class="w-full max-w-full h-full max-h-[7rem] object-cover gap-4"
      src="https://images.pexels.com/photos/2114758/pexels-photo-2114758.jpeg?w=300&h=400&dpr=2"
      data-author="Kevin Bidwell"
      data-author-profile="https://www.pexels.com/es-es/@kevinbidwell/"
      loading="lazy"
    />
    <span class="absolute bottom-3 left-3 rounded inline-flex items-center justify-center font-medium text-xs px-2 h-6 bg-black/80 backdrop-blur-sm text-white">NEW</span>
  </div>
  <div class="p-4 flex flex-col justify-between col-span-8">
    <div class="flex items-center justify-between gap-4 mb-auto">
      <div class="relative z-[1] grid flex-1">
        <a href="#" class="text-sm font-semibold block">David Martín</a>
        <p class="text-xs truncate text-gray-600 dark:text-gray-400">The best music for your ears</p>
      </div>
      <button class="inline-flex items-center justify-center z-[1] w-8 h-8 flex-none rounded-full bg-foreground text-background">
        <svg data-icon="pause" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 -960 960 960" fill="currentColor" ><path d="M588.65-240.92q-12.86 0-21.52-9.08-8.67-9.08-8.67-21.12v-417.76q0-12.04 8.67-21.12 8.66-9.08 21.52-9.08h85.58q12.03 0 21.11 9.08t9.08 21.12v417.76q0 12.04-9.08 21.12-9.08 9.08-21.11 9.08h-85.58Zm-302 0q-12.86 0-21.52-9.08-8.67-9.08-8.67-21.12v-417.76q0-12.04 8.67-21.12 8.66-9.08 21.52-9.08H373q11.44 0 20.81 9.08 9.38 9.08 9.38 21.12v417.76q0 12.04-9.38 21.12-9.37 9.08-20.81 9.08h-86.35Z" ></path></svg >
      </button>
    </div>
    <div class="w-full flex items-end justify-between h-6 gap-0.5">
      <div class="w-0.5 h-[10%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[20%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[30%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[40%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[40%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[30%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[30%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[40%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[60%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[80%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[30%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[30%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[45%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[88%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[70%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[20%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[30%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[40%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[50%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[45%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[58%] rounded bg-foreground"></div>
      <div class="w-0.5 h-[46%] rounded bg-foreground/20"></div>
      <div class="w-0.5 h-[35%] rounded bg-foreground/20"></div>
      <div class="w-0.5 h-[30%] rounded bg-foreground/20"></div>
      <div class="w-0.5 h-[40%] rounded bg-foreground/20"></div>
      <div class="w-0.5 h-[50%] rounded bg-foreground/20"></div>
      <div class="w-0.5 h-[60%] rounded bg-foreground/20"></div>
      <div class="w-0.5 h-[80%] rounded bg-foreground/20"></div>
      <div class="w-0.5 h-[70%] rounded bg-foreground/20"></div>
      <div class="w-0.5 h-[60%] rounded bg-foreground/20"></div>
      <div class="w-0.5 h-[50%] rounded bg-foreground/20"></div>
      <div class="w-0.5 h-[40%] rounded bg-foreground/20"></div>
    </div>
  </div>
</article>

<article
  class="relative flex items-center justify-between gap-4 border break-inside rounded-lg p-4 mb-3 text-xs overflow-hidden border-emerald-200 bg-white dark:bg-gray-950 dark:text-white dark:border-emerald-900"
>
  <div class="absolute top-0 bottom-0 left-0 w-full max-w-[8rem] pointer-events-none bg-gradient-to-r from-amber-400/10 to-emerald-500/10"></div>
  <div class="relative z-[1] flex items-center gap-3">
    <img
      src="https://images.pexels.com/photos/164697/pexels-photo-164697.jpeg?w=600&h=600&dpr=2"
      data-author="Pixabay"
      data-author-profile="https://www.pexels.com/es-es/@pixabay/"
      alt="cover"
      class="flex-none w-12 h-12 rounded-full object-cover border-2 border-white ring-2 ring-emerald-500 dark:border-gray-950 dark:ring-emerald-600"
      loading="lazy"
    />
    <div class="grid flex-1">
      <h5 class="text-base font-semibold truncate">Purple Disco</h5>
      <h5 class="text-xs truncate">Eli Escobar feat. Nomi Ruiz</h5>
    </div>
  </div>
  <div class="relative w-8 h-8 flex-none">
    <span class="z-0 absolute w-full h-full rounded-full pointer-events-none animate-ping bg-green-600"></span>
    <button class="absolute w-full h-full z-1 flex justify-center items-center rounded-full bg-green-600 text-white" data-play="true">
      <svg data-icon="pause" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 -960 960 960" fill="currentColor" ><path d="M588.65-240.92q-12.86 0-21.52-9.08-8.67-9.08-8.67-21.12v-417.76q0-12.04 8.67-21.12 8.66-9.08 21.52-9.08h85.58q12.03 0 21.11 9.08t9.08 21.12v417.76q0 12.04-9.08 21.12-9.08 9.08-21.11 9.08h-85.58Zm-302 0q-12.86 0-21.52-9.08-8.67-9.08-8.67-21.12v-417.76q0-12.04 8.67-21.12 8.66-9.08 21.52-9.08H373q11.44 0 20.81 9.08 9.38 9.08 9.38 21.12v417.76q0 12.04-9.38 21.12-9.37 9.08-20.81 9.08h-86.35Z" ></path></svg >
    </button>
  </div>
</article>

<article
  class="relative flex items-center justify-between gap-4 border-2 break-inside rounded-lg p-4 mb-3 text-xs overflow-hidden border-violet-200 bg-white dark:bg-gray-950 dark:text-white dark:border-violet-900"
>
  <div class="absolute top-0 bottom-0 left-0 w-full max-w-8/12 pointer-events-none bg-gradient-to-r from-violet-400/20 via+via-violet-500/5 to-background"></div>
  <div class="relative z-[1] flex items-center gap-3">
    <img
      src="https://images.pexels.com/photos/164697/pexels-photo-164697.jpeg?w=600&h=600&dpr=2"
      data-author="Pixabay"
      data-author-profile="https://www.pexels.com/es-es/@pixabay/"
      alt="cover"
      class="flex-none w-10 h-10 rounded-full object-cover border-2 border-white ring-2 ring-violet-500 dark:border-gray-950 dark:ring-violet-600"
      loading="lazy"
    />
    <div class="grid flex-1">
      <h5 class="text-sm font-medium truncate">Coldplay</h5>
      <h5 class="text-xs truncate">The hardest part</h5>
    </div>
  </div>
  <div class="relative w-8 h-8 flex-none">
    <span class="z-0 absolute w-full h-full rounded-full pointer-events-none animate-ping bg-violet-600"></span>
    <button class="absolute w-full h-full z-1 flex justify-center items-center rounded-full bg-violet-600 text-white" data-play="true">
      <svg data-icon="pause" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 -960 960 960" fill="currentColor" ><path d="M588.65-240.92q-12.86 0-21.52-9.08-8.67-9.08-8.67-21.12v-417.76q0-12.04 8.67-21.12 8.66-9.08 21.52-9.08h85.58q12.03 0 21.11 9.08t9.08 21.12v417.76q0 12.04-9.08 21.12-9.08 9.08-21.11 9.08h-85.58Zm-302 0q-12.86 0-21.52-9.08-8.67-9.08-8.67-21.12v-417.76q0-12.04 8.67-21.12 8.66-9.08 21.52-9.08H373q11.44 0 20.81 9.08 9.38 9.08 9.38 21.12v417.76q0 12.04-9.38 21.12-9.37 9.08-20.81 9.08h-86.35Z" ></path></svg >
    </button>
  </div>
</article>

<article class="border break-inside grid grid-cols-12 rounded-xl overflow-hidden mb-3 text-xs bg-background text-foreground border-border">
  <div class="col-span-4">
    <img
      src="https://images.pexels.com/photos/2601189/pexels-photo-2601189.jpeg?w=300&h=400&dpr=2"
      alt="Imagen"
      class="w-full h-full aspect-square object-cover"
      data-author="Aleksandr Neplokhov"
      data-author-profile="https://www.pexels.com/es-es/@aleksandr-neplokhov-486399/"
      loading="lazy"
    />
  </div>
  <div class="col-span-8 flex items-center justify-between p-4 flex-1 gap-3">
    <header class="flex flex-col gap-1">
      <h2 class="text-base font-semibold leading-5">Massive</h2>
      <p class="text-xs">Mat cipher neto, Freakpass and Nik...</p>
    </header>
    <button class="flex flex-none justify-center items-center rounded-full w-8 h-8 transition-color duration-200 bg-foreground text-background">
      <svg data-icon="play-fill" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor" ><path d="M340-302.23v-355.54q0-15.84 10.87-26 10.87-10.15 25.37-10.15 4.53 0 9.5 1.31 4.97 1.3 9.49 3.92l279.84 178.15q8.24 5.62 12.35 13.46 4.12 7.85 4.12 17.08 0 9.23-4.12 17.08-4.11 7.84-12.35 13.46L395.23-271.31q-4.53 2.62-9.52 3.92-4.98 1.31-9.51 1.31-14.51 0-25.35-10.15-10.85-10.16-10.85-26Z" ></path></svg >
    </button>
  </div>
</article>

<section class="break-inside grid grid-cols-2 items-start mb-3 gap-3">
  <div class="grid gap-3">
    <article class="border relative overflow-hidden break-inside flex flex-col justify-between rounded-xl p-4 text-xs bg-rose-600 border-rose-600 text-white">
      <header class="relative flex items-center justify-between">
        <span class="h-6 px-2 font-semibold rounded-sm flex items-center justify-center bg-white text-rose-700">NEW</span>
        <button class="flex justify-center items-center rounded-full w-7 h-7 transition-all duration-300 bg-white text-rose-700 focus:ring-2 focus:ring-white">
          <svg data-icon="play-fill" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" ><path d="M340-302.23v-355.54q0-15.84 10.87-26 10.87-10.15 25.37-10.15 4.53 0 9.5 1.31 4.97 1.3 9.49 3.92l279.84 178.15q8.24 5.62 12.35 13.46 4.12 7.85 4.12 17.08 0 9.23-4.12 17.08-4.11 7.84-12.35 13.46L395.23-271.31q-4.53 2.62-9.52 3.92-4.98 1.31-9.51 1.31-14.51 0-25.35-10.15-10.85-10.16-10.85-26Z" ></path></svg >
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
          <svg data-icon="more-horiz" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="currentColor" ><path d="M213.07-406q-30.59 0-52.21-21.79-21.63-21.78-21.63-52.37 0-30.59 21.79-52.21Q182.8-554 213.39-554q30.59 0 52.22 21.79 21.62 21.78 21.62 52.37 0 30.59-21.78 52.21Q243.66-406 213.07-406Zm266.77 0q-30.59 0-52.21-21.79Q406-449.57 406-480.16q0-30.59 21.79-52.21Q449.57-554 480.16-554q30.59 0 52.21 21.79Q554-510.43 554-479.84q0 30.59-21.79 52.21Q510.43-406 479.84-406Zm266.77 0q-30.59 0-52.22-21.79-21.62-21.78-21.62-52.37 0-30.59 21.78-52.21Q716.34-554 746.93-554q30.59 0 52.21 21.79 21.63 21.78 21.63 52.37 0 30.59-21.79 52.21Q777.2-406 746.61-406Z" ></path></svg >
        </button>
      </div>
    </article>
    <article class="border break-inside flex flex-col items-start justify-between rounded-xl flex-1 text-xs bg-background border-border">
      <header class="flex items-start gap-2 p-3">
        <img class="w-9 h-9 rounded-full" src="https://randomuser.me/api/portraits/women/50.jpg" alt="avatar" loading="lazy" />
        <h2 class="text-sm font-medium">Angy <br /> Cabrera</h2>
      </header>
      <div class="relative flex items-center justify-between w-full gap-4 p-3 border-t border-border bg-foreground/2">
        <button
          class="absolute -top-3 right-3 ring border-4 border-background ring-border flex-none flex justify-center items-center rounded-full w-7 h-7 transition-all duration-300 bg-foreground text-background focus:ring-2 focus:ring-foreground"
        >
          <svg data-icon="play-fill" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" ><path d="M340-302.23v-355.54q0-15.84 10.87-26 10.87-10.15 25.37-10.15 4.53 0 9.5 1.31 4.97 1.3 9.49 3.92l279.84 178.15q8.24 5.62 12.35 13.46 4.12 7.85 4.12 17.08 0 9.23-4.12 17.08-4.11 7.84-12.35 13.46L395.23-271.31q-4.53 2.62-9.52 3.92-4.98 1.31-9.51 1.31-14.51 0-25.35-10.15-10.85-10.16-10.85-26Z" ></path></svg>
        </button>
        <div class="flex gap-[1px] items-center flex-row justify-between w-full h-9 cursor-pointer">
          <div class="w-0.5 h-[15%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[20%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[30%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[30%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[40%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[40%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[30%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[15%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[26%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[38%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[40%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[50%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[20%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[30%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[30%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[30%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[20%] rounded-full bg-foreground/30"></div>
          <div class="w-0.5 h-[10%] rounded-full bg-foreground/30"></div>
        </div>
      </div>
    </article>
    <article class="border break-inside flex flex-col items-start justify-between overflow-hidden rounded-xl p-3 gap-2 flex-1 text-xs bg-background border-border">
      <header class="w-full flex items-center justify-between gap-3">
        <img class="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/50.jpg" alt="avatar" loading="lazy" />
        <button class="w-8 h-8 rounded-full inline-flex flex-none items-center justify-center hover:bg-foreground/5 focus:ring-2 focus:bg-background">
          <svg data-icon="more-horiz" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor" ><path d="M213.07-406q-30.59 0-52.21-21.79-21.63-21.78-21.63-52.37 0-30.59 21.79-52.21Q182.8-554 213.39-554q30.59 0 52.22 21.79 21.62 21.78 21.62 52.37 0 30.59-21.78 52.21Q243.66-406 213.07-406Zm266.77 0q-30.59 0-52.21-21.79Q406-449.57 406-480.16q0-30.59 21.79-52.21Q449.57-554 480.16-554q30.59 0 52.21 21.79Q554-510.43 554-479.84q0 30.59-21.79 52.21Q510.43-406 479.84-406Zm266.77 0q-30.59 0-52.22-21.79-21.62-21.78-21.62-52.37 0-30.59 21.78-52.21Q716.34-554 746.93-554q30.59 0 52.21 21.79 21.63 21.78 21.63 52.37 0 30.59-21.79 52.21Q777.2-406 746.61-406Z" ></path></svg >
        </button>
      </header>
      <section class="w-full flex items-center justify-between gap-3">
        <h2 class="text-sm font-medium truncate">Endrix Mathias</h2>
        <svg data-icon="equalizer" xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 -960 960 960" fill="currentColor" ><path d="M263.06-212q-22.06 0-36.56-14.58Q212-241.15 212-263.5v-104q0-21.14 14.63-35.82T263.44-418q21.56 0 36.06 14.68Q314-388.64 314-367.5v104q0 22.35-14.73 36.92Q284.53-212 263.06-212Zm216.92 0q-21.98 0-36.23-14.51-14.25-14.52-14.25-36.78v-434.03q0-21.23 14.56-35.95Q458.63-748 480.31-748q21.69 0 36.44 14.74 14.75 14.74 14.75 35.98v434.02q0 22.27-14.77 36.76-14.77 14.5-36.75 14.5Zm217.08 0q-22.06 0-36.56-14.58Q646-241.15 646-263.4v-244.1q0-21.14 14.63-35.82T697.44-558q21.56 0 36.06 14.68Q748-528.64 748-507.5v244.1q0 22.25-14.73 36.82Q718.53-212 697.06-212Z" ></path></svg >
      </section>
    </article>
  </div>
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
        <button class="flex-none flex justify-center items-center rounded-full w-7 h-7 transition-all duration-300 bg-foreground text-background focus:ring-2 focus:ring-foreground">
          <svg data-icon="pause" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 -960 960 960" fill="currentColor" ><path d="M588.65-240.92q-12.86 0-21.52-9.08-8.67-9.08-8.67-21.12v-417.76q0-12.04 8.67-21.12 8.66-9.08 21.52-9.08h85.58q12.03 0 21.11 9.08t9.08 21.12v417.76q0 12.04-9.08 21.12-9.08 9.08-21.11 9.08h-85.58Zm-302 0q-12.86 0-21.52-9.08-8.67-9.08-8.67-21.12v-417.76q0-12.04 8.67-21.12 8.66-9.08 21.52-9.08H373q11.44 0 20.81 9.08 9.38 9.08 9.38 21.12v417.76q0 12.04-9.38 21.12-9.37 9.08-20.81 9.08h-86.35Z" ></path></svg >
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
          <div class="w-0.5 h-[15%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[20%] rounded-full bg-foreground"></div>
          <div class="w-0.5 h-[30%] rounded-full bg-foreground"></div>
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
        <button class="flex-none flex justify-center items-center rounded-full w-7 h-7 transition-all duration-300 bg-foreground text-background focus:ring-2 focus:ring-foreground">
          <svg data-icon="play-fill" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" ><path d="M340-302.23v-355.54q0-15.84 10.87-26 10.87-10.15 25.37-10.15 4.53 0 9.5 1.31 4.97 1.3 9.49 3.92l279.84 178.15q8.24 5.62 12.35 13.46 4.12 7.85 4.12 17.08 0 9.23-4.12 17.08-4.11 7.84-12.35 13.46L395.23-271.31q-4.53 2.62-9.52 3.92-4.98 1.31-9.51 1.31-14.51 0-25.35-10.15-10.85-10.16-10.85-26Z" ></path></svg >
        </button>
      </div>
    </article>
    <article class="border relative overflow-hidden break-inside flex flex-col justify-between rounded-xl p-4 text-xs bg-violet-600 border-violet-600 text-white">
      <header class="relative flex items-center justify-between">
        <span class="h-6 px-2 font-semibold rounded-sm flex items-center justify-center bg-white text-violet-700">NEW</span>
        <svg data-icon="equalizer" xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 -960 960 960" fill="currentColor" ><path d="M263.06-212q-22.06 0-36.56-14.58Q212-241.15 212-263.5v-104q0-21.14 14.63-35.82T263.44-418q21.56 0 36.06 14.68Q314-388.64 314-367.5v104q0 22.35-14.73 36.92Q284.53-212 263.06-212Zm216.92 0q-21.98 0-36.23-14.51-14.25-14.52-14.25-36.78v-434.03q0-21.23 14.56-35.95Q458.63-748 480.31-748q21.69 0 36.44 14.74 14.75 14.74 14.75 35.98v434.02q0 22.27-14.77 36.76-14.77 14.5-36.75 14.5Zm217.08 0q-22.06 0-36.56-14.58Q646-241.15 646-263.4v-244.1q0-21.14 14.63-35.82T697.44-558q21.56 0 36.06 14.68Q748-528.64 748-507.5v244.1q0 22.25-14.73 36.82Q718.53-212 697.06-212Z" ></path></svg >
      </header>
      <section class="grid gap-1 mt-3">
        <h2 class="text-lg font-semibold">System of <br /> a Down</h2>
        <p class="text-white/90">Three authors will be present at..</p>
      </section>
      <section class="w-full mt-3">
        <div class="w-full rounded p-1 flex items-center gap-2 justify-start bg-white">
          <img
            src="https://images.unsplash.com/photo-1489602765044-5d661da88b24?q=200&w=400"
            alt="album cover"
            class="w-full max-w-10 min-h-10 object-cover rounded"
            loading="lazy"
            data-author="https://unsplash.com/es/@arstyy"
          />
          <div class="flex-1 grid">
            <h3 class="font-medium truncate text-black">System of a Down</h3>
            <p class="truncate text-black/70">Toxicity</p>
          </div>
        </div>
      </section>
    </article>
  </div>
</section>

<section class="grid grid-cols-2 gap-3 break-inside" data-filter="multimedia">
  <article class="group relative flex items-center justify-between break-inside rounded-xl text-xs overflow-hidden bg-black text-white">
    <img
      src="https://images.pexels.com/photos/11911967/pexels-photo-11911967.jpeg?w=600&h=800&dpr=2"
      data-author="Damir Hu"
      data-author-profile="https://www.pexels.com/es-es/@damir-hu-197678918/"
      class="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
      alt="cover"
      loading="lazy"
    />
    <div class="flex flex-col justify-between absolute top-0 left-0 w-full h-full bg-black/50 text-white">
      <header class="flex w-full items-center justify-end p-3">
        <button class="flex items-center justify-center rounded-full w-7 h-7 transition-colors duration-200 bg-white text-black">
          <svg data-icon="more-vert" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" ><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" ></path></svg >
        </button>
      </header>
      <section class="flex flex-col items-start w-full p-4 bg-gradient-to-t from-black to-transparent">
        <header class="flex items-center justify-between gap-2 w-full">
          <div class="grid flex-1">
            <h2 class="text-sm font-semibold">Remix</h2>
            <p class="truncate">Anthony Daasan Alex</p>
          </div>
          <button class="flex flex-none items-center justify-center rounded-full w-7 h-7 bg-white text-black">
            <svg data-icon="play-fill" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor" ><path d="M340-302.23v-355.54q0-15.84 10.87-26 10.87-10.15 25.37-10.15 4.53 0 9.5 1.31 4.97 1.3 9.49 3.92l279.84 178.15q8.24 5.62 12.35 13.46 4.12 7.85 4.12 17.08 0 9.23-4.12 17.08-4.11 7.84-12.35 13.46L395.23-271.31q-4.53 2.62-9.52 3.92-4.98 1.31-9.51 1.31-14.51 0-25.35-10.15-10.85-10.16-10.85-26Z" ></path></svg >
          </button>
        </header>
      </section>
    </div>
  </article>
  <article class="relative flex flex-col items-center justify-between break-inside rounded-xl text-xs overflow-hidden bg-black text-white">
    <section class="relative">
      <button
        class="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-9 h-9 transition-colors duration-200 bg-black/80 backdrop-blur-xs hover:bg-black"
      >
        <svg data-icon="pause" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960" fill="currentColor" ><path d="M588.65-240.92q-12.86 0-21.52-9.08-8.67-9.08-8.67-21.12v-417.76q0-12.04 8.67-21.12 8.66-9.08 21.52-9.08h85.58q12.03 0 21.11 9.08t9.08 21.12v417.76q0 12.04-9.08 21.12-9.08 9.08-21.11 9.08h-85.58Zm-302 0q-12.86 0-21.52-9.08-8.67-9.08-8.67-21.12v-417.76q0-12.04 8.67-21.12 8.66-9.08 21.52-9.08H373q11.44 0 20.81 9.08 9.38 9.08 9.38 21.12v417.76q0 12.04-9.38 21.12-9.37 9.08-20.81 9.08h-86.35Z" ></path></svg >
      </button>
      <img src="https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?w=600&h=800&dpr=2" class="object-cover w-full max-w-full" alt="cover" loading="lazy" />
    </section>
    <section class="flex flex-col items-start w-full p-4 gap-1">
      <h2 class="font-medium text-sm">The Great Outdoors for All</h2>
      <div class="flex gap-[1px] items-center flex-row justify-between w-full h-8 cursor-pointer">
        <div class="w-0.5 h-[15%] rounded-full bg-white"></div>
        <div class="w-0.5 h-[20%] rounded-full bg-white"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-white"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-white"></div>
        <div class="w-0.5 h-[40%] rounded-full bg-white"></div>
        <div class="w-0.5 h-[40%] rounded-full bg-white"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-white"></div>
        <div class="w-0.5 h-[15%] rounded-full bg-white"></div>
        <div class="w-0.5 h-[26%] rounded-full bg-white"></div>
        <div class="w-0.5 h-[20%] rounded-full bg-white/30"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-white/30"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-white/30"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-white/30"></div>
        <div class="w-0.5 h-[20%] rounded-full bg-white/30"></div>
        <div class="w-0.5 h-[10%] rounded-full bg-white/30"></div>
      </div>
    </section>
  </article>
  <article class="group relative break-inside rounded-xl text-xs overflow-hidden bg-black text-white">
    <img
      src="https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?w=600&h=800&dpr=2"
      data-author="https://www.pexels.com/es-es/@catota/"
      class="absolute top-0 left-0 z-0 pointer-events-none object-cover w-full h-full max-w-full group-hover:scale-105 transition-transform duration-200"
      alt="cover"
      loading="lazy"
    />
    <section class="w-full h-full relative z-1 flex flex-col gap-8 justify-between">
      <div class="w-full p-4 flex-none flex items-start justify-start">
        <button class="flex items-center justify-center rounded-full w-8 h-8 transition-colors duration-200 bg-white/80 backdrop-blur-xs hover:bg-white text-black">
          <svg data-icon="pause" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960" fill="currentColor" ><path d="M588.65-240.92q-12.86 0-21.52-9.08-8.67-9.08-8.67-21.12v-417.76q0-12.04 8.67-21.12 8.66-9.08 21.52-9.08h85.58q12.03 0 21.11 9.08t9.08 21.12v417.76q0 12.04-9.08 21.12-9.08 9.08-21.11 9.08h-85.58Zm-302 0q-12.86 0-21.52-9.08-8.67-9.08-8.67-21.12v-417.76q0-12.04 8.67-21.12 8.66-9.08 21.52-9.08H373q11.44 0 20.81 9.08 9.38 9.08 9.38 21.12v417.76q0 12.04-9.38 21.12-9.37 9.08-20.81 9.08h-86.35Z" ></path></svg >
        </button>
      </div>
      <div class="flex items-start mt-auto flex-none flex-col p-4 gap-2 bg-black/60 backdrop-blur-sm">
        <div class="w-full flex items-start gap-3">
          <img class="w-9 h-9 rounded-full" src="https://randomuser.me/api/portraits/men/41.jpg" alt="avatar" loading="lazy" />
          <h2 class="text-sm font-medium">Jhonatan <br /> Smith</h2>
        </div>
        <div class="w-full gap-1 grid mt-2">
          <div class="w-full relative rounded-full overflo-hidden h-1 bg-white/10">
            <div class="absolute rounded-full left-0 w-1/2 h-full bg-white"></div>
          </div>
          <div class="flex items-center justify-between w-full text-xs">
            <span>03:34</span>
            <span>04:20</span>
          </div>
        </div>
      </div>
    </section>
  </article>
  <article class="group relative break-inside rounded-xl text-xs overflow-hidden bg-black text-white">
    <img
      src="https://images.pexels.com/photos/30145418/pexels-photo-30145418/free-photo-of-mujer-elegante-disfrutando-de-la-musica-con-auriculares.jpeg?w=600&h=900&dpr=2"
      data-author="https://www.pexels.com/es-es/@thteam/"
      class="absolute top-0 left-0 z-0 pointer-events-none object-cover w-full max-w-full h-full group-hover:scale-105 transition-transform duration-200"
      alt="cover"
      loading="lazy"
    />
    <section class="relative w-full h-full z-1 flex flex-col items-start gap-8 justify-between">
      <div class="w-full p-4 flex items-start justify-start flex-none">
        <span class="h-6 px-2 font-semibold rounded flex items-center justify-center bg-yellow-400 text-black">NEW</span>
      </div>
      <div class="flex items-start flex-col flex-none mt-auto p-4 gap-2 bg-black/60 backdrop-blur-sm">
        <header>
          <button class="flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 bg-white/70 backdrop-blur-xs text-black hover:bg-white">
            <svg data-icon="play" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960" fill="currentColor" ><path d="M340-302.23v-355.54q0-15.84 10.87-26 10.87-10.15 25.37-10.15 4.53 0 9.5 1.31 4.97 1.3 9.49 3.92l279.84 178.15q8.24 5.62 12.35 13.46 4.12 7.85 4.12 17.08 0 9.23-4.12 17.08-4.11 7.84-12.35 13.46L395.23-271.31q-4.53 2.62-9.52 3.92-4.98 1.31-9.51 1.31-14.51 0-25.35-10.15-10.85-10.16-10.85-26Z" ></path></svg >
          </button>
        </header>
        <section class="w-full mt-1 grid gap-1">
          <h2 class="text-xs">House music</h2>
          <h3 class="text-sm leading-5 font-semibold">Best house music records</h3>
        </section>
      </div>
    </section>
  </article>
</section>

<section class="columns-2 gap-3 mb-3 break-inside">
  <article class="w-full border break-inside flex items-start flex-col justify-between rounded-xl gap-2 p-4 mb-3 text-xs bg-background border-border">
    <header>
      <button class="flex justify-center items-center rounded-full w-8 h-8 transition-colors duration-300 bg-foreground text-background">
        <svg data-icon="play" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960" fill="currentColor" ><path d="M340-302.23v-355.54q0-15.84 10.87-26 10.87-10.15 25.37-10.15 4.53 0 9.5 1.31 4.97 1.3 9.49 3.92l279.84 178.15q8.24 5.62 12.35 13.46 4.12 7.85 4.12 17.08 0 9.23-4.12 17.08-4.11 7.84-12.35 13.46L395.23-271.31q-4.53 2.62-9.52 3.92-4.98 1.31-9.51 1.31-14.51 0-25.35-10.15-10.85-10.16-10.85-26Z" ></path></svg >
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
  <article class="relative border break-inside flex items-start flex-col justify-between rounded-xl gap-2 p-4 mb-3 text-xs overflow-hidden border-emerald-600/50 bg-background">
    <div class="absolute left-1/2 top-0 w-14 h-14 bg-emerald-500/30 blur-2xl"></div>
    <header class="w-full">
      <button class="inline-flex items-center justify-center relative w-8 h-8 z-1">
        <span class="w-full h-full pointer-events-none animate-ping top-0 left-0 rounded-full absolute bg-emerald-600"></span>
        <div class="inline-flex items-center justify-center absolute z-[1] w-full h-full flex-none rounded-full bg-emerald-600 dark:border-gray-950 text-white">
          <svg data-icon="pause" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 -960 960 960" fill="currentColor" ><path d="M634.5-208q-30.94 0-52.97-22.03Q559.5-252.06 559.5-283v-394q0-30.94 22.03-52.97Q603.56-752 634.5-752h5q30.94 0 52.97 22.03Q714.5-707.94 714.5-677v394q0 30.94-22.03 52.97Q670.44-208 639.5-208h-5Zm-314 0q-30.94 0-52.97-22.03Q245.5-252.06 245.5-283v-394q0-30.94 22.03-52.97Q289.56-752 320.5-752h5q30.94 0 52.97 22.03Q400.5-707.94 400.5-677v394q0 30.94-22.03 52.97Q356.44-208 325.5-208h-5Z" ></path></svg >
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
          src="https://images.pexels.com/photos/32483141/pexels-photo-32483141/free-photo-of-musico-callejero-tocando-el-saxofon-en-el-mercado-nocturno-de-dalat.jpeg?w=300&h=750&dpr=2"
          data-author="https://www.pexels.com/es-es/@cristian-rojas/"
          alt="cover"
          loading="lazy"
          class="w-16 h-20 object-cover rounded-md"
        />
        <button class="w-8 h-8 rounded-full inline-flex flex-none items-center justify-center transition-all duration-300 hover:bg-foreground/10 focus:ring-2 focus:ring-blue-500">
          <svg data-icon="more-horiz" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="currentColor" ><path d="M213.07-406q-30.59 0-52.21-21.79-21.63-21.78-21.63-52.37 0-30.59 21.79-52.21Q182.8-554 213.39-554q30.59 0 52.22 21.79 21.62 21.78 21.62 52.37 0 30.59-21.78 52.21Q243.66-406 213.07-406Zm266.77 0q-30.59 0-52.21-21.79Q406-449.57 406-480.16q0-30.59 21.79-52.21Q449.57-554 480.16-554q30.59 0 52.21 21.79Q554-510.43 554-479.84q0 30.59-21.79 52.21Q510.43-406 479.84-406Zm266.77 0q-30.59 0-52.22-21.79-21.62-21.78-21.62-52.37 0-30.59 21.78-52.21Q716.34-554 746.93-554q30.59 0 52.21 21.79 21.63 21.78 21.63 52.37 0 30.59-21.79 52.21Q777.2-406 746.61-406Z" ></path></svg >
        </button>
      </div>
      <section class="grid gap-2">
        <h2 class="text-sm font-semibold">Good moments with friends</h2>
        <p class="text-xs">For the best moments</p>
        <div class="flex w-full items-center justify-between gap-1">
          <span class="font-medium px-2 py-1 rounded bg-emerald-500/10 text-emerald-500">20 songs</span>
          <button class="flex justify-center items-center rounded-full w-7 h-7 transition-all duration-300 bg-foreground text-background focus:ring-2 focus:ring-foreground">
            <svg data-icon="play-fill" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" ><path d="M340-302.23v-355.54q0-15.84 10.87-26 10.87-10.15 25.37-10.15 4.53 0 9.5 1.31 4.97 1.3 9.49 3.92l279.84 178.15q8.24 5.62 12.35 13.46 4.12 7.85 4.12 17.08 0 9.23-4.12 17.08-4.11 7.84-12.35 13.46L395.23-271.31q-4.53 2.62-9.52 3.92-4.98 1.31-9.51 1.31-14.51 0-25.35-10.15-10.85-10.16-10.85-26Z" ></path></svg >
          </button>
        </div>
      </section>
    </div>
  </article>
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl text-xs mb-3 p-3 border-border bg-background text-foreground" data-filter="social">
    <section class="flex items-center justify-between">
      <div class="block">
        <dt class="sr-only">Users</dt>
        <dd class="flex justify-start -space-x-0.5">
          <a href="#" class="inline-block">
            <img class="w-6 h-6 rounded-full ring-2 ring-background" src="https://randomuser.me/api/portraits/women/14.jpg" alt="avatar" loading="lazy" />
          </a>
          <a href="#" class="inline-block">
            <img class="w-6 h-6 rounded-full ring-2 ring-background" src="https://randomuser.me/api/portraits/men/19.jpg" alt="avatar" loading="lazy" />
          </a>
          <a href="#" class="inline-block">
            <img class="w-6 h-6 rounded-full ring-2 ring-background" src="https://randomuser.me/api/portraits/men/20.jpg" alt="avatar" loading="lazy" />
          </a>
        </dd>
      </div>
      <button class="flex justify-center items-center rounded-full w-6 h-6 transition-colors duration-300 bg-foreground text-background">
        <svg data-icon="play-fill" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor" ><path d="M340-302.23v-355.54q0-15.84 10.87-26 10.87-10.15 25.37-10.15 4.53 0 9.5 1.31 4.97 1.3 9.49 3.92l279.84 178.15q8.24 5.62 12.35 13.46 4.12 7.85 4.12 17.08 0 9.23-4.12 17.08-4.11 7.84-12.35 13.46L395.23-271.31q-4.53 2.62-9.52 3.92-4.98 1.31-9.51 1.31-14.51 0-25.35-10.15-10.85-10.16-10.85-26Z" ></path></svg >
      </button>
    </section>
    <p class="truncate">Collection of metal and rock music</p>
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
          <svg data-icon="more-horiz" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="currentColor" ><path d="M213.07-406q-30.59 0-52.21-21.79-21.63-21.78-21.63-52.37 0-30.59 21.79-52.21Q182.8-554 213.39-554q30.59 0 52.22 21.79 21.62 21.78 21.62 52.37 0 30.59-21.78 52.21Q243.66-406 213.07-406Zm266.77 0q-30.59 0-52.21-21.79Q406-449.57 406-480.16q0-30.59 21.79-52.21Q449.57-554 480.16-554q30.59 0 52.21 21.79Q554-510.43 554-479.84q0 30.59-21.79 52.21Q510.43-406 479.84-406Zm266.77 0q-30.59 0-52.22-21.79-21.62-21.78-21.62-52.37 0-30.59 21.78-52.21Q716.34-554 746.93-554q30.59 0 52.21 21.79 21.63 21.78 21.63 52.37 0 30.59-21.79 52.21Q777.2-406 746.61-406Z" ></path></svg >
        </button>
      </div>
      <section class="grid gap-2">
        <h2 class="text-sm font-semibold">Summer chill vibes</h2>
        <p class="text-xs">The best songs of the moment</p>
        <div class="flex w-full items-center justify-between gap-1">
          <span class="font-medium px-2 py-1 rounded bg-foreground/5">18 songs</span>
          <button class="flex justify-center items-center rounded-full w-7 h-7 transition-all duration-300 bg-foreground/10 text-foreground focus:ring-2 focus:ring-foreground">
            <svg data-icon="play" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960" fill="currentColor" ><path d="M340-302.23v-355.54q0-15.84 10.87-26 10.87-10.15 25.37-10.15 4.53 0 9.5 1.31 4.97 1.3 9.49 3.92l279.84 178.15q8.24 5.62 12.35 13.46 4.12 7.85 4.12 17.08 0 9.23-4.12 17.08-4.11 7.84-12.35 13.46L395.23-271.31q-4.53 2.62-9.52 3.92-4.98 1.31-9.51 1.31-14.51 0-25.35-10.15-10.85-10.16-10.85-26Z" ></path></svg >
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
            <svg data-icon="more-horiz" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="currentColor" ><path d="M213.07-406q-30.59 0-52.21-21.79-21.63-21.78-21.63-52.37 0-30.59 21.79-52.21Q182.8-554 213.39-554q30.59 0 52.22 21.79 21.62 21.78 21.62 52.37 0 30.59-21.78 52.21Q243.66-406 213.07-406Zm266.77 0q-30.59 0-52.21-21.79Q406-449.57 406-480.16q0-30.59 21.79-52.21Q449.57-554 480.16-554q30.59 0 52.21 21.79Q554-510.43 554-479.84q0 30.59-21.79 52.21Q510.43-406 479.84-406Zm266.77 0q-30.59 0-52.22-21.79-21.62-21.78-21.62-52.37 0-30.59 21.78-52.21Q716.34-554 746.93-554q30.59 0 52.21 21.79 21.63 21.78 21.63 52.37 0 30.59-21.79 52.21Q777.2-406 746.61-406Z" ></path></svg >
          </button>
        </div>
      </div>
      <section class="grid gap-2 p-3">
        <h2 class="text-sm font-semibold">The best pop sounds</h2>
        <p class="text-xs">The best songs of the moment</p>
        <div class="flex w-full items-center justify-between gap-1">
          <span class="font-medium px-2 py-1 rounded bg-foreground/10">20 songs</span>
          <button class="flex justify-center items-center rounded-full w-7 h-7 transition-all duration-300 bg-blue-600 text-white">
            <svg data-icon="play" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960" fill="currentColor" ><path d="M340-302.23v-355.54q0-15.84 10.87-26 10.87-10.15 25.37-10.15 4.53 0 9.5 1.31 4.97 1.3 9.49 3.92l279.84 178.15q8.24 5.62 12.35 13.46 4.12 7.85 4.12 17.08 0 9.23-4.12 17.08-4.11 7.84-12.35 13.46L395.23-271.31q-4.53 2.62-9.52 3.92-4.98 1.31-9.51 1.31-14.51 0-25.35-10.15-10.85-10.16-10.85-26Z" ></path></svg >
          </button>
        </div>
      </section>
    </div>
  </article>
  <article class="relative flex items-center justify-between border break-inside rounded-lg mb-3 text-xs overflow-hidden bg-background border-border">
    <div class="flex flex-col w-full">
      <div class="w-full min-h-20 relative">
        <img
          src="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?w=700&h=300&dpr=2"
          data-author="https://www.pexels.com/es-es/@pixabay/"
          alt="cover"
          loading="lazy"
          class="w-full h-full bject-cover"
        />
      </div>
      <section class="grid gap-1 p-3">
        <h2 class="text-base font-semibold">Rock sounds</h2>
        <p class="text-xs">Collection of metal and rock music</p>
        <div class="flex w-full items-center justify-between gap-1">
          <span class="font-medium px-2 py-1 rounded bg-blue-500/10 text-blue-500">20 songs</span>
          <div class="flex justify-center items-center rounded-full w-9 h-9 bg-foreground/2">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960" fill="currentColor" ><path d="M245.05-180q-27.18 0-46.11-18.99Q180-217.98 180-245.13v-145.89q0-27.15 19.02-46.14 19.01-18.99 46.19-18.99 27.18 0 46.11 18.99 18.94 18.99 18.94 46.14v145.89q0 27.15-19.02 46.14Q272.23-180 245.05-180Zm234.87 0q-27.18 0-46.11-18.99-18.94-18.99-18.94-46.14v-469.74q0-27.15 19.02-46.14Q452.9-780 480.08-780q27.18 0 46.11 18.99 18.94 18.99 18.94 46.14v469.74q0 27.15-19.02 46.14Q507.1-180 479.92-180Zm234.87 0q-27.18 0-46.11-18.99-18.94-18.99-18.94-46.14v-273.59q0-27.14 19.02-46.13 19.01-18.99 46.19-18.99 27.18 0 46.11 18.99Q780-545.86 780-518.72v273.59q0 27.15-19.02 46.14Q741.97-180 714.79-180Z" ></path></svg >
          </div>
        </div>
      </section>
    </div>
  </article>
  <article class="relative flex items-center flex-col justify-start border break-inside rounded-xl mb-3 text-xs overflow-hidden bg-background border-border">
    <div class="relative w-full h-32 overflow-hidden">
      <img
        src="https://images.pexels.com/photos/7239910/pexels-photo-7239910.jpeg?w=600&h=300&dpr=2"
        data-author="https://www.pexels.com/es-es/@harry-shelton-39376662/"
        alt="Image by Harry Shelton from Pexels"
        loading="lazy"
        class="w-full h-full object-cover"
      />
      <div class="absolute bottom-0 left-0 w-full p-2">
        <button class="rounded-full w-full text-xs font-semibold uppercase flex items-center justify-center p-1 bg-white/80 backdrop-blur-sm text-black">
          <span class="w-full text-center flex-1 flex items-center justify-center">PLAY NOW</span>
          <span class="w-6 h-6 inline-flex items-center justify-center flex-none rounded-full bg-black text-white">
            <svg data-icon="play-fill" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor" ><path d="M340-302.23v-355.54q0-15.84 10.87-26 10.87-10.15 25.37-10.15 4.53 0 9.5 1.31 4.97 1.3 9.49 3.92l279.84 178.15q8.24 5.62 12.35 13.46 4.12 7.85 4.12 17.08 0 9.23-4.12 17.08-4.11 7.84-12.35 13.46L395.23-271.31q-4.53 2.62-9.52 3.92-4.98 1.31-9.51 1.31-14.51 0-25.35-10.15-10.85-10.16-10.85-26Z" ></path></svg >
          </span>
        </button>
      </div>
    </div>
    <div class="grid gap-1 p-4">
      <h2 class="text-sm font-semibold">Trance Mission</h2>
      <p>Setting sights on benging trance...</p>
      <div class="flex gap-[1px] items-center flex-row justify-between w-full mt-1 h-8 cursor-pointer">
        <div class="w-0.5 h-[15%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[20%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[40%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[40%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[15%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[26%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[38%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[40%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[50%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[20%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[20%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[10%] rounded-full bg-foreground/30"></div>
      </div>
    </div>
  </article>
  <article class="relative flex items-center flex-col justify-start border break-inside rounded-xl mb-3 text-xs overflow-hidden bg-background border-border">
    <div class="relative w-full h-32 overflow-hidden">
      <img
        src="https://images.pexels.com/photos/5672284/pexels-photo-5672284.jpeg?w=600&h=300&dpr=2"
        data-author="https://www.pexels.com/es-es/@gera-cejas-3616330/"
        alt="Image by Gera Cejas from Pexels"
        loading="lazy"
        class="w-full h-full object-cover"
      />
      <div class="absolute bottom-0 left-0 w-full p-2 flex items-center justify-end">
        <button class="rounded-full inline-flex text-xs font-semibold uppercase w-8 h-8 items-center justify-center bg-white/80 backdrop-blur-sm">
          <svg data-icon="play-fill" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" ><path d="M340-302.23v-355.54q0-15.84 10.87-26 10.87-10.15 25.37-10.15 4.53 0 9.5 1.31 4.97 1.3 9.49 3.92l279.84 178.15q8.24 5.62 12.35 13.46 4.12 7.85 4.12 17.08 0 9.23-4.12 17.08-4.11 7.84-12.35 13.46L395.23-271.31q-4.53 2.62-9.52 3.92-4.98 1.31-9.51 1.31-14.51 0-25.35-10.15-10.85-10.16-10.85-26Z" ></path></svg >
        </button>
      </div>
    </div>
    <div class="grid gap-1 p-4">
      <h2 class="text-sm font-semibold">Marloon Underground & Friends</h2>
      <p>Setting sights on benging trance...</p>
    </div>
  </article>
  <article class="relative flex items-center flex-col justify-start gap-4 break-inside rounded-xl p-3 mb-3 text-xs overflow-hidden bg-blue-700">
    <header class="w-full flex items-center justify-between">
      <p class="text-white">May 30, 2022</p>
      <button class="w-7 h-7 inline-flex items-center justify-center rounded-full ring-2 ring-transparent focus:ring-white text-white hover:bg-white/10">
        <svg data-icon="more-horiz-two" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"> <path fill="currentColor" d="M10 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></path> </svg>
      </button>
    </header>
    <section>
      <div class="w-full flex items-center gap-2">
        <div class="w-10 h-10 rounded-full inline-flex items-center justify-center flex-none bg-white text-blue-700">
          <svg data-icon="playlist" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor" ><path d="M3 15c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C5.787 8 7.19 8 10 8h4c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C21 10.787 21 12.19 21 15s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C18.213 22 16.81 22 14 22h-4c-2.809 0-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C3 19.213 3 17.81 3 15" ></path><path d="M12.5 16.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 0v-5s.4 1.733 2 2M19 8c-.018-1.24-.11-1.943-.582-2.414C17.832 5 16.888 5 15.002 5H8.998c-1.887 0-2.83 0-3.416.586C5.11 6.057 5.018 6.76 5 8m12-3c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C15.398 2 14.932 2 14 2h-4c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C7 3.602 7 4.068 7 5" ></path></g ></svg >
        </div>
        <h2 class="text-base leading-5 font-semibold text-white">Nicky Romero</h2>
      </div>
    </section>
    <section class="grid w-full gap-1.5">
      <p class="font-medium text-white">Music details</p>
      <div class="grid gap-0.5">
        <div class="w-full h-1 rounded-full overflow-hidden bg-white/10">
          <div class="w-1/2 h-full rounded-l-full bg-white"></div>
        </div>
        <div class="w-full flex items-center mt-2 justify-between">
          <p class="text-xs text-white">The play progress of the music</p>
        </div>
      </div>
    </section>
    <section class="w-full">
      <div class="flex items-center justify-between gap-2">
        <div class="inline-flex items-center justify-center gap-1 px-2 h-6 rounded flex-1 bg-white/20 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" ><path fill="currentColor" fill-rule="evenodd" d="m9.524 4.938l10.092 6.21a1 1 0 0 1 0 1.704l-10.092 6.21A1 1 0 0 1 8 18.21V5.79a1 1 0 0 1 1.524-.852"></path></svg >
          <span class="font-medium text-xs">2k</span>
        </div>
        <div class="inline-flex items-center justify-center gap-1 px-2 h-6 rounded flex-1 bg-white/20 text-white">
          <svg data-icon="heart" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"> <path fill="currentColor" stroke-width="2" stroke="currentColor" d="M1 8.4C1 4 4.5 3 6.5 3C9 3 11 5 12 6.5C13 5 15 3 17.5 3c2 0 5.5 1 5.5 5.4C23 15 12 21 12 21S1 15 1 8.4Z"></path> </svg>
          <span class="font-medium text-xs">28</span>
        </div>
      </div>
    </section>
  </article>
  <article class="relative flex items-center flex-col justify-start gap-4 border break-inside rounded-xl p-3 mb-3 text-xs overflow-hidden bg-background text-foreground border-border">
    <header class="w-full flex items-center justify-between">
      <p class="font-medium text-xs">April 30</p>
      <button class="w-7 h-7 inline-flex items-center justify-center rounded-full ring-2 ring-transparent transition-colors duration-200 focus:ring-indigo-600 hover:bg-foreground/10">
        <svg data-icon="more-horiz-two" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"> <path fill="currentColor" d="M10 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></path> </svg>
      </button>
    </header>
    <section>
      <div class="w-full flex items-center gap-3">
        <div class="w-10 h-10 rounded-full inline-flex items-center justify-center flex-none bg-foreground/5">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" ><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" ><path d="M12 9.75a.75.75 0 0 1 .75.75c0 .539.315 1.1.834 1.56c.53.471 1.11.69 1.416.69a.75.75 0 0 1 0 1.5c-.738 0-1.58-.387-2.25-.93V17a2.25 2.25 0 1 1-1.5-2.122V10.5a.75.75 0 0 1 .75-.75M11.25 17a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0" ></path><path d="M8.7 1.25h6.6c.22 0 .389 0 .536.016A2.75 2.75 0 0 1 18.29 3.87a2.89 2.89 0 0 1 2.054 2.721c.601.18 1.12.465 1.544.923c.652.705.854 1.572.862 2.586c.007.975-.166 2.207-.382 3.736l-.44 3.114c-.168 1.196-.305 2.168-.518 2.929c-.223.797-.552 1.452-1.16 1.956c-.604.5-1.32.715-2.166.817c-.819.098-1.849.098-3.13.098H9.046c-1.282 0-2.312 0-3.13-.098c-.847-.102-1.563-.317-2.167-.817c-.608-.504-.937-1.16-1.16-1.956c-.213-.761-.35-1.733-.519-2.93l-.439-3.113c-.215-1.53-.39-2.761-.382-3.736c.008-1.014.21-1.881.862-2.586c.424-.458.942-.742 1.543-.923a2.89 2.89 0 0 1 2.055-2.72a2.75 2.75 0 0 1 2.454-2.605c.147-.016.316-.016.535-.016m-3.51 5.078c.926-.078 2.06-.078 3.427-.078h6.768c1.366 0 2.5 0 3.427.078a1.38 1.38 0 0 0-1.35-1.078H6.539c-.669 0-1.212.47-1.349 1.078m10.487-3.57c.55.058.985.468 1.092.992H7.232a1.25 1.25 0 0 1 1.092-.993c.056-.006.136-.007.417-.007h6.518c.28 0 .36.001.417.007M3.213 8.532c.303-.327.758-.544 1.643-.662c.901-.12 2.108-.121 3.816-.121h6.656c1.708 0 2.915.002 3.816.121c.885.118 1.34.335 1.643.662c.296.32.457.755.463 1.579c.006.85-.15 1.97-.376 3.576l-.423 3c-.178 1.261-.302 2.133-.485 2.787c-.177.63-.384.965-.673 1.204c-.293.244-.687.4-1.388.484c-.719.086-1.658.087-3 .087h-5.81c-1.342 0-2.281-.001-3-.087c-.7-.085-1.095-.24-1.388-.483c-.289-.24-.496-.576-.673-1.205c-.183-.654-.307-1.526-.485-2.787l-.423-3c-.226-1.605-.382-2.726-.376-3.576c.006-.824.167-1.26.463-1.579" ></path></g ></svg >
        </div>
        <h2 class="text-base leading-5 font-semibold">Ryan Millers</h2>
      </div>
    </section>
    <section class="grid w-full gap-1.5">
      <p class="font-medium">Music details</p>
      <div class="grid gap-0.5">
        <div class="w-full h-1 rounded-full overflow-hidden bg-foreground/10">
          <div class="w-[71%] h-full rounded-l-full bg-violet-500"></div>
        </div>
        <div class="w-full flex items-center mt-2 justify-between">
          <p class="text-xs text-foreground/60">The play progress of the music</p>
        </div>
      </div>
    </section>
    <section class="w-full">
      <div class="flex gap-[1px] items-center flex-row justify-between w-full h-9 cursor-pointer">
        <div class="w-0.5 h-[15%] rounded-full bg-violet-600"></div>
        <div class="w-0.5 h-[20%] rounded-full bg-violet-600"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-violet-600"></div>
        <div class="w-0.5 h-[40%] rounded-full bg-violet-600"></div>
        <div class="w-0.5 h-[40%] rounded-full bg-violet-600"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-violet-600"></div>
        <div class="w-0.5 h-[35%] rounded-full bg-violet-600"></div>
        <div class="w-0.5 h-[45%] rounded-full bg-violet-600"></div>
        <div class="w-0.5 h-[55%] rounded-full bg-violet-600"></div>
        <div class="w-0.5 h-[50%] rounded-full bg-violet-600"></div>
        <div class="w-0.5 h-[40%] rounded-full bg-violet-600"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-violet-600"></div>
        <div class="w-0.5 h-[20%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[15%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[10%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[15%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[20%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[25%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[35%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[25%] rounded-full bg-foreground/30"></div>
      </div>
    </section>
  </article>
  <article class="relative flex items-center flex-col justify-start border break-inside rounded-xl text-xs mb-3 overflow-hidden bg-background text-foreground border-border">
    <header class="w-full flex items-center justify-between p-3 bg-foreground/2 border-b border-border">
      <p class="font-medium text-xs">May 30, 2022</p>
      <button class="w-7 h-7 inline-flex items-center justify-center rounded-full ring-2 ring-transparent transition-colors duration-200 focus:ring-indigo-600 hover:bg-foreground/10">
        <svg data-icon="more-horiz-two" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"> <path fill="currentColor" d="M10 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></path> </svg>
      </button>
    </header>
    <section>
      <div class="w-full flex items-center gap-3 p-3">
        <img
          src="https://images.pexels.com/photos/7586658/pexels-photo-7586658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          data-author="https://www.pexels.com/es-es/@cristian-rojas/"
          alt="cover"
          loading="lazy"
          class="w-10 h-10 rounded-full object-cover"
        />
        <h2 class="text-sm font-semibold">Tinna Millers</h2>
      </div>
    </section>
    <section class="grid w-full gap-3 p-3">
      <div class="w-full flex items-center justify-between gap-2">
        <button class="w-7 h-7 rounded-full inline-flex items-center justify-center flex-none bg-foreground/5">
          <svg data-icon="skip-previous-outline" xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 -960 960 960" fill="currentColor" ><path d="M244.62-297.69v-364.62q0-12.75 8.63-21.37 8.62-8.63 21.38-8.63t21.37 8.63q8.62 8.62 8.62 21.37v364.62q0 12.75-8.63 21.37-8.63 8.63-21.39 8.63-12.75 0-21.37-8.63-8.61-8.62-8.61-21.37Zm414.53-7.16L441.92-450.08q-8.23-5.61-12.15-13.15T425.85-480q0-9.23 3.92-16.77 3.92-7.54 12.15-13.15l217.23-145.23q4.62-3.62 9.85-4.62 5.23-1 10.23-1 14.46 0 25.31 9.94 10.84 9.95 10.84 26.22v289.22q0 16.27-10.84 26.22-10.85 9.94-25.31 9.94-5 0-10.23-1t-9.85-4.62ZM655.38-480Zm0 100v-200L504.77-480l150.61 100Z" ></path></svg >
        </button>
        <button class="w-7 h-7 rounded-full inline-flex items-center justify-center flex-none bg-foreground text-background">
          <svg data-icon="pause" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 -960 960 960" fill="currentColor" ><path d="M588.65-240.92q-12.86 0-21.52-9.08-8.67-9.08-8.67-21.12v-417.76q0-12.04 8.67-21.12 8.66-9.08 21.52-9.08h85.58q12.03 0 21.11 9.08t9.08 21.12v417.76q0 12.04-9.08 21.12-9.08 9.08-21.11 9.08h-85.58Zm-302 0q-12.86 0-21.52-9.08-8.67-9.08-8.67-21.12v-417.76q0-12.04 8.67-21.12 8.66-9.08 21.52-9.08H373q11.44 0 20.81 9.08 9.38 9.08 9.38 21.12v417.76q0 12.04-9.38 21.12-9.37 9.08-20.81 9.08h-86.35Z" ></path></svg >
        </button>
        <button class="w-7 h-7 rounded-full inline-flex items-center justify-center flex-none bg-foreground/5">
          <svg data-icon="skip-next-outline" xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 -960 960 960" fill="currentColor" ><path d="M655.38-297.69v-364.62q0-12.75 8.63-21.37 8.63-8.63 21.39-8.63 12.75 0 21.37 8.63 8.61 8.62 8.61 21.37v364.62q0 12.75-8.63 21.37-8.62 8.63-21.38 8.63T664-276.32q-8.62-8.62-8.62-21.37Zm-410.76-37.7v-289.22q0-16.27 10.84-26.22 10.85-9.94 25.31-9.94 5 0 10.23 1t9.85 4.62l217.23 145.23q8.23 5.61 12.15 13.15t3.92 16.77q0 9.23-3.92 16.77-3.92 7.54-12.15 13.15L300.85-304.85q-4.62 3.62-9.85 4.62-5.23 1-10.23 1-14.46 0-25.31-9.94-10.84-9.95-10.84-26.22Zm60-144.61Zm0 100 150.61-100-150.61-100v200Z" ></path></svg >
        </button>
      </div>
      <div class="flex gap-[1px] items-center flex-row justify-between w-full h-9 cursor-pointer">
        <div class="w-0.5 h-[15%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[20%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[40%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[40%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[35%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[45%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[55%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[50%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[40%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-foreground"></div>
        <div class="w-0.5 h-[20%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[15%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[10%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[15%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[20%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-foreground/30"></div>
        <div class="w-0.5 h-[30%] rounded-full bg-foreground/30"></div>
      </div>
    </section>
  </article>
  <article class="relative flex items-center flex-col justify-start gap-4 border break-inside rounded-xl p-3 mb-3 text-xs overflow-hidden bg-background text-foreground border-border">
    <header class="w-full">
      <h2 class="text-base leading-6 font-bold">The best house music mix</h2>
    </header>
    <section class="w-full">
      <div class="w-full flex flex-col items-start gap-3">
        <div class="w-full flex items-center justify-start gap-4">
          <div class="w-12 h-12 rounded-full inline-flex items-center justify-center flex-none bg-foreground/5">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" ><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" ><path d="M12 9.75a.75.75 0 0 1 .75.75c0 .539.315 1.1.834 1.56c.53.471 1.11.69 1.416.69a.75.75 0 0 1 0 1.5c-.738 0-1.58-.387-2.25-.93V17a2.25 2.25 0 1 1-1.5-2.122V10.5a.75.75 0 0 1 .75-.75M11.25 17a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0" ></path><path d="M8.7 1.25h6.6c.22 0 .389 0 .536.016A2.75 2.75 0 0 1 18.29 3.87a2.89 2.89 0 0 1 2.054 2.721c.601.18 1.12.465 1.544.923c.652.705.854 1.572.862 2.586c.007.975-.166 2.207-.382 3.736l-.44 3.114c-.168 1.196-.305 2.168-.518 2.929c-.223.797-.552 1.452-1.16 1.956c-.604.5-1.32.715-2.166.817c-.819.098-1.849.098-3.13.098H9.046c-1.282 0-2.312 0-3.13-.098c-.847-.102-1.563-.317-2.167-.817c-.608-.504-.937-1.16-1.16-1.956c-.213-.761-.35-1.733-.519-2.93l-.439-3.113c-.215-1.53-.39-2.761-.382-3.736c.008-1.014.21-1.881.862-2.586c.424-.458.942-.742 1.543-.923a2.89 2.89 0 0 1 2.055-2.72a2.75 2.75 0 0 1 2.454-2.605c.147-.016.316-.016.535-.016m-3.51 5.078c.926-.078 2.06-.078 3.427-.078h6.768c1.366 0 2.5 0 3.427.078a1.38 1.38 0 0 0-1.35-1.078H6.539c-.669 0-1.212.47-1.349 1.078m10.487-3.57c.55.058.985.468 1.092.992H7.232a1.25 1.25 0 0 1 1.092-.993c.056-.006.136-.007.417-.007h6.518c.28 0 .36.001.417.007M3.213 8.532c.303-.327.758-.544 1.643-.662c.901-.12 2.108-.121 3.816-.121h6.656c1.708 0 2.915.002 3.816.121c.885.118 1.34.335 1.643.662c.296.32.457.755.463 1.579c.006.85-.15 1.97-.376 3.576l-.423 3c-.178 1.261-.302 2.133-.485 2.787c-.177.63-.384.965-.673 1.204c-.293.244-.687.4-1.388.484c-.719.086-1.658.087-3 .087h-5.81c-1.342 0-2.281-.001-3-.087c-.7-.085-1.095-.24-1.388-.483c-.289-.24-.496-.576-.673-1.205c-.183-.654-.307-1.526-.485-2.787l-.423-3c-.226-1.605-.382-2.726-.376-3.576c.006-.824.167-1.26.463-1.579" ></path></g ></svg >
          </div>
          <span class="inline-flex items-center justify-center px-2 py-1 rounded text-xs font-medium bg-emerald-500/20 text-emerald-500">NEW</span>
        </div>
        <p class="text-foreground/70">This is a great house music mix that you..</p>
      </div>
    </section>
    <section class="flex flex-col items-start w-full gap-3">
      <p class="font-medium">Members</p>
      <div class="col-start-2 row-start-1 row-end-3 flex-none">
        <dt class="sr-only">Users</dt>
        <dd class="flex justify-start -space-x-1.5">
          <a href="#" class="inline-block -m-0.5">
            <img class="w-7 h-7 rounded-full ring-2 ring-background" src="https://randomuser.me/api/portraits/women/26.jpg" alt="avatar" loading="lazy" />
          </a>
          <a href="#" class="inline-block -m-0.5">
            <img class="w-7 h-7 rounded-full ring-2 ring-background" src="https://randomuser.me/api/portraits/men/35.jpg" alt="avatar" loading="lazy" />
          </a>
          <a href="#" class="inline-block -m-0.5">
            <img class="w-7 h-7 rounded-full ring-2 ring-background" src="https://randomuser.me/api/portraits/women/49.jpg" alt="avatar" loading="lazy" />
          </a>
        </dd>
      </div>
    </section>
  </article>
</section>

<section class="grid grid-cols-2 gap-3">
  <article class="relative flex flex-col items-start justify-between gap-1 border break-inside rounded-xl p-4 mb-3 text-xs overflow-hidden bg-background text-foreground border-border">
    <button class="absolute top-4 right-4 rounded-full inline-flex items-center justify-center w-8 h-8 transition-all duration-200 hover:bg-foreground/5 focus:ring-2 focus:ring-blue-600">
      <svg data-icon="more-horiz" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="currentColor" ><path d="M213.07-406q-30.59 0-52.21-21.79-21.63-21.78-21.63-52.37 0-30.59 21.79-52.21Q182.8-554 213.39-554q30.59 0 52.22 21.79 21.62 21.78 21.62 52.37 0 30.59-21.78 52.21Q243.66-406 213.07-406Zm266.77 0q-30.59 0-52.21-21.79Q406-449.57 406-480.16q0-30.59 21.79-52.21Q449.57-554 480.16-554q30.59 0 52.21 21.79Q554-510.43 554-479.84q0 30.59-21.79 52.21Q510.43-406 479.84-406Zm266.77 0q-30.59 0-52.22-21.79-21.62-21.78-21.62-52.37 0-30.59 21.78-52.21Q716.34-554 746.93-554q30.59 0 52.21 21.79 21.63 21.78 21.63 52.37 0 30.59-21.79 52.21Q777.2-406 746.61-406Z" ></path></svg >
    </button>
    <header class="relative">
      <img
        src="https://images.pexels.com/photos/3984822/pexels-photo-3984822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        data-author="Gustavo Fring"
        data-author-profile="https://www.pexels.com/es-es/@gustavo-fring/"
        alt="album cover"
        loading="lazy"
        class="object-cover w-14 h-14 flex-none rounded-full"
      />
    </header>
    <section class="flex items-center gap-2">
      <button class="inline-flex items-center justify-center w-8 h-8 flex-none rounded-full bg-foreground text-background">
        <svg data-icon="pause" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 -960 960 960" fill="currentColor" ><path d="M588.65-240.92q-12.86 0-21.52-9.08-8.67-9.08-8.67-21.12v-417.76q0-12.04 8.67-21.12 8.66-9.08 21.52-9.08h85.58q12.03 0 21.11 9.08t9.08 21.12v417.76q0 12.04-9.08 21.12-9.08 9.08-21.11 9.08h-85.58Zm-302 0q-12.86 0-21.52-9.08-8.67-9.08-8.67-21.12v-417.76q0-12.04 8.67-21.12 8.66-9.08 21.52-9.08H373q11.44 0 20.81 9.08 9.38 9.08 9.38 21.12v417.76q0 12.04-9.38 21.12-9.37 9.08-20.81 9.08h-86.35Z" ></path></svg >
      </button>
      <div class="grid">
        <h2 class="truncate text-sm font-medium">Antony dj</h2>
        <p class="truncate text-foreground/70">The best music for your ears</p>
      </div>
    </section>
    <div class="absolute left-0 bottom-0 w-full h-0.5 bg-foreground/10">
      <div class="h-full w-1/2 bg-foreground"></div>
    </div>
  </article>

  <article class="relative flex flex-col items-start justify-between gap-2 border break-inside rounded-xl p-4 mb-3 text-xs overflow-hidden bg-background text-foreground border-border">
    <button class="absolute top-4 right-4 rounded-full inline-flex items-center justify-center w-8 h-8 transition-all duration-200 hover:bg-foreground/5 focus:ring-2 focus:ring-blue-600">
      <svg data-icon="more-vert" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" ><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" ></path></svg >
    </button>
    <header class="relative w-14 h-14 flex items-center justify-center p-0.5">
      <img
        src="https://images.pexels.com/photos/2167384/pexels-photo-2167384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        data-author="Teddy Yang"
        data-author-profile="https://www.pexels.com/es-es/@teddy/"
        alt="album cover"
        loading="lazy"
        class="object-cover w-full h-full flex-none rounded-full"
      />
      <svg width="72" height="72" viewBox="0 0 200 200" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg"> <circle cx="100" cy="100" r="90" class="stroke-foreground/10" stroke-width="8" fill="none"></circle> <circle cx="100" cy="100" r="90" class="stroke-foreground" stroke-width="8" fill="none" stroke-dasharray="565.48" stroke-dashoffset="180.1" stroke-linecap="round" transform="rotate(-90 100 100)"></circle> </svg>
    </header>
    <section class="grid mt-1">
      <h2 class="font-medium truncate text-sm">Marcos</h2>
      <p class="truncate text-foreground/70">The best music for your ears</p>
    </section>
  </article>
</section>

<article class="relative flex items-center justify-between gap-4 border break-inside rounded-xl p-4 mb-3 text-xs overflow-hidden bg-background text-foreground border-border">
  <div class="w-full flex items-center justify-between gap-4">
    <div class="inline-flex items-center gap-3">
      <img class="flex-none w-11 h-11 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/77.jpg" alt="album cover" loading="lazy" />
      <div class="grid gap-0.5">
        <h2 class="font-semibold">Albert Mills</h2>
        <p class="truncate">The sound of the future</p>
      </div>
    </div>
    <div class="inline-flex items-center gap-2">
      <button class="inline-flex items-center justify-center w-8 h-8 flex-none rounded-full bg-foreground text-background transition-colors duration-200 hover:bg-foreground/90">
        <svg data-icon="pause" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 -960 960 960" fill="currentColor" ><path d="M588.65-240.92q-12.86 0-21.52-9.08-8.67-9.08-8.67-21.12v-417.76q0-12.04 8.67-21.12 8.66-9.08 21.52-9.08h85.58q12.03 0 21.11 9.08t9.08 21.12v417.76q0 12.04-9.08 21.12-9.08 9.08-21.11 9.08h-85.58Zm-302 0q-12.86 0-21.52-9.08-8.67-9.08-8.67-21.12v-417.76q0-12.04 8.67-21.12 8.66-9.08 21.52-9.08H373q11.44 0 20.81 9.08 9.38 9.08 9.38 21.12v417.76q0 12.04-9.38 21.12-9.37 9.08-20.81 9.08h-86.35Z" ></path></svg >
      </button>
      <button class="inline-flex items-center justify-center w-8 h-8 flex-none rounded-full transition-colors duration-200 hover:bg-foreground/5 focus:ring-2 focus:ring-blue-600">
        <svg data-icon="more-horiz" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="currentColor" ><path d="M213.07-406q-30.59 0-52.21-21.79-21.63-21.78-21.63-52.37 0-30.59 21.79-52.21Q182.8-554 213.39-554q30.59 0 52.22 21.79 21.62 21.78 21.62 52.37 0 30.59-21.78 52.21Q243.66-406 213.07-406Zm266.77 0q-30.59 0-52.21-21.79Q406-449.57 406-480.16q0-30.59 21.79-52.21Q449.57-554 480.16-554q30.59 0 52.21 21.79Q554-510.43 554-479.84q0 30.59-21.79 52.21Q510.43-406 479.84-406Zm266.77 0q-30.59 0-52.22-21.79-21.62-21.78-21.62-52.37 0-30.59 21.78-52.21Q716.34-554 746.93-554q30.59 0 52.21 21.79 21.63 21.78 21.63 52.37 0 30.59-21.79 52.21Q777.2-406 746.61-406Z" ></path></svg >
      </button>
    </div>
  </div>
</article>

<article class="border break-inside grid rounded-xl mb-3 text-xs overflow-hidden divide-y divide-border border-border bg-background text-foreground" data-filter="social">
  <header class="flex items-center justify-between divide-x divide-border">
    <div class="flex flex-1 items-center gap-3 p-3">
      <svg data-icon="playlist" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="currentColor" ><path d="M150-287.62q-17.85 0-29.92-12.62Q108-312.87 108-330.7q0-17.82 12.08-29.87 12.07-12.04 29.92-12.04h243.39q17.85 0 29.92 12.05 12.07 12.06 12.07 29.89 0 17.82-12.07 30.44-12.07 12.61-29.92 12.61H150Zm0-179q-17.85 0-29.92-12.62Q108-491.87 108-509.7q0-17.82 12.08-29.87 12.07-12.04 29.92-12.04h405.23q17.85 0 29.93 12.05 12.07 12.06 12.07 29.89 0 17.82-12.07 30.44-12.08 12.61-29.93 12.61H150Zm0-179q-17.85 0-29.92-12.62Q108-670.87 108-688.7q0-17.82 12.08-29.87 12.07-12.04 29.92-12.04h405.23q17.85 0 29.93 12.05 12.07 12.06 12.07 29.89 0 17.82-12.07 30.44-12.08 12.61-29.93 12.61H150Zm554.77 512.93q-6.62 4.61-13.04 4.3-6.42-.3-12.04-3.3-5.61-3-9.23-8.43-3.61-5.42-3.61-13.04v-198.15q0-7.65 3.43-13.39 3.43-5.75 9.41-8.45 5.62-3 12.04-3.31 6.42-.31 13.04 4.31l155.54 99.46q5.57 3.74 8.4 9.13 2.83 5.39 2.83 11.38 0 5.99-2.83 11.35-2.83 5.35-8.4 9.06l-155.54 99.08Z" ></path></svg >
      <div class="flex-1 grid">
        <h2 class="text-sm font-medium">Play list</h2>
        <p class="truncate text-foreground/70">Summer vibes and chill be...</p>
      </div>
    </div>
    <div class="p-3 h-full inline-flex flex-none items-center justify-center">
      <button class="inline-flex items-center justify-center w-7 h-7 focus:ring-2 transition-colors rounded-full focus:ring-primary hover:bg-foreground/5">
        <svg
          data-icon="chevron-down"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
      </button>
    </div>
  </header>
  <section class="flex items-center justify-between gap-2 p-3">
    <div class="inline-flex items-center gap-2">
      <img src="https://randomuser.me/api/portraits/women/88.jpg" class="w-8 h-8 flex-none rounded-full" />
      <div class="flex-1 grid">
        <h2 class="text-sm font-medium">Alice Anderson</h2>
        <p>Dolor sit amet consec...</p>
      </div>
    </div>
    <button class="flex justify-center items-center rounded-full w-7 h-7 transition-colors duration-300 bg-foreground text-background">
      <svg data-icon="play-fill" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor" ><path d="M340-302.23v-355.54q0-15.84 10.87-26 10.87-10.15 25.37-10.15 4.53 0 9.5 1.31 4.97 1.3 9.49 3.92l279.84 178.15q8.24 5.62 12.35 13.46 4.12 7.85 4.12 17.08 0 9.23-4.12 17.08-4.11 7.84-12.35 13.46L395.23-271.31q-4.53 2.62-9.52 3.92-4.98 1.31-9.51 1.31-14.51 0-25.35-10.15-10.85-10.16-10.85-26Z" ></path></svg >
    </button>
  </section>
  <section class="flex items-center justify-between gap-2 p-3">
    <div class="inline-flex items-center gap-2">
      <img src="https://randomuser.me/api/portraits/men/36.jpg" class="w-8 h-8 flex-none rounded-full" />
      <div class="flex-1 grid">
        <h2 class="text-sm font-medium">Jarry Smith</h2>
        <p>Lorem ipsum dolor sit amet...</p>
      </div>
    </div>
    <button class="flex justify-center items-center rounded-full w-7 h-7 transition-colors duration-300 bg-foreground text-background">
      <svg data-icon="play-fill" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor" ><path d="M340-302.23v-355.54q0-15.84 10.87-26 10.87-10.15 25.37-10.15 4.53 0 9.5 1.31 4.97 1.3 9.49 3.92l279.84 178.15q8.24 5.62 12.35 13.46 4.12 7.85 4.12 17.08 0 9.23-4.12 17.08-4.11 7.84-12.35 13.46L395.23-271.31q-4.53 2.62-9.52 3.92-4.98 1.31-9.51 1.31-14.51 0-25.35-10.15-10.85-10.16-10.85-26Z" ></path></svg >
    </button>
  </section>
</article>
