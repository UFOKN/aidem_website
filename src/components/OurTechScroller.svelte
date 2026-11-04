<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import OurTechIllustration from "./OurTechIllustration.svelte";

  let { open } = $props();

  let count = $state(0);
  let index = $state(0);
  let offset = $state(0);
  let top = 0.1;
  let threshold = 0.5;
  let bottom = 0.75;
</script>

<Scroller {top} {threshold} {bottom} bind:count bind:index bind:offset>
  <div slot="background">
    <OurTechIllustration {open} {index} {offset} />
  </div>

  <div slot="foreground">
    <section class={{ current: index === 0 }}>
      <p>
        Cities are networks of networks: power grids, transit, water systems,
        navigation, dams—woven into the environment, economy, and public health.
      </p>
      <p>We call this the <em>Urban Multiplex</em>.</p>
    </section>
    <section class={{ current: index === 1 }}>
      <p>
        While the Urban Multiplex is physically and functionally connected, the
        data produced within its individual sectors are not.
      </p>
    </section>
    <section class={{ current: index === 2 }}>
      <p>
        This prevents us from understanding how disruptions triggered by floods
        <em>cascade</em> across cities.
      </p>
    </section>
    <section class={{ current: index === 3 }}>
      <p>
        We integrate Urban Multiplex data in an intelligent, searchable
        <em>Knowledge Network</em> and connect it to our
        <em class="!bg-[#413a24]">Real-time Flood Forecasts</em>.
      </p>
    </section>
    <section class={{ current: index === 4 }}>
      <p>
        This way, we forecast when and where flooding is likely to happen and
        cause cascading disruptions — delivering actionable impact information
        in real time.
      </p>
    </section>
  </div>
</Scroller>

<style>
  @reference "../styles/global.css";

  [slot="background"] {
    @apply w-[100vw] max-md:-ml-[calc(var(--space)*2)] md:mx-[calc(var(--space)*-2)] md:w-[60%] md:ml-[40%];
  }

  [slot="background"] p {
    margin: 0;
  }

  [slot="foreground"] {
    pointer-events: none;
  }

  [slot="foreground"] section {
    pointer-events: all;
  }

  section {
    @apply min-h-[50vh] md:w-[50%] text-balance transition-all md:pr-5 flex flex-col gap-8 pb-10 pt-[50vh] md:pt-10 duration-500;

    h4 {
      @apply text-lg opacity-75;
    }

    p {
      @apply text-lg md:text-[1.875rem] text-[#e2e7ec];

      em {
        @apply not-italic text-white bg-[#273949] px-1 -mx-1;
      }
    }

    &:not(.current) {
      @apply opacity-50 scale-99;
    }
  }
</style>
