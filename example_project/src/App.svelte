<script>
  import Progress from "./Progress.svelte";
  import Circle from "./Circle.svelte";
  import Transition from "./Transition.svelte";
  import Typewriter from "./Typewriter.svelte";
  import List from "./List.svelte";
  import ToDoList from "./ToDoList.svelte";
  import KeyBlock from "./KeyBlock.svelte";
  import Actions from "./Actions.svelte";
  import LongPressExample from "./LongPressExample.svelte";
  import Selections from "./Selections.svelte";
  import BgOpacity from "./BgOpacity.svelte";
  import Slots from "./Slots.svelte";
  import ContactCard from "./ContactCard.svelte";
  import Project from "./Project.svelte";
  import Comment from "./Comment.svelte";
  import Hovering from "./Hovering.svelte";
  import { fade } from "svelte/transition";
  import Map from "./Map.svelte";
  import MapMarker from "./MapMarker.svelte";
  import RedThing from "./RedThing.svelte";
  import BlueThing from "./BlueThing.svelte";
  // export let name;

  /**
   * Start Folder Recursion example with Folder and File Component
   */
  // import Folder from "./Folder.svelte";
  // let root = [
  //   {
  //     name: "Important work stuff",
  //     files: [
  //       { name: "quarterly-results.xlsx" }
  //     ]
  //   },
  //   {
  //     name: "Animal GIFs",
  //     files: [
  //       {
  //         name: "Dogs",
  //         files: [
  //           { name: "parkour.gif" },
  //           { name: "rampage.gif" }
  //         ]
  //       },
  //       {
  //         name: "Goats",
  //         files: [
  //           { name: "treadmill.gif" },
  //           { name: "rope-jumping.gif" }
  //         ]
  //       },
  //       { name: "cat-roomba.gif" },
  //       { name: "duck-shuffle.gif" }
  //     ]
  //   },
  //   { name: "TODO.md" }
  // ];
  /**
   * End Recursion example with Folder component
   */
  // Start Red/Blue Thing
  // let options = [
  //   { name: "Blue", component: BlueThing },
  //   { name: "Red", component: RedThing },
  //   { name: "None", component: null },
  // ];

  // let selected = options[0];
  // End Red/Blue Thing

  // Start svelte:element
  // let elements = ["h1", "h3", "p"];
  // let element = elements[0];
  // End svelte:element

  // Start svelte:window
  // let key;
  // let keyCode;

  // const handleKeyDown = (e) => {
  //   e.preventDefault();
  //   console.log(e.key, e.keyCode);
  //   key = e.key;
  //   keyCode = e.keyCode;
  // }
  // End svelte:window

  // Start svelte:window bind
  // const layers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  // let y;
  // let pTag;
  // const handleMouseenter = () => {
  //   pTag = true;
  // }
  // const handleMouseLeave = () => {
  //   pTag = false;
  // }
  // End svelte:window bind

</script>

<!-- <main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	
	<Progress/>
</main> -->
<!-- <Circle/> -->
<!-- <Transition/> -->
<!-- <Typewriter/> -->
<!-- <List /> -->
<!-- <ToDoList /> -->
<!-- <KeyBlock /> -->
<!-- <Actions /> -->
<!-- <LongPressExample /> -->
<!-- <Selections /> -->
<!-- <BgOpacity /> -->
<!-- <Slots /> -->
<!-- <ContactCard>
  <span slot="name">
    P. Dewey
  </span>
  <span slot="address">
    17311 Esperanza
  </span>
</ContactCard> -->
<!-- Start Project  -->
<!-- <h1>Projects</h1>
<ul>
  <li>
    <Project title="Add TypeScript Support" tasksCompleted={25} totalTasks={57}>
      <div slot="comments">
        <Comment name="Ecma Script" postedAt={new Date()}>
          <p>Those interface tests are now passing.</p>
        </Comment>
      </div>
    </Project>
  </li>
  <li>
    <Project title="Update Documentation" tasksCompleted={18} totalTasks={21}>
      <div slot="comments">
        <Comment name="Portfolio Wireframe" postedAt={new Date()}>
          <p>Create figma wireframe before coding portfolio.</p>
        </Comment>
      </div>
    </Project>
  </li>
</ul>
<!-- End Project -->
<!-- Start Hovering -->
<!-- {#each Array(5) as _ }
  <Hovering >
    <div slot="hover" let:hovering={active} class:active>
      {#if active}
        <p>I am being hovered upon.</p>
      {:else}
        <p>Hover over me!</p>
      {/if}
    </div>
  </Hovering>
{/each} -->
<!-- End Hovering -->
<!-- Start Map -->
<!-- <Map lat={35} lon={-84} zoom={3.5}>
  <MapMarker lat={37.8225} lon={-122.0024} label="Svelte Body Shaping" />
  <MapMarker
    lat={33.8981}
    lon={-118.4169}
    label="Svelte Barbershop & Essentials"
  />
  <MapMarker lat={29.723} lon={-95.4189} label="Svelte Waxing Studio" />
  <MapMarker
    lat={28.3378}
    lon={-81.3966}
    label="Svelte 30 Nutritional Consultants"
  />
  <MapMarker lat={40.6483} lon={-74.0237} label="Svelte Brands LLC" />
  <MapMarker lat={40.6986} lon={-74.41} label="Svelte Medical Systems" />
</Map> -->
<!-- End Map -->
<!-- Start Folder -->
<!-- <Folder name="Home" files={root} expanded={true} /> -->
<!-- End Folder -->
<!-- Start Red/Blue Thing -->
<!-- <label for="red_blue_select">Choose Component to render</label>
<select name="red_blue_select" id="component_select" bind:value={selected}>
  {#each options as choice}
    <option value={choice}>{choice.name}</option>
  {/each}

</select>
<svelte:component this={selected.component} /> -->
<!-- End Red/Blue Thing -->

<!-- Start svelte:element -->
<!-- <label for="svelte:element">Choose Element to render</label>
<select name="svelte:element" id="element" bind:value={element}>
  {#each elements as choice}
    <option value={choice}>{choice}</option>
  {/each}
</select>
<svelte:element this={element}>This is a {element} element</svelte:element> -->
<!-- End svelte:element -->

<!-- Start svelte:window -->
<!-- <svelte:window on:keydown={handleKeyDown} /> -->
<!-- <div style="text-align:center;">
  {#if key}
    <kbd>{key === ' ' ? 'Space' : key }</kbd>
    <p>{keyCode}</p>
  {:else}
    <p>Focus this window and press any key</p>
  {/if}
</div> -->
<!-- End svelte:window -->

<!-- Start svelte:window bind -->
<!-- <svelte:window bind:scrollY={y} />
<a href="https://www.firewatchgame.com" class="parallax-container">
  {#each layers as layer}
    <img src="https://www.firewatchgame.com/images/parallax/parallax{layer}.png" style="transform: translate(0, {-y * layer / (layers.length - 1)}px;"alt="parallax layer {layer}">
  {/each}
</a>
<div class="text">
  <span style="opacity: {1 - Math.max(0, y / 100) };">Scroll Down</span>
  <div class="foreground">You have scrolled {y} pixels</div>
</div> -->
<!-- End svelte:window bind -->
<!-- Start svelte:body -->
<!-- <svelte:body on:mouseenter={handleMouseenter} on:mouseleave={handleMouseLeave} />
<p class:curious={pTag}>Some Curious Text</p> -->
<!-- End svelte:body -->

<!-- Start svelte:head -->
<!-- <svelte:head>
  <link rel="stylesheet" href="/css/darktheme.css">
</svelte:head>
<h1>Hello World!</h1> -->
<!-- End svelte:head -->

<!-- Start svelte:options -->
  <!-- See Tutorial for example.... -->
<!-- End svelte:options -->
<style>
  /* Styling Before Project and Comment Components */
  /* main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  } */
  /* Styling for Project and Comment Components */
  /* h1 {
    font-weight: 300;
    margin: 0 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem;
    display: flex;
  }

  @media (max-width: 600px) {
    ul {
      flex-direction: column;
    }
  }
  li {
    padding: 0.5rem;
    flex: 1 1 50%;
    min-width: 200px;
  } */
  /* End Styling for Project and Comment Components */
  /* Hoverable Styling */
  /* div {
     padding:1em;
     margin:0 0 1em 0;
     background-color: #eee;
   }
   .active {
     background-color: #ff3e00;
     color: white;
   } */
  /* End Hoverable Styling */

  /* Start svelte:window bind css */
  /* .parallax-container {
		position: fixed;
		width: 2400px;
		height: 712px;
		left: 50%;
		transform: translate(-50%,0);
	}

	.parallax-container img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		will-change: transform;
	}

	.parallax-container img:last-child::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgb(45,10,13);
	}

	.text {
		position: relative;
		width: 100%;
		height: 300vh;
		color: rgb(220,113,43);
		text-align: center;
		padding: 4em 0.5em 0.5em 0.5em;
		box-sizing: border-box;
		pointer-events: none;
	}

	span {
		display: block;
		font-size: 1em;
		text-transform: uppercase;
		will-change: transform, opacity;
	}

	.foreground {
		position: absolute;
		top: 711px;
		left: 0;
		width: 100%;
		height: calc(100% - 712px);
		background-color: rgb(32,0,1);
		color: white;
		padding: 50vh 0 0 0;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		background-color: rgb(253, 174, 51);
	} */
  /* End svelte:window bind css */

  /* Start svelte:body */
  /* p {
    display: none;
  }
  .curious {
    display: block;
  }
  :global(body) {
    overflow: hidden;
  } */
  /* End svelte:body */
</style>
