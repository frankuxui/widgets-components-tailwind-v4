---
title: "Widget components with tailwind CSS"
description: "Multiple widgets for user interfaces related to finance and economics"
slug: "shopping"
category: "Shopping"
visible: true
---

<article class="flex items-center justify-between border break-inside rounded-xl gap-2 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
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

<article class="grid grid-cols-12 overflow-hidden border break-inside rounded-xl mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
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
            d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z"
          >
          </path>
        </svg>
      </div>
      <div class="flex flex-col">
        <h2 class="text-sm font-semibold">Nike</h2>
        <span class="text-foreground/70">Nike court vision</span>
      </div>
      <button class="ml-auto flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background"> Buy </button>
    </div>
  </div>
</article>

<article
  class="flex items-center justify-between break-inside rounded-xl mb-3 text-xs p-3 gap-4 overflow-hidden bg-violet-200 text-black dark:bg-violet-600/20 dark:text-violet-300"
  data-filter="shopping"
>
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
    <button class="flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-violet-700 text-white"> Buy now </button>
  </section>
</article>

<section class="columns-2 gap-3 mb-3 break-inside">
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
    <span class="material-symbols-rounded material-symbols-weight-300">delivery_truck_speed</span>
    <section class="flex flex-col">
      <h2 class="font-medium text-sm">Delivery</h2>
      <p class="text-foreground/70">Delivery in 2 days</p>
    </section>
  </article>
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
    <span class="material-symbols-rounded material-symbols-weight-300">new_releases</span>
    <section class="flex flex-col">
      <h2 class="font-medium text-sm">New Arrivals</h2>
      <p class="text-foreground/70">New arrivals in the store</p>
    </section>
  </article>
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl mb-3 text-xs divide-y divide-border border-border bg-background text-foreground" data-filter="shopping">
    <header class="w-full flex items-center justify-between">
      <div class="p-3 flex-none bg-foreground/2 border-r border-border">
        <span class="material-symbols-rounded material-symbols-weight-300">new_releases</span>
      </div>
      <div class="p-3 flex-1 flex items-center justify-center">
        <button class="flex-none inline-flex items-center justify-center font-medium h-6 px-2 text-xs focus:ring-2 transition-colors rounded bg-foreground/10 focus:ring-primary hover:bg-foreground/5">
          View
        </button>
      </div>
    </header>
    <section class="flex flex-col p-3 gap-1">
      <h2 class="font-medium text-sm">Arrivals</h2>
      <p class="text-foreground/70">Check out the latest products and...</p>
    </section>
  </article>
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
    <span class="material-symbols-rounded material-symbols-weight-300">assignment_return</span>
    <section class="flex flex-col">
      <h2 class="font-medium text-sm">Devoluciones y reembolsos</h2>
      <p class="text-foreground/70">Nothing to return.</p>
    </section>
  </article>
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
    <span class="material-symbols-rounded material-symbols-weight-300">local_shipping</span>
    <section class="flex flex-col">
      <h2 class="font-medium text-sm">Shipping</h2>
      <p class="text-foreground/70">Shipping for new user</p>
    </section>
  </article>
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
    <span class="material-symbols-rounded material-symbols-weight-300">shopping_bag</span>
    <section class="flex flex-col">
      <h2 class="font-medium text-sm">Shopping Bag</h2>
      <p class="text-foreground/70">Shopping bag with items.</p>
    </section>
  </article>
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
    <span class="material-symbols-rounded material-symbols-weight-300">shopping_cart</span>
    <section class="flex flex-col">
      <h2 class="font-medium text-sm">Shopping Cart</h2>
      <p class="text-foreground/70">Shopping cart with items.</p>
    </section>
  </article>
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
    <div class="w-9 h-9 rounded-full flex items-center justify-center bg-green-500/15">
      <span class="material-symbols-rounded material-symbols-weight-300">shopping_bag_speed</span>
    </div>
    <section class="flex flex-col">
      <h2 class="font-medium text-sm">Express Delivery</h2>
      <p class="text-foreground/70">Express delivery for items in cart.</p>
    </section>
  </article>
  <article class="relative flex flex-col justify-start gap-2 border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
    <button
      class="absolute top-2 left-2 w-6 h-6 rounded-full inline-flex items-center justify-center focus:ring-2 transition-colors focus:ring-primary hover:bg-foreground/5"
      aria-label="Add to favorite"
    >
      <span class="material-symbols-rounded material-symbols-weight-400 material-symbols-md">favorite</span>
    </button>
    <img src="https://cdn.pixabay.com/photo/2024/03/27/09/22/shoes-8658546_1280.png" alt="Nike" class="w-full max-w-full object-cover" data-author="https://pixabay.com/users/lovechin-42965388/" />
    <section class="flex flex-col">
      <h2 class="font-medium text-sm">Nike Jordan</h2>
      <p class="text-foreground/70">Nike Jordan 1 Retro High OG</p>
    </section>
  </article>
  <article class="relative flex flex-col justify-start gap-2 break-inside rounded-xl overflow-hidden mb-3 text-xs bg-foreground/5 text-foreground" data-filter="shopping">
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
        class="flex-none inline-flex items-center justify-center mt-2 px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background hover:bg-foreground/80"
      >
        Buy now
      </button>
    </section>
  </article>
  <article class="relative flex flex-col justify-start gap-2 break-inside rounded-xl overflow-hidden mb-3 text-xs bg-foreground/5 text-foreground" data-filter="shopping">
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
        class="flex-none inline-flex items-center justify-center mt-2 px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background hover:bg-foreground/80"
      >
        Buy now
      </button>
    </section>
  </article>
  <article class="relative flex flex-col justify-start gap-2 break-inside overflow-hidden mb-3 text-xs bg-background text-foreground" data-filter="shopping">
    <div class="relative w-full rounded-xl overflow-hidden">
      <span class="absolute bottom-2 left-2 px-2 h-6 rounded inline-flex items-center justify-center text-xs font-medium bg-pink-600 text-white">Oferta</span>
      <img src="https://images.unsplash.com/photo-1601762603339-fd61e28b698a?q=80&w=600" alt="Nike" class="w-full max-w-full object-cover" data-author="https://unsplash.com/es/@alirezadolati" />
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
  <article class="border break-inside rounded-xl overflow-hidden text-xs mb-3 border-border bg-background text-foreground" data-filter="shopping">
    <img src="https://images.unsplash.com/photo-1625965187629-d63fab5419ee?q=80&w=600&auto=format&fit=crop" class="w-full max-w-full object-cover" alt="fotografía de unsplash por Hamayoon Pacha" />
    <div class="w-full">
      <div class="px-3 pt-3 flex items-center justify-between gap-2">
        <h2 class="font-semibold">Cashback en compras</h2>
        <span class="size-6 rounded-full inline-flex items-center justify-center flex-none bg-rose-600 text-white font-semibold">3</span>
      </div>
      <p class="w-full mt-2 p-3 bg-foreground/5">Obtén un 3% de reembolso.</p>
    </div>
  </article>

  <article class="border break-inside rounded-xl group overflow-hidden text-xs mb-3 border-border bg-background text-foreground" data-filter="shopping">
    <div class="w-full relative z-0">
      <img
        src="https://images.unsplash.com/photo-1644426059269-36535c7c00fc?q=80&w=600&auto=format&fit=crop"
        class="w-full h-full min-h-28 max-w-full object-cover group-hover:scale-105 transition-transform duration-300"
        alt="fotografía de unsplash por george catalina"
      />
      <svg xmlns="http://www.w3.org/2000/svg" class="absolute -bottom-1 h-7 -left-4 text-background" viewBox="0 0 370 64" fill="currentColor"
        ><path d="M370 48.3703C191.845 -15.3575 111.499 -15.0024 0 48.3703V63.8703H370V48.3703Z" fill="currentColor"></path></svg
      >
    </div>
    <div class="w-full p-3 relative z-1 -mt-5">
      <h2 class="font-semibold">Cantidad de productos</h2>
      <div class="mt-3 w-full rounded-full max-w-40 gap-1 p-0.5 border border-border overflow-hidden">
        <div class="w-full p-1 flex items-center justify-between rounded-full bg-foreground/5">
          <button class="inline-flex items-center justify-center w-6 h-6 flex-none rounded-full cursor-pointer bg-rose-600 text-white">
            <span class="material-symbols-rounded material-symbols-weight-300 material-symbols-md">add</span>
          </button>
          <div class="flex flex-1 items-center justify-center text-xs font-medium">2</div>
          <button class="inline-flex items-center justify-center w-6 h-6 flex-none rounded-full cursor-pointer bg-rose-600 text-white">
            <span class="material-symbols-rounded material-symbols-weight-300 material-symbols-md">remove</span>
          </button>
        </div>
      </div>
    </div>
  </article>

  <article class="border break-inside rounded-xl overflow-hidden mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
    <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop" class="w-full max-w-full object-cover" alt="fotografía de unsplash por USAMA AKRAM" />
  </article>

  <article class="border break-inside rounded-xl overflow-hidden mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
    <img
      src="https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=600&auto=format&fit=crop"
      class="w-full max-w-full object-cover"
      alt="fotografía de unsplash por Regis-Hari Bouchard"
    />
  </article>
</section>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
  <header class="flex items-center justify-between gap-3">
    <div>
      <h2 class="text-sm font-semibold">Resumen de pedidos</h2>
      <p class="text-foreground/60">Actividad de la mañana</p>
    </div>
    <span class="size-9 rounded-full inline-flex items-center justify-center bg-indigo-500/15 text-indigo-600">
      <span class="material-symbols-rounded material-symbols-weight-300">receipt_long</span>
    </span>
  </header>
  <div class="mt-4 grid grid-cols-3 gap-2 text-center">
    <div class="rounded-lg bg-emerald-500/20 p-2">
      <strong class="block text-sm">24</strong>
      <span class="text-foreground">Nuevos</span>
    </div>
    <div class="rounded-lg bg-indigo-500/20 p-2">
      <strong class="block text-sm">18</strong>
      <span class="text-foreground">Pagados</span>
    </div>
    <div class="rounded-lg bg-amber-500/20 p-2">
      <strong class="block text-sm">6</strong>
      <span class="text-foreground">Pendientes</span>
    </div>
  </div>
</article>

<article class="flex items-center justify-between border break-inside rounded-xl gap-2 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
  <button class="flex-none inline-flex items-center justify-center w-8 h-8 focus:ring-2 transition-colors rounded-full focus:ring-primary hover:bg-foreground/5">
    <span class="material-symbols-rounded material-symbols-weight-300 material-symbols-md">favorite</span>
  </button>
</article>

<article class="flex items-center justify-between border break-inside rounded-xl gap-2 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
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

<article class="flex items-center justify-between border break-inside rounded-xl gap-2 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
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
    <button class="flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background hover:bg-foreground/80">
      Buy now
    </button>
  </header>
</article>

<article class="flex flex-col items-start justify-between border break-inside rounded-xl gap-2 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
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
        class="relative inline-flex flex-none items-center justify-center rounded-full before:content-[''] before:absolute before:border-2 before:border-dashed before:border-blue-600 before:bg-background before:animate-rotate-infinite before:rounded-full before:w-7 before:h-7 before:-translate-x-1/2 before:-translate-y-1/2 before:top-1/2 before:left-1/2"
      >
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

<article class="flex flex-col items-start justify-between border break-inside rounded-xl gap-2 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
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
    <button class="flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground/10 text-foreground hover:bg-foreground/12">
      Check status
    </button>
  </section>
</article>

<article
  class="flex items-start flex-col justify-between border break-inside rounded-xl overflow-hidden gap-2 mb-3 text-xs divide-y divide-border border-border bg-background text-foreground"
  data-filter="shopping"
>
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

<section class="columns-2 gap-3 mb-3 break-inside items-start content-start">
  <article class="flex flex-col justify-start gap-2 break-inside rounded-xl p-4 mb-3 text-xs bg-amber-400" data-filter="shopping">
    <header>
      <span class="px-2 h-6 rounded-full inline-flex items-center justify-center text-xs font-medium bg-black text-white">-5% Cashback</span>
    </header>
    <section class="flex flex-col gap-1">
      <h2 class="font-black leading-5 text-base">Cashback en compras</h2>
      <p>Recibe un 5% de cashback en tus compras.</p>
    </section>
  </article>
  <article class="flex flex-col justify-start gap-2 break-inside mb-3 text-xs bg-background text-black" data-filter="shopping">
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
  <article class="flex flex-col justify-start items-start gap-2 break-inside rounded-xl p-4 mb-3 text-xs bg-yellow-300" data-filter="shopping">
    <header>
      <span class="px-2 h-6 rounded-full inline-flex items-center justify-center text-xs font-medium bg-violet-600 text-white">Cashback</span>
    </header>
    <section class="flex flex-col items-start gap-3">
      <h2 class="font-black leading-5 text-base">Get cashback in your purchases</h2>
      <button class="flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-white/60 text-black hover:bg-white/80">
        More info
      </button>
    </section>
  </article>
  <article class="relative flex flex-col justify-start gap-2 break-inside rounded-xl overflow-hidden mb-3 text-xs" data-filter="shopping">
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
  <article class="relative flex flex-col justify-start gap-2 break-inside rounded-xl overflow-hidden mb-3 text-xs" data-filter="shopping">
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
    data-filter="shopping"
  >
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
  <article class="relative flex flex-col justify-start gap-2 break-inside mb-3 text-xs bg-background text-foreground" data-filter="shopping">
    <div class="flex flex-col items-start gap-2 relative w-full p-4 rounded-xl bg-amber-100 dark:bg-amber-500/20">
      <span class="px-2 h-6 rounded-full inline-flex items-center justify-center text-xs font-medium bg-amber-200 text-amber-600">-30%</span>
      <img
        src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_1280.png"
        alt="Nike"
        class="w-full max-w-full object-cover max-h-24"
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

<article class="flex items-center justify-between border break-inside rounded-xl gap-2 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
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

<article class="flex items-center justify-between break-inside rounded-xl gap-6 p-4 mb-3 text-xs bg-foreground/5 text-foreground" data-filter="shopping">
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
  <button class="flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background"> Buy </button>
</article>

<article class="flex items-center justify-between border break-inside rounded-xl gap-4 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
  <div class="flex items-center justify-start gap-4">
    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full p-1 flex-none bg-foreground/5">
      <img src="https://cdn.worldvectorlogo.com/logos/nike-11.svg" alt="Nike" class="w-full max-w-full object-cover flex-none" />
    </div>
    <div class="grid">
      <h2 class="text-sm font-medium block">Nike</h2>
      <p class="truncate text-foreground/70">Buy Nike products</p>
    </div>
  </div>
  <button class="flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background"> Visit </button>
</article>

<section class="columns-2 gap-3 mb-3 break-inside">
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl mb-3 text-xs divide-y divide-border border-border bg-background text-foreground" data-filter="shopping">
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
  <article class="flex flex-col justify-start gap-2 border break-inside rounded-xl mb-3 text-xs overflow-hidden border-border bg-background text-foreground" data-filter="shopping">
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

<article class="flex flex-col items-start justify-between border break-inside rounded-xl gap-2 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
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

<article class="flex items-center justify-between border break-inside rounded-xl gap-4 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
  <div class="flex items-center justify-start gap-4">
    <span class="material-symbols-rounded material-symbols-weight-300">shopping_bag</span>
    <span class="material-symbols-rounded material-symbols-weight-300">favorite</span>
    <span class="material-symbols-rounded material-symbols-weight-300">credit_card</span>
  </div>
</article>

<article class="flex items-center justify-between break-inside rounded-xl gap-4 p-4 mb-3 text-xs bg-gradient-to-r from-violet-200 to-pink-200 text-foreground" data-filter="shopping">...</article>

<article class="flex items-center justify-between break-inside rounded-xl gap-4 p-4 mb-3 text-xs bg-gradient-to-r from-red-500 to-orange-500 text-foreground" data-filter="shopping">...</article>

<article class="flex items-center justify-between border break-inside rounded-xl gap-4 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">...</article>

<section class="columns-3 gap-3 mb-3 break-inside">
  <article class="flex items-center justify-between border break-inside rounded-xl gap-4 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">...</article>

  <article class="flex items-center justify-between border break-inside rounded-xl gap-4 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">...</article>
</section>

<section class="columns-2 gap-3 mb-3 break-inside">
  <article class="relative flex flex-col justify-start gap-2 break-inside mb-3 text-xs bg-background text-foreground" data-filter="shopping">
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

<article class="relative flex items-center justify-between break-inside rounded-xl gap-4 p-4 mb-3 text-xs bg-gradient-to-r from-teal-500 to-yellow-200 text-white" data-filter="shopping">
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

<article class="flex flex-col items-start justify-between border break-inside rounded-xl gap-2 p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
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
    data-filter="shopping"
  >
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
        data-filter="shopping"
      >
        <img src="https://images.unsplash.com/photo-1615851943632-ffb942c2fceb?q=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="avatar" class="w-7 h-7 rounded-full" loading="lazy" />
        <h2 class="flex-1 font-medium text-xs">Alex</h2>
      </div>
      <h2 class="font-medium text-sm">Nike Air Max, Brasil colors</h2>
      <button
        class="flex-none inline-flex items-center justify-center mt-2 px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background hover:bg-foreground/80"
      >
        Buy now
      </button>
    </section>
  </article>
  <article
    class="flex flex-col items-start justify-start gap-2 border break-inside rounded-xl overflow-hidden mb-3 text-xs divide-y divide-border border-border bg-background text-foreground"
    data-filter="shopping"
  >
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
        data-filter="shopping"
      >
        <img src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="avatar" class="w-7 h-7 rounded-full" loading="lazy" />
        <h2 class="flex-1 font-medium text-xs">Marloon</h2>
      </div>
      <h2 class="font-medium text-sm">Converse Chuck Taylor</h2>
      <button
        class="flex-none inline-flex items-center justify-center mt-2 px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background hover:bg-foreground/80"
      >
        Buy now
      </button>
    </section>
  </article>
  <article
    class="flex flex-col items-start justify-start gap-2 border break-inside rounded-xl overflow-hidden mb-3 text-xs divide-y divide-border border-border bg-background text-foreground"
    data-filter="shopping"
  >
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
        <button disabled class="w-5 h-5 cursor-pointer rounded-full ring-2 ring-transparent border-2 disabled:opacity-30 border-background bg-yellow-500 focus:ring-yellow-500"> </button>
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
        <button class="flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background hover:bg-foreground/80">
          Buy
        </button>
      </div>
    </section>
  </article>
  <article
    class="flex flex-col items-start justify-start gap-2 break-inside rounded-xl overflow-hidden mb-3 p-3 text-xs bg-gradient-to-bl from-teal-200 to-transparent dark:from-teal-500/20 dark:to-cyan-500/10 dark:text-white"
    data-filter="shopping"
  >
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
          class="w-5 h-5 cursor-pointer rounded-full ring-2 ring-transparent border-2 border-background bg-green-500 focus:ring-green-500 data-[selected='true']:ring-green-500"
        >
        </button>
        <button disabled class="w-5 h-5 cursor-pointer rounded-full ring-2 ring-transparent border-2 disabled:opacity-30 border-background bg-yellow-500 focus:ring-yellow-500"> </button>
      </div>
      <div class="grid">
        <h2 class="font-medium text-sm">Converse</h2>
        <p class="text-foreground/70">Converse Chuck</p>
      </div>
      <div class="w-full gap-2">
        <button class="flex-none inline-flex items-center justify-center px-3 h-7 text-xs font-medium focus:ring-2 transition-colors rounded-full bg-foreground text-background hover:bg-foreground/80">
          Buy now
        </button>
      </div>
    </section>
  </article>
</section>

<article class="border break-inside rounded-xl p-3 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
  <header class="flex items-center justify-between gap-3">
    <div class="flex items-center gap-3">
      <div class="size-9 rounded-full inline-flex items-center justify-center bg-emerald-500/15 text-emerald-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path fill="currentColor" d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"></path>
        </svg>
      </div>
      <div>
        <h2 class="text-sm font-semibold">Ventas de hoy</h2>
        <p class="text-foreground/60">32 pedidos completados</p>
      </div>
    </div>
    <strong class="text-base font-semibold">€2.840</strong>
  </header>
  <div class="mt-3 h-1.5 rounded-full overflow-hidden bg-foreground/8">
    <div class="h-full w-3/4 rounded-full bg-emerald-500"></div>
  </div>
  <p class="mt-2 flex items-center gap-1 text-emerald-600">
    <span class="material-symbols-rounded material-symbols-weight-300 material-symbols-md">trending_up</span>
    +18% frente a ayer
  </p>
</article>

<article class="border break-inside rounded-xl p-3 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
  <header class="flex items-center justify-between gap-3">
    <div class="grid">
      <h2 class="text-sm font-semibold">Carrito abandonado</h2>
      <p class="text-foreground/60">Marta dejo 4 productos guardados.</p>
    </div>
    <span class="size-9 rounded-full inline-flex items-center justify-center bg-amber-500/15 text-amber-700">
      <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <path
            d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301S6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154s.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91Z"
          ></path>
          <path
            d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4"
          ></path>
          <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 13v4m8-4v4m-4-4v4"></path>
        </g>
      </svg>
    </span>
  </header>
  <div class="mt-3 flex items-center justify-between gap-2">
    <div class="flex -space-x-2">
      <span class="size-6 rounded-full border-2 border-background bg-rose-200"></span>
      <span class="size-6 rounded-full border-2 border-background bg-blue-200"></span>
      <span class="size-6 rounded-full border-2 border-background bg-lime-200"></span>
    </div>
    <button class="inline-flex h-6 items-center justify-center rounded-full bg-foreground px-3 text-xs font-medium text-background">Recuperar</button>
  </div>
</article>

<article class="border break-inside rounded-xl p-3 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
  <div class="flex items-center justify-between gap-3">
    <div class="inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-2 py-1 text-rose-600">
      <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M11.238 2.799c-.614.081-1.372.255-2.45.504l-1.229.284c-.91.21-1.538.356-2.017.52c-.463.159-.725.315-.922.513c-.198.197-.354.459-.513.922c-.164.479-.31 1.106-.52 2.017l-.284 1.228c-.249 1.079-.423 1.837-.504 2.451c-.08.598-.061 1.003.045 1.371c.105.368.304.721.688 1.186c.395.478.944 1.029 1.727 1.812l1.83 1.83c1.359 1.359 2.326 2.324 3.158 2.958c.814.622 1.41.855 2.015.855s1.201-.233 2.016-.855c.831-.634 1.799-1.6 3.158-2.959c1.36-1.36 2.325-2.327 2.96-3.158c.62-.815.854-1.41.854-2.016c0-.605-.233-1.2-.855-2.015c-.634-.832-1.6-1.8-2.959-3.159l-1.83-1.83c-.782-.782-1.333-1.331-1.81-1.726c-.466-.384-.819-.583-1.187-.688c-.368-.106-.773-.124-1.37-.045m-.196-1.487c.717-.095 1.346-.092 1.98.09c.635.182 1.17.513 1.728.973c.54.446 1.14 1.046 1.891 1.797l1.896 1.896c1.31 1.31 2.348 2.348 3.05 3.27c.724.947 1.163 1.859 1.163 2.924c0 1.066-.439 1.978-1.162 2.925c-.703.922-1.74 1.96-3.051 3.27l-.08.08c-1.31 1.31-2.348 2.348-3.27 3.05c-.947.724-1.86 1.163-2.925 1.163s-1.977-.439-2.925-1.162c-.921-.703-1.959-1.74-3.27-3.051L4.173 16.64c-.75-.75-1.351-1.351-1.797-1.89c-.46-.559-.791-1.094-.973-1.728c-.182-.635-.185-1.264-.09-1.981c.091-.694.283-1.522.521-2.556l.3-1.303c.2-.863.362-1.567.555-2.128c.202-.587.455-1.08.871-1.496s.91-.67 1.496-.87c.561-.194 1.265-.356 2.128-.555l1.303-.3c1.034-.24 1.862-.43 2.556-.522M9.49 7.995a1.25 1.25 0 1 0-1.768 1.768A1.25 1.25 0 0 0 9.49 7.995m-2.828-1.06a2.75 2.75 0 1 1 3.889 3.889a2.75 2.75 0 0 1-3.89-3.89M19.05 10.99a.75.75 0 0 1 0 1.06l-6.979 6.98a.75.75 0 0 1-1.06-1.06l6.978-6.98a.75.75 0 0 1 1.061 0"
          clip-rule="evenodd"></path>
      </svg>
      <span>Flash deal</span>
    </div>
    <span class="font-medium">02:18:44</span>
  </div>
  <h2 class="mt-3 text-base font-semibold leading-tight">-35% en todas las zapatillas seleccionadas</h2>
  <p class="mt-1 text-foreground/60">Quedan 12 unidades con precio especial.</p>
  <button class="mt-3 inline-flex h-8 items-center justify-center rounded-full bg-rose-600 px-3 text-xs font-medium text-white">Activar oferta</button>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
  <div class="flex items-start justify-between gap-3">
    <div>
      <p class="text-foreground/60">Cupon aplicado por hoy</p>
      <h2 class="mt-1 text-base font-semibold">SUMMER20</h2>
    </div>
    <span class="size-10 rounded-full inline-flex items-center justify-center bg-fuchsia-500/15 text-fuchsia-600">
      <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M11.238 2.799c-.614.081-1.372.255-2.45.504l-1.229.284c-.91.21-1.538.356-2.017.52c-.463.159-.725.315-.922.513c-.198.197-.354.459-.513.922c-.164.479-.31 1.106-.52 2.017l-.284 1.228c-.249 1.079-.423 1.837-.504 2.451c-.08.598-.061 1.003.045 1.371c.105.368.304.721.688 1.186c.395.478.944 1.029 1.727 1.812l1.83 1.83c1.359 1.359 2.326 2.324 3.158 2.958c.814.622 1.41.855 2.015.855s1.201-.233 2.016-.855c.831-.634 1.799-1.6 3.158-2.959c1.36-1.36 2.325-2.327 2.96-3.158c.62-.815.854-1.41.854-2.016c0-.605-.233-1.2-.855-2.015c-.634-.832-1.6-1.8-2.959-3.159l-1.83-1.83c-.782-.782-1.333-1.331-1.81-1.726c-.466-.384-.819-.583-1.187-.688c-.368-.106-.773-.124-1.37-.045m-.196-1.487c.717-.095 1.346-.092 1.98.09c.635.182 1.17.513 1.728.973c.54.446 1.14 1.046 1.891 1.797l1.896 1.896c1.31 1.31 2.348 2.348 3.05 3.27c.724.947 1.163 1.859 1.163 2.924c0 1.066-.439 1.978-1.162 2.925c-.703.922-1.74 1.96-3.051 3.27l-.08.08c-1.31 1.31-2.348 2.348-3.27 3.05c-.947.724-1.86 1.163-2.925 1.163s-1.977-.439-2.925-1.162c-.921-.703-1.959-1.74-3.27-3.051L4.173 16.64c-.75-.75-1.351-1.351-1.797-1.89c-.46-.559-.791-1.094-.973-1.728c-.182-.635-.185-1.264-.09-1.981c.091-.694.283-1.522.521-2.556l.3-1.303c.2-.863.362-1.567.555-2.128c.202-.587.455-1.08.871-1.496s.91-.67 1.496-.87c.561-.194 1.265-.356 2.128-.555l1.303-.3c1.034-.24 1.862-.43 2.556-.522M9.49 7.995a1.25 1.25 0 1 0-1.768 1.768A1.25 1.25 0 0 0 9.49 7.995m-2.828-1.06a2.75 2.75 0 1 1 3.889 3.889a2.75 2.75 0 0 1-3.89-3.89M19.05 10.99a.75.75 0 0 1 0 1.06l-6.979 6.98a.75.75 0 0 1-1.06-1.06l6.978-6.98a.75.75 0 0 1 1.061 0"
          clip-rule="evenodd"></path>
      </svg>
    </span>
  </div>
  <div class="mt-3 flex items-center justify-between rounded-lg border border-dashed border-border px-3 py-2">
    <span>Descuento</span>
    <strong class="text-fuchsia-600">-€18,40</strong>
  </div>
</article>

<section class="break-inside columns-2 items-start gap-3">
  <article class="border break-inside rounded-xl p-3 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
    <div class="flex items-center justify-between">
      <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 256 256">
        <path d="M0 0h256v256H0z" fill="none"></path>
        <path
          fill="currentColor"
          d="M240 184h-8V57.9l9.67-2.08a8 8 0 1 0-3.35-15.64l-224 48A8 8 0 0 0 16 104a8 8 0 0 0 1.69-.18l6.31-1.35V184h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 99l176-37.67V184h-24v-56a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v56H40Zm136 53H80v-16h96Zm-96 16h96v16H80Z"
        ></path>
      </svg>
      <span class="text-[11px] font-medium uppercase text-red-600">Bajo stock</span>
    </div>
    <h2 class="mt-3 font-semibold text-sm">Inventario</h2>
    <p class="mt-1 text-foreground/60">Air Max 90: quedan 5 pares.</p>
    <button class="mt-3 inline-flex h-6 items-center justify-center rounded-full bg-foreground px-3 text-xs font-medium text-background">Reponer</button>
  </article>

  <article class="border break-inside rounded-xl p-3 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
    <div class="flex items-center justify-between">
      <span class="material-symbols-rounded material-symbols-weight-300">verified</span>
      <span class="font-semibold text-emerald-600">98%</span>
    </div>
    <h2 class="mt-3 font-medium text-sm">Pagos aprobados</h2>
    <p class="mt-1 text-foreground/60">Stripe, PayPal y tarjeta.</p>
    <div class="mt-3 flex gap-1">
      <span class="h-1.5 flex-1 rounded-full bg-emerald-500"></span>
      <span class="h-1.5 flex-1 rounded-full bg-emerald-500"></span>
      <span class="h-1.5 flex-1 rounded-full bg-foreground/10"></span>
    </div>
  </article>

  <article class="border break-inside rounded-xl p-3 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
    <div class="grid gap-1">
      <h2 class="font-semibold text-sm">Nueva review</h2>
      <p class="text-foreground/60">5 estrellas en sudadera premium.</p>
    </div>
    <div class="mt-3 -ml-1 flex text-amber-500">
      <span class="material-symbols-rounded material-symbols-fill material-symbols-md">star</span>
      <span class="material-symbols-rounded material-symbols-fill material-symbols-md">star</span>
      <span class="material-symbols-rounded material-symbols-fill material-symbols-md">star</span>
      <span class="material-symbols-rounded material-symbols-fill material-symbols-md">star</span>
      <span class="material-symbols-rounded material-symbols-fill material-symbols-md">star</span>
    </div>
  </article>

  <article class="border break-inside rounded-xl p-3 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
    <header class="flex items-center justify-between">
      <h2 class="font-medium text-sm">Resumen checkout</h2>
      <svg xmlns="http://www.w3.org/2000/svg" class="size-6 flex-none" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path fill="currentColor" d="M10 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 1 0 0-1.5z"></path>
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M14.665 2.33a.75.75 0 0 1 1.006.335l1.813 3.626q.641.031 1.17.106c1.056.151 1.93.477 2.551 1.245s.757 1.691.684 2.755c-.07 1.031-.35 2.332-.698 3.957l-.451 2.107c-.235 1.097-.426 1.986-.666 2.68c-.25.725-.58 1.32-1.142 1.775s-1.214.652-1.974.745c-.73.089-1.64.089-2.76.089H9.802c-1.122 0-2.031 0-2.761-.089c-.76-.093-1.412-.29-1.974-.745s-.892-1.05-1.142-1.774c-.24-.695-.43-1.584-.666-2.68l-.451-2.107c-.348-1.626-.627-2.927-.698-3.958c-.073-1.064.063-1.986.684-2.755c.62-.768 1.494-1.094 2.55-1.245q.53-.074 1.17-.106L8.33 2.665a.75.75 0 0 1 1.342.67l-1.46 2.917q.546-.003 1.149-.002h5.278q.603 0 1.149.002l-1.459-2.917a.75.75 0 0 1 .335-1.006M5.732 7.858l-.403.806a.75.75 0 1 0 1.342.67l.787-1.574c.57-.01 1.22-.011 1.964-.011h5.156c.744 0 1.394 0 1.964.01l.787 1.575a.75.75 0 0 0 1.342-.67l-.403-.806l.174.023c.884.127 1.317.358 1.597.703c.275.34.41.803.356 1.665H3.605c-.054-.862.081-1.325.356-1.665c.28-.345.713-.576 1.597-.703zM4.288 14.1a81 81 0 0 1-.481-2.35h16.386a83 83 0 0 1-.482 2.35l-.428 2c-.248 1.155-.42 1.954-.627 2.552c-.2.58-.404.886-.667 1.098c-.262.212-.605.348-1.212.422c-.629.077-1.447.078-2.628.078H9.85c-1.18 0-1.998-.001-2.627-.078c-.608-.074-.95-.21-1.212-.422c-.263-.212-.468-.519-.667-1.098c-.207-.598-.38-1.397-.627-2.552z"
          clip-rule="evenodd"></path>
      </svg>
    </header>
    <div class="mt-3 grid gap-2">
      <p class="flex justify-between"><span class="text-foreground/60">Subtotal</span><span>€128,00</span></p>
      <p class="flex justify-between"><span class="text-foreground/60">Envio</span><span>€4,90</span></p>
      <p class="flex justify-between font-semibold"><span>Total</span><span>€132,90</span></p>
    </div>
    <button class="mt-3 inline-flex h-8 w-full items-center justify-center rounded-full bg-foreground text-xs font-medium text-background">Pagar ahora</button>
  </article>
</section>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
  <div class="flex items-center justify-between gap-3">
    <div class="flex items-center gap-3">
      <span class="size-10 rounded-full inline-flex items-center justify-center bg-amber-500/10 text-amber-800 dark:text-amber-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            fill="currentColor"
            d="m12 15.308l.708-.708l-2.094-2.1h4.694v-1h-4.694l2.094-2.1L12 8.692L8.692 12zM5.616 20q-.672 0-1.144-.472T4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h4.7q-.137-.766.366-1.383Q11.184 2 12 2q.835 0 1.338.617T13.685 4h4.7q.67 0 1.143.472q.472.472.472 1.144v12.769q0 .67-.472 1.143q-.472.472-1.143.472zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192m6.923-14.77q.212-.213.212-.538t-.212-.537T12 2.942t-.537.213t-.213.537t.213.538t.537.212t.538-.212M5 19V5z"
          ></path>
        </svg>
      </span>
      <div>
        <h2 class="text-sm font-semibold">Devoluciones</h2>
        <p class="text-foreground/60">2 solicitudes abiertas</p>
      </div>
    </div>
    <strong class="text-orange-600">€86</strong>
  </div>
  <div class="mt-3 rounded-lg border border-border p-3">
    <p class="flex justify-between"><span>Zapatillas talla 42</span><span class="font-medium">Revisando</span></p>
  </div>
</article>

<article class="relative break-inside rounded-xl p-4 mb-3 text-xs overflow-hidden bg-red-600 text-white" data-filter="shopping">
  <div class="relative z-1 w-full">
    <div class="flex items-center justify-between gap-3">
      <p class="font-medium text-sm">Rebajas privadas</p>
      <h2 class="text-2xl font-semibold leading-none">-50%</h2>
    </div>
    <p class="mt-1">Solo para clientes recurrentes. Compra antes de que se agoten las unidades.</p>
  </div>
  <span class="absolute -right-5 -top-5 size-36 rounded-full bg-white/20"></span>
  <div class="w-full flex items-center justify-between gap-2 mt-4">
    <button class="inline-flex h-6 items-center justify-center rounded-full bg-white px-3 font-medium text-red-600">Ver rebajas</button>
    <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M11.238 2.799c-.614.081-1.372.255-2.45.504l-1.229.284c-.91.21-1.538.356-2.017.52c-.463.159-.725.315-.922.513c-.198.197-.354.459-.513.922c-.164.479-.31 1.106-.52 2.017l-.284 1.228c-.249 1.079-.423 1.837-.504 2.451c-.08.598-.061 1.003.045 1.371c.105.368.304.721.688 1.186c.395.478.944 1.029 1.727 1.812l1.83 1.83c1.359 1.359 2.326 2.324 3.158 2.958c.814.622 1.41.855 2.015.855s1.201-.233 2.016-.855c.831-.634 1.799-1.6 3.158-2.959c1.36-1.36 2.325-2.327 2.96-3.158c.62-.815.854-1.41.854-2.016c0-.605-.233-1.2-.855-2.015c-.634-.832-1.6-1.8-2.959-3.159l-1.83-1.83c-.782-.782-1.333-1.331-1.81-1.726c-.466-.384-.819-.583-1.187-.688c-.368-.106-.773-.124-1.37-.045m-.196-1.487c.717-.095 1.346-.092 1.98.09c.635.182 1.17.513 1.728.973c.54.446 1.14 1.046 1.891 1.797l1.896 1.896c1.31 1.31 2.348 2.348 3.05 3.27c.724.947 1.163 1.859 1.163 2.924c0 1.066-.439 1.978-1.162 2.925c-.703.922-1.74 1.96-3.051 3.27l-.08.08c-1.31 1.31-2.348 2.348-3.27 3.05c-.947.724-1.86 1.163-2.925 1.163s-1.977-.439-2.925-1.162c-.921-.703-1.959-1.74-3.27-3.051L4.173 16.64c-.75-.75-1.351-1.351-1.797-1.89c-.46-.559-.791-1.094-.973-1.728c-.182-.635-.185-1.264-.09-1.981c.091-.694.283-1.522.521-2.556l.3-1.303c.2-.863.362-1.567.555-2.128c.202-.587.455-1.08.871-1.496s.91-.67 1.496-.87c.561-.194 1.265-.356 2.128-.555l1.303-.3c1.034-.24 1.862-.43 2.556-.522M9.49 7.995a1.25 1.25 0 1 0-1.768 1.768A1.25 1.25 0 0 0 9.49 7.995m-2.828-1.06a2.75 2.75 0 1 1 3.889 3.889a2.75 2.75 0 0 1-3.89-3.89M19.05 10.99a.75.75 0 0 1 0 1.06l-6.979 6.98a.75.75 0 0 1-1.06-1.06l6.978-6.98a.75.75 0 0 1 1.061 0"
        clip-rule="evenodd"></path>
    </svg>
  </div>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
  <header class="flex items-center justify-between">
    <div>
      <h2 class="text-sm font-medium">Comparador de precios</h2>
      <p class="text-foreground/60">Mejor opcion encontrada</p>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"></path>
      <g fill="none" stroke="currentColor" stroke-width="1.5">
        <path
          d="M4.728 16.137c-1.545-1.546-2.318-2.318-2.605-3.321c-.288-1.003-.042-2.068.45-4.197l.283-1.228c.413-1.792.62-2.688 1.233-3.302s1.51-.82 3.302-1.233l1.228-.284c2.13-.491 3.194-.737 4.197-.45c1.003.288 1.775 1.061 3.32 2.606l1.83 1.83C20.657 9.248 22 10.592 22 12.262c0 1.671-1.344 3.015-4.033 5.704c-2.69 2.69-4.034 4.034-5.705 4.034c-1.67 0-3.015-1.344-5.704-4.033z"
        ></path>
        <path
          stroke-linecap="round"
          d="M15.39 15.39c.585-.587.664-1.457.176-1.946s-1.359-.409-1.945.177c-.585.586-1.456.665-1.944.177s-.409-1.359.177-1.944m3.535 3.535l.354.354m-.354-.354c-.4.401-.935.565-1.389.471m-2.5-4.36l.354.354m0 0c.331-.332.753-.5 1.146-.497"
        ></path>
        <circle cx="8.607" cy="8.879" r="2" transform="rotate(-45 8.607 8.879)"></circle>
      </g>
    </svg>
  </header>
  <div class="mt-4 grid gap-2">
    <p class="flex justify-between rounded-lg bg-emerald-500/10 p-2 text-emerald-700 dark:text-emerald-300"><span>Tienda propia</span><strong>€79</strong></p>
    <p class="flex justify-between rounded-lg bg-foreground/5 p-2"><span>Marketplace</span><strong>€86</strong></p>
    <p class="flex justify-between rounded-lg bg-foreground/5 p-2"><span>Outlet</span><strong>€91</strong></p>
  </div>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
  <header class="flex items-center justify-between">
    <div>
      <h2 class="text-sm font-semibold">Cashback acumulado</h2>
      <p class="text-foreground/60">Disponible para tu proxima compra</p>
    </div>
    <span class="size-10 rounded-full inline-flex items-center justify-center bg-emerald-500/15 text-emerald-600">
      <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 36 36">
        <path d="M0 0h36v36H0z" fill="none"></path>
        <path fill="currentColor" d="M19.72 10.47a11.65 11.65 0 0 0-6.31.52a.8.8 0 1 0 .59 1.49a10.1 10.1 0 0 1 5.44-.48a.8.8 0 1 0 .28-1.57Z" class="clr-i-outline clr-i-outline-path-1"></path>
        <circle cx="25.38" cy="16.71" r="1.36" fill="currentColor" class="clr-i-outline clr-i-outline-path-2"></circle>
        <path
          fill="currentColor"
          d="M35.51 18.63a1 1 0 0 0-.84-.44a3.42 3.42 0 0 1-2.09-1.12a17.4 17.4 0 0 1-2.63-3.78l2.88-4.5A1.89 1.89 0 0 0 33 7a1.77 1.77 0 0 0-1.33-1a10.1 10.1 0 0 0-5.39.75a12.7 12.7 0 0 0-2.72 1.63a17 17 0 0 0-5.16-1.39C11.31 6.3 4.83 10.9 4 17a2.56 2.56 0 0 1-1.38-1.53a1.8 1.8 0 0 1 .14-1.4a1.2 1.2 0 0 1 .43-.43a1.08 1.08 0 0 0-1.12-1.85A3.3 3.3 0 0 0 .91 13a4 4 0 0 0-.33 3.08A4.76 4.76 0 0 0 3 18.95l.92.46a17.6 17.6 0 0 0 1.82 7l.17.38a23 23 0 0 0 3.29 5.09a1 1 0 0 0 .75.34h4.52a1 1 0 0 0 .92-1.38l-.39-.9l1.18.13a20.3 20.3 0 0 0 4 0c.37.6.77 1.2 1.21 1.79a1 1 0 0 0 .8.41h4.34a1 1 0 0 0 .92-1.39c-.17-.4-.34-.83-.47-1.2c-.18-.53-.32-1-.43-1.45A13.2 13.2 0 0 0 29.56 26a12.5 12.5 0 0 0 3 0a1 1 0 0 0 .78-.62l2.26-5.81a1 1 0 0 0-.09-.94m-3.78 5.44a11.4 11.4 0 0 1-2.35-.11a8.2 8.2 0 0 1-2.53-.87a1 1 0 0 0-.93 1.77a12 12 0 0 0 1.29.58a8 8 0 0 1-1.8 1.16l-1.06.48s.49 2.19.82 3.16h-2.38c-.24-.34-1.45-2.36-1.45-2.36l-.67.09a18.5 18.5 0 0 1-4.25.12c-.66-.06-1.76-.2-2.62-.35l-1.55-.27s.63 2.43.75 2.74h-2.58A20.6 20.6 0 0 1 7.76 26l-.18-.39A14.6 14.6 0 0 1 6 17.48c.54-5.19 6.12-9.11 12.19-8.54a15.5 15.5 0 0 1 5.08 1.48l.62.29l.5-.47A10.3 10.3 0 0 1 27 8.54a8.25 8.25 0 0 1 4-.65l-3.38 5.29l.25.5a21.2 21.2 0 0 0 3.31 4.84a6.5 6.5 0 0 0 2.14 1.39Z"
          class="clr-i-outline clr-i-outline-path-3"></path>
        <path fill="none" d="M0 0h36v36H0z"></path>
      </svg>
    </span>
  </header>
  <div class="mt-3 flex items-end justify-between">
    <strong class="text-lg font-semibold">€42,80</strong>
    <span class="rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-600">+€6,20</span>
  </div>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
  <header class="flex items-center justify-between">
    <h2 class="text-sm font-semibold">Cesta</h2>
    <span class="rounded-full bg-foreground px-2 py-1 font-medium text-background">3</span>
  </header>
  <div class="mt-4 grid gap-3">
    <div class="flex items-center gap-3">
      <span class="size-10 rounded-lg bg-rose-200"></span>
      <div class="flex-1">
        <p class="font-medium">Camiseta premium</p>
        <p class="text-foreground/60">1 x €24,90</p>
      </div>
      <button class="size-7 rounded-full inline-flex items-center justify-center hover:bg-foreground/5">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            fill="currentColor"
            d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="flex items-center gap-3">
      <span class="size-10 rounded-lg bg-blue-200"></span>
      <div class="flex-1">
        <p class="font-medium">Gorra canvas</p>
        <p class="text-foreground/60">2 x €18,00</p>
      </div>
      <button class="size-7 rounded-full inline-flex items-center justify-center hover:bg-foreground/5">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            fill="currentColor"
            d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
  <header class="flex items-center justify-between gap-3">
    <div>
      <h2 class="text-sm font-semibold">Pedido #SH-2048</h2>
      <p class="text-foreground/60">En preparacion para entrega express</p>
    </div>
    <button class="size-8 rounded-full inline-flex items-center justify-center hover:bg-foreground/5">
      <span class="material-symbols-rounded material-symbols-weight-300">more_horiz</span>
    </button>
  </header>
  <div class="mt-4 flex items-center justify-between gap-2">
    <div class="size-9 rounded-full inline-flex items-center justify-center bg-blue-600 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
          <path
            d="M21.25 9.944a3.08 3.08 0 0 1-2.056 2.899a2.9 2.9 0 0 1-1.027.185a3.08 3.08 0 0 1-2.899-2.056a2.9 2.9 0 0 1-.185-1.028c.003.351-.06.7-.185 1.028A3.08 3.08 0 0 1 12 13.028a3.08 3.08 0 0 1-2.898-2.056a2.9 2.9 0 0 1-.185-1.028c.002.351-.06.7-.185 1.028a3.08 3.08 0 0 1-2.899 2.056c-.35.002-.7-.06-1.027-.185A3.08 3.08 0 0 1 2.75 9.944l.462-1.623l1.11-3.166a2.06 2.06 0 0 1 1.943-1.377h11.47a2.06 2.06 0 0 1 1.942 1.377l1.11 3.166z"
          ></path>
          <path d="M19.194 12.843v5.324a2.056 2.056 0 0 1-2.055 2.055H6.86a2.055 2.055 0 0 1-2.056-2.055v-5.324m4.113 4.296h6.166"></path>
        </g>
      </svg>
    </div>
    <div class="h-px flex-1 bg-blue-600"></div>
    <div class="size-8 rounded-full inline-flex items-center justify-center bg-blue-600 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
          <path stroke-linejoin="round" stroke-miterlimit="1.5" d="M8 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></path>
          <path d="M10.05 17H15V6.6a.6.6 0 0 0-.6-.6H1m4.65 11H3.6a.6.6 0 0 1-.6-.6v-4.9"></path>
          <path stroke-linejoin="round" d="M2 9h4"></path>
          <path d="M15 9h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V16.4a.6.6 0 0 1-.6.6h-1.9M15 17h1"></path>
        </g>
      </svg>
    </div>
    <div class="h-px flex-1 border-t border-dashed border-border"></div>
    <div class="size-9 rounded-full inline-flex items-center justify-center border border-border">
      <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
          fill="currentColor"
          d="M12 21.25a.7.7 0 0 1-.41-.13c-.3-.19-7.34-4.92-7.34-10.67a7.75 7.75 0 0 1 15.5 0c0 5.75-7 10.48-7.34 10.67a.7.7 0 0 1-.41.13m0-17a6.23 6.23 0 0 0-6.25 6.2c0 4.21 4.79 8.06 6.25 9.13c1.46-1.07 6.25-4.92 6.25-9.13A6.23 6.23 0 0 0 12 4.25"
        ></path>
        <path fill="currentColor" d="M12 12.75A2.75 2.75 0 1 1 14.75 10A2.75 2.75 0 0 1 12 12.75m0-4A1.25 1.25 0 1 0 13.25 10A1.25 1.25 0 0 0 12 8.75"></path>
      </svg>
    </div>
  </div>
  <p class="mt-3 text-foreground/60">Salida prevista: hoy 18:30</p>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
  <header class="flex items-center justify-between">
    <div>
      <h2 class="text-sm font-semibold">Gasto en compra</h2>
      <p class="text-foreground/60">Presupuesto mensual</p>
    </div>
    <strong>€348 / €500</strong>
  </header>
  <div class="mt-4 h-1 rounded-full bg-foreground/8">
    <div class="h-full w-[70%] rounded-full bg-indigo-600"></div>
  </div>
  <p class="mt-2 text-foreground/60">Te quedan €152 antes del limite.</p>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
  <header class="flex items-center justify-between gap-3">
    <div>
      <h2 class="text-sm font-medium">Articulos favoritos</h2>
      <p class="text-foreground/60">Guardados para despues</p>
    </div>
    <span class="rounded-full font-medium bg-rose-500/10 px-2 py-1 text-rose-600">12 items</span>
  </header>
  <div class="mt-4 flex gap-2 overflow-hidden">
    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop" alt="zapatillas rojas" class="size-16 rounded-lg object-cover" />
    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=200&auto=format&fit=crop" alt="reloj" class="size-16 rounded-lg object-cover" />
    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200&auto=format&fit=crop" alt="auriculares" class="size-16 rounded-lg object-cover" />
    <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=200&auto=format&fit=crop" alt="auriculares" class="size-16 rounded-lg object-cover" />
  </div>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
  <header class="flex items-center justify-between">
    <div>
      <h2 class="text-sm font-medium">Estado de compra</h2>
      <p class="text-foreground/60">Auriculares Pro Max</p>
    </div>
    <span class="rounded-full bg-blue-500/10 px-2 py-1 font-medium text-blue-600">En ruta</span>
  </header>
  <div class="mt-4 grid gap-3">
    <div class="flex items-center gap-3">
      <span class="size-7 rounded-full inline-flex items-center justify-center bg-blue-600 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path fill="currentColor" d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"></path>
        </svg>
      </span>
      <span>Pago confirmado</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="size-7 rounded-full inline-flex items-center justify-center bg-blue-600 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path fill="currentColor" d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"></path>
        </svg>
      </span>
      <span>Preparado para envio</span>
    </div>
    <div class="flex items-center gap-3 text-foreground/60">
      <span class="size-7 rounded-full inline-flex items-center justify-center border border-border">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M16.25 3.75v1.69l2 1.6V3.75zm3.5 4.49V3.5c0-.69-.56-1.25-1.25-1.25H16c-.69 0-1.25.56-1.25 1.25v.74l-.407-.326a3.75 3.75 0 0 0-4.686 0l-8.125 6.5a.75.75 0 0 0 .937 1.172l.781-.626v10.29H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1.25V10.96l.782.626a.75.75 0 0 0 .936-1.172zm-.5 1.52l-5.844-4.675a2.25 2.25 0 0 0-2.812 0L4.75 9.76v11.49h3.5v-4.3c0-.664 0-1.237.062-1.696c.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062h.098c.665 0 1.238 0 1.697.062c.492.066.963.215 1.345.597s.531.853.597 1.345c.062.459.062 1.032.062 1.697v4.299h3.5zm-5 11.49V17c0-.728-.002-1.2-.048-1.546c-.044-.325-.114-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v4.25zM12 8.25a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M9.25 9.5a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0"
            clip-rule="evenodd"></path>
        </svg>
      </span>
      <span>Entrega prevista</span>
    </div>
  </div>
</article>

<article class="border break-inside rounded-xl p-4 mb-3 text-xs border-border bg-background text-foreground" data-filter="shopping">
  <div class="flex items-center justify-between gap-3">
    <div>
      <h2 class="text-sm font-medium">Lista de espera</h2>
      <p class="text-foreground/60">Producto vuelve pronto</p>
    </div>
    <span class="size-10 rounded-full inline-flex items-center justify-center bg-yellow-500/15 text-yellow-600">
      <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path fill="currentColor" d="M6.429 2.413a.75.75 0 0 0-1.13-.986l-1.292 1.48a4.75 4.75 0 0 0-1.17 3.024L2.78 8.65a.75.75 0 1 0 1.5.031l.056-2.718a3.25 3.25 0 0 1 .801-2.069z"></path>
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M6.237 7.7a4.214 4.214 0 0 1 4.206-3.95H11V3a1 1 0 1 1 2 0v.75h.557a4.214 4.214 0 0 1 4.206 3.95l.221 3.534a7.4 7.4 0 0 0 1.308 3.754a1.617 1.617 0 0 1-1.135 2.529l-3.407.408V19a2.75 2.75 0 1 1-5.5 0v-1.075l-3.407-.409a1.617 1.617 0 0 1-1.135-2.528a7.4 7.4 0 0 0 1.308-3.754zm4.206-2.45a2.714 2.714 0 0 0-2.709 2.544l-.22 3.534a8.9 8.9 0 0 1-1.574 4.516a.117.117 0 0 0 .082.183l3.737.449c1.489.178 2.993.178 4.482 0l3.737-.449a.117.117 0 0 0 .082-.183a8.9 8.9 0 0 1-1.573-4.516l-.221-3.534a2.714 2.714 0 0 0-2.709-2.544zm1.557 15c-.69 0-1.25-.56-1.25-1.25v-.75h2.5V19c0 .69-.56 1.25-1.25 1.25"
          clip-rule="evenodd"></path>
        <path
          fill="currentColor"
          d="M17.643 1.355a.75.75 0 0 0-.072 1.058l1.292 1.48a3.25 3.25 0 0 1 .8 2.07l.057 2.717a.75.75 0 0 0 1.5-.031l-.057-2.718a4.75 4.75 0 0 0-1.17-3.024l-1.292-1.48a.75.75 0 0 0-1.058-.072"
        ></path>
      </svg>
    </span>
  </div>
  <div class="mt-4 flex items-center justify-between rounded-lg bg-foreground/5 p-3">
    <span>Chaqueta oversize</span>
    <button class="inline-flex h-7 items-center justify-center rounded-full bg-foreground px-3 text-xs font-medium text-background">Avisarme</button>
  </div>
</article>
