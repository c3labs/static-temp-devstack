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
	<title>{m.legal_title()} | c3labs</title>
	<meta name="description" content="{m.legal_meta_descritption()}">

	<!-- Open Graph for Facebook, LinkedIn, WhatsApp -->
	<meta property="og:title" content="{m.legal_title()} | c3labs">
	<meta property="og:description" content="{m.legal_meta_descritption()}">
	<!-- X (Twitter) Cards -->
    <meta name="twitter:title" content="{m.legal_title()} | c3labs">
	<meta name="twitter:description" content="{m.legal_meta_descritption()}">
</svelte:head>
<section data-animate="true" class="section">
	<div class="grid pt-25 lg:col-span-2 lg:grid-cols-2 lg:pt-0">
    
		<h1 class="split title p-5 text-wrap lg:col-start-2 lg:-mr-px lg:border-x lg:pt-75 text-5xl tracking-tighter lg:text-6xl">
			{m.legal_headline()}
		</h1>
	</div>
	<nav class="lg:col-span-2 lg:col-start-2 lg:border-l">
		<ul>
			<li class="group title relative flex items-center justify-between border-t p-5 text-sm">
				{m.legal_link_imprint()}<a class="absolute inset-0" href="/legal/imprint" aria-label="{m.legal_link_imprint()}"></a>
                <ChevronRight strokeWidth={2} size={16} class="text-muted-foreground transition-colors duration-150 group-hover:text-foreground" />
			</li>
			<li class="group title relative flex items-center justify-between border-t p-5 text-sm">
				{m.legal_link_privacy()}<a class="absolute inset-0" href="/legal/privacy" aria-label="{m.legal_link_privacy()}"></a>
                <ChevronRight strokeWidth={2} size={16} class="text-muted-foreground transition-colors duration-150 group-hover:text-foreground" />
			</li>
		</ul>
	</nav>
</section>
<section class="section section-quote">
	<blockquote class="p-5 text-justify font-headline text-2xl text-muted-foreground font-normal tracking-tighter _uppercase [text-align-last:justify] max-lg:py-10 lg:col-span-2 lg:col-start-2 lg:border-l lg:pt-62.5 lg:text-3xl">{m.legal_blockquote()}<br />&nbsp;
	</blockquote>
</section>
<!-- section booking -->
<Booking
	title={m.legal_booking_title()}
	description={m.legal_booking_description()}
	cta={m.legal_booking_cta()}
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
