<script lang="ts">
	import '@fontsource/anta';
	import '@fontsource/space-mono';
	// import '@fontsource-variable/dm-sans/wght.css';
	import '@fontsource-variable/dm-sans/opsz.css';
	import '@fontsource-variable/roboto-condensed/wght.css';
	// import '@fontsource/dm-sans/200.css';
	// import '@fontsource/dm-sans/300.css';
	// import '@fontsource/dm-sans/400.css';
	// import '@fontsource/dm-sans/500.css';
	// import '@fontsource/dm-sans/600.css';
	// import '@fontsource/dm-sans/700.css';
	// import '@fontsource/dm-sans/800.css';
	import './layout.css';

	import c3logo from '$lib/assets/images/logo/c3_dark.svg?raw';

	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { locales, setLocale, localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import { applyTheme, type ThemeMode } from '$lib/theme';
	import { Moon } from 'lucide-svelte';
	import { Sun } from 'lucide-svelte';
	import { ChevronRight } from 'lucide-svelte';
	import { PackageCheck } from 'lucide-svelte';
	import { Command } from 'lucide-svelte';
	import { Blocks } from 'lucide-svelte';
	import { Plus } from 'lucide-svelte';

	let activeLocale = $state<'en' | 'de'>(locales[0]);
	let themeMode = $state<ThemeMode>('light');
	let servicePanel = $state(false);
	let subnavPanel = $state(false);

	onMount(() => {
		activeLocale = (document.documentElement.lang as 'en' | 'de') || activeLocale;
		themeMode = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
	});

	function setTheme(mode: ThemeMode) {
		themeMode = mode;
		applyTheme(mode);
	}

	function switchServicePanel() {
		servicePanel = !servicePanel;		
	}

	function switchSubnavPanel() {
		subnavPanel = !subnavPanel;		
	}

	function resetPanels() {
		servicePanel = false;
		subnavPanel = false;
	}

	function navigateTo(navroute:string | URL) {
		if (servicePanel || subnavPanel) {
			// switchServicePanel();
			resetPanels();
			setTimeout(() => {
				goto(navroute);
			}, 300);
		} else {
			goto(navroute);
		}
	}

	const { children } = $props();
</script>

<!--  nav area -->
<nav id="nav">
	<div class="relative z-20 grid h-full grid-cols-4 items-stretch border-b transition-colors duration-500 lg:grid-cols-6 font-menu text-xs{page.url.pathname === '/' && !servicePanel ? ' bg-transparent' : ' bg-background'}">
		<button class="_nav-item card-hover col-span-2 flex w-full items-center border-l-0 lg:px-2 cursor-pointer {page.url.pathname === '/' ? ' card-hover-active' : ''}" aria-label="Home" onclick={() => navigateTo('/')}>
			{@html c3logo}
			<span class="sr-only">c3labs logo</span>
		</button>
		<button class="button nav-item card-hover max-lg:hidden cursor-pointer{page.url.pathname.endsWith('/portfolio') ? ' card-hover-active pointer-events-none' : ''}" onclick={() => navigateTo('/portfolio')}>{m.nav_portfolio()}</button>
		<button class="button nav-item card-hover max-lg:hidden uppercase cursor-pointer{servicePanel ? ' card-hover-locked' : ''}" onclick={() => switchServicePanel()}>{m.nav_services()}
			<Plus strokeWidth={1.5} size={16} class="transform-gpu duration-300{servicePanel ? ' -rotate-45' : ''}" />
		</button>
		<button class="button nav-item card-hover max-lg:hidden cursor-pointer{page.url.pathname.endsWith('/manifesto') ? ' card-hover-active pointer-events-none' : ''}" onclick={() => navigateTo('/manifesto')}>{m.nav_manifest()}</button>
		<button	class="button nav-item relative lg:hidden{subnavPanel ? ' card-hover-locked' : ''}" onclick={() => switchSubnavPanel()}>
			<span class="pointer-events-none relative flex items-center">
				<span class="absolute transition duration-300{subnavPanel ? ' translate-y-full skew-y-6 opacity-0' : ''}">Menu</span>
				<span class="absolute transition duration-300{subnavPanel ? '' : '-translate-y-full skew-y-6 opacity-0'}">Close</span>
				</span>
				<Plus strokeWidth={1.5} size={16} class="transform-gpu duration-300{subnavPanel ? ' -rotate-45' : ''}" />
		</button>
		<button class="button _nav-item _fill-button bg-accent hover:bg-accent-hover text-card cursor-pointer transition-colors duration-300" onclick={() => navigateTo(page.url.pathname + '#contact')}>
			<span>{m.nav_contact()}</span>
			<ChevronRight strokeWidth={2} size={16} />
		</button>
	</div>
	<div class="absolute top-0 inset-x-0 z-10 grid-cols-3 flex-col items-center font-menu text-xs uppercase transition-[transform, opacity] duration-300 bg-background lg:grid text-muted-foreground lg:text-neutral border-b {servicePanel ? 'translate-y-(--nav-height)' : 'translate-y-[calc(-100%-var(--nav-height))] pointer-events-none'}">
		<button tabindex="0" class="service-nav-card card-hover cursor-pointer{page.url.pathname.endsWith('/design') ? ' card-hover-active pointer-events-none' : ''}" onclick={() => navigateTo('/design')}>
			<div class="w-full h-full flex pointer-events-none">
				<Command strokeWidth={1.1} size={85} class="icon drop-shadow-[0_0_20px_#2d8bb6] text-foreground" />
			</div>
			<div class="service-card-title">
				{m.nav_services_design()}
			</div>
			<ChevronRight strokeWidth={2} size={16} class="service-card-chevron" />
		</button>
		<button tabindex="0" class="service-nav-card card-hover cursor-pointer{page.url.pathname.endsWith('/engineering') ? ' card-hover-active pointer-events-none' : ''}" onclick={() => navigateTo('/engineering')}>
			<div class="w-full h-full flex pointer-events-none">
				<Blocks strokeWidth={1.1} size={85} class="icon drop-shadow-[0_0_20px_#2d8bb6] text-foreground" />
			</div>
			<div class="service-card-title">
				{m.nav_services_engineering()}
			</div>
			<ChevronRight strokeWidth={2} size={16} class="service-card-chevron" />
		</button>
		<button tabindex="0" class="service-nav-card card-hover cursor-pointer{page.url.pathname.endsWith('/service') ? ' card-hover-active pointer-events-none' : ''}" onclick={() => navigateTo('/service')}>
			<div class="w-full h-full flex pointer-events-none">
				<PackageCheck strokeWidth={1.1} size={85} class="icon drop-shadow-[0_0_20px_#2d8bb6] text-foreground" />
			</div>
			<div class="service-card-title">
				{m.nav_services_service()}
			</div>
			<ChevronRight strokeWidth={2} size={16} class="service-card-chevron" />
		</button>
	</div>
	<!-- mobile meta nav -->
	<div class="relative -z-10 flex flex-col items-center text-center bg-background text-foreground font-menu text-xs uppercase transition-all duration-300 lg:hidden *:w-full *:border-b *:p-5 {subnavPanel ? 'translate-y-0 opacity-100' : '-translate-y-40 opacity-0 pointer-events-none'}">
		<button class="uppercase{page.url.pathname.endsWith('/portfolio') ? ' card-hover-active pointer-events-none' : ''}" onclick={() => navigateTo('/portfolio')}>{m.nav_portfolio()}</button>
		<button class="uppercase{page.url.pathname.endsWith('/design') ? ' card-hover-active pointer-events-none' : ''}" onclick={() => navigateTo('/design')}>{m.nav_services_design()}</button>
		<button class="uppercase{page.url.pathname.endsWith('/engineering') ? ' card-hover-active pointer-events-none' : ''}" onclick={() => navigateTo('/engineering')}>{m.nav_services_engineering()}</button>
		<button class="uppercase{page.url.pathname.endsWith('/service') ? ' card-hover-active pointer-events-none' : ''}" onclick={() => navigateTo('/service')}>{m.nav_services_service()}</button>
		<button class="uppercase{page.url.pathname.endsWith('/manifesto') ? ' card-hover-active pointer-events-none' : ''}" onclick={() => navigateTo('/manifesto')}>{m.nav_manifest()}</button>
	</div>
	<!-- end mobile meta nav -->
	<div class="fixed inset-0 z-[-25] bg-background transition-opacity duration-500{!servicePanel && !subnavPanel ? ' pointer-events-none opacity-0' : ' opacity-50'}" aria-hidden="true" onclick={() => resetPanels()}></div>
</nav>
<!-- end nav area -->

<!-- main area -->
<main class="_relative _p-4">
	{@render children()}
</main>
<!-- end main area -->

<!-- footer area  -->
<footer id="footer">
	<div class="mt-32 grid grid-cols-1 p-5 lg:grid-cols-3 md:p-0 font-menu uppercase text-xs text-muted-foreground">
		<a target="_blank" rel="noopener noreferrer" class="hidden text-neutral lg:block lg:p-5" href="https://maps.app.goo.gl/">
			<span class="latitude">34.07062188658319</span>
			,<br>
			<span class="longitude">-84.27424250862218</span>
		</a>
		<div class="col-span-2 grid grid-cols-3 md:grid-cols-5 md:p-5 [&amp;_a]:py-1">
			<div class="col-span-3 grid grid-cols-3">
				<a target="_blank" rel="noopener noreferrer" href="https://bsky.app/profile/c3labs.bsky.social">Bluesky</a>
				<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/c3labs">LinkedIn</a>
				<a target="_blank" rel="noopener noreferrer" href="https://pinterest.com/c3labs">Pinterest</a>
				<a href="/about">About</a>
				<a href="/legal">Legal</a>
				<span class="hidden md:block">(C) 2026</span>
			</div>
			<div class="grid col-span-3 grid-cols-3 md:col-span-2 md:grid-cols-2">
				<div class="inline-flex rounded-full border border-border bg-card p-1 _shadow-sm">
					{#each locales as l}
						<button
							type="button"
							class="rounded-full px-3 py-1.5 text-sm font-medium transition
								{activeLocale === l
								? 'bg-primary text-primary-foreground shadow'
								: 'text-muted-foreground hover:bg-muted'}"
							aria-pressed={activeLocale === l}
							onclick={() => setLocale(l)}>{l.toUpperCase()}
						</button>
					{/each}
				</div>
				<div class="inline-flex rounded-full border border-border bg-card p-1 _shadow-sm" role="group" aria-label="Theme switch">
					<button
						type="button"
						class="rounded-full p-2 transition
							{themeMode === 'light'
							? 'bg-primary text-primary-foreground shadow'
							: 'text-muted-foreground hover:bg-muted'}"
						aria-label="Light theme"
						aria-pressed={themeMode === 'light'}
						onclick={() => setTheme('light')}>
						<Sun size={18} aria-hidden="true" />
					</button>
					<button
						type="button"
						class="rounded-full p-2 transition
							{themeMode === 'dark'
							? 'bg-primary text-primary-foreground shadow'
							: 'text-muted-foreground hover:bg-muted'}"
						aria-label="Dark theme"
						aria-pressed={themeMode === 'dark'}
						onclick={() => setTheme('dark')}>
						<Moon size={18} aria-hidden="true" />
					</button>
				</div>
			</div>
		</div>
	</div>
</footer>
<!-- end footer area  -->

<style>
	#nav {
		position: sticky;
		left: 0;
		right: 0;
		top: 0;
		z-index: 50;
		height: var(--nav-height);
	}

	.nav-item {
		border-left-width: 1px;
		padding-top: 0;
		padding-bottom: 0;
	}

	#footer {
		position: relative;
		z-index: 40;
		margin-top: -1px;
		border-top-width: 1px;
		background-color: var(--color-background)
	}

	#footer a {
		transition: color .3s ease
	}

	#footer a:hover {
		color: var(--color-foreground)
	}

	@media (min-width: 1024px) {
		.service-nav-card {
			display: flex;
		}
	}

	.service-nav-card {
		position: relative;
		/* display: none; */
		width: 100%;
		flex-direction: column;
		padding: 1.25rem;
		height: 316px;
	}

	.service-nav-card:not(:first-child) {
		border-left-width: 1px;
	}

</style>
