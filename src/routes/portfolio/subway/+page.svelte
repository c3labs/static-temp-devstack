<script lang="ts">
    import subway_ipad_hi from '$lib/assets/video/portfolio/subway.ipad.mp4';
    import subway_ipad_low from '$lib/assets/video/portfolio/subway.ipad.mp4';
	import { base } from '$app/paths';
	import Booking from '$lib/components/Booking.svelte';
	import { m } from '$lib/paraglide/messages';
	import { ChevronLeft, ExternalLink } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
</script>
<button 
    in:fade
    onclick={() => {history.back()}}
	title="Back to previous page"
	aria-label="Back to previous page"
	class="hover:bg-accent-hover fixed top-[--nav-height] left-5 z-40 mt-5 flex h-12 w-12 items-center justify-center border_ bg-accent text-background transition-colors cursor-pointer"
>
	<ChevronLeft strokeWidth={2} size={16} />
</button>
<header in:fade class="hero case-study-hero">
    <div class="absolute w-full h-full">
        <!-- <enhanced:img src="/src/lib/assets/images/portfolio/subway_hero@2x.png?format=avif;webp" alt="Subway Website Preview" class="absolute w-full h-full object-cover object-center" sizes="(min-width: 1024px) 66.66667vw, 100vw" /> -->
    </div>
	<div class="grid-global relative z-10 max-lg:hidden">
		<div class="col-start-2 border-l"></div>
		<div class="border-l"></div>
	</div>
</header>
<div class="grid-global relative order-2">
	<h2 class="sr-only">Scope</h2>
	<div class="flex flex-col p-5 font-menu text-xs uppercase md:py-12 lg:border-y-0">
		<h3 class="text-muted-foreground mb-4">{m.portfolio_metadata_sector()}</h3>
		<ul class="flex flex-col items-start gap-1 text-sm"><li>Sports | Retail</li></ul>
	</div>
	<div class="flex flex-col border-t p-5 font-menu text-xs uppercase first:border-t-0 md:py-12 lg:border-y-0 lg:border-l">
		<h3 class="text-muted-foreground mb-4">{m.portfolio_metadata_scope()}</h3>
		<ul class="flex flex-col items-start gap-1 text-sm">
			<li>Branding</li>
			<li>UI/UX Design</li>
			<li>Front-End Development</li>
			<li>Back-End Development</li>
			<li>AI Optimzed SEO</li>
		</ul>
	</div>
	<div
		class="flex flex-col border-t p-5 font-menu text-xs uppercase first:border-t-0 md:py-12 lg:border-y-0 lg:border-l"
	>
		<h3 class="text-muted-foreground mb-4">{m.portfolio_metadata_technologies()}</h3>
		<ul class="flex flex-col items-start gap-1 text-sm">
			<li><a class="accent-link-animation" href="/technology/figma">Figma</a></li>
			<li><a class="accent-link-animation" href="/technology/tailwindcss">TailwindCSS</a></li>
			<li><a class="accent-link-animation" href="/technology/sveltekit">Sveltekit</a></li>
			<li><a class="accent-link-animation" href="/technology/cms">CMS primed</a></li>
			<li><a class="accent-link-animation" href="/technology/coolify">Coolify</a></li>
			<li><a class="accent-link-animation" href="/technology/github">Github</a></li>
		</ul>
	</div>
</div>
<div class="order-1 col-span-3 flex grid-cols-1 flex-col lg:order-2 lg:grid lg:grid-cols-3">
    <div class="flex flex-col justify-between gap-10 p-5 lg:border-r lg:border-b lg:-mr-px">
        <div class="flex flex-col gap-5">
            <h1 class="title text-5xl 2xl:text-7xl hyphens-auto whitespace-break-spaces tracking-tighter">{m.portfolio_cases_subway_h1()}</h1>
            <p class="text-muted-foreground">{@html m.portfolio_cases_subway_p1()}</p>
        </div>
        <a href="https://radsportwagner.com" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 font-menu uppercase text-xs text-muted-foreground transition-colors duration-300 text-accent-contrast hover:text-foreground w-fit py-1">{m.portfolio_cases_website()}
            <ExternalLink strokeWidth={2} size={13} />
        </a>
    </div>
    <div class="max-lg:order-1 h-full w-full object-cover col-span-2">
        <!-- <enhanced:img src="/src/lib/assets/images/portfolio/subway_screens_top@2x.png?format=avif;webp" alt="Subway Website Screens #1" sizes="(min-width: 1024px) 66.66667vw, 100vw" /> -->
    </div>
</div>
<section class="section _section-threes">
    <div class="col-span-3 py-5 lg:py-10 mx-4">
        <div>
            <video autoplay playsinline loop muted disablepictureinpicture disableremoteplayback class="mediapanel">
                <source src="/src/lib/assets/video/portfolio/subway.ipad.mp4" type="video/mp4">
                <source src={subway_ipad_hi} type="video/mp4" media="(min-width: 1200px)"/>
                <source src={subway_ipad_low} type="video/mp4" media="(min-width: 300px)"/>
                <track kind="captions">
            </video>
        </div>
    </div>
    <!-- <div class="max-lg:order-1 h-full w-full object-cover pt-10 col-span-3">
        <enhanced:img src="/src/lib/assets/images/portfolio/subway_screens_mid@2x.png?format=avif;webp" alt="Subway Website in Forest" sizes="(min-width: 1024px) 66.66667vw, 100vw" />
    </div> -->
</section>
<section class="section">
    <div class="max-lg:order-1 h-full w-full object-cover pt-10 col-span-2">
        <!-- <enhanced:img src="/src/lib/assets/images/portfolio/subway_screens_bot@2x.png?format=avif;webp" alt="Subway Website Screens #2" sizes="(min-width: 1024px) 66.66667vw, 100vw" /> -->
    </div>
    <div class="max-lg:order-2 p-5 pt-10 flex flex-col gap-10 justify-between items-start lg:col-span-1 lg:border-l">
        <div class="flex flex-col gap-5">
            <h2 class="title text-4xl max-w-md tracking-tighter">{m.portfolio_cases_subway_h2()}</h2>
            <div class="max-w-md">
                <p class="text-muted-foreground">{@html m.portfolio_cases_subway_p2()}</p>
            </div>
        </div>
    </div>
</section>
<!-- section booking -->
<Booking title={m.portfolio_booking_title()} description={m.portfolio_booking_description()} cta={m.portfolio_booking_cta()}  link={m.nav_contact()}/>
<!-- end section booking -->
<style>
	.title {
		text-transform: uppercase;
		line-height: 0.9;
		font-family: var(--font-headline);
	}

	@media (min-width: 1024px) {
		.title {
			font-variation-settings: 'wght' 450;
		}
	}

    .mediapanel {
        overflow: hidden;
        border-radius: 2.2vw;
        border: .55vw solid var(--color-neutral-900);
        width: stretch;
        width: -webkit-fill-available;
        max-width: 1024px;
        margin: auto;

    }

	@media (min-width: 1024px) {
		.mediapanel {
			border-radius: 22px;
            border-width: 5px;
		}
	}
</style>

