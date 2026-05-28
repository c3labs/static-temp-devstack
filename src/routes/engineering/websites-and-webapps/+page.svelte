<script lang="ts">
	import { base } from '$app/paths';
	import Booking from '$lib/components/Booking.svelte';
	import { m } from '$lib/paraglide/messages';
	import { Blocks, ChevronRight } from 'lucide-svelte';
	import Sanity from '$lib/assets/images/logo/partner/Sanity.svelte';
	import Strapi from '$lib/assets/images/logo/partner/Strapi.svelte';
	import Svelte from '$lib/assets/images/logo/partner/Svelte.svelte';
	import Astro from '$lib/assets/images/logo/partner/Astro.svelte';
	import Tailwindcss from '$lib/assets/images/logo/partner/Tailwindcss.svelte';
	import Coolify from '$lib/assets/images/logo/partner/Coolify.svelte';
</script>

<header data-animate="true" class="hero text-hero relative">
	<h1 class="flex items-end p-5 font-menu text-xs text-muted-foreground uppercase">
		{m.engineering_services_websites_h1()}
	</h1>
	<h2
		class="title p-5 text-5xl tracking-tighter text-wrap lg:col-start-2 lg:border-l lg:pt-55 lg:text-6xl"
	>
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
			<span class="text-neutral ordered-list-count font-menu text-xs text-muted-foreground uppercase" role="presentation"></span>
			<div class="flex-start flex w-full flex-col gap-4">
				<span class="title max-w-sm text-3xl tracking-tighter">INNOVATIVE LEADERS IN FRONTEND DEVELOPMENT SERVICES</span>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="text-sm text-muted-foreground">
						c3labs provides innovative frontend development services, focusing on building visually
						appealing, fast, and scalable digital platforms. We specialize in Server-Side Rendering
						(SSR), Static Site Generation (SSG), mobile app frontends, and legacy frontend
						modernization. Our solutions help your website or app stand out while delivering top
						performance across devices and browsers.
					</p>
				</div>
			</div>
		</li>
		<li class="relative -mb-px flex min-h-75 flex-col items-start justify-between gap-6 _border-b lg:border-b-0 p-5 lg:min-h-79.5 lg:border-l lg:last:border-r-0">
			<span class="text-neutral ordered-list-count font-menu text-xs text-muted-foreground uppercase" role="presentation"></span>
			<div class="flex-start flex w-full flex-col gap-4">
				<span class="title max-w-sm text-3xl tracking-tighter">CUSTOM FRONTEND WEB DEVELOPMENT SERVICES</span>
				<div class="flex flex-col gap-6 lg:max-w-md">
					<p class="text-sm text-muted-foreground">
						From conceptualization to design to UI development and cross-browser testing, we push
						the boundaries of what's possible in frontend development. Our team integrates design
						thinking methodologies—including discovery, empathizing, research, ideation,
						prototyping, and testing—to elevate your customer experiences through tailored
						state-of-the-art frontend technologies.
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
            <a aria-label="Prismic Headless CMS Solution" class="card-hover absolute inset-0 z-10" href="/technology/coolify">
                <div class="flex h-full w-full items-center justify-center">
                    <Coolify class="h-fit w-36 text-foreground" />
                </div>
            </a>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Hosting Partner</span>
		</div>
		<div class="relative flex h-55 w-full flex-col items-center justify-center overflow-hidden border-l irst:border-l-0 border-b xl:border-b-0 lg:h-60">
            <a aria-label="Prismic Headless CMS Solution" class="card-hover absolute inset-0 z-10" href="/technology/sanity">
                <div class="flex h-full w-full items-center justify-center">
                    <Sanity class="h-fit w-36 text-foreground" />
                </div>
            </a>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>
        </div>
		<div class="relative flex h-55 w-full flex-col items-center justify-center overflow-hidden border-l first:border-l-0 border-b xl:border-b-0 lg:h-60">
            <a aria-label="Prismic Headless CMS Solution" class="card-hover absolute inset-0 z-10" href="/technology/strapi">
                <div class="flex h-full w-full items-center justify-center">
                    <Strapi class="h-fit w-36 text-foreground" />
                </div>
            </a>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>			
		</div>
		<div class="relative flex h-55 w-full flex-col items-center justify-center overflow-hidden border-l first:border-l-0 border-b md:border-b-0 lg:h-60">
            <a aria-label="Prismic Headless CMS Solution" class="card-hover absolute inset-0 z-10" href="/technology/svelte">
                <div class="flex h-full w-full items-center justify-center">
                    <Svelte class="h-fit w-36 text-foreground" />
                </div>
            </a>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>			
		</div>
		<div class="relative flex h-55 w-full flex-col items-center justify-center overflow-hidden border-l before:left-0 after:right-0 after:rotate-180 first:border-l-0 lg:h-60">
            <a aria-label="Prismic Headless CMS Solution" class="card-hover absolute inset-0 z-10" href="/technology/astro">
                <div class="flex h-full w-full items-center justify-center">
                    <Astro class="h-fit w-36 text-foreground" />
                </div>
            </a>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>			
		</div>
		<div class="relative flex h-55 w-full flex-col items-center justify-center overflow-hidden border-l before:left-0 after:right-0 after:rotate-180 first:border-l-0 lg:h-60">
            <a aria-label="Prismic Headless CMS Solution" class="card-hover absolute inset-0 z-10" href="/technology/tailwindcss">
                <div class="flex h-full w-full items-center justify-center">
                    <Tailwindcss class="h-fit w-36 text-foreground" />
                </div>
            </a>
            <span class="text-muted-foreground pointer-events-none absolute bottom-5 left-5 text-sm">Technology Partner</span>			
		</div>
	</div>
</section>
<!-- end section partners -->
<!-- section archtecture -->
<section class="section section-rich-text">
	<div class="rich-text px-5 py-10 lg:col-start-2 lg:border-l">
		<h2>COMPOSABLE AND HEADLESS ARCHITECTURE</h2>
		<p>
			Using composable and headless architectures empowers your business to build flexible and
			scalable digital platforms. By decoupling frontend and backend systems, you get unparalleled
			customization, rapid development cycles, and an outstanding user experience, all while
			maintaining backend stability.
		</p>
	</div>
</section>
<!-- end section architekture -->
<!-- section types -->
<section data-animate="true" class="section">
    <ol class="grid-global ordered-list">
        <li class="relative flex min-h-75 flex-col items-start justify-between gap-6 border-b -mb-px p-5 lg:min-h-79.5 lg:last:border-r-0">
            <span class="text-neutral ordered-list-count font-menu text-xs text-muted-foreground uppercase" role="presentation"></span>
            <div class="flex-start flex w-full flex-col gap-4">
                <span class="title max-w-md text-3xl tracking-tighter">FLEXIBLE AND SCALABLE ARCHITECTURE</span>
                <div class="flex flex-col gap-6 lg:max-w-md">
                    <p class="text-sm text-muted-foreground">With an API-first approach, our composable architecture gives you control over your website and app’s structure, allowing for easy adaptability. This flexibility means you can quickly respond to market changes or add new features without rebuilding your entire platform.</p>
                </div>
            </div>
        </li>
        <li class="relative flex min-h-75 flex-col items-start justify-between gap-6 border-b -mb-px p-5 lg:min-h-79.5 lg:last:border-r-0 lg:border-l">
            <span class="text-neutral ordered-list-count font-menu text-xs text-muted-foreground uppercase" role="presentation"></span>
            <div class="flex-start flex w-full flex-col gap-4">
                <span class="title max-w-md text-3xl tracking-tighter">Fast and Optimized Websites</span>
                <div class="flex flex-col gap-6 lg:max-w-md">
                    <p class="text-sm text-muted-foreground">By adopting advanced frameworks like Next.js and Svelte, we create fast-loading websites that enhance user experience and improve SEO. Our use of techniques like pre-rendering and server-side rendering means your site loads quickly and performs optimally, keeping visitors engaged and boosting conversion rates.</p>
                </div>
            </div>
        </li>
        <li class="relative flex min-h-75 flex-col items-start justify-between gap-6 border-b -mb-px p-5 lg:min-h-79.5 lg:last:border-r-0 lg:border-l">
            <span class="text-neutral ordered-list-count font-menu text-xs text-muted-foreground uppercase" role="presentation"></span>
            <div class="flex-start flex w-full flex-col gap-4">
                <span class="title max-w-md text-3xl tracking-tighter">Improved User Experience</span>
                <div class="flex flex-col gap-6 lg:max-w-md">
                    <p class="text-sm text-muted-foreground">We prioritize creating intuitive and responsive interfaces that provide a remarkable user experience across all devices. Using tools like Figma, Tailwind CSS, and React, your site’s design is visually appealing and highly functional, boosting user satisfaction and engagement.</p>
                </div>
            </div>
        </li>
        <li class="relative flex min-h-75 flex-col items-start justify-between gap-6 border-b -mb-px p-5 lg:min-h-79.5 lg:last:border-r-0">
            <span class="text-neutral ordered-list-count font-menu text-xs text-muted-foreground uppercase" role="presentation"></span>
            <div class="flex-start flex w-full flex-col gap-4">
                <span class="title max-w-md text-3xl tracking-tighter">Optimized Content Management</span>
                <div class="flex flex-col gap-6 lg:max-w-md">
                    <p class="text-sm text-muted-foreground">As a trusted Prismic/Contentful partner, we rely on these headless CMS solutions to separate your content management from the frontend development. This decoupled approach allows for faster content updates, empowers marketing teams, and offers greater flexibility, so your site always provides fresh, relevant information.</p>
                </div>
            </div>
        </li>
        <li class="relative flex min-h-75 flex-col items-start justify-between gap-6 border-b -mb-px p-5 lg:min-h-79.5 lg:last:border-r-0 lg:border-l">
            <span class="text-neutral ordered-list-count font-menu text-xs text-muted-foreground uppercase" role="presentation"></span>
            <div class="flex-start flex w-full flex-col gap-4">
                <span class="title max-w-md text-3xl tracking-tighter">Embedded SEO Optimization</span>
                <div class="flex flex-col gap-6 lg:max-w-md">
                    <p class="text-sm text-muted-foreground">Our frontend development services focus on SEO best practices, from optimizing site structure to fast load times. A well-optimized website ranks higher on search engines and attracts more organic traffic, driving growth and increasing your online visibility.</p>
                </div>
            </div>
        </li>
        <li class="relative flex min-h-75 flex-col items-start justify-between gap-6 border-b -mb-px p-5 lg:min-h-79.5 lg:last:border-r-0 lg:border-l">
            <span class="text-neutral ordered-list-count font-menu text-xs text-muted-foreground uppercase" role="presentation"></span>
            <div class="flex-start flex w-full flex-col gap-4">
                <span class="title max-w-md text-3xl tracking-tighter">SUPERIOR DEVELOPMENT AND DEPLOYMENT</span>
                <div class="flex flex-col gap-6 lg:max-w-md">
                    <p class="text-sm text-muted-foreground">We set up robust CI/CD pipelines, and with Vercel as our preferred platform for deployment, your website is hosted on reliable, high-performance infrastructure. Performance optimization, cross-browser and cross-device testing, and continuous monitoring and maintenance keep your site running flawlessly from launch to long-term operation.</p>
                </div>
            </div>
        </li>
    </ol>
</section>
<!-- end section types -->
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
				<span style="position: relative; display: inline;">{m.portfolio_headline()}</span>
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
	title={m.engineering_booking_title()}
	description={m.engineering_booking_description()}
	cta={m.engineering_booking_cta()}
	link={m.nav_contact()}
/>
<!-- end section booking -->
