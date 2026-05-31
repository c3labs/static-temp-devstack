<script lang="ts">
	import { base } from '$app/paths';
	import Booking from '$lib/components/Booking.svelte';
	import { m } from '$lib/paraglide/messages';
	import { Blocks, ChevronRight } from 'lucide-svelte';
	import Strapi from '$lib/assets/images/logo/partner/Strapi.svelte';
	import Svelte from '$lib/assets/images/logo/partner/Svelte.svelte';
	import Astro from '$lib/assets/images/logo/partner/Astro.svelte';
	import Tailwindcss from '$lib/assets/images/logo/partner/Tailwindcss.svelte';
	import Coolify from '$lib/assets/images/logo/partner/Coolify.svelte';

    import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import Bitsui from '$lib/assets/images/logo/partner/Bitsui.svelte';
	import Railway from '$lib/assets/images/logo/partner/Railway.svelte';

	gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);

    let split:SplitText;
	let triggerArray:Array<ScrollTrigger> = [];

	onMount(() => {

		let splitters = gsap.utils.toArray(".split") as Element[];
		
		splitters.forEach((splitter, i) => {
			// console.log(splitter, i);
			triggerArray[i] = ScrollTrigger.create({
         		trigger: splitter,
            	start: "top bottom-=100px",
				// markers: true
			});

			split = SplitText.create(splitter, { 
				type: "chars, words",
				smartWrap: true,
				autoSplit: true,
				onSplit(self) {
					return gsap.from(self.chars, {
						duration: 0.5,
						autoAlpha: 0, 
						stagger: {
							amount: 1,
							from: "random"
						},
						scrollTrigger: triggerArray[i]
					});
				}
			});
		});

		return () => {
            // remove all eventListeners and kill scrolltrigger
			triggerArray.forEach((myScrollTrigger) => {
				myScrollTrigger.kill();
			});
		}

	});
</script>

<header data-animate="true" class="hero text-hero relative">
	<h1 class="flex items-end p-5 font-menu text-xs text-muted-foreground uppercase">
		{m.engineering_services_websites_h1()}
	</h1>
	<h2 class="split title p-5 text-5xl tracking-tighter text-wrap lg:col-start-2 lg:border-l lg:pt-55 lg:text-6xl">
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
		<li class="relative -mb-px flex min-h-75 flex-col items-start justify-between gap-6 border-b lg:border-b-0 p-5 lg:min-h-79.5 lg:last:border-r-0">
			<span class="text-neutral ordered-list-count font-menu text-xs text-muted-foreground uppercase" role="presentation">{m.engineering_services_websites_solution()}</span>
			<div class="flex-start flex w-full flex-col gap-4">
				<span class="title max-w-sm text-3xl tracking-tighter uppercase">{m.engineering_services_websites_types_headline1()}</span>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="text-sm text-muted-foreground">
						{@html m.engineering_services_websites_types_copy1()}
					</p>
				</div>
			</div>
		</li>
		<li class="relative -mb-px flex min-h-75 flex-col items-start justify-between gap-6 _border-b lg:border-b-0 p-5 lg:min-h-79.5 lg:border-l lg:last:border-r-0">
			<span class="text-neutral ordered-list-count font-menu text-xs text-muted-foreground uppercase" role="presentation">{m.engineering_services_websites_solution()}</span>
			<div class="flex-start flex w-full flex-col gap-4">
				<span class="title max-w-sm text-3xl tracking-tighter">{m.engineering_services_websites_types_headline2()}</span>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="text-sm text-muted-foreground">
						{@html m.engineering_services_websites_types_copy2()}
					</p>
				</div>
			</div>
		</li>
	</ol>
</section>
<!-- end section types -->
<!-- section partners -->
<section data-animate="true" class="section section-partner-cards">
	<div class="relative col-span-2 grid _h-60 w-full grid-cols-2 items-center overflow-hidden md:col-span-3 md:grid-cols-3 xl:grid-cols-6">
		<div class="relative flex h-55 w-full flex-col items-center justify-center overflow-hidden border-l first:border-l-0 border-b xl:border-b-0 lg:h-60">
            <a aria-label="Railway | the all-in-one intelligent cloud provider" class="card-hover absolute inset-0 z-10" href="https://railway.com/" target="_blank" rel="noreferrer noopener">
                <div class="flex h-full w-full items-center justify-center">
                    <Railway class="h-fit w-52 text-foreground" />
                </div>
            </a>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Hosting Solution</span>
		</div>
		<div class="relative flex h-55 w-full flex-col items-center justify-center overflow-hidden border-l irst:border-l-0 border-b xl:border-b-0 lg:h-60">
            <a aria-label="Strapi Open Source Headless CMS" class="card-hover absolute inset-0 z-10" href="https://strapi.io/" target="_blank" rel="noreferrer noopener">
                <div class="flex h-full w-full items-center justify-center">
                    <Strapi class="h-fit w-32 text-foreground" />
                </div>
            </a>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>
        </div>
		<div class="relative flex h-55 w-full flex-col items-center justify-center overflow-hidden border-l first:border-l-0 border-b xl:border-b-0 lg:h-60">
            <a aria-label="Svelte UI Framework" class="card-hover absolute inset-0 z-10" href="https://svelte.dev/" target="_blank" rel="noreferrer noopener">
                <div class="flex h-full w-full items-center justify-center">
                    <Svelte class="h-fit w-36 text-foreground" />
                </div>
            </a>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>			
		</div>
		<div class="relative flex h-55 w-full flex-col items-center justify-center overflow-hidden border-l first:border-l-0 border-b md:border-b-0 lg:h-60">
            <a aria-label="Astro Framework" class="card-hover absolute inset-0 z-10" href="https://astro.build/" target="_blank" rel="noreferrer noopener">
                <div class="flex h-full w-full items-center justify-center">
                    <Astro class="h-fit w-32 text-foreground" />
                </div>
            </a>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>			
		</div>
		<div class="relative flex h-55 w-full flex-col items-center justify-center overflow-hidden border-l before:left-0 after:right-0 after:rotate-180 first:border-l-0 lg:h-60">
            <a aria-label="bits-UI Headless Svelte Components" class="card-hover absolute inset-0 z-10" href="https://bits-ui.com/" target="_blank" rel="noreferrer noopener">
                <div class="flex h-full w-full items-center justify-center">
                    <Bitsui class="h-fit w-30 text-foreground" />
                </div>
            </a>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>			
		</div>
		<div class="relative flex h-55 w-full flex-col items-center justify-center overflow-hidden border-l before:left-0 after:right-0 after:rotate-180 first:border-l-0 lg:h-60">
            <a aria-label="TailwindCSS utility-first CSS Framework" class="card-hover absolute inset-0 z-10" href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener">
                <div class="flex h-full w-full items-center justify-center">
                    <Tailwindcss class="h-fit w-42 text-foreground" />
                </div>
            </a>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>			
		</div>
	</div>
</section>
<!-- end section partners -->
<!-- section archtecture -->
<section class="section">
	<div class="flex flex-col flex-start gap-4 lg:border-l lg:col-start-2 lg:col-span-2 pt-20 px-5 py-5">
		<h2 class="split title max-w-md text-4xl tracking-tighter lg:text-5xl">{m.engineering_services_websites_architecture_headline()}</h2>
		<p class="text-muted-foreground max-w-4xl">
			{@html m.engineering_services_websites_architecture_copy()}
		</p>
	</div>
</section>
<!-- end section architekture -->
<!-- section description -->
<section data-animate="true" class="section">
    <ol class="grid-global ordered-list">
        <li class="relative flex min-h-75 flex-col items-start justify-between gap-6 border-b -mb-px p-5 lg:min-h-79.5 lg:last:border-r-0">
            <span class="text-neutral ordered-list-count font-menu text-xs text-muted-foreground uppercase" role="presentation"></span>
            <div class="flex-start flex w-full flex-col gap-4">
                <span class="title max-w-md text-3xl tracking-tighter">{m.engineering_services_websites_architecture_desc_headline1()}</span>
                <div class="flex flex-col gap-6 lg:max-w-md">
                    <p class="text-sm text-muted-foreground">{m.engineering_services_websites_architecture_desc_copy1()}</p>
                </div>
            </div>
        </li>
        <li class="relative flex min-h-75 flex-col items-start justify-between gap-6 border-b -mb-px p-5 lg:min-h-79.5 lg:last:border-r-0 lg:border-l">
            <span class="text-neutral ordered-list-count font-menu text-xs text-muted-foreground uppercase" role="presentation"></span>
            <div class="flex-start flex w-full flex-col gap-4">
                <span class="title max-w-md text-3xl tracking-tighter">{m.engineering_services_websites_architecture_desc_headline2()}</span>
                <div class="flex flex-col gap-6 lg:max-w-md">
                    <p class="text-sm text-muted-foreground">{m.engineering_services_websites_architecture_desc_copy2()}</p>
                </div>
            </div>
        </li>
        <li class="relative flex min-h-75 flex-col items-start justify-between gap-6 border-b -mb-px p-5 lg:min-h-79.5 lg:last:border-r-0 lg:border-l">
            <span class="text-neutral ordered-list-count font-menu text-xs text-muted-foreground uppercase" role="presentation"></span>
            <div class="flex-start flex w-full flex-col gap-4">
                <span class="title max-w-md text-3xl tracking-tighter">{m.engineering_services_websites_architecture_desc_headline3()}</span>
                <div class="flex flex-col gap-6 lg:max-w-md">
                    <p class="text-sm text-muted-foreground">{m.engineering_services_websites_architecture_desc_copy3()}</p>
                </div>
            </div>
        </li>
        <li class="relative flex min-h-75 flex-col items-start justify-between gap-6 border-b -mb-px p-5 lg:min-h-79.5 lg:last:border-r-0">
            <span class="text-neutral ordered-list-count font-menu text-xs text-muted-foreground uppercase" role="presentation"></span>
            <div class="flex-start flex w-full flex-col gap-4">
                <span class="title max-w-md text-3xl tracking-tighter">{m.engineering_services_websites_architecture_desc_headline4()}</span>
                <div class="flex flex-col gap-6 lg:max-w-md">
                    <p class="text-sm text-muted-foreground">{m.engineering_services_websites_architecture_desc_copy4()}</p>
                </div>
            </div>
        </li>
        <li class="relative flex min-h-75 flex-col items-start justify-between gap-6 border-b -mb-px p-5 lg:min-h-79.5 lg:last:border-r-0 lg:border-l">
            <span class="text-neutral ordered-list-count font-menu text-xs text-muted-foreground uppercase" role="presentation"></span>
            <div class="flex-start flex w-full flex-col gap-4">
                <span class="title max-w-md text-3xl tracking-tighter">{m.engineering_services_websites_architecture_desc_headline5()}</span>
                <div class="flex flex-col gap-6 lg:max-w-md">
                    <p class="text-sm text-muted-foreground">{m.engineering_services_websites_architecture_desc_copy5()}</p>
                </div>
            </div>
        </li>
        <li class="relative flex min-h-75 flex-col items-start justify-between gap-6 border-b -mb-px p-5 lg:min-h-79.5 lg:last:border-r-0 lg:border-l">
            <span class="text-neutral ordered-list-count font-menu text-xs text-muted-foreground uppercase" role="presentation"></span>
            <div class="flex-start flex w-full flex-col gap-4">
                <span class="title max-w-md text-3xl tracking-tighter">{m.engineering_services_websites_architecture_desc_headline6()}</span>
                <div class="flex flex-col gap-6 lg:max-w-md">
                    <p class="text-sm text-muted-foreground">{m.engineering_services_websites_architecture_desc_copy6()}</p>
                </div>
            </div>
        </li>
    </ol>
</section>
<!-- end section description -->
 <!-- section portfolio -->
<section data-animate="true" class="_section-portfolio-cards">
	<header class="grid-global has-[+_*]:border-b">
		<h2 class="flex items-end p-5 pt-10 font-menu text-xs text-muted-foreground uppercase">
			{m.engineering_portfolio_title()}
		</h2>
		<h3 class="split title font-foreground col-span-1 p-5 text-5xl tracking-tighter text-wrap lg:col-start-2 lg:border-l lg:pt-50 lg:text-6xl">
			{m.portfolio_headline()}
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
					src="/src/lib/assets/images/portfolio/subway_hero@2x.png?format=avif"
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
					src="/src/lib/assets/images/portfolio/werk_d@2x.png?format=avif"
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
<!-- section booking -->
<Booking
	title={m.engineering_services_websites_booking_title()}
	description={m.engineering_services_websites_booking_description()}
	cta={m.engineering_services_websites_booking_cta()}
	link={m.nav_contact()}
/>
<!-- end section booking -->
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