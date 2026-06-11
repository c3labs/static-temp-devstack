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
	<title>{m.legal_imprint_title()} | c3labs</title>
	<meta name="description" content="{m.legal_imprint_meta_descritption()}">

	<!-- Open Graph for Facebook, LinkedIn, WhatsApp -->
	<meta property="og:title" content="{m.legal_imprint_title()} | c3labs">
	<meta property="og:description" content="{m.legal_imprint_meta_descritption()}">
	<!-- X (Twitter) Cards -->
    <meta name="twitter:title" content="{m.legal_imprint_title()} | c3labs">
	<meta name="twitter:description" content="{m.legal_imprint_meta_descritption()}">
</svelte:head>
<section data-animate="true" class="section">
	<div class="grid pt-25 lg:col-span-2 lg:grid-cols-2 lg:pt-0">
    
		<h1 class="split title p-5 text-wrap lg:col-start-2 lg:-mr-px lg:border-x lg:pt-75 text-5xl tracking-tighter lg:text-6xl">
			{m.legal_imprint_headline()}
		</h1>
	</div>
	<nav class="lg:col-span-2 lg:col-start-2 lg:border-l">
		<ul>
			<!-- <li class="group title relative flex items-center justify-between border-t p-5 text-sm">
				{m.legal_link_imprint()}<a class="absolute inset-0" href="/legal/imprint" aria-label="{m.legal_link_imprint()}"></a>
                <ChevronRight strokeWidth={2} size={16} class="text-muted-foreground transition-colors duration-150 group-hover:text-foreground" />
			</li> -->
			<li class="group title relative flex items-center justify-between border-t p-5 text-sm">
				{m.legal_link_privacy()}<a class="absolute inset-0" href="/legal/privacy" aria-label="{m.legal_link_privacy()}"></a>
                <ChevronRight strokeWidth={2} size={16} class="text-muted-foreground transition-colors duration-150 group-hover:text-foreground" />
			</li>
		</ul>
	</nav>
</section>


<section class="section section-rich-text">
    <div class="rich-text lg:col-start-2 lg:border-l px-5 py-10">

        <p>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</p>

        <h4>Anbieter</h4>

        <p>Jürgen Graf | Dipl. Designer (FH) Multimedia<br>
        Kirchbergstr. 28<br>
        D-86551 Aichach<br>
        Deutschland</p>

        <h4>Kontakt</h4>

        <p>Telefon: +49 8251 52099<br>
        E-Mail: info[at]c3labs.de</p>

        <h4>Umsatzsteuer-ID</h4>

        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br>
        USt-IdNr.: DE266686445</p>

        <h4>Verantwortlich für den Inhalt</h4>

        <p>Verantwortlich für den Inhalt nach § 18 Abs. 2 Medienstaatsvertrag:</p>

        <p>Jürgen Graf | c3labs<br>
        Kirchbergstr. 28<br>
        D-86551 Aichach</p>

        <h4>Verbraucherstreitbeilegung</h4>

        <p>Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

        <h4>Haftung für Inhalte</h4>

        <p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr.</p>

        <p>Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p>

        <h4>Haftung für Links</h4>

        <p>Diese Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.</p>

        <h4>Urheberrecht</h4>

        <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung oder Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Rechteinhabers.</p>

    </div>
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
