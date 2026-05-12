<script lang="ts">
	import { base } from '$app/paths';
	import { setLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';
</script>

<p>
	<a href={base + '/'}>{m.home_back()}</a>
</p>

<h1>{m.hello_world({ name: 'SvelteKit User' })}</h1>

<div>
	<button onclick={() => setLocale('en')}>en</button>
	<button onclick={() => setLocale('de')}>de</button>
</div>

