<script lang="ts">
	import Anthropic from '$lib/assets/images/logo/partner/Anthropic.svelte';
	import Github from '$lib/assets/images/logo/partner/Github.svelte';
	import Openai from '$lib/assets/images/logo/partner/Openai.svelte';
	import Prismic from '$lib/assets/images/logo/partner/Prismic.svelte';
	import Sanity from '$lib/assets/images/logo/partner/Sanity.svelte';
	import Strapi from '$lib/assets/images/logo/partner/Strapi.svelte';
	import Vercel from '$lib/assets/images/logo/partner/Vercel.svelte';
	import Coolify from '$lib/assets/images/logo/partner/Coolify.svelte';
	
	import Booking from '$lib/components/Booking.svelte';
	import { m } from '$lib/paraglide/messages';
	import { PackageCheck, ChevronRight } from 'lucide-svelte';
	// import { fade } from 'svelte/transition';

    import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
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
	<h1 class="flex items-end p-5 font-menu text-xs text-muted-foreground uppercase">Service</h1>
	<h2 class="split title p-5 text-5xl tracking-tighter text-wrap lg:col-start-2 lg:border-l lg:pt-55 lg:text-6xl">
		{m.service_headline()}
	</h2>
	<div class="flex items-end p-5 pt-10">
		<div class="flex w-fit items-end">
			<PackageCheck strokeWidth={1.1} size={85}	class="icon pointer-events-none text-foreground drop-shadow-[0_0_30px_#2d8bb6]"	/>
		</div>
	</div>
</header>
<section data-animate="true" class="section section-titled-list">
	<div data-animate="true" class="col-span-1 flex flex-col justify-end">
		<h2 class="title max-w-75 p-5 pt-50 text-4xl tracking-tighter lg:text-5xl">
			{m.service_principles()}
		</h2>
		<ul>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				{m.service_principles_p1()}
			</li>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				{m.service_principles_p2()}
			</li>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				{m.service_principles_p3()}
			</li>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				{m.service_principles_p4()}
			</li>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				{m.service_principles_p5()}
			</li>
		</ul>
	</div>
	<div class="_object-cover _object-center h-full w-full border-t select-none lg:col-span-2 lg:border-t-0 lg:border-l">
		<enhanced:img src="/src/lib/assets/images/service/service.jpeg?format=avif" alt="design area cover" class="h-full w-full object-cover object-center" sizes="(min-width: 1024px) 66.66667vw, 100vw" />
	</div>
</section>
<!-- section blockqoute -->
<section class="section section-quote">
	<div class="flex items-center justify-center p-5 max-lg:py-10"></div>
	<blockquote
		class="p-5 text-justify font-headline text-3xl font-normal tracking-tighter uppercase [text-align-last:justify] max-lg:py-10 lg:col-span-2 lg:col-start-2 lg:border-l lg:pt-62.5 lg:text-4xl"
	>
		{m.service_principles_blockquote()}<br />&nbsp;
	</blockquote>
</section>
<!-- end section blockqoute -->
<!-- section service partners -->
<section data-animate="true" class="section section-partner-cards">
	<div data-animate="true" class="relative max-lg:border-b max-lg:pt-10">
		<h2 class="text-muted-foreground p-5 font-menu uppercase text-xs lg:sticky lg:top-16">{m.engineering_technologies()}</h2>
	</div>
	<div class="grid grid-cols-2 md:grid-cols-3 lg:col-span-2 lg:grid-cols-4 text-muted-foreground">
		<!-- <a aria-label="Prismic Headless CMS" class="md:nth-[3n+2]:border-l md:nth-[3n+3]:border-l card-hover relative -mb-px flex h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="https://prismic.io/" target="_blank" rel="noreferrer noopener">
			<Prismic class="h-fit w-36 text-foreground" />
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Headless CMS Solution</span>
        </a> -->
        <a aria-label="Sanity Headless CMS" class="md:nth-[3n+2]:border-l md:nth-[3n+3]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="https://www.sanity.io/" target="_blank" rel="noreferrer noopener">
			<Sanity class="h-fit w-52 text-foreground" />
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Headless CMS Solution</span>
        </a>
        <a aria-label="Strapi Open Source Headless CMS" class="md:nth-[3n+2]:border-l md:nth-[3n+3]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="https://strapi.io/" target="_blank" rel="noreferrer noopener">
            <Strapi class="h-fit w-32 text-foreground" />
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Headless CMS Solution</span>
        </a>
		<a aria-label="Railway | the all-in-one intelligent cloud provider" class="md:nth-[3n+2]:border-l md:nth-[3n+3]:border-l card-hover relative -mb-px flex h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="https://railway.com/" target="_blank" rel="noreferrer noopener">
			<Railway class="h-fit w-56 text-foreground" />
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Hosting Solution</span>
        </a>
        <a aria-label="Coolify self-hosting with superpowers" class="md:nth-[3n+2]:border-l md:nth-[3n+3]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="https://coolify.io/" target="_blank" rel="noreferrer noopener">
			<Coolify class="h-fit w-32 text-foreground" />
			<span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Hosting Partner</span>
        </a>
        <a aria-label="Github Repo Host" class="md:nth-[3n+2]:border-l md:nth-[3n+3]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b lg:border-b-0 p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="https://github.com/" target="_blank" rel="noreferrer noopener">
			<Github class="h-fit w-34 text-foreground" />
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Repository Host</span>
        </a>
        <a aria-label="OpenAI ChatCPT" class="md:nth-[3n+2]:border-l md:nth-[3n+3]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b lg:border-b-0 p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="https://openai.com/" target="_blank" rel="noreferrer noopener">
			<Openai class="h-fit w-34 text-foreground" />
			<span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">AI Knowledge Solution</span>
        </a>
        <a aria-label="Anthropic" class="md:nth-[3n+2]:border-l md:nth-[3n+3]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center p-5 max-md:even:border-l lg:border-l border-r 2xl:h-87.5" href="https://www.anthropic.com/" target="_blank" rel="noreferrer noopener">
			<Anthropic class="h-fit w-38 text-foreground" />
			<span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">AI Knowledge Solution</span>
        </a>
	</div>
</section>
<!-- end section service partners -->
<!-- section service areas -->
<section data-animate="true" class="section">
	<header class="grid-global has-[+_*]:border-b">
		<div class="max-lg:hidden"></div>
		<h3	class="split title col-span-1 p-5 text-5xl tracking-tighter text-wrap lg:col-start-2 lg:border-l lg:pt-50 lg:text-6xl">
			{m.service_areas_headline()}
		</h3>
	</header>
	<ol class="grid-global ordered-list">
		<li class="relative -mb-px flex min-h-75 flex-col items-start justify-between gap-6 border-b p-5 first:border-l-0 lg:min-h-104.5 lg:border-l lg:last:border-r-0">
			<span class="text-muted-foreground ordered-list-count font-menu text-xs" role="presentation"></span>
			<div class="flex-start flex w-full flex-col gap-6">
				<span class="title max-w-sm text-justify text-3xl tracking-tighter">{m.service_areas_a1_headline()}</span>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="_text-sm text-muted-foreground">
                        {m.service_areas_a1_copy()}
					</p>
				</div>
			</div>
		</li>
		<li class="relative -mb-px flex min-h-75 flex-col items-start justify-between gap-6 border-b p-5 first:border-l-0 lg:min-h-104.5 lg:border-l lg:last:border-r-0">
			<span class="text-muted-foreground ordered-list-count font-menu text-xs" role="presentation"></span>
			<div class="flex-start flex w-full flex-col gap-6">
				<span class="title max-w-sm text-justify text-3xl tracking-tighter">{m.service_areas_a2_headline()}</span>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="_text-sm text-muted-foreground">
						{m.service_areas_a2_copy()}
					</p>
				</div>
			</div>
		</li>
		<li class="relative -mb-px flex min-h-75 flex-col items-start justify-between gap-6 border-b p-5 first:border-l-0 lg:min-h-104.5 lg:border-l lg:last:border-r-0">
			<span class="text-muted-foreground ordered-list-count font-menu text-xs" role="presentation"></span>
			<div class="flex-start flex w-full flex-col gap-6">
				<span class="title max-w-sm text-justify text-3xl tracking-tighter">{m.service_areas_a3_headline()}</span>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="_text-sm text-muted-foreground">
						{m.service_areas_a3_copy()}
					</p>
				</div>
			</div>
		</li>
	</ol>
</section>
<!-- end section service areas -->
<!-- section booking -->
<Booking title={m.service_booking_title()} description={m.service_booking_description()} cta={m.service_booking_cta()} link={m.nav_contact()} />
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
