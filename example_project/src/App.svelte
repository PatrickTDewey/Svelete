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
  import {fade} from "svelte/transition";
  import Map from "./Map.svelte";
  import MapMarker from "./MapMarker.svelte";
  export let name;
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
	<MapMarker lat={37.8225} lon={-122.0024} label="Svelte Body Shaping"/>
	<MapMarker lat={33.8981} lon={-118.4169} label="Svelte Barbershop & Essentials"/>
	<MapMarker lat={29.7230} lon={-95.4189} label="Svelte Waxing Studio"/>
	<MapMarker lat={28.3378} lon={-81.3966} label="Svelte 30 Nutritional Consultants"/>
	<MapMarker lat={40.6483} lon={-74.0237} label="Svelte Brands LLC"/>
	<MapMarker lat={40.6986} lon={-74.4100} label="Svelte Medical Systems"/>
</Map> -->
<!-- End Map -->

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
</style>
