<script lang="ts">
	import { base } from '$app/paths';
	import Booking from '$lib/components/Booking.svelte';
	import { m } from '$lib/paraglide/messages';
	import { PackageCheck, ChevronRight } from 'lucide-svelte';
	// import { fade } from 'svelte/transition';
</script>

<header data-animate="true" class="hero text-hero relative">
	<h1 class="flex items-end p-5 font-menu text-xs text-muted-foreground uppercase">Service</h1>
	<h2
		class="title p-5 text-5xl tracking-tighter text-wrap lg:col-start-2 lg:border-l lg:pt-55 lg:text-6xl"
	>
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
		<enhanced:img src="/src/lib/assets/images/service/service.jpeg?format=avif;webp" alt="design area cover" class="h-full w-full object-cover object-center" sizes="(min-width: 1024px) 66.66667vw, 100vw" />
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
		<h2 class="text-muted-foreground p-5 font-menu uppercase text-xs lg:sticky lg:top-16">Technologies</h2>
	</div>
	<div class="grid grid-cols-2 md:grid-cols-3 lg:col-span-2 lg:grid-cols-4 text-muted-foreground">
		<a class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/stripe">
            <img
				alt="Stripe"
				loading="lazy"
				width="200"
				height="60"
				decoding="async"
				data-nimg="1"
				class="h-fit w-36 object-contain"
				srcset="https://cdn.sanity.io/images/zep746qw/production/6a4248bea87b5c7b5c25ac958f51948e72df0514-200x60.svg?w=256&amp;q=75&amp;fit=max&amp;auto=format 1x, https://cdn.sanity.io/images/zep746qw/production/6a4248bea87b5c7b5c25ac958f51948e72df0514-200x60.svg?w=640&amp;q=75&amp;fit=max&amp;auto=format 2x"
				src="https://cdn.sanity.io/images/zep746qw/production/6a4248bea87b5c7b5c25ac958f51948e72df0514-200x60.svg?w=640&amp;q=75&amp;fit=max&amp;auto=format"
				style="color: transparent;"
			/>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Payment Solution</span>
        </a>
        <a class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l card-hover relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5" href="/technology/github">
            <img
				alt="GitHub"
				loading="lazy"
				width="190"
				height="54"
				decoding="async"
				data-nimg="1"
				class="h-fit w-36 object-contain"
				srcset="https://cdn.sanity.io/images/zep746qw/production/9eeb0f0328b6cee24ef81d0ace8634593273db86-190x54.svg?w=256&amp;q=75&amp;fit=max&amp;auto=format 1x, https://cdn.sanity.io/images/zep746qw/production/9eeb0f0328b6cee24ef81d0ace8634593273db86-190x54.svg?w=384&amp;q=75&amp;fit=max&amp;auto=format 2x"
				src="https://cdn.sanity.io/images/zep746qw/production/9eeb0f0328b6cee24ef81d0ace8634593273db86-190x54.svg?w=384&amp;q=75&amp;fit=max&amp;auto=format"
				style="color: transparent;"
			/>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Repository Host</span>
        </a>
		<div class="md:[&amp;:nth-child(3n+2)]:border-l md:[&amp;:nth-child(3n+3)]:border-l relative -mb-px flex  h-62.5 flex-col items-center justify-center border-b p-5 max-md:even:border-l lg:border-l 2xl:h-87.5">
			<img
				alt="Builder.io"
				loading="lazy"
				width="312"
				height="67"
				decoding="async"
				data-nimg="1"
				class="h-fit w-36 object-contain"
				srcset="https://cdn.sanity.io/images/zep746qw/production/2401f599e2772475e10c832ce0a88ac95382a364-312x67.svg?w=384&amp;q=75&amp;fit=max&amp;auto=format 1x, https://cdn.sanity.io/images/zep746qw/production/2401f599e2772475e10c832ce0a88ac95382a364-312x67.svg?w=640&amp;q=75&amp;fit=max&amp;auto=format 2x"
				src="https://cdn.sanity.io/images/zep746qw/production/2401f599e2772475e10c832ce0a88ac95382a364-312x67.svg?w=640&amp;q=75&amp;fit=max&amp;auto=format"
				style="color: transparent;"
			/><span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>
		</div>
	</div>
</section>
<!-- end section service partners -->
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
