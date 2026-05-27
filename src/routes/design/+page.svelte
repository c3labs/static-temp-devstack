<script lang="ts">
	import { base } from '$app/paths';
	import Booking from '$lib/components/Booking.svelte';
	import { m } from '$lib/paraglide/messages';
	import { Command } from 'lucide-svelte';
</script>

<header data-animate="true" class="hero text-hero relative">
	<h1 class="flex items-end p-5 font-menu text-xs text-muted-foreground uppercase">Design</h1>
	<h2
		class="title p-5 text-5xl tracking-tighter text-wrap lg:col-start-2 lg:border-l lg:pt-55 lg:text-6xl"
	>
		{m.design_headline()}
	</h2>
	<div class="flex items-end p-5 pt-10">
		<div class="flex w-fit items-end">
			<Command
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
			{m.design_services()}
		</h2>
		<ul>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				Creative Direction
			</li>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				UI Design
			</li>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				UX Design
			</li>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				Brand Identity
			</li>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				Brand Strategy
			</li>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				Brand Guidelines
			</li>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				App Design
			</li>
			<li class="title group relative flex items-center justify-between border-t p-5 text-sm">
				Motion Design
			</li>
		</ul>
	</div>
    <div class="h-full w-full border-t _object-cover _object-center select-none lg:col-span-2 lg:border-t-0 lg:border-l">
        <enhanced:img src="/src/lib/assets/images/design/design_empire.jpeg?format=avif;webp" alt="design area cover" class="h-full w-full object-cover object-center" sizes="(min-width: 1024px) 66.66667vw, 100vw" />
    </div>
</section>
<!-- section blockqoute -->
<section class="section section-quote">
	<div class="flex items-center justify-center p-5 max-lg:py-10"></div>
	<blockquote
		class="p-5 text-justify font-headline text-3xl font-normal tracking-tighter uppercase [text-align-last:justify] max-lg:py-10 lg:col-span-2 lg:col-start-2 lg:border-l lg:pt-62.5 lg:text-4xl"
	>
		{m.design_services_blockquote()}<br />&nbsp;
	</blockquote>
</section>
<!-- end section blockqoute -->
<!-- section portfolio -->
<section data-animate="true" class="_section-portfolio-cards">
	<header class="grid-global has-[+_*]:border-b">
		<h2 class="flex items-end p-5 pt-10 font-menu text-xs text-muted-foreground uppercase">
			{m.design_portfolio_title()}
		</h2>
		<h3
			class="title font-foreground col-span-1 p-5 text-5xl tracking-tighter text-wrap lg:col-start-2 lg:border-l lg:pt-50 lg:text-6xl"
		>
			<span style="position:relative;display:inline-block;">
				<span style="position: relative; display: inline;">{m.design_portfolio_headline()}</span>
			</span>
		</h3>
		<a
			href={base + '/portfolio'}
			class="card-hover flex items-end p-5 pt-10 font-menu text-xs text-foreground uppercase"
			>{m.design_portfolio_viewall()}</a
		>
	</header>
	<div class="grid-global portfolio-grid">
		<a class="card-hover group flex flex-col" target="" rel="" href="/portfolio/subway">
			<div class="relative min-h-75 grow">
				<enhanced:img
					src="/src/lib/assets/images/portfolio/subway_hero@2x.png?format=avif;webp"
					alt="Subway Website in Forest" 
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
			Process
		</h2>
		<h3
			class="title col-span-1 p-5 text-5xl tracking-tighter text-wrap text-foreground lg:col-start-2 lg:border-l lg:pt-50 lg:text-6xl"
		>{m.design_process_headline()}</h3>
	</header>
	<ul class="col-span-3">
		<li class="col-span-3 grid grid-cols-1 border-t first:border-t-0 lg:grid-cols-3">
			<span class="col-span-1 p-5 font-menu text-xs text-muted-foreground">01</span>
			<div class="flex flex-col gap-5 p-5 lg:border-l lg:pb-20">
				<span class="text-justify font-headline text-3xl tracking-tighter uppercase">{m.design_process_p1_headline()}</span>
				<p class="text-sm text-muted-foreground">
					{m.design_process_p1_copy()}
				</p>
			</div>
		</li>
		<li class="col-span-3 grid grid-cols-1 border-t first:border-t-0 lg:grid-cols-3">
			<span class="col-span-1 p-5 font-menu text-xs text-muted-foreground">02</span>
			<div class="flex flex-col gap-5 p-5 lg:border-l lg:pb-20">
				<span class="text-justify font-headline text-3xl tracking-tighter uppercase">{m.design_process_p2_headline()}</span>
				<p class="text-sm text-muted-foreground">
					{m.design_process_p2_copy()}
				</p>
			</div>
		</li>
		<li class="col-span-3 grid grid-cols-1 border-t first:border-t-0 lg:grid-cols-3">
			<span class="col-span-1 p-5 font-menu text-xs text-muted-foreground">03</span>
			<div class="flex flex-col gap-5 p-5 lg:border-l lg:pb-20">
				<span class="text-justify font-headline text-3xl tracking-tighter uppercase">{m.design_process_p3_headline()}</span>
				<p class="text-sm text-muted-foreground">
					{m.design_process_p3_copy()}
				</p>
			</div>
		</li>
		<li class="col-span-3 grid grid-cols-1 border-t first:border-t-0 lg:grid-cols-3">
			<span class="col-span-1 p-5 font-menu text-xs text-muted-foreground">04</span>
			<div class="flex flex-col gap-5 p-5 lg:border-l lg:pb-20">
				<span class="text-justify font-headline text-3xl tracking-tighter uppercase">{m.design_process_p4_headline()}</span>
				<p class="text-sm text-muted-foreground">
					{m.design_process_p4_copy()}
				</p>
			</div>
		</li>
		<li class="col-span-3 grid grid-cols-1 border-t first:border-t-0 lg:grid-cols-3">
			<span class="col-span-1 p-5 font-menu text-xs text-muted-foreground">05</span>
			<div class="flex flex-col gap-5 p-5 lg:border-l lg:pb-20">
				<span class="text-justify font-headline text-3xl tracking-tighter uppercase">{m.design_process_p5_headline()}</span>
				<p class="text-sm text-muted-foreground">
					{m.design_process_p5_copy()}
				</p>
			</div>
		</li>
		<li class="col-span-3 grid grid-cols-1 border-t first:border-t-0 lg:grid-cols-3">
			<span class="col-span-1 p-5 font-menu text-xs text-muted-foreground">06</span>
			<div class="flex flex-col gap-5 p-5 lg:border-l lg:pb-20">
				<span class="text-justify font-headline text-3xl tracking-tighter uppercase">{m.design_process_p6_headline()}</span>
				<p class="text-sm text-muted-foreground">
					{m.design_process_p6_copy()}
				</p>
			</div>
		</li>
	</ul>
</section>
<!-- end section process -->
<!-- section mediums -->
<section data-animate="true" class="section">
	<header class="grid-global has-[+_*]:border-b">
		<div class="max-lg:hidden"></div>
		<h3	class="title col-span-1 p-5 text-5xl tracking-tighter text-wrap lg:col-start-2 lg:border-l lg:pt-50 lg:text-6xl">
			{m.design_mediums_headline()}
		</h3>
	</header>
	<ol class="grid-global ordered-list">
		<li class="relative -mb-px flex min-h-75 flex-col items-start justify-between gap-6 border-b p-5 first:border-l-0 lg:min-h-104.5 lg:border-l lg:last:border-r-0">
			<span class="text-muted-foreground ordered-list-count font-menu text-xs" role="presentation"></span>
			<div class="flex-start flex w-full flex-col gap-6">
				<span class="title max-w-sm text-justify text-3xl tracking-tighter">{m.design_mediums_p4_headline()}</span>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="text-sm text-muted-foreground">
						{m.design_mediums_p4_copy()}
					</p>
				</div>
			</div>
		</li>
		<li class="relative -mb-px flex min-h-75 flex-col items-start justify-between gap-6 border-b p-5 first:border-l-0 lg:min-h-104.5 lg:border-l lg:last:border-r-0">
			<span class="text-muted-foreground ordered-list-count font-menu text-xs" role="presentation"></span>
			<div class="flex-start flex w-full flex-col gap-6">
				<span class="title max-w-sm text-justify text-3xl tracking-tighter">{m.design_mediums_p2_headline()}</span>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="text-sm text-muted-foreground">
						{m.design_mediums_p2_copy()}
					</p>
				</div>
			</div>
		</li>
		<li class="relative -mb-px flex min-h-75 flex-col items-start justify-between gap-6 border-b p-5 first:border-l-0 lg:min-h-104.5 lg:border-l lg:last:border-r-0">
			<span class="text-muted-foreground ordered-list-count font-menu text-xs" role="presentation"></span>
			<div class="flex-start flex w-full flex-col gap-6">
				<span class="title max-w-sm text-justify text-3xl tracking-tighter">{m.design_mediums_p3_headline()}</span>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="text-sm text-muted-foreground">
						{m.design_mediums_p3_copy()}
					</p>
				</div>
			</div>
		</li>
		<li class="relative -mb-px flex min-h-75 flex-col items-start justify-between gap-6 _border-b p-5 first:border-l-0 lg:min-h-104.5 lg:last:border-r-0">
			<span class="text-muted-foreground ordered-list-count font-menu text-xs" role="presentation"></span>
			<div class="flex-start flex w-full flex-col gap-6">
				<span class="title max-w-sm text-justify text-3xl tracking-tighter">{m.design_mediums_p1_headline()}</span>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="text-sm text-muted-foreground">
                        {m.design_mediums_p1_copy()}
					</p>
				</div>
			</div>
		</li>
	</ol>
</section>
<!-- end section mediums -->
<!-- section booking -->
<Booking title={m.design_booking_title()} description={m.design_booking_description()} cta={m.design_booking_cta()}  link={m.nav_contact()}/>
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
