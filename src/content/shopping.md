---
title: 'Widget components with tailwind CSS'
description: 'Multiple widgets for user interfaces related to finance and economics'
slug: 'shopping'
category: 'Shopping'
visible: true
---

<article class="flex items-center justify-between border break-inside rounded-xl gap-2 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="flex flex-1 items-center gap-4">
    <div class="flex-none w-10 h-10 rounded-full flex items-center justify-center bg-foreground/5">
      <span class="material-symbols-rounded material-symbols-weight-300">box_edit</span>
    </div>
    <div class="flex-1">
      <h2 class="text-sm font-medium block">Edit package</h2>
      <p class="truncate text-foreground/70">Edit delivery package details</p>
    </div>
  </div>
  <button class="flex-none inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-colors rounded-full focus:ring-primary hover:bg-foreground/5">
    <span class="material-symbols-rounded material-symbols-md">edit</span>
  </button>
</article>

<article class="grid grid-cols-12 overflow-hidden border break-inside rounded-xl mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <img
    class="w-full col-span-4 h-full min-h-26 object-cover bg-rose-100"
    src="https://cdn.pixabay.com/photo/2024/04/05/17/05/ai-generated-8677799_1280.png"
    data-author="https://pixabay.com/users/lovechin-42965388/"
    loading="lazy"
  />
  <div class="h-full col-span-8 p-3">
    <div class="w-full h-full flex items-center justify-between gap-2 relative">
      <div class="flex-none mt-1 w-12 h-12 rounded-full -ml-8 border-3 p-1 object-contain border-background bg-rose-100">
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z">
          </path>
        </svg>
      </div>
      <div class="flex flex-col">
        <h2 class="text-sm font-semibold">Nike</h2>
        <span class="text-foreground/70">Nike court vision</span>
      </div>
      <button
        class="ml-auto flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background">
        Buy
      </button>
    </div>
  </div>
</article>

<article
  class="flex items-center justify-between break-inside rounded-xl mb-3 text-xs p-3 gap-4 overflow-hidden bg-violet-200 text-black dark:bg-violet-600/20 dark:text-violet-300"
  data-filter="social">
  <img
    src="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="Nike"
    class="object-cover flex-none w-14 h-14 rounded-full"
    data-author="https://www.pexels.com/@craytive/"
  />
  <section class="flex items-center justify-start gap-4">
    <div class="grid">
      <h2 class="text-sm font-medium block">Nike sneakers</h2>
      <p>Snakers for you and your family...</p>
    </div>
    <button class="flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-violet-700 text-white">
      Buy now
    </button>
  </section>
</article>

<section class="columns-2 gap-3 mb-3 break-inside">
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    <span class="material-symbols-rounded material-symbols-weight-300">delivery_truck_speed</span>
    <section class="flex flex-col">
      <h2 class="font-medium text-sm">Delivery</h2>
      <p class="text-foreground/70">Delivery in 2 days</p>
    </section>
  </article>
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    <span class="material-symbols-rounded material-symbols-weight-300">new_releases</span>
    <section class="flex flex-col">
      <h2 class="font-medium text-sm">New Arrivals</h2>
      <p class="text-foreground/70">New arrivals in the store</p>
    </section>
  </article>
  <article
    class="flex flex-col justify-start gap-2 border break-inside rounded-xl mb-3 text-xs divide-y divide-border border-border bg-background text-foreground"
    data-filter="social">
    <header class="w-full flex items-center justify-between">
      <div class="p-3 flex-none bg-foreground/2 border-r border-border">
        <span class="material-symbols-rounded material-symbols-weight-300">new_releases</span>
      </div>
      <div class="p-3 flex-1 flex items-center justify-center">
        <button
          class="flex-none inline-flex items-center justify-center font-medium h-6 px-2 text-xs focus:ring-2 transition-colors rounded bg-foreground/10 focus:ring-primary hover:bg-foreground/5">
          View
        </button>
      </div>
    </header>
    <section class="flex flex-col p-3 gap-1">
      <h2 class="font-medium text-sm">Arrivals</h2>
      <p class="text-foreground/70">Check out the latest products and...</p>
    </section>
  </article>
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    <span class="material-symbols-rounded material-symbols-weight-300">assignment_return</span>
    <section class="flex flex-col">
      <h2 class="font-medium text-sm">Devoluciones y reembolsos</h2>
      <p class="text-foreground/70">Nothing to return.</p>
    </section>
  </article>
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    <span class="material-symbols-rounded material-symbols-weight-300">local_shipping</span>
    <section class="flex flex-col">
      <h2 class="font-medium text-sm">Shipping</h2>
      <p class="text-foreground/70">Shipping for new user</p>
    </section>
  </article>
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    <span class="material-symbols-rounded material-symbols-weight-300">shopping_bag</span>
    <section class="flex flex-col">
      <h2 class="font-medium text-sm">Shopping Bag</h2>
      <p class="text-foreground/70">Shopping bag with items.</p>
    </section>
  </article>
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    <span class="material-symbols-rounded material-symbols-weight-300">shopping_cart</span>
    <section class="flex flex-col">
      <h2 class="font-medium text-sm">Shopping Cart</h2>
      <p class="text-foreground/70">Shopping cart with items.</p>
    </section>
  </article>
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    <div class="w-9 h-9 rounded-full flex items-center justify-center bg-green-500/15">
      <span class="material-symbols-rounded material-symbols-weight-300">shopping_bag_speed</span>
    </div>
    <section class="flex flex-col">
      <h2 class="font-medium text-sm">Express Delivery</h2>
      <p class="text-foreground/70">Express delivery for items in cart.</p>
    </section>
  </article>
  <article class="relative flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    <button
      class="absolute top-2 left-2 w-6 h-6 rounded-full inline-flex items-center justify-center focus:ring-2 transition-colors focus:ring-primary hover:bg-foreground/5"
      aria-label="Add to favorite">
      <span class="material-symbols-rounded material-symbols-weight-400 material-symbols-md">favorite</span>
    </button>
    <img
      src="https://cdn.pixabay.com/photo/2024/03/27/09/22/shoes-8658546_1280.png"
      alt="Nike"
      class="w-full max-w-full object-cover"
      data-author="https://pixabay.com/users/lovechin-42965388/"
    />
    <section class="flex flex-col">
      <h2 class="font-medium text-sm">Nike Jordan</h2>
      <p class="text-foreground/70">Nike Jordan 1 Retro High OG</p>
    </section>
  </article>
  <article class="relative flex flex-col justify-start gap-2 break-inside rounded-xl overflow-hidden mb-3 text-xs bg-foreground/5 text-foreground" data-filter="social">
    <div class="w-full p-4">
      <img
        src="https://cdn.pixabay.com/photo/2024/03/19/20/37/ai-generated-8644113_1280.png"
        alt="Nike"
        class="w-full max-w-full object-cover"
        data-author="https://pixabay.com/users/lovechin-42965388/"
      />
    </div>
    <section class="flex items-start flex-col px-4 pb-4 gap-1">
      <h2 class="font-medium text-sm">Nike Jordan</h2>
      <p class="text-foreground/70">Nike Jordan retro high and low...</p>
      <button
        class="flex-none inline-flex items-center justify-center mt-2 px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background hover:bg-foreground/80">
        Buy now
      </button>
    </section>
  </article>
  <article class="relative flex flex-col justify-start gap-2 break-inside rounded-xl overflow-hidden mb-3 text-xs bg-foreground/5 text-foreground" data-filter="social">
    <div class="w-full p-4">
      <img
        src="https://cdn.pixabay.com/photo/2024/03/19/20/37/ai-generated-8644113_1280.png"
        alt="Nike"
        class="w-full max-w-full object-cover"
        data-author="https://pixabay.com/users/lovechin-42965388/"
      />
    </div>
    <section class="flex items-start flex-col px-4 pb-4 gap-1">
      <h2 class="font-medium text-sm">Nike Jordan</h2>
      <p class="text-foreground/70">Nike Jordan retro high and low...</p>
      <button
        class="flex-none inline-flex items-center justify-center mt-2 px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background hover:bg-foreground/80">
        Buy now
      </button>
    </section>
  </article>
  <article class="relative flex flex-col justify-start gap-2 break-inside overflow-hidden mb-3 text-xs bg-background text-foreground" data-filter="social">
    <div class="relative w-full rounded-xl overflow-hidden">
      <span class="absolute bottom-2 left-2 px-2 h-6 rounded inline-flex items-center justify-center text-xs font-medium bg-pink-600 text-white">Oferta</span>
      <img
        src="https://images.unsplash.com/photo-1601762603339-fd61e28b698a?q=80&w=600"
        alt="Nike"
        class="w-full max-w-full object-cover"
        data-author="https://unsplash.com/es/@alirezadolati"
      />
    </div>
    <section class="flex items-start flex-col">
      <h2 class="font-medium text-sm">Americana</h2>
      <p class="text-foreground/70">Traje con americana y pantalón de vestir.</p>
      <div class="inline-flex items-center justify-start -space-x-1 mr-auto -ml-1 mt-1">
        <span class="material-symbols-rounded material-symbols-md material-symbols-weight-300 material-symbols-fill">star_rate</span>
        <span class="material-symbols-rounded material-symbols-md material-symbols-weight-300 material-symbols-fill">star_rate</span>
        <span class="material-symbols-rounded material-symbols-md material-symbols-weight-300 material-symbols-fill">star_rate</span>
        <span class="material-symbols-rounded material-symbols-md material-symbols-weight-300 material-symbols-fill">star_rate</span>
        <span class="material-symbols-rounded material-symbols-lg material-symbols-weight-300">star_half</span>
      </div>
    </section>
  </article>
</section>

<article class="flex items-center justify-between border break-inside rounded-xl gap-2 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <button class="flex-none inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-colors rounded-full focus:ring-primary hover:bg-foreground/5">
    <span class="material-symbols-rounded material-symbols-weight-300 material-symbols-md">favorite</span>
  </button>
</article>

<article class="flex items-center justify-between border break-inside rounded-xl gap-2 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="flex items-center justify-start gap-4">
    <div class="w-14 h-14 inline-flex items-start justify-center rounded-full p-1 flex-none bg-foreground/5">
      <img
        src="https://static.vecteezy.com/system/resources/previews/060/178/330/large_2x/bold-neon-geometric-designs-pop-on-these-black-nike-high-tops-the-purple-laces-and-orange-accents-add-a-vibrant-90s-vibe-a-stylish-and-energetic-sneaker-free-png.png"
        alt="Nike"
        class="w-full max-w-full object-cover"
      />
    </div>
    <div class="grid">
      <h2 class="text-sm font-medium block">Nike Jordan</h2>
      <p class="truncate text-foreground/70">Nike Jordan 1 Retro High OG</p>
    </div>
  </div>
</article>

<article class="flex items-center justify-between border break-inside rounded-xl gap-2 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <header class="w-full flex items-center justify-between gap-4">
    <div class="flex items-center justify-start gap-4">
      <div class="w-12 h-12 inline-flex items-start justify-center rounded-full flex-none p-1 bg-foreground/3">
        <img
          src="https://static.vecteezy.com/system/resources/previews/060/178/330/large_2x/bold-neon-geometric-designs-pop-on-these-black-nike-high-tops-the-purple-laces-and-orange-accents-add-a-vibrant-90s-vibe-a-stylish-and-energetic-sneaker-free-png.png"
          alt="Nike"
          class="w-full max-w-full object-cover"
        />
      </div>
      <div class="grid">
        <h2 class="text-sm font-medium block">Nike Jordan</h2>
        <p class="truncate text-foreground/70">Nike Jordan 1 Retro High OG</p>
      </div>
    </div>
    <button
      class="flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background hover:bg-foreground/80">
      Buy now
    </button>
  </header>
</article>

<article class="flex flex-col items-start justify-between border break-inside rounded-xl gap-2 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <header class="w-full flex items-center justify-between">
    <div class="flex flex-1 items-center gap-4">
      <div class="relative z-1 w-10 h-10 flex-none rounded-full inline-flex items-center justify-center border border-border">
        <span class="material-symbols-rounded material-symbols-weight-300">featured_seasonal_and_gifts</span>
      </div>
      <div class="flex-1">
        <h2 class="text-sm font-medium block">Delivery</h2>
        <p class="truncate text-foreground/70">Information about delivery</p>
      </div>
    </div>
    <button class="flex-none inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-colors rounded-full focus:ring-primary hover:bg-foreground/5">
      <span class="material-symbols-rounded material-symbols-md">more_horiz</span>
    </button>
  </header>
  <div class="flex items-center justify-between w-full relative mt-4">
    <div class="relative z-1 w-10 h-10 flex-none rounded-full inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 bg-background">
      <span class="material-symbols-rounded material-symbols-weight-300">delivery_truck_speed</span>
    </div>
    <div class="flex-1 border-t-2 border-dashed w-full border-border"></div>
    <div class="absolute top-1/2 -translate-y-1/2 left-10 w-1/3 flex items-center justify-between">
      <div class="flex-1 border-t-2 border-dashed border-blue-600"></div>
      <div
        class="relative inline-flex flex-none items-center justify-center rounded-full before:content-[''] before:absolute before:border-2 before:border-dashed before:border-blue-600 before:bg-background before:animate-rotate-infinite before:rounded-full before:w-7 before:h-7 before:-translate-x-1/2 before:-translate-y-1/2 before:top-1/2 before:left-1/2">
        <div class="relative inline-flex items-center justify-center text-blue-600">
          <span class="material-symbols-rounded material-symbols-weight-300">arrow_right</span>
        </div>
      </div>
    </div>
    <div class="relative z-1 w-10 h-10 flex-none rounded-full inline-flex items-center justify-center border-2 border-border">
      <span class="material-symbols-rounded material-symbols-weight-300">check_circle</span>
    </div>
  </div>
</article>

<article class="flex flex-col items-start justify-between border break-inside rounded-xl gap-2 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <section class="flex items-center justify-between w-full relative gap-4">
    <div class="flex-none rounded-full inline-flex items-center justify-center">
      <span class="material-symbols-rounded material-symbols-weight-300">delivery_truck_speed</span>
    </div>
    <div class="relative flex-1 w-full">
      <div class="flex-1 border-t w-full border-border"></div>
      <div class="absolute top-1/2 -translate-y-1/2 left-0 w-1/3 border border-blue-600"></div>
    </div>
    <div class="flex-none rounded-full inline-flex items-center justify-center">
      <span class="material-symbols-rounded material-symbols-weight-300">check</span>
    </div>
  </section>
  <section class="flex items-center justify-between w-full gap-4">
    <div>
      <h2 class="font-medium text-sm">Delivery</h2>
      <p class="text-foreground/70">Your order is on the way...</p>
    </div>
    <button
      class="flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground/10 text-foreground hover:bg-foreground/12">
      Check status
    </button>
  </section>
</article>

<article
  class="flex items-start flex-col justify-between border break-inside rounded-xl overflow-hidden gap-2 mb-3 text-xs divide-y divide-border border-border bg-background text-foreground"
  data-filter="social">
  <header class="w-full flex items-center justify-between p-4 bg-foreground/2">
    <div class="flex flex-1 items-center gap-4">
      <div class="relative z-1 w-10 h-10 flex-none rounded-full inline-flex items-center justify-center bg-foreground/5">
        <span class="material-symbols-rounded material-symbols-weight-300">package_2</span>
      </div>
      <div class="flex-1">
        <h2 class="text-sm font-medium block">2352JUA</h2>
        <p class="truncate text-foreground/70">Paid on Dec 23. 2020</p>
      </div>
    </div>
    <button class="flex-none inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-colors rounded-full focus:ring-primary hover:bg-foreground/5">
      <span class="material-symbols-rounded material-symbols-md">more_horiz</span>
    </button>
  </header>
  <div class="flex flex-col items-start justify-start gap-2 w-full p-4">
    <div class="flex items-center justify-between w-full relative">
      <div class="relative z-1 w-10 h-10 flex-none rounded-full inline-flex items-center justify-center border border-foreground text-foreground bg-background">
        <span class="material-symbols-rounded material-symbols-weight-200">delivery_truck_speed</span>
      </div>
      <div class="relative flex-1">
        <div class="absolute z-1 border-t border top-1/2 -translate-y-1/2 left-0 w-2/4 bg-foreground"></div>
        <div class="absolute z-0 border-t border-dashed top-1/2 -translate-y-1/2 left-0 w-full bg-border opacity-50"></div>
      </div>
      <div class="relative z-1 w-10 h-10 flex-none rounded-full inline-flex items-center justify-center border border-border bg-background">
        <span class="material-symbols-rounded material-symbols-weight-200">assignment_turned_in</span>
      </div>
    </div>
    <div class="flex items-center justify-between w-full">
      <div class="grid">
        <p class="font-medium">Tarragona</p>
        <p class="text-foreground/70">Spain</p>
      </div>
      <div class="grid text-right">
        <p class="font-medium">Madrid</p>
        <p class="text-foreground/70">Spain</p>
      </div>
    </div>
  </div>
</article>

<section class="columns-2 gap-3 mb-3 break-inside">
  <article class="flex flex-col justify-start gap-2 break-inside rounded-xl p-4 mb-3 text-xs bg-amber-400" data-filter="social">
    <header>
      <span class="px-2 h-6 rounded-full inline-flex items-center justify-center text-xs font-medium bg-black text-white">-5% Cashback</span>
    </header>
    <section class="flex flex-col gap-1">
      <h2 class="font-black leading-5 text-base">Cashback en compras</h2>
      <p>Recibe un 5% de cashback en tus compras.</p>
    </section>
  </article>
  <article class="flex flex-col justify-start gap-2 break-inside mb-3 text-xs bg-background text-black" data-filter="social">
    <section class="w-full p-4 rounded-xl bg-gradient-to-r from-violet-200 to-pink-200">
      <span class="px-2 h-6 rounded-full inline-flex items-center justify-center text-xs font-medium bg-pink-600 text-white">-50%</span>
      <img
        src="https://cdn.pixabay.com/photo/2024/04/05/17/05/ai-generated-8677799_1280.png"
        alt="Nike"
        class="w-full max-w-full object-cover"
        data-author="https://pixabay.com/users/lovechin-42965388/"
      />
      <h2 class="font-semibold leading-5 text-base mt-2">Cashback en compras</h2>
    </section>
  </article>
  <article class="flex flex-col justify-start items-start gap-2 break-inside rounded-xl p-4 mb-3 text-xs bg-yellow-300" data-filter="social">
    <header>
      <span class="px-2 h-6 rounded-full inline-flex items-center justify-center text-xs font-medium bg-violet-600 text-white">Cashback</span>
    </header>
    <section class="flex flex-col items-start gap-3">
      <h2 class="font-black leading-5 text-base">Get cashback in your purchases</h2>
      <button
        class="flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-white/60 text-black hover:bg-white/80">
        More info
      </button>
    </section>
  </article>
  <article class="relative flex flex-col justify-start gap-2 break-inside rounded-xl overflow-hidden mb-3 text-xs" data-filter="social">
    <img
      src="https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Nike"
      class="w-full max-w-full object-cover"
      data-author="https://www.pexels.com/@craytive/"
    />
    <div class="w-full h-full absolute inset-0 flex flex-col justify-between p-4 text-white bg-gradient-to-t from-black via-black/10 to-transparent">
      <header>
        <span class="px-2 h-6 rounded-full inline-flex items-center justify-center text-xs font-medium bg-white text-black">-5% Cashback</span>
      </header>
      <section class="flex flex-col gap-1">
        <h2 class="font-black leading-5 text-base">Cashback en compras</h2>
      </section>
    </div>
  </article>
  <article class="relative flex flex-col justify-start gap-2 break-inside rounded-xl overflow-hidden mb-3 text-xs" data-filter="social">
    <img
      src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Nike"
      class="w-full max-w-full object-cover"
      data-author="https://www.pexels.com/@kowalievska/"
    />
    <div class="w-full h-full absolute inset-0 flex flex-col items-start justify-between p-4 text-white bg-gradient-to-t from-black via-black/5 to-transparent">
      <span class="px-3 h-6 rounded-full inline-flex items-center justify-center text-xs font-medium bg-black text-white">Cashback</span>
      <section class="flex flex-col gap-1">
        <h2 class="font-medium leading-5 text-sm">Cashback en compras</h2>
      </section>
    </div>
  </article>
  <article
    class="flex items-start flex-col justify-between border break-inside rounded-xl gap-3 mb-3 text-xs divide-y divide-border border-border bg-background text-foreground"
    data-filter="social">
    <header class="w-full p-3 bg-foreground/2">
      <h2 class="font-medium text-sm">Delivery</h2>
      <p class="text-foreground/70">Delivery in 2 days</p>
    </header>
    <section class="grid w-full p-3">
      <div class="grid grid-cols-10 gap-2">
        <div class="flex flex-col items-center col-span-4">
          <div class="w-8 h-8 flex-none rounded-full inline-flex items-center justify-center bg-foreground text-background">
            <span class="material-symbols-rounded material-symbols-weight-300 material-symbols-md">check</span>
          </div>
          <div class="w-0.5 h-8 bg-foreground"></div>
        </div>
        <div class="grid flex-1 items-start col-span-6">
          <div class="grid text-left">
            <h2 class="font-medium">Origin</h2>
            <h2 class="text-foreground/70">Madrid</h2>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-10 gap-2">
        <div class="flex flex-col items-center col-span-4">
          <div class="w-8 h-8 flex-none rounded-full inline-flex items-center justify-center bg-foreground text-background">
            <span class="material-symbols-rounded material-symbols-weight-300 material-symbols-md">local_shipping</span>
          </div>
          <div class="relative w-0.5 h-8 bg-border">
            <div class="absolute top-0 h-1/2 w-full bg-foreground"></div>
          </div>
        </div>
        <div class="grid flex-1 items-start col-span-6">
          <div class="grid text-left">
            <h2 class="font-medium">Status</h2>
            <h2 class="text-foreground/70">In transit</h2>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-10 gap-2">
        <div class="flex flex-col items-center col-span-4">
          <div class="w-8 h-8 flex-none rounded-full inline-flex items-center justify-center border-2 border-border bg-background">
            <span class="material-symbols-rounded material-symbols-weight-300 material-symbols-md">cottage</span>
          </div>
        </div>
        <div class="grid flex-1 items-start col-span-6">
          <div class="grid text-left">
            <h2 class="font-medium">Destination</h2>
            <h2 class="text-foreground/70">Almería</h2>
          </div>
        </div>
      </div>
    </section>
  </article>
  <article class="relative flex flex-col justify-start gap-2 break-inside mb-3 text-xs bg-background text-foreground" data-filter="social">
    <div class="flex flex-col items-start gap-2 relative w-full p-4 rounded-xl bg-amber-100 dark:bg-amber-500/20">
      <span class="px-2 h-6 rounded-full inline-flex items-center justify-center text-xs font-medium bg-amber-200 text-amber-600">-30%</span>
      <img
        src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_1280.png"
        alt="Nike"
        class="w-full max-w-full object-cover"
        data-author="https://pixabay.com/users/openclipart-vectors-30363/"
      />
    </div>
    <section class="flex items-start flex-col px-2">
      <h2 class="font-medium text-sm">Converse</h2>
      <p class="text-foreground/70">Converse Chuck Taylor All Star High Top.</p>
      <div class="flex items-center justify-start gap-0.5 mt-2">
        <span class="text-foreground/70">€</span>
        <span class="font-medium">50.00</span>
      </div>
    </section>
  </article>
</section>

<article class="flex items-center justify-between border break-inside rounded-xl gap-2 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="flex items-center justify-start gap-4">
    <div class="w-14 h-14 inline-flex items-center justify-center rounded-full p-1 flex-none bg-rose-100 dark:bg-rose-500/20">
      <img
        src="https://cdn.pixabay.com/photo/2024/04/05/17/05/ai-generated-8677799_1280.png"
        alt="Nike"
        class="w-full max-w-full object-cover flex-none"
        data-author="https://pixabay.com/users/lovechin-42965388/"
      />
    </div>
    <div class="grid">
      <h2 class="text-sm font-medium block">Nike Jordan</h2>
      <p class="truncate text-foreground/70">Nike Jordan 1 Retro High OG and low available...</p>
    </div>
  </div>
</article>

<article class="flex items-center justify-between break-inside rounded-xl gap-6 p-4 mb-3 text-xs bg-foreground/5 text-foreground" data-filter="social">
  <div class="flex items-center justify-start gap-4">
    <div class="w-14 h-14 inline-flex items-center justify-center rounded-full p-1 flex-none bg-foreground/8 dark:bg-rose-500/20">
      <img
        src="https://cdn.pixabay.com/photo/2024/04/05/17/05/ai-generated-8677799_1280.png"
        alt="Nike"
        class="w-full max-w-full object-cover flex-none"
        data-author="https://pixabay.com/users/lovechin-42965388/"
      />
    </div>
    <div class="grid">
      <h2 class="text-sm font-medium block">Nike Jordan</h2>
      <p class="truncate text-foreground/70">Nike Jordan 1 Retro High OG and low available...</p>
    </div>
  </div>
  <button class="flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background">
    Buy
  </button>
</article>

<article class="flex items-center justify-between border break-inside rounded-xl gap-4 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="flex items-center justify-start gap-4">
    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full p-1 flex-none bg-foreground/5">
      <img src="https://cdn.worldvectorlogo.com/logos/nike-11.svg" alt="Nike" class="w-full max-w-full object-cover flex-none" />
    </div>
    <div class="grid">
      <h2 class="text-sm font-medium block">Nike</h2>
      <p class="truncate text-foreground/70">Buy Nike products</p>
    </div>
  </div>
  <button class="flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background">
    Visit
  </button>
</article>

<section class="columns-2 gap-3 mb-3 break-inside">
  <article
    class="flex flex-col justify-start gap-2 border break-inside rounded-xl mb-3 text-xs divide-y divide-border border-border bg-background text-foreground"
    data-filter="social">
    <header class="w-full px-4 pt-4 pb-2">
      <picture class="w-full">
        <img
          src="https://cdn.pixabay.com/photo/2024/04/12/11/49/ai-generated-8691762_1280.png"
          data-author="https://pixabay.com/users/krimker-936321/"
          alt="Nike"
          class="w-full max-w-full object-cover flex-none"
        />
      </picture>
    </header>
    <section class="w-full px-4 pb-4 pt-2">
      <h2 class="font-medium text-sm">Snakers for you</h2>
      <p class="text-foreground/70">Snakers for you and your family...</p>
      <div class="mt-4 flex items-center justify-between p-0.5 rounded w-full max-w-24 gap-1 border border-border">
        <button class="inline-flex items-center justify-center w-6 h-6 flex-none rounded cursor-pointer bg-foreground text-background">
          <span class="material-symbols-rounded material-symbols-weight-300 material-symbols-md">add</span>
        </button>
        <div class="flex flex-1 items-center justify-center text-xs font-medium h-6 rounded text-foreground/70 bg-foreground/5">2</div>
        <button class="inline-flex items-center justify-center w-6 h-6 flex-none rounded cursor-pointer bg-foreground text-background">
          <span class="material-symbols-rounded material-symbols-weight-300 material-symbols-md">remove</span>
        </button>
      </div>
    </section>
  </article>
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl mb-3 text-xs overflow-hidden border-border bg-background text-foreground" data-filter="social">
    <header class="relative w-full">
      <button class="absolute top-2 left-2 rounded-full inline-flex items-center justify-center w-6 h-6 cursor-pointer bg-white">
        <span class="material-symbols-rounded material-symbols-weight-300 material-symbols-xs material-symbols-fill text-rose-500">favorite</span>
      </button>
      <picture class="w-full">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500"
          data-author="https://unsplash.com/es/@dominostudio"
          alt="Nike"
          class="w-full max-w-full object-cover flex-none"
        />
      </picture>
    </header>
    <section class="w-full px-4 pb-4 pt-2">
      <span class="text-sm font-semibold text-rose-600">€ 50.00</span>
      <h2 class="font-bold text-sm">Offer for a limited time</h2>
      <p class="text-foreground/70">Snakers for you and your family...</p>
      <div class="mt-4 h-7 flex justify-between rounded w-full border divide-x divide-border border-border">
        <button class="inline-flex items-center justify-center w-full min-w-6 max-w-8 h-full flex-none cursor-pointer">
          <span class="material-symbols-rounded material-symbols-weight-300 material-symbols-md">add</span>
        </button>
        <div class="flex flex-1 items-center justify-center text-xs font-medium h-full text-foreground/70 bg-foreground/5">1</div>
        <button class="inline-flex items-center justify-center w-full min-w-6 max-w-8 h-full flex-none cursor-pointer">
          <span class="material-symbols-rounded material-symbols-weight-300 material-symbols-md">remove</span>
        </button>
      </div>
    </section>
  </article>
</section>

<article class="flex flex-col items-start justify-between border break-inside rounded-xl gap-2 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <header class="w-full flex items-center justify-between -ml-1">
    <div class="inline-flex items-center justify-start -space-x-1 mr-auto">
      <span class="material-symbols-rounded material-symbols-weight-300">star</span>
      <span class="material-symbols-rounded material-symbols-weight-300">star</span>
      <span class="material-symbols-rounded material-symbols-weight-300">star</span>
      <span class="material-symbols-rounded material-symbols-weight-300">star</span>
      <span class="material-symbols-rounded material-symbols-weight-300">star</span>
    </div>
    <span class="text-foreground/70">Hace 4 días</span>
  </header>
  <section class="grid gap-3 w-full">
    <div class="grid gap-1">
      <h2 class="font-medium text-sm">Pantalones</h2>
      <p class="">Pantalones de mezclilla de alta calidad, se ajustan perfectamente a tu cuerpo.</p>
    </div>
    <p class="flex items-center justify-start gap-1">
      <span class="material-symbols-rounded material-symbols-weight-300 material-symbols-md">language</span>
      <span class="mt-0.5 text-foreground/70">Escrita en español</span>
    </p>
  </section>
</article>

<article class="flex items-center justify-between border break-inside rounded-xl gap-4 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <div class="flex items-center justify-start gap-4">
    <span class="material-symbols-rounded material-symbols-weight-300">shopping_bag</span>
    <span class="material-symbols-rounded material-symbols-weight-300">favorite</span>
    <span class="material-symbols-rounded material-symbols-weight-300">credit_card</span>
  </div>
</article>

<article class="flex items-center justify-between break-inside rounded-xl gap-4 p-4 mb-3 text-xs bg-gradient-to-r from-violet-200 to-pink-200 text-foreground" data-filter="social">
  ...
</article>

<article class="flex items-center justify-between break-inside rounded-xl gap-4 p-4 mb-3 text-xs bg-gradient-to-r from-red-500 to-orange-500 text-foreground" data-filter="social">
  ...
</article>

<article class="flex items-center justify-between border break-inside rounded-xl gap-4 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  ...
</article>

<section class="columns-3 gap-3 mb-3 break-inside">
  <article class="flex items-center justify-between border break-inside rounded-xl gap-4 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    ...
  </article>

  <article class="flex items-center justify-between border break-inside rounded-xl gap-4 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
    ...
  </article>
</section>

<section class="columns-2 gap-3 mb-3 break-inside">
  <article class="relative flex flex-col justify-start gap-2 break-inside mb-3 text-xs bg-background text-foreground" data-filter="social">
    <div class="relative w-full p-4 rounded-xl min-h-34 bg-foreground/5">
      <img
        src="https://cdn.pixabay.com/photo/2024/05/28/07/31/ai-generated-8793079_1280.png"
        alt="Nike"
        class="w-full max-w-28 -top-6 object-cover absolute"
        data-author="https://pixabay.com/users/tanr%C4%B1ca-29544755/"
      />
    </div>
    <section class="flex items-start flex-col px-2">
      <h2 class="font-semibold text-base">Supermarket</h2>
      <p class="text-foreground/70">Enjoy the best products...</p>
    </section>
  </article>
</section>

<article
  class="relative flex items-center justify-between break-inside rounded-xl gap-4 p-4 mb-3 text-xs bg-gradient-to-r from-teal-500 to-yellow-200 text-white"
  data-filter="social">
  <div class="flex flex-col items-start gap-2 w-full pr-20">
    <h2 class="font-semibold leading-6 text-lg">Exclusive 50% Ana Rivera Sale</h2>
    <button class="flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-black text-white">Buy now</button>
  </div>
  <img
    src="https://cdn.pixabay.com/photo/2025/04/07/09/40/ai-generated-9518787_1280.png"
    alt="Nike"
    class="w-full max-w-23 object-cover absolute right-0 -top-5"
    data-author="https://pixabay.com/users/tanr%C4%B1ca-29544755/"
  />
</article>

<article class="flex flex-col items-start justify-between border break-inside rounded-xl gap-2 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="social">
  <section class="flex items-center justify-between w-full gap-4">
    <div class="h-7 flex justify-between rounded w-full max-w-26 flex-1 border divide-x divide-border border-border">
      <button class="inline-flex items-center justify-center w-full min-w-6 max-w-8 h-full flex-none cursor-pointer">
        <span class="material-symbols-rounded material-symbols-weight-300 material-symbols-md">add</span>
      </button>
      <div class="flex flex-1 items-center justify-center text-xs font-medium h-full text-foreground/70 bg-foreground/5">1</div>
      <button class="inline-flex items-center justify-center w-full min-w-6 max-w-8 h-full flex-none cursor-pointer">
        <span class="material-symbols-rounded material-symbols-weight-300 material-symbols-md">remove</span>
      </button>
    </div>
    <div class="inline-flex items-center justify-end gap-2">
      <button class="relative cursor-pointer w-8 h-8 inline-flex items-center justify-center rounded-full flex-none border border-border">
        <span class="material-symbols-rounded material-symbols-weight-400 material-symbols-md">favorite</span>
      </button>
      <button class="relative cursor-pointer w-8 h-8 inline-flex items-center justify-center rounded-full flex-none border border-border">
        <span class="absolute -top-2 -right-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-medium">1</span>
        <span class="material-symbols-rounded material-symbols-weight-400 material-symbols-md">shopping_bag</span>
      </button>
    </div>
  </section>
</article>

<section class="columns-2 gap-3 mb-3 break-inside">
  <article
    class="flex flex-col items-start justify-start gap-2 border break-inside rounded-xl overflow-hidden mb-3 text-xs divide-y divide-border border-border bg-background text-foreground"
    data-filter="social">
    <picture class="p-4 pb-6 w-full bg-foreground/4">
      <img
        src="https://cdn.pixabay.com/photo/2024/04/05/16/59/ai-generated-8677786_1280.png"
        alt="Nike"
        class="object-cover flex-none max-w-full"
        data-author="https://pixabay.com/users/lovechin-42965388/"
      />
    </picture>
    <section class="relative flex flex-col items-start p-4 pt-6">
      <div
        class="absolute -top-6 left-2 inline-flex items-center justify-between gap-2 w-full max-w-26 border break-inside rounded-full p-1 mb-3 text-xs border-border bg-background text-foreground"
        data-filter="social">
        <img
          src="https://images.unsplash.com/photo-1615851943632-ffb942c2fceb?q=format&fit=facearea&facepad=4&w=256&h=256&q=80"
          alt="avatar"
          class="w-7 h-7 rounded-full"
          loading="lazy"
        />
        <h2 class="flex-1 font-medium text-xs">Alex</h2>
      </div>
      <h2 class="font-medium text-sm">Nike Air Max, Brasil colors</h2>
      <button
        class="flex-none inline-flex items-center justify-center mt-2 px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background hover:bg-foreground/80">
        Buy now
      </button>
    </section>
  </article>
  <article
    class="flex flex-col items-start justify-start gap-2 border break-inside rounded-xl overflow-hidden mb-3 text-xs divide-y divide-border border-border bg-background text-foreground"
    data-filter="social">
    <picture class="p-4 w-full bg-foreground/4">
      <img
        src="https://cdn.pixabay.com/photo/2017/09/20/11/46/sneakers-2768260_1280.png"
        alt="Nike"
        class="object-cover flex-none max-w-full"
        data-author="https://pixabay.com/users/alexas_fotos-686414/"
      />
    </picture>
    <section class="relative flex items-start flex-col p-4 pt-6">
      <div
        class="absolute -top-6 left-2 inline-flex items-center justify-between gap-2 w-full max-w-26 border break-inside rounded-full p-1 mb-3 text-xs border-border bg-background text-foreground"
        data-filter="social">
        <img
          src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=format&fit=facearea&facepad=4&w=256&h=256&q=80"
          alt="avatar"
          class="w-7 h-7 rounded-full"
          loading="lazy"
        />
        <h2 class="flex-1 font-medium text-xs">Marloon</h2>
      </div>
      <h2 class="font-medium text-sm">Converse Chuck Taylor</h2>
      <button
        class="flex-none inline-flex items-center justify-center mt-2 px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background hover:bg-foreground/80">
        Buy now
      </button>
    </section>
  </article>
  <article
    class="flex flex-col items-start justify-start gap-2 border break-inside rounded-xl overflow-hidden mb-3 text-xs divide-y divide-border border-border bg-background text-foreground"
    data-filter="social">
    <picture class="p-3 w-full bg-foreground/4">
      <img
        src="https://cdn.pixabay.com/photo/2017/09/20/11/31/sneakers-2768218_1280.png"
        alt="Nike"
        class="object-cover flex-none max-w-full"
        data-author="https://pixabay.com/users/alexas_fotos-686414/"
      />
    </picture>
    <section class="relative flex items-start flex-col w-full p-3 pt-2 gap-2">
      <div class="w-full flex items-center justify-start gap-0.5">
        <button class="w-5 h-5 cursor-pointer rounded-full ring-2 ring-transparent border-2 border-background bg-pink-500 focus:ring-pink-500"></button>
        <button class="w-5 h-5 cursor-pointer rounded-full ring-2 ring-transparent border-2 border-background bg-blue-500 focus:ring-blue-500"></button>
        <button class="w-5 h-5 cursor-pointer rounded-full ring-2 ring-transparent border-2 border-background bg-green-500 focus:ring-green-500"></button>
        <button disabled class="w-5 h-5 cursor-pointer rounded-full ring-2 ring-transparent border-2 disabled:opacity-30 border-background bg-yellow-500 focus:ring-yellow-500">
        </button>
      </div>
      <div class="grid">
        <h2 class="font-medium text-sm">Converse</h2>
        <p class="text-foreground/70">Converse Chuck</p>
      </div>
      <div class="flex items-center justify-between w-full gap-2 mt-2">
        <div class="h-7 flex justify-between rounded w-full max-w-26 flex-1 border divide-x divide-border border-border">
          <button class="inline-flex items-center justify-center h-full flex-none cursor-pointer">
            <span class="material-symbols-rounded material-symbols-weight-300 material-symbols-md">add</span>
          </button>
          <div class="flex flex-1 items-center justify-center text-xs font-medium h-full text-foreground/70 bg-foreground/5">1</div>
          <button class="inline-flex items-center justify-center h-full flex-none cursor-pointer">
            <span class="material-symbols-rounded material-symbols-weight-300 material-symbols-md">remove</span>
          </button>
        </div>
        <button
          class="flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background hover:bg-foreground/80">
          Buy
        </button>
      </div>
    </section>
  </article>
  <article
    class="flex flex-col items-start justify-start gap-2 break-inside rounded-xl overflow-hidden mb-3 p-3 text-xs bg-gradient-to-bl from-teal-200 to-transparent dark:from-teal-500/20 dark:to-cyan-500/10 dark:text-white"
    data-filter="social">
    <picture class="w-full">
      <img
        src="https://cdn.pixabay.com/photo/2017/09/20/11/47/sneakers-2768263_1280.png"
        alt="Nike"
        class="object-cover flex-none max-w-full"
        data-author="https://pixabay.com/users/alexas_fotos-686414/"
      />
    </picture>
    <section class="relative flex items-start flex-col w-full gap-2">
      <div class="w-full flex items-center justify-start gap-0.5">
        <button class="w-5 h-5 cursor-pointer rounded-full ring-2 ring-transparent border-2 border-background bg-pink-500 focus:ring-pink-500"></button>
        <button class="w-5 h-5 cursor-pointer rounded-full ring-2 ring-transparent border-2 border-background bg-blue-500 focus:ring-blue-500"></button>
        <button
          data-selected="true"
          class="w-5 h-5 cursor-pointer rounded-full ring-2 ring-transparent border-2 border-background bg-green-500 focus:ring-green-500 data-[selected='true']:ring-green-500">
        </button>
        <button disabled class="w-5 h-5 cursor-pointer rounded-full ring-2 ring-transparent border-2 disabled:opacity-30 border-background bg-yellow-500 focus:ring-yellow-500">
        </button>
      </div>
      <div class="grid">
        <h2 class="font-medium text-sm">Converse</h2>
        <p class="text-foreground/70">Converse Chuck</p>
      </div>
      <div class="w-full gap-2">
        <button
          class="flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background hover:bg-foreground/80">
          Buy now
        </button>
      </div>
    </section>
  </article>
</section>
