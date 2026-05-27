<script lang="ts">
	import { base } from '$app/paths';
	import Booking from '$lib/components/Booking.svelte';
	import { m } from '$lib/paraglide/messages';
	import { Blocks, ChevronRight } from 'lucide-svelte';
	import Sanity from '$lib/assets/images/logo/partner/Sanity.svelte';
	import Strapi from '$lib/assets/images/logo/partner/Strapi.svelte';
	import Svelte from '$lib/assets/images/logo/partner/Svelte.svelte';
	import Astro from '$lib/assets/images/logo/partner/Astro.svelte';
	import Tailwindcss from '$lib/assets/images/logo/partner/Tailwindcss.svelte';
	import Coolify from '$lib/assets/images/logo/partner/Coolify.svelte';
</script>

<header data-animate="true" class="hero text-hero relative">
	<h1 class="flex items-end p-5 font-menu text-xs text-muted-foreground uppercase">
		{m.engineering_services_websites_h1()}
	</h1>
	<h2
		class="title p-5 text-5xl tracking-tighter text-wrap lg:col-start-2 lg:border-l lg:pt-55 lg:text-6xl"
	>
		{m.engineering_services_websites_h2()}
	</h2>
	<div class="flex items-end p-5 pt-10">
		<div class="flex flex-col gap-5">
			<span class="font-paragraph"></span>
		</div>
	</div>
</header>
<!-- section types -->
<section data-animate="true" class="section">
	<ol class="grid-global ordered-list">
		<li
			class="relative -mb-px flex min-h-75 flex-col items-start justify-between gap-6 border-b lg:border-b-0 p-5 lg:min-h-79.5 lg:last:border-r-0"
		>
			<span
				class="text-neutral ordered-list-count font-menu text-xs text-muted-foreground uppercase"
				role="presentation"
			></span>
			<div class="flex-start flex w-full flex-col gap-4">
				<span class="title max-w-sm text-3xl tracking-tighter"
					>INNOVATIVE LEADERS IN FRONTEND DEVELOPMENT SERVICES</span
				>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="text-sm text-muted-foreground">
						c3labs provides innovative frontend development services, focusing on building visually
						appealing, fast, and scalable digital platforms. We specialize in Server-Side Rendering
						(SSR), Static Site Generation (SSG), mobile app frontends, and legacy frontend
						modernization. Our solutions help your website or app stand out while delivering top
						performance across devices and browsers.
					</p>
				</div>
			</div>
		</li>
		<li
			class="relative -mb-px flex min-h-75 flex-col items-start justify-between gap-6 border-b lg:border-b-0 p-5 lg:min-h-79.5 lg:border-l lg:last:border-r-0"
		>
			<span
				class="text-neutral ordered-list-count font-menu text-xs text-muted-foreground uppercase"
				role="presentation"
			></span>
			<div class="flex-start flex w-full flex-col gap-4">
				<span class="title max-w-sm text-3xl tracking-tighter"
					>CUSTOM FRONTEND WEB DEVELOPMENT SERVICES</span
				>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="text-sm text-muted-foreground">
						From conceptualization to design to UI development and cross-browser testing, we push
						the boundaries of what's possible in frontend development. Our team integrates design
						thinking methodologies—including discovery, empathizing, research, ideation,
						prototyping, and testing—to elevate your customer experiences through tailored
						state-of-the-art frontend technologies.
					</p>
				</div>
			</div>
		</li>
	</ol>
</section>
<!-- end section types -->
<section data-animate="true" class="section section-partner-cards">
	<div class="relative col-span-2 grid h-60 w-full grid-cols-2 items-center overflow-hidden md:col-span-3 md:grid-cols-3 xl:grid-cols-6">
		<div class="relative flex h-55 w-full flex-col items-center justify-center overflow-hidden border-l before:left-0 after:right-0 after:rotate-180 first:border-l-0 lg:h-60">
            <a aria-label="Prismic Headless CMS Solution" class="card-hover absolute inset-0 z-10" href="/technology/coolify">
                <div class="flex h-full w-full items-center justify-center">
                    <Coolify class="h-fit w-36 text-foreground" />
                </div>
            </a>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Hosting Partner</span>
		</div>
		<div class="relative flex h-55 w-full flex-col items-center justify-center overflow-hidden border-l before:left-0 after:right-0 after:rotate-180 first:border-l-0 lg:h-60">
            <a aria-label="Prismic Headless CMS Solution" class="card-hover absolute inset-0 z-10" href="/technology/sanity">
                <div class="flex h-full w-full items-center justify-center">
                    <Sanity class="h-fit w-36 text-foreground" />
                </div>
            </a>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>
        </div>
		<div class="relative flex h-55 w-full flex-col items-center justify-center overflow-hidden border-l before:left-0 after:right-0 after:rotate-180 first:border-l-0 lg:h-60">
            <a aria-label="Prismic Headless CMS Solution" class="card-hover absolute inset-0 z-10" href="/technology/strapi">
                <div class="flex h-full w-full items-center justify-center">
                    <Strapi class="h-fit w-36 text-foreground" />
                </div>
            </a>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>			
		</div>
		<div class="relative flex h-55 w-full flex-col items-center justify-center overflow-hidden border-l before:left-0 after:right-0 after:rotate-180 first:border-l-0 lg:h-60">
            <a aria-label="Prismic Headless CMS Solution" class="card-hover absolute inset-0 z-10" href="/technology/svelte">
                <div class="flex h-full w-full items-center justify-center">
                    <Svelte class="h-fit w-36 text-foreground" />
                </div>
            </a>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>			
		</div>
		<div class="relative flex h-55 w-full flex-col items-center justify-center overflow-hidden border-l before:left-0 after:right-0 after:rotate-180 first:border-l-0 lg:h-60">
            <a aria-label="Prismic Headless CMS Solution" class="card-hover absolute inset-0 z-10" href="/technology/astro">
                <div class="flex h-full w-full items-center justify-center">
                    <Astro class="h-fit w-36 text-foreground" />
                </div>
            </a>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>			
		</div>
		<div class="relative flex h-55 w-full flex-col items-center justify-center overflow-hidden border-l before:left-0 after:right-0 after:rotate-180 first:border-l-0 lg:h-60">
            <a aria-label="Prismic Headless CMS Solution" class="card-hover absolute inset-0 z-10" href="/technology/tailwindcss">
                <div class="flex h-full w-full items-center justify-center">
                    <Tailwindcss class="h-fit w-36 text-foreground" />
                </div>
            </a>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>			
		</div>
	</div>
</section>
<section class="section section-rich-text">
	<div class="rich-text px-5 py-10 lg:col-start-2 lg:border-l">
		<h2>COMPOSABLE AND HEADLESS ARCHITECTURE</h2>
		<p>
			Using composable and headless architectures empowers your business to build flexible and
			scalable digital platforms. By decoupling frontend and backend systems, you get unparalleled
			customization, rapid development cycles, and an outstanding user experience, all while
			maintaining backend stability.
		</p>
	</div>
</section>
<!-- section booking -->
<Booking
	title={m.engineering_booking_title()}
	description={m.engineering_booking_description()}
	cta={m.engineering_booking_cta()}
	link={m.nav_contact()}
/>
<!-- end section booking -->
