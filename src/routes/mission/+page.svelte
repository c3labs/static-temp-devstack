<script lang="ts">
	import { base } from '$app/paths';
	import Booking from '$lib/components/Booking.svelte';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import { BrainCog, ChevronRight } from 'lucide-svelte';

    import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

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
						duration: 1,
						autoAlpha: 0, 
						stagger: {
							amount: 0.5,
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
<svelte:head>
	<title>{m.mission_title()} | c3labs</title>
	<meta name="description" content="{m.mission_meta_descritption()}">

	<!-- Open Graph for Facebook, LinkedIn, WhatsApp -->
	<meta property="og:title" content="{m.mission_title()} | c3labs">
	<meta property="og:description" content="{m.mission_meta_descritption()}">
	<!-- X (Twitter) Cards -->
    <meta name="twitter:title" content="{m.mission_title()} | c3labs">
	<meta name="twitter:description" content="{m.mission_meta_descritption()}">
</svelte:head>

<header data-animate="true" data-has-page-title="true" class="hero text-hero relative">
    <h1 class="flex items-end p-5 font-menu text-muted-foreground text-xs uppercase">{m.mission_about_headline()}</h1>
    <h2 class="split title p-5 text-5xl tracking-tighter text-wrap lg:col-start-2 lg:border-l lg:pt-55 lg:text-6xl">
        {m.mission_headline()}
    </h2>
    <div class="flex items-end pt-10 p-5">
        <div class="flex flex-col gap-5">
            <span class="font-regular">{@html m.mission_about_copy()}</span>
        </div>
    </div>
</header>
<section class="section section-titled-list">
    <div data-animate="true" class="col-span-1 flex flex-col justify-end"></div>
	<div class="_object-cover _object-center h-full w-full border-t select-none lg:col-span-2 lg:border-t-0 lg:border-l">
		<enhanced:img src="/src/lib/assets/images/mission/mission_space.jpeg?format=avif" alt="c3labs working desk" class="h-full w-full object-cover object-center" sizes="(min-width: 1024px) 66.66667vw, 100vw" />
	</div>
</section>
<section class="section section-logo-quote border-b-0!">
    <div class="flex items-end p-5 max-lg:py-10 self-end">
        <h2 class="font-menu text-xs uppercase text-muted-foreground">{m.mission_who_headline()}</h2>
    </div>
    <blockquote class="p-5 max-lg:py-10 text-[28px] leading-[1.1] max-w-3xl tracking-[-0.04em] text-pretty pb-7.5 lg:col-start-2 lg:col-span-2 lg:pt-62.5 lg:border-l whitespace-pre-wrap">{m.mission_who_subline()}</blockquote>
</section>
<section class="section section-featured-content border-b-0">
    <div></div>
    <div class="col-span-2 lg:border-l p-5 flex flex-col gap-25 lg:gap-50">
        <p class="text-lg max-w-4xl">{m.mission_who_copy()}</p>
        <!-- <h2 class="title max-w-4xl">Design verstehen wir als System: </h2> -->
    </div>
</section>
<section class="section section-logo-content">
    <div class="flex items-end p-5 max-lg:py-10 self-end">
        <h2 class="font-menu text-xs uppercase text-muted-foreground">{m.mission_importance_headline()}</h2>
    </div>
    <h2 class="split title p-5 text-5xl tracking-tighter text-wrap lg:col-span-2 lg:border-l lg:pt-55 lg:text-6xl">{m.mission_importance_subline()}</h2>
    <div class="max-lg:hidden"></div>
    <div class="lg:border-t lg:border-l p-5">
        <p class="text-foreground text-xl leading-[1.3]! max-w-lg whitespace-pre-wrap">{@html m.mission_importance_copy_p1()}</p>
    </div>
    <div class="border-t lg:border-l p-5 flex flex-col gap-16">
        <!-- <img alt="" loading="lazy" width="88" height="51" decoding="async" data-nimg="1" class="h-12.5 w-auto object-contain object-left" srcset="https://cdn.sanity.io/images/zep746qw/production/58ded316d0d11b58b68d62fbca49b5ad7da98747-88x51.svg?w=96&amp;q=75&amp;fit=max&amp;auto=format 1x, https://cdn.sanity.io/images/zep746qw/production/58ded316d0d11b58b68d62fbca49b5ad7da98747-88x51.svg?w=256&amp;q=75&amp;fit=max&amp;auto=format 2x" src="https://cdn.sanity.io/images/zep746qw/production/58ded316d0d11b58b68d62fbca49b5ad7da98747-88x51.svg?w=256&amp;q=75&amp;fit=max&amp;auto=format" style="color: transparent;"> -->
        <p class="text-foreground _font-condensed text-base _whitespace-pre-wrap max-w-100 text-pretty">{@html m.mission_importance_copy_p2()}</p>
    </div>
</section>
<!-- section booking -->
<Booking
	title={m.mission_booking_title()}
	description={m.mission_booking_description()}
	cta={m.mission_booking_cta()}
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