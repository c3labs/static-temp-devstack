<script lang="ts">
	import { base } from '$app/paths';
	import Booking from '$lib/components/Booking.svelte';
	// import { page } from '$app/state';
	// import { locales, setLocale, localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';
	import { Blocks, BrainCog, ChevronRight, Command, PackageCheck } from 'lucide-svelte';
	import { elasticOut, quadIn, quadOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
</script>

<header class="hero large-hero relative">
	<h1 class="sr-only">c3labs | Büro für mediale Kommunikation</h1>
	<div class="absolute flex flex-col h-full items-center justify-center w-full">
		<h2 in:fly={{ y :50, duration: 250, delay: 100, easing:quadOut }} out:fade class="absolute z-10 large-hero-headline text-featured w-screen max-w-full col-span-3 flex flex-wrap justify-between gap-x-16 p-3 lg:p-5 font-heroline text-5xl sm:text-6xl md:text-8xl 2xl:text-9xl leading-[1.1] uppercase tracking-[-0.02em] text-justify font-bold">{m.home_welcome()}</h2>
	</div>
	<video class="absolute h-full w-full object-cover object-center" autoplay loop playsinline>
		<source src="/src/lib/assets/video/home/monogram_org.mp4" type="video/mp4">
		<track kind="captions">
	</video>	
	<!-- <video class="absolute h-full w-full object-cover object-center" src="https://rstr.in/monogram/website/aFtZoTk82YT" autoplay loop poster="https://rstr.in/monogram/website/Rx6SNYJJMRD" playsinline>
		<track kind="captions">
	</video> -->
	<div class="_border-white/20 _border col-span-3 grid grid-cols-1 h-screen leading-[1.6] lg:grid-cols-3 max-h-375 _mix-blend-difference relative z-0">
		<div class="bottom-text hidden lg:flex">
			<a target="_blank" rel="noopener noreferrer" class="bottom-text p-0" href="https://maps.app.goo.gl/">
				<span class="latitude">34.07062188658319</span>,<br>
				<span class="longitude">-84.27424250862218</span>
			</a>
		</div>
		<div class="bottom-text flex lg:border-l">
			<h2 class="max-w-sm">{m.home_weare()}</h2>
		</div>
		<div class="bottom-text hidden lg:flex lg:border-l">
			<div class="max-w-48">{@html m.home_version()}</div>
		</div>
	</div>
</header>
<!-- section ai cta -->
<a class="group card-hover relative section section-hero-cta" href="/ai">
	<div class="relative h-96 lg:h-auto flex">
		<enhanced:img src="/src/lib/assets/images/ai/ai_pioneering@2x.png?format=avif;webp" alt="AI-Brain Cell" loading="lazy" decoding="async" class="absolute w-full h-full object-cover object-center group-hover:opacity-95 opacity-85 transition-opacity duration-300" sizes="(min-width: 1024px) 66.66667vw, 100vw" />
		<BrainCog strokeWidth={0.7} size={66} class="_absolute w-1/2 h-1/2 self-center translate-x-1/2" />
	</div>
	<div class="col-span-2 group lg:border-l lg:pt-80 pb-6 pt-40 px-5">
		<h2 class="title text-5xl lg:text-6xl max-w-xl _font-normal _font-medium tracking-tighter">{m.home_hero_headline()}</h2>
		<p class="text-sm text-muted-foreground mt-6">{m.home_hero_subline()}</p>
		<div class="absolute top-5 right-5 button bg-accent hover:bg-accent-hover text-card transition-all duration-300">
			<ChevronRight strokeWidth={2} size={16} />
		</div>
	</div>
</a>
<!-- end section ai cta -->
<!-- section service  -->
<div class="section">
	<div class="relative flex flex-col justify-center max-lg:last:border-b-0 max-lg:border-b p-5 text-foreground h-100 lg:h-125 card-hover">
		<a class="absolute inset-0" aria-label="Go to /design" href="/design"></a>
		<Command strokeWidth={1.1} size={105} class="icon drop-shadow-[0_0_30px_#2d8bb6] text-foreground pointer-events-none" />
		<div class="flex max-w-sm flex-col gap-6">
			<h2 class="title text-3xl text-foreground tracking-tighter">{m.nav_services_design()}</h2>
			<p class="text-sm/snug text-muted-foreground">{m.home_services_design_subline()}</p>
		</div>
	</div>
	<div class="relative flex flex-col justify-center max-lg:last:border-b-0 max-lg:border-b p-5 text-foreground h-100 lg:h-125 card-hover lg:border-l">
		<a class="absolute inset-0" aria-label="Go to /engineering" href="/engineering"></a>
		<Blocks strokeWidth={1.1} size={105} class="icon drop-shadow-[0_0_30px_#2d8bb6] text-foreground pointer-events-none" />
		<div class="flex max-w-sm flex-col gap-6">
			<h2 class="title text-3xl text-foreground tracking-tighter">{m.nav_services_engineering()}</h2>
			<p class="text-sm/snug text-muted-foreground">{m.home_services_engineering_subline()}</p>
		</div>
	</div>
	<div class="relative flex flex-col justify-center max-lg:last:border-b-0 max-lg:border-b p-5 text-foreground h-100 lg:h-125 card-hover lg:border-l">
		<a class="absolute inset-0" aria-label="Go to /service" href="/service"></a>
		<PackageCheck strokeWidth={1.1} size={105} class="icon drop-shadow-[0_0_30px_#2d8bb6] text-foreground pointer-events-none" />
		<div class="flex max-w-sm flex-col gap-6">
			<h2 class="title text-3xl text-foreground tracking-tighter">{m.nav_services_service()}</h2>
			<p class="text-sm/snug text-muted-foreground">{@html m.home_services_service_subline()}</p>
		</div>
	</div>
</div>
<!-- end section service  -->
<!-- section portfolio -->
<section data-animate="true" class="_section-portfolio-cards">
	<header class="grid-global has-[+_*]:border-b">
		<h2 class="flex items-end p-5 pt-10 font-menu text-muted-foreground uppercase text-xs">{m.home_portfolio_title()}</h2>
		<h3 class="title col-span-1 lg:col-start-2 p-5 text-5xl lg:text-6xl lg:pt-50 lg:border-l text-wrap font-foreground tracking-tighter">
			<span style="position:relative;display:inline-block;">
				<span style="position: relative; display: inline;">{m.home_portfolio_headline()}</span>
			</span>
		</h3>
		<a href="{base + '/portfolio'}" class="flex items-end p-5 pt-10 font-menu text-foreground text-xs uppercase card-hover">{m.home_portfolio_viewall()}</a>
	</header>
	<div class="grid-global portfolio-grid">
		<a class="card-hover flex flex-col group" target="" rel="" href="/portfolio/subway">
			<div class="relative min-h-75 grow">
				<enhanced:img src="/src/lib/assets/images/portfolio/subway_hero@2x.png?format=avif;webp" alt="Subway Website in Forest" loading="lazy" decoding="async" class="object-cover object-center" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="(min-width: 1024px) 66.66667vw, 100vw" />
				<div class="absolute inset-0 bg-black opacity-0 lg:opacity-10 group-hover:opacity-0 transition-opacity duration-300" aria-hidden="true"></div>
			</div>
			<div class="flex items-center justify-between p-5 min-h-20">
				<span class="flex gap-2 font-regular text-2xl lg:text-3xl_ font-medium uppercase tracking-tighter">subway</span>
				<div class="flex flex-col gap-1 font-menu items-end text-right text-xs">
					<span>01</span>
					<span class="text-muted-foreground uppercase text-xs">Sports | Retail</span>
				</div>
			</div>
		</a>
		<a class="card-hover flex flex-col group" target="" rel="" href="/portfolio/werkd">
			<div class="relative min-h-75 grow">
				<enhanced:img src="/src/lib/assets/images/portfolio/werk_d@2x.png?format=avif;webp" alt="werk d Website Preview" loading="lazy" decoding="async" class="object-cover object-center" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="(min-width: 1024px) 66.66667vw, 100vw" />
				<div class="absolute inset-0 bg-black opacity-0 lg:opacity-10 group-hover:opacity-0 transition-opacity duration-300" aria-hidden="true"></div>
			</div>
			<div class="flex items-center justify-between p-5 min-h-20">
				<span class="flex gap-2 font-regular text-2xl lg:text-3xl_ font-medium _uppercase tracking-tighter">werk <sub>d</sub></span>
				<div class="flex flex-col gap-1 font-menu items-end text-right text-xs">
					<span>02</span>
					<span class="text-muted-foreground uppercase text-xs">Interior | Surface Design</span>
				</div>
			</div>
		</a>
	</div>
</section>
<!-- section portfolio -->
<!-- section manifest -->
<section data-animate="true" class="section section-blog-cards">
	<header class="grid-global has-[+_*]:border-b">
		<h2 class="flex items-end p-5 pt-10 font-menu uppercase text-xs text-muted-foreground">{m.home_manifest_title()}</h2>
		<h3 class="title col-span-1 lg:col-start-2 p-5 text-5xl lg:text-6xl lg:pt-50 lg:border-l text-wrap tracking-tighter">{m.home_manifest_headline()}</h3>
		<a class="flex items-end p-5 pt-10 font-menu uppercase text-xs text-foreground card-hover" href="/manifesto">{m.home_manifest_viewall()}</a>
	</header>
	<div class="lg:col-start-2 lg:col-span-2">
		<a class="group relative min-h-87.5 flex flex-col justify-between overflow-hidden gap-6 p-5 border-b lg:col-span-2 lg:min-h-112.5 lg:border-l" href="/manifesto/what-isitagentready-com-actually-measures">
			<enhanced:img src="/src/lib/assets/images/manifesto/isitagentready.v2.png?format=avif;webp" alt="Featured article cover" loading="lazy" decoding="async" class="-z-10 absolute h-full w-full object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="(min-width: 1024px) 66.66667vw, 100vw" />
			<time datetime="2026-04-21" class="absolute text-featured font-menu text-xs uppercase">Apr 21, 2026</time>
			<div class="flex-start flex w-full max-w-md flex-col items-start gap-6">
				<span class="text-featured title text-4xl tracking-tighter">{m.manifest_1_headline()}</span>
			</div>
			<div class="absolute inset-0 -z-10 bg-black opacity-0 lg:opacity-15 group-hover:opacity-0 transition-opacity duration-300" aria-hidden="true"></div>
		</a>
		<div class="grid grid-cols-1 lg:col-span-2 lg:grid-cols-2">
			<a class="article-card card-hover" href="/manifesto/how-to-get-your-website-agent-ready">
				<time datetime="2026-04-20" class="text-muted-foreground font-menu uppercase text-xs">Apr 20, 2026</time>
				<div class="flex flex-col flex-start max-w-sm gap-6">
					<p class="title text-xl lg:text-3xl line-clamp-4 tracking-tighter">{m.manifest_2_headline()}</p>
				</div>
			</a>
			<a class="article-card card-hover" href="/manifesto/the-wordpress-problem">
				<time datetime="2026-02-13" class="text-muted-foreground font-menu uppercase text-xs">Apr 05, 2026</time>
				<div class="flex flex-col flex-start max-w-sm gap-6">
					<p class="title text-xl lg:text-3xl line-clamp-4 tracking-tighter">{m.manifest_3_headline()}</p>
				</div>
			</a>
		</div>
	</div>
</section>
<!-- end section manifest -->
<!-- section booking -->
<Booking title={m.home_booking_title()} description={m.home_booking_description()} cta={m.home_booking_cta()}  link={m.nav_contact()}/>
<!-- end section booking -->

<!-- <p>
	<a class="" href={base + '/demo/paraglide'}>Paraglide deeplink</a>
</p> -->

<style>
	.title {
		text-transform: uppercase;
		/* font-stretch: 60%; */
		/* font-variation-settings: "wght" 450; */
		line-height: 0.9;
		font-family: var(--font-headline)
	}

	@media (min-width: 1024px) {
		.title {
			font-variation-settings: "wght" 450
		}
	}
</style>