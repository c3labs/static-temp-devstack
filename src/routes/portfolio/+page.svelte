<script lang="ts">
	import Booking from "$lib/components/Booking.svelte";
	import { m } from "$lib/paraglide/messages";

</script>
<header data-animate="true" class="hero text-hero relative">
    <h1 class="flex items-end p-5 font-menu text-xs text-muted-foreground uppercase">{m.portfolio_title()}</h1>
    <h2 class="title p-5 text-5xl lg:col-start-2 lg:pt-55 lg:text-6xl lg:border-l text-wrap tracking-tighter">{m.portfolio_headline()}</h2>
    <div class="flex items-end pt-10 p-5">
        <div class="flex flex-col gap-5"></div>
    </div>
</header>
<!-- section portfolio -->
<section data-animate="true" class="_section-portfolio-cards">
	<div class="grid-global portfolio-grid">
		<a class="card-hover flex flex-col group" target="" rel="" href="/portfolio/subway">
			<div class="relative min-h-75 grow">
				<enhanced:img src="/src/lib/assets/images/portfolio/subway_hero@2x.png?format=avif" alt="Subway Website in Forest" class="object-cover object-center" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="(min-width: 1024px) 66.66667vw, 100vw" />
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
				<enhanced:img src="/src/lib/assets/images/portfolio/werk_d@2x.png?format=avif" alt="werk d Website Preview" class="object-cover object-center" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="(min-width: 1024px) 66.66667vw, 100vw" />
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
<!-- section booking -->
<Booking title={m.portfolio_booking_title()} description={m.portfolio_booking_description()} cta={m.portfolio_booking_cta()}  link={m.nav_contact()}/>
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