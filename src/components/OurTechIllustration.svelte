<script>
  let { open, index, offset } = $props();

  const hubs = [
    {
      label: "Power",
      x: 175,
      y: 250,
      lineTo: [1, 3, 5],
    },
    {
      label: "Communication",
      x: 380,
      y: 150,
      lineTo: [2, 3],
    },
    {
      label: "Transportation",
      x: 675,
      y: 200,
      lineTo: [3, 4],
    },
    {
      label: "Drinking Water",
      x: 340,
      y: 360,
      lineTo: [6, 4, 5],
    },
    {
      label: "Public Health",
      x: 620,
      y: 410,
      lineTo: [6, 7],
    },
    {
      label: "Locks & Dams",
      x: 150,
      y: 610,
      lineTo: [8],
    },
    {
      label: "Sewerage",
      x: 375,
      y: 510,
      lineTo: [5, 7, 8],
    },
    {
      label: "Socioeconomics",
      x: 675,
      y: 600,
      lineTo: [8],
    },
    {
      label: "Surface & Groundwater",
      x: 500,
      y: 760,
      lineTo: [],
    },
  ];

  const cascades = [
    [0, 1],
    [0, 3, 4],
    [8, 5, 6],
  ];

  const floodForecastNode = {
    label: "Flood Risk",
    x: 500,
    y: 284,
  };

  function cascadePath(cascade) {
    let path = cascade.map((point, index) => {
      const letter = index === 0 ? "M" : "L";
      return `${letter} ${hubs[point].x} ${hubs[point].y}`;
    });
    return path.join("");
  }
</script>

<svg
  width="100%"
  height="100%"
  viewBox="0 0 880 925"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class={`phase-${index + 1} ${open ? "active" : "paused"}`}
>
  <!-- Spokes -->
  <g id="spokes">
    {#each hubs as hub}
      {#each hub.lineTo as targetIndex}
        <path
          d="M{hub.x} {hub.y} L{hubs[targetIndex].x} {hubs[targetIndex].y}"
        />
      {/each}
    {/each}
  </g>

  <!-- Flood Forecast Network -->
  <g class="flood-forecast">
    {#each hubs as hub}
      <path d="M{hub.x} {hub.y} L{floodForecastNode.x} {floodForecastNode.y}" />
    {/each}
  </g>

  <!-- Hub circles -->
  <g class="hubs">
    {#each hubs as hub}
      <circle cx={hub.x} cy={hub.y} r="6" />
    {/each}
  </g>

  <!-- Hubs -->
  <g class="hubs">
    {#each hubs as hub}
      <rect x={hub.x - 10} y={hub.y - 10} width="20" height="20" />
    {/each}
  </g>

  <!-- Labels -->
  <g id="labels">
    {#each hubs as hub}
      <text x={hub.x} y={hub.y}>{hub.label}</text>
    {/each}
  </g>

  <!-- Hub haloes -->
  <g id="haloes">
    {#each hubs as hub}
      <circle
        cx={hub.x}
        cy={hub.y}
        r="3"
        style="--delay: {2000 + Math.round(Math.random() * 25000)}ms;"
      />
    {/each}
  </g>

  <!-- Cascades -->
  <g id="cascades">
    {#each cascades as cascade, index}
      <path
        d={cascadePath(cascade)}
        style="--delay: ${1500 + index * 2500}ms"
      />
    {/each}
  </g>

  <!-- Flood Forecast Label -->
  <g class="flood-forecast">
    <!-- <circle cx={floodForecastNode.x} cy={floodForecastNode.y} r="20" /> -->
    <rect
      x={floodForecastNode.x - 74}
      y={floodForecastNode.y - 21}
      width="148"
      height="38"
    />
    <text x={floodForecastNode.x} y={floodForecastNode.y}>
      {floodForecastNode.label}
    </text>
  </g>
</svg>

<style>
  path {
    will-change: stroke;
  }

  circle,
  rect {
    will-change: transform;
  }

  svg.paused {
    path,
    circle,
    rect {
      transition: none !important;
      animation: none !important;
    }
  }

  #spokes path {
    fill: none;
    stroke: #8fa6db;
    stroke-width: 1.5;
    transition: stroke ease-in-out 1s;
  }

  .phase-1 #spokes path {
    stroke-dasharray: 6 8;
    animation: dash 20s linear infinite;
  }

  .phase-2 #spokes path {
    stroke-dasharray: 6 8;
    animation: dash 40s linear infinite;
    stroke: transparent;
  }

  .phase-3 #spokes path {
    stroke-dasharray: 100;
    stroke: transparent;
  }

  .phase-4 #spokes path,
  .phase-5 #spokes path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    stroke: #5691ff;
    animation: draw-line 3s linear forwards;
  }

  #cascades path {
    fill: none;
    stroke-width: 12;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    stroke: transparent;
    stroke-linecap: round;
    /* stroke-miterlimit: 0; */
    stroke-linejoin: round;
    animation: 1.5s ease-in-out infinite forwards draw-line-fade;
    mix-blend-mode: color-dodge;

    &:nth-child(0) {
      animation-delay: 2s;
    }
    &:nth-child(1) {
      animation-delay: 3s;
    }
    &:nth-child(2) {
      animation-delay: 4s;
    }
  }

  .phase-5 #cascades path {
    stroke: #ff8000;
  }

  #haloes circle {
    fill: transparent;
    animation: pulse 1.2s infinite;
    animation-delay: var(--delay);
    transform-box: fill-box;
    transform-origin: center;
    transition: fill 1s ease-in-out;
    mix-blend-mode: screen;
  }

  .phase-3 #haloes circle {
    fill: #006dd4;
  }

  .hubs circle {
    fill: #fff;
    stroke: var(--bg);
    stroke-width: 5;
  }

  .hubs rect {
    transform: scale(0);
    fill: #5691ff;
    transition: all 0.5s ease-in-out;
    transform-box: fill-box;
    transform-origin: center;
  }

  .phase-4 .hubs rect,
  .phase-5 .hubs rect {
    transform: scale(1);
  }

  #labels text,
  .flood-forecast text {
    text-transform: uppercase;
    text-anchor: middle;
    dominant-baseline: middle;
    fill: #f4eded;
    font-size: 22px;
    transition: all 0.5s ease-in-out;
    transform: translateY(30px);
  }

  .flood-forecast text {
    transform: translateY(0);
    fill: var(--bg);
  }

  .flood-forecast {
    path {
      fill: none;
      stroke: transparent;
      stroke-width: 2;
      transition: stroke 3s ease-in-out;
    }

    rect {
      fill: #fff2c5;
      transition: all 0.5s ease-in-out;
      transform-box: fill-box;
      transform-origin: center;
      transform: scale(0);
    }
    text {
      transition: all 0.5s ease-in-out;
      transform-box: fill-box;
      transform-origin: center;
      opacity: 0;
    }
  }

  .phase-4,
  .phase-5 {
    .flood-forecast {
      path {
        stroke: #c1b37e;
        stroke-dasharray: 2 2;
        animation: 20s dash 2s linear infinite;
      }
      rect,
      text {
        transform: scale(1);
        opacity: 1;
        transition-delay: 1.5s;
      }
    }
  }

  @keyframes scan {
    0% {
      transform: translateY(-30px);
    }

    to {
      transform: translateY(1000px);
    }
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 1000;
    }
  }

  @keyframes draw-line {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes draw-line-fade {
    from {
      opacity: 1;
    }
    80% {
      stroke-dashoffset: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(50);
      opacity: 0;
    }
  }
</style>
