<script>
  import OurTechScroller from "./OurTechScroller.svelte";
  import ArrowIcon from "../assets/icons/arrow.svg?raw";

  let open = $state(true);

  function toggle() {
    open = !open;
  }
</script>

<section id="technology">
  <div id="t-intro">
    <h3>Our Technology</h3>
    <p>
      Human and economic losses from flooding are increasing — yet <em
        >we still don’t fully understand the impact of urban flooding</em
      >, or how to reduce it.
    </p>
    <p class="!text-white">Why is that, and how do we solve it?</p>
  </div>

  <div id="button-wrapper" class={{ open: open }}>
    <button onclick={toggle}>
      {open ? "Hide" : "Expand"}
      <svg
        width="12"
        height="11"
        viewBox="0 0 12 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {#if !open}
          <path d="M5.6807 11H6.88749V0H5.6807V11Z" fill="black" />
        {/if}
        <path
          d="M11.7841 6.10346V4.89667H0.784119V6.10346H11.7841Z"
          fill="black"
        />
      </svg>
    </button>
  </div>

  <div id="scroller-container" class={{ open: open }}>
    <OurTechScroller {open} />
  </div>
</section>

<style>
  @reference "../styles/global.css";

  section {
    --bg: #151719;
    @apply grid grid-cols-subgrid grid-flow-col grid-area-full bg-[#252627] text-white overflow-hidden relative transition-all gap-y-10 ease-in-out z-1;

    &:has(.open) {
      @apply bg-[var(--bg)];
    }

    &:not(:has(.open)):has(button:hover) #scroller-container {
      @apply max-h-46;
    }
  }

  #t-intro {
    @apply grid-area-text flex flex-col gap-6 mt-20 text-2xl;

    h3 {
      @apply text-white;
    }

    p {
      @apply text-[#99A4B0] tracking-[-0.02em] leading-[125%] text-xl md:text-2xl text-balance;

      em {
        @apply text-[#FFF2C5] not-italic;
      }
    }
  }

  #button-wrapper {
    @apply grid-area-text z-10 flex justify-center -mb-23;

    &.open {
      /* @apply bottom-0 mb-20; */
      @apply hidden;
    }
  }

  button {
    @apply text-black bg-white inline-flex flex-row gap-2 uppercase tracking-wide h-10 w-auto whitespace-nowrap justify-center items-center px-3 text-base justify-self-center self-center font-[500] transition-transform hover:scale-103 hover:opacity-90 ease-in-out;

    svg {
      @apply opacity-50;
    }
  }

  #scroller-container {
    @apply max-h-[1000vh] grid-area-full overflow-visible transition-all py-10 bg-[var(--bg)] ease-in-out;
    /* grid-area-text, which we can't use directly due to <Scroller> */
    @apply px-[calc(var(--space)*2)];

    &:not(.open) {
      @apply max-h-40 scale-94 pointer-events-none;
    }

    &::after {
      @apply content-[""] absolute -mb-3 bottom-0 left-0 right-0 z-9 h-20 bg-gradient-to-b from-[#151719]/0 to-[#151719]/75;
    }
  }

  #scroller-logo-container {
    position: sticky;
    bottom: 0;
  }
</style>
