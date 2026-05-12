<script lang="ts">
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
<header class="hero case-study-hero">
    <div class="absolute w-full h-full">
        <enhanced:img src="/src/lib/assets/images/portfolio/subway_forest@2x.png?format=avif;webp" alt="Subway Website in Forest" class="absolute w-full h-full object-cover object-center" sizes="(min-width: 1024px) 66.66667vw, 100vw" />
    </div>
	<div class="grid-global relative z-10 border-white/20 mix-blend-difference max-lg:hidden">
		<div class="col-start-2 border-l"></div>
		<div class="border-l"></div>
	</div>
</header>
<div class="grid-global relative order-2">
	<h2 class="sr-only">Metadata</h2>
	<div class="flex flex-col p-5 font-menu text-xs uppercase md:py-12 lg:border-y-0">
		<h3 class="text-muted-foreground mb-4">Sector</h3>
		<ul class="flex flex-col items-start gap-1 text-sm"><li>Sports | Retail</li></ul>
	</div>
	<div class="flex flex-col border-t p-5 font-menu text-xs uppercase first:border-t-0 md:py-12 lg:border-y-0 lg:border-l">
		<h3 class="text-muted-foreground mb-4">Scope</h3>
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
		<h3 class="text-muted-foreground mb-4">Technologies</h3>
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
            <h1 class="title text-5xl 2xl:text-7xl hyphens-auto whitespace-break-spaces tracking-tighter">Subway Radsport wagner</h1>
            <p class="text-muted-foreground">{m.portfolio_cases_subway_p1()}</p>
        </div>
        <a href="https://radsportwagner.com" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 font-menu uppercase text-xs text-muted-foreground transition-colors duration-300 text-accent-contrast hover:text-foreground w-fit py-1">{m.portfolio_cases_website()}
            <ExternalLink strokeWidth={2} size={13} />
        </a>
    </div>
    <img 
    alt="Abnormal AI cover" 
    loading="lazy" 
    width="6000" 
    height="3376" 
    decoding="async" 
    data-nimg="1" 
    class="col-span-2 mx-auto object-cover" 
    sizes="100vw" 
    srcset="https://cdn.sanity.io/images/zep746qw/production/805a1ebb1fd8d404ed60101db43aa8f561ec0677-6000x3376.png?w=640&amp;q=75&amp;fit=max&amp;auto=format 640w, https://cdn.sanity.io/images/zep746qw/production/805a1ebb1fd8d404ed60101db43aa8f561ec0677-6000x3376.png?w=750&amp;q=75&amp;fit=max&amp;auto=format 750w, https://cdn.sanity.io/images/zep746qw/production/805a1ebb1fd8d404ed60101db43aa8f561ec0677-6000x3376.png?w=828&amp;q=75&amp;fit=max&amp;auto=format 828w, https://cdn.sanity.io/images/zep746qw/production/805a1ebb1fd8d404ed60101db43aa8f561ec0677-6000x3376.png?w=1080&amp;q=75&amp;fit=max&amp;auto=format 1080w, https://cdn.sanity.io/images/zep746qw/production/805a1ebb1fd8d404ed60101db43aa8f561ec0677-6000x3376.png?w=1200&amp;q=75&amp;fit=max&amp;auto=format 1200w, https://cdn.sanity.io/images/zep746qw/production/805a1ebb1fd8d404ed60101db43aa8f561ec0677-6000x3376.png?w=1920&amp;q=75&amp;fit=max&amp;auto=format 1920w, https://cdn.sanity.io/images/zep746qw/production/805a1ebb1fd8d404ed60101db43aa8f561ec0677-6000x3376.png?w=2048&amp;q=75&amp;fit=max&amp;auto=format 2048w" 
    src="https://cdn.sanity.io/images/zep746qw/production/805a1ebb1fd8d404ed60101db43aa8f561ec0677-6000x3376.png?w=2048&amp;q=75&amp;fit=max&amp;auto=format" 
    style="color: transparent;">
</div>
<section class="section">
    <img alt="Case study" 
    loading="lazy"
     width="6400" 
     height="4400" 
     decoding="async" 
     data-nimg="1" 
     class="max-lg:order-1 h-full w-full object-cover pt-10 col-span-2" 
     sizes="100vw" 
     srcset="https://cdn.sanity.io/images/zep746qw/production/bd8e11d01451450a4209cbe61285a76d4fa179f2-6400x4400.png?w=640&amp;q=75&amp;fit=max&amp;auto=format 640w, https://cdn.sanity.io/images/zep746qw/production/bd8e11d01451450a4209cbe61285a76d4fa179f2-6400x4400.png?w=750&amp;q=75&amp;fit=max&amp;auto=format 750w, https://cdn.sanity.io/images/zep746qw/production/bd8e11d01451450a4209cbe61285a76d4fa179f2-6400x4400.png?w=828&amp;q=75&amp;fit=max&amp;auto=format 828w, https://cdn.sanity.io/images/zep746qw/production/bd8e11d01451450a4209cbe61285a76d4fa179f2-6400x4400.png?w=1080&amp;q=75&amp;fit=max&amp;auto=format 1080w, https://cdn.sanity.io/images/zep746qw/production/bd8e11d01451450a4209cbe61285a76d4fa179f2-6400x4400.png?w=1200&amp;q=75&amp;fit=max&amp;auto=format 1200w, https://cdn.sanity.io/images/zep746qw/production/bd8e11d01451450a4209cbe61285a76d4fa179f2-6400x4400.png?w=1920&amp;q=75&amp;fit=max&amp;auto=format 1920w, https://cdn.sanity.io/images/zep746qw/production/bd8e11d01451450a4209cbe61285a76d4fa179f2-6400x4400.png?w=2048&amp;q=75&amp;fit=max&amp;auto=format 2048w" 
     src="https://cdn.sanity.io/images/zep746qw/production/bd8e11d01451450a4209cbe61285a76d4fa179f2-6400x4400.png?w=2048&amp;q=75&amp;fit=max&amp;auto=format" 
     >
     <div class="max-lg:order-2 p-5 pt-10 flex flex-col gap-10 justify-between items-start lg:col-span-1 lg:border-l">
        <div class="flex flex-col gap-5">
            <h2 class="title text-4xl max-w-md tracking-tighter">A Strategic Partnership</h2>
            <div class="max-w-md">
                <p class="text-muted-foreground">To execute their ambitious roadmap, Abnormal AI needed to build and launch a high volume of new web pages. We provided a team of developers who partnered with them, working directly within their existing Plasmic workflow. Our team took on the task of building pages from Figma designs, collaborating with their internal experts for guidance on their technical setup and custom components. This approach directly accelerated their ability to ship new pages, while ensuring a high standard of quality in every detail.</p>
            </div>
        </div>
    </div>
</section>
<section class="section">
     <div class="max-lg:order-2 p-5 pt-10 flex flex-col gap-10 justify-between items-start lg:col-span-1 lg:border-l">
        <div class="flex flex-col gap-5">
            <h2 class="title text-4xl max-w-md tracking-tighter">A Strategic Partnership</h2>
            <div class="max-w-md">
                <p class="text-muted-foreground">To execute their ambitious roadmap, Abnormal AI needed to build and launch a high volume of new web pages. We provided a team of developers who partnered with them, working directly within their existing Plasmic workflow. Our team took on the task of building pages from Figma designs, collaborating with their internal experts for guidance on their technical setup and custom components. This approach directly accelerated their ability to ship new pages, while ensuring a high standard of quality in every detail.</p>
            </div>
        </div>
    </div>
    <img alt="Case study" 
    loading="lazy"
     width="6400" 
     height="4400" 
     decoding="async" 
     data-nimg="1" 
     class="max-lg:order-1 h-full w-full object-cover pt-10 col-span-2" 
     sizes="100vw" 
     srcset="https://cdn.sanity.io/images/zep746qw/production/bd8e11d01451450a4209cbe61285a76d4fa179f2-6400x4400.png?w=640&amp;q=75&amp;fit=max&amp;auto=format 640w, https://cdn.sanity.io/images/zep746qw/production/bd8e11d01451450a4209cbe61285a76d4fa179f2-6400x4400.png?w=750&amp;q=75&amp;fit=max&amp;auto=format 750w, https://cdn.sanity.io/images/zep746qw/production/bd8e11d01451450a4209cbe61285a76d4fa179f2-6400x4400.png?w=828&amp;q=75&amp;fit=max&amp;auto=format 828w, https://cdn.sanity.io/images/zep746qw/production/bd8e11d01451450a4209cbe61285a76d4fa179f2-6400x4400.png?w=1080&amp;q=75&amp;fit=max&amp;auto=format 1080w, https://cdn.sanity.io/images/zep746qw/production/bd8e11d01451450a4209cbe61285a76d4fa179f2-6400x4400.png?w=1200&amp;q=75&amp;fit=max&amp;auto=format 1200w, https://cdn.sanity.io/images/zep746qw/production/bd8e11d01451450a4209cbe61285a76d4fa179f2-6400x4400.png?w=1920&amp;q=75&amp;fit=max&amp;auto=format 1920w, https://cdn.sanity.io/images/zep746qw/production/bd8e11d01451450a4209cbe61285a76d4fa179f2-6400x4400.png?w=2048&amp;q=75&amp;fit=max&amp;auto=format 2048w" 
     src="https://cdn.sanity.io/images/zep746qw/production/bd8e11d01451450a4209cbe61285a76d4fa179f2-6400x4400.png?w=2048&amp;q=75&amp;fit=max&amp;auto=format" 
     >
</section>
<!-- section booking -->
<Booking title={m.portfolio_booking_title()} description={m.portfolio_booking_description()} cta={m.portfolio_booking_cta()}  link={m.nav_contact()}/>
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

