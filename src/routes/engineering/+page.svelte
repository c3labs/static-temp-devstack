<script lang="ts">
	import { base } from '$app/paths';
	import Booking from '$lib/components/Booking.svelte';
	import { m } from '$lib/paraglide/messages';
	import { Blocks, ChevronRight } from 'lucide-svelte';
	import Angular from '$lib/assets/images/logo/partner/Angular.svelte';
	import Sanity from '$lib/assets/images/logo/partner/Sanity.svelte';
	import Vercel from '$lib/assets/images/logo/partner/Vercel.svelte';
	import Strapi from '$lib/assets/images/logo/partner/Strapi.svelte';
	import Stripe from '$lib/assets/images/logo/partner/Stripe.svelte';
	import Svelte from '$lib/assets/images/logo/partner/Svelte.svelte';
	import Astro from '$lib/assets/images/logo/partner/Astro.svelte';
	import Github from '$lib/assets/images/logo/partner/Github.svelte';
	import Coolify from '$lib/assets/images/logo/partner/Coolify.svelte';
	import Nodejs from '$lib/assets/images/logo/partner/Nodejs.svelte';
	import Tailwindcss from '$lib/assets/images/logo/partner/Tailwindcss.svelte';
	import Builderio from '$lib/assets/images/logo/partner/Builderio.svelte';
	import Vuejs from '$lib/assets/images/logo/partner/Vuejs.svelte';
	import Prismic from '$lib/assets/images/logo/partner/Prismic.svelte';
	import Auth0 from '$lib/assets/images/logo/partner/Auth0.svelte';
	import Openai from '$lib/assets/images/logo/partner/Openai.svelte';
	import Anthropic from '$lib/assets/images/logo/partner/Anthropic.svelte';
</script>

<header data-animate="true" class="hero text-hero relative">
	<h1 class="flex items-end p-5 font-menu text-xs text-muted-foreground uppercase">{m.nav_services_engineering()}</h1>
	<h2 class="title p-5 text-5xl tracking-tighter text-wrap lg:col-start-2 lg:border-l lg:pt-55 lg:text-6xl">
		{m.engineering_headline()}
	</h2>
	<div class="flex items-end p-5 pt-10">
		<div class="flex w-fit items-end">
			<Blocks
				strokeWidth={1.1}
				size={85}
				class="icon pointer-events-none text-foreground drop-shadow-[0_0_30px_#2d8bb6]"
			/>
		</div>
	</div>
</header>
<section data-animate="true" class="section section-titled-list">
	<div data-animate="true" class="col-span-1 flex flex-col justify-end">
		<h2 class="title max-w-75 p-5 pt-50 text-4xl tracking-tighter lg:text-5xl">
			{m.engineering_services()}
		</h2>
		<ul>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				Artificial Intelligence
				<a class="absolute inset-0" href="/ai" aria-label="Artificial Intelligence"></a>
				<ChevronRight strokeWidth={2} size={16} class="text-muted-foreground transition-colors duration-150 group-hover:text-foreground" />
			</li>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				Websites & Web Apps
				<a class="absolute inset-0" href="/engineering/websites-and-webapps" aria-label="Websites and Web Apps"></a>
				<ChevronRight strokeWidth={2} size={16} class="text-muted-foreground transition-colors duration-150 group-hover:text-foreground" />
			</li>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				eCommerce
			</li>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				Composable Architecture
			</li>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				Frontend
			</li>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				Backend
			</li>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				Ai SEO Optimization
			</li>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				Performance Testing
			</li>
		</ul>
	</div>
	<div class="_object-cover _object-center h-full w-full border-t select-none lg:col-span-2 lg:border-t-0 lg:border-l">
		<enhanced:img
			src="/src/lib/assets/images/service/engineering.jpeg?format=avif;webp"
			alt="engineering area cover"
			class="h-full w-full object-cover object-center"
			sizes="(min-width: 1024px) 66.66667vw, 100vw"
		/>
	</div>
</section>
<!-- section blockqoute -->
<section class="section section-quote">
	<div class="flex items-center justify-center p-5 max-lg:py-10"></div>
	<blockquote
		class="p-5 text-justify font-headline text-3xl font-normal tracking-tighter uppercase [text-align-last:justify] max-lg:py-10 lg:col-span-2 lg:col-start-2 lg:border-l lg:pt-62.5 lg:text-4xl"
	>
		{m.engineering_services_blockquote()}<br />&nbsp;
	</blockquote>
</section>
<!-- end section blockqoute -->
<!-- section technology partners -->
<section data-animate="true" class="section section-partner-cards">
	<div data-animate="true" class="relative max-lg:border-b max-lg:pt-10">
		<h2 class="text-muted-foreground p-5 font-menu uppercase text-xs lg:sticky lg:top-16">{m.engineering_technologies()}</h2>
	</div>
	<div class="grid grid-cols-2 md:grid-cols-3 lg:col-span-2 lg:grid-cols-4 text-muted-foreground">
		<a	class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/prismic">
			<Prismic class="h-fit w-36 text-foreground" />
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Headless CMS Solution</span>
        </a>
        <a	class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/sanity">
			<Sanity class="h-fit w-32 text-foreground" />
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Headless CMS Solution</span>
        </a>
        <a	class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/strapi">
            <Strapi class="h-fit w-36 text-foreground" />
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Headless CMS Solution</span>
        </a>
        <a	class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/stripe">
			<Stripe class="h-fit w-32 text-foreground" />
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Payment Solution</span>
        </a>
        <a	class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/svelte">
			<Svelte class="h-fit w-36 text-foreground" />
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>
        </a>
        <a	class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/astro">
			<Astro class="h-fit w-32 text-foreground" />
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>
        </a>
        <!-- <a	class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/shopify">
			<Angular class="h-fit w-36 text-foreground" />
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>
        </a> -->
        <a class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/vuejs">
			<Vuejs class="h-fit w-28 text-foreground" />
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>
        </a>
        <a	class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/tailwindcss">
			<Tailwindcss class="h-fit w-40 text-foreground" />
			<span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>
        </a>
		<a	class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/vercel">
			<Vercel class="h-fit w-36 text-foreground" />
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Hosting Partner</span>
        </a>
        <a class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/coolify">
			<Coolify class="h-fit w-32 text-foreground" />
			<span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Hosting Partner</span>
        </a>
        <a class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/github">
			<Github class="h-fit w-36 text-foreground" />
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Repository Host</span>
        </a>
        <a class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/nodejs">
			<Nodejs class="h-14 w-28 text-foreground" />
			<span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>
        </a>
        <a	class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/builderio">
			<Builderio class="h-fit w-36 text-foreground" />
			<span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>
        </a>
        <a	class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/Auth0">
			<Auth0 class="h-fit w-30 text-foreground" />
			<span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>
        </a>
        <a	class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/openai">
			<Openai class="h-fit w-34 text-foreground" />
			<span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">AI Knowledge Solution</span>
        </a>
        <a	class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/anthropic">
			<Anthropic class="h-fit w-38 text-foreground" />
			<span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Security Asessment</span>
        </a>
		
	</div>
</section>
<!-- end section technology partners -->
<!-- section principles -->
<section data-animate="true" class="section">
	<header class="grid-global has-[+_*]:border-b">
		<div class="max-lg:hidden"></div>
		<h3	class="title col-span-1 p-5 text-5xl tracking-tighter text-wrap lg:col-start-2 lg:border-l lg:pt-50 lg:text-6xl">
			{m.engineering_principles_headline()}
		</h3>
	</header>
	<ol class="grid-global ordered-list">
		<li class="relative -mb-px flex min-h-75 flex-col items-start justify-between gap-6 border-b p-5 first:border-l-0 lg:min-h-104.5 lg:border-l lg:last:border-r-0">
			<span class="text-muted-foreground ordered-list-count font-menu text-xs" role="presentation"></span>
			<div class="flex-start flex w-full flex-col gap-6">
				<span class="title max-w-sm text-justify text-3xl tracking-tighter">{m.engineering_principles_p1_headline()}</span>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="text-sm text-muted-foreground">
                        {m.engineering_principles_p1_copy()}
					</p>
				</div>
			</div>
		</li>
		<li class="relative -mb-px flex min-h-75 flex-col items-start justify-between gap-6 border-b p-5 first:border-l-0 lg:min-h-104.5 lg:border-l lg:last:border-r-0">
			<span class="text-muted-foreground ordered-list-count font-menu text-xs" role="presentation"></span>
			<div class="flex-start flex w-full flex-col gap-6">
				<span class="title max-w-sm text-justify text-3xl tracking-tighter">{m.engineering_principles_p2_headline()}</span>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="text-sm text-muted-foreground">
						{m.engineering_principles_p2_copy()}
					</p>
				</div>
			</div>
		</li>
		<li class="relative -mb-px flex min-h-75 flex-col items-start justify-between gap-6 border-b p-5 first:border-l-0 lg:min-h-104.5 lg:border-l lg:last:border-r-0">
			<span class="text-muted-foreground ordered-list-count font-menu text-xs" role="presentation"></span>
			<div class="flex-start flex w-full flex-col gap-6">
				<span class="title max-w-sm text-justify text-3xl tracking-tighter">{m.engineering_principles_p3_headline()}</span>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="text-sm text-muted-foreground">
						{m.engineering_principles_p3_copy()}
					</p>
				</div>
			</div>
		</li>
		<li class="relative -mb-px flex min-h-75 flex-col items-start justify-between gap-6 border-b lg:border-b-0 p-5 first:border-l-0 lg:min-h-104.5 _lg:border-l lg:last:border-r-0">
			<span class="text-muted-foreground ordered-list-count font-menu text-xs" role="presentation"></span>
			<div class="flex-start flex w-full flex-col gap-6">
				<span class="title max-w-sm text-justify text-3xl tracking-tighter">{m.engineering_principles_p4_headline()}</span>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="text-sm text-muted-foreground">
						{m.engineering_principles_p4_copy()}
					</p>
				</div>
			</div>
		</li>
		<li class="relative -mb-px flex min-h-75 flex-col items-start justify-between gap-6 border-b lg:border-b-0 p-5 first:border-l-0 lg:min-h-104.5 lg:border-l lg:last:border-r-0">
			<span class="text-muted-foreground ordered-list-count font-menu text-xs" role="presentation"></span>
			<div class="flex-start flex w-full flex-col gap-6">
				<span class="title max-w-sm text-justify text-3xl tracking-tighter">{m.engineering_principles_p5_headline()}</span>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="text-sm text-muted-foreground">
						{m.engineering_principles_p5_copy()}
					</p>
				</div>
			</div>
		</li>
		<li class="relative -mb-px flex min-h-75 flex-col items-start justify-between gap-6 p-5 first:border-l-0 lg:min-h-104.5 lg:border-l lg:last:border-r-0">
			<span class="text-muted-foreground ordered-list-count font-menu text-xs" role="presentation"></span>
			<div class="flex-start flex w-full flex-col gap-6">
				<span class="title max-w-sm text-justify text-3xl tracking-tighter">{m.engineering_principles_p6_headline()}</span>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="text-sm text-muted-foreground">
						{m.engineering_principles_p6_copy()}
					</p>
				</div>
			</div>
		</li>
	</ol>
</section>
<!-- end section principles -->
<!-- section portfolio -->
<section data-animate="true" class="_section-portfolio-cards">
	<header class="grid-global has-[+_*]:border-b">
		<h2 class="flex items-end p-5 pt-10 font-menu text-xs text-muted-foreground uppercase">
			{m.engineering_portfolio_title()}
		</h2>
		<h3
			class="title font-foreground col-span-1 p-5 text-5xl tracking-tighter text-wrap lg:col-start-2 lg:border-l lg:pt-50 lg:text-6xl"
		>
			<span style="position:relative;display:inline-block;">
				<span style="position: relative; display: inline;">{m.engineering_portfolio_headline()}</span>
			</span>
		</h3>
		<a
			href={base + '/portfolio'}
			class="card-hover flex items-end p-5 pt-10 font-menu text-xs text-foreground uppercase"
			>{m.engineering_portfolio_viewall()}</a
		>
	</header>
	<div class="grid-global portfolio-grid">
		<a class="card-hover group flex flex-col" target="" rel="" href="/portfolio/subway">
			<div class="relative min-h-75 grow">
				<enhanced:img
					src="/src/lib/assets/images/portfolio/subway_hero@2x.png?format=avif;webp"
					alt="Subway Website Preview"
					loading="lazy" 
					decoding="async"
					class="object-cover object-center"
					style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
					sizes="(min-width: 1024px) 66.66667vw, 100vw"
				/>
				<div
					class="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-0 lg:opacity-10"
					aria-hidden="true"
				></div>
			</div>
			<div class="flex min-h-20 items-center justify-between p-5">
				<span
					class="lg:text-3xl_ flex gap-2 font-regular text-2xl font-medium tracking-tighter uppercase"
					>subway</span
				>
				<div class="flex flex-col items-end gap-1 text-right font-menu text-xs">
					<span>01</span>
					<span class="text-xs text-muted-foreground uppercase">Sports | Retail</span>
				</div>
			</div>
		</a>
		<a class="card-hover group flex flex-col" target="" rel="" href="/portfolio/werkd">
			<div class="relative min-h-75 grow">
				<enhanced:img
					src="/src/lib/assets/images/portfolio/werk_d@2x.png?format=avif;webp"
					alt="werk d Website Preview"
					loading="lazy" 
					decoding="async"
					class="object-cover object-center"
					style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
					sizes="(min-width: 1024px) 66.66667vw, 100vw"
				/>
				<div
					class="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-0 lg:opacity-10"
					aria-hidden="true"
				></div>
			</div>
			<div class="flex min-h-20 items-center justify-between p-5">
				<span
					class="lg:text-3xl_ _uppercase flex gap-2 font-regular text-2xl font-medium tracking-tighter"
					>werk <sub>d</sub></span
				>
				<div class="flex flex-col items-end gap-1 text-right font-menu text-xs">
					<span>02</span>
					<span class="text-xs text-muted-foreground uppercase">Interior | Surface Design</span>
				</div>
			</div>
		</a>
	</div>
</section>
<!-- section portfolio -->
<!-- section process -->
<section data-animate="true" class="section">
	<header class="grid-global has-[+_*]:border-b">
		<h2 class="flex items-end p-5 pt-10 font-menu text-xs text-muted-foreground uppercase">
			STAGES
		</h2>
		<h3
			class="title col-span-1 p-5 text-5xl tracking-tighter text-wrap text-foreground lg:col-start-2 lg:border-l lg:pt-50 lg:text-6xl"
		>{m.engineering_process_headline()}</h3>
	</header>
	<ul class="col-span-3">
		<li class="col-span-3 grid grid-cols-1 border-t first:border-t-0 lg:grid-cols-3">
			<span class="col-span-1 p-5 font-menu text-xs text-muted-foreground uppercase">Stage 01</span>
			<div class="flex flex-col gap-5 p-5 lg:border-l lg:pb-20">
				<span class="text-justify font-headline text-3xl tracking-tighter uppercase">{m.engineering_process_p1_headline()}</span>
				<p class="text-sm text-muted-foreground">
					{m.engineering_process_p1_copy()}
				</p>
			</div>
		</li>
		<li class="col-span-3 grid grid-cols-1 border-t first:border-t-0 lg:grid-cols-3">
			<span class="col-span-1 p-5 font-menu text-xs text-muted-foreground uppercase">Stage 02</span>
			<div class="flex flex-col gap-5 p-5 lg:border-l lg:pb-20">
				<span class="text-justify font-headline text-3xl tracking-tighter uppercase">{m.engineering_process_p2_headline()}</span>
				<p class="text-sm text-muted-foreground">
					{m.engineering_process_p2_copy()}
				</p>
			</div>
		</li>
		<li class="col-span-3 grid grid-cols-1 border-t first:border-t-0 lg:grid-cols-3">
			<span class="col-span-1 p-5 font-menu text-xs text-muted-foreground uppercase">Stage 03</span>
			<div class="flex flex-col gap-5 p-5 lg:border-l lg:pb-20">
				<span class="text-justify font-headline text-3xl tracking-tighter uppercase">{m.engineering_process_p3_headline()}</span>
				<p class="text-sm text-muted-foreground">
					{m.engineering_process_p3_copy()}
				</p>
			</div>
		</li>
		<li class="col-span-3 grid grid-cols-1 border-t first:border-t-0 lg:grid-cols-3">
			<span class="col-span-1 p-5 font-menu text-xs text-muted-foreground uppercase">Stage 04</span>
			<div class="flex flex-col gap-5 p-5 lg:border-l lg:pb-20">
				<span class="text-justify font-headline text-3xl tracking-tighter uppercase">{m.engineering_process_p4_headline()}</span>
				<p class="text-sm text-muted-foreground">
					{m.engineering_process_p4_copy()}
				</p>
			</div>
		</li>
		<li class="col-span-3 grid grid-cols-1 border-t first:border-t-0 lg:grid-cols-3">
			<span class="col-span-1 p-5 font-menu text-xs text-muted-foreground uppercase">Stage 05</span>
			<div class="flex flex-col gap-5 p-5 lg:border-l lg:pb-20">
				<span class="text-justify font-headline text-3xl tracking-tighter uppercase">{m.engineering_process_p5_headline()}</span>
				<p class="text-sm text-muted-foreground">
					{m.engineering_process_p5_copy()}
				</p>
			</div>
		</li>
		<li class="col-span-3 grid grid-cols-1 border-t first:border-t-0 lg:grid-cols-3">
			<span class="col-span-1 p-5 font-menu text-xs text-muted-foreground uppercase">Stage 06</span>
			<div class="flex flex-col gap-5 p-5 lg:border-l lg:pb-20">
				<span class="text-justify font-headline text-3xl tracking-tighter uppercase">{m.engineering_process_p6_headline()}</span>
				<p class="text-sm text-muted-foreground">
					{m.engineering_process_p6_copy()}
				</p>
			</div>
		</li>
		<li class="col-span-3 grid grid-cols-1 border-t first:border-t-0 lg:grid-cols-3">
			<span class="col-span-1 p-5 font-menu text-xs text-muted-foreground uppercase">Stage 07</span>
			<div class="flex flex-col gap-5 p-5 lg:border-l lg:pb-20">
				<span class="text-justify font-headline text-3xl tracking-tighter uppercase">{m.engineering_process_p7_headline()}</span>
				<p class="text-sm text-muted-foreground">
					{m.engineering_process_p7_copy()}
				</p>
			</div>
		</li>
	</ul>
</section>
<!-- end section process -->
<!-- section booking -->
<Booking
	title={m.engineering_booking_title()}
	description={m.engineering_booking_description()}
	cta={m.engineering_booking_cta()}
	link={m.nav_contact()}
/>
<!-- end section booking -->
<style>
	.title {
		text-transform: uppercase;
		/* font-stretch: 60%; */
		/* font-variation-settings: "wght" 450; */
		line-height: 0.9;
		font-family: var(--font-headline);
	}

	@media (min-width: 1024px) {
		.title {
			font-variation-settings: 'wght' 450;
		}
	}
</style>
