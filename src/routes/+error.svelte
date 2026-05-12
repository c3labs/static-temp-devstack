<script lang="ts">
	// import '@fontsource/space-mono';
	// import '@fontsource-variable/dm-sans/wght.css';
	// import './layout.css';

	import { page } from '$app/state';
    import { fade, fly } from "svelte/transition";
</script>


<div class="grid grid-cols-6 gap-2 place-items-center h-screen text-foreground">
    <h2 class="text-6xl font-heroline font-bold col-span-6 uppercase" in:fly={{ y :100, duration: 300, delay: 500 }}>{page.status}: <span class="font-light">{page.error!.message}</span></h2>
</div>
