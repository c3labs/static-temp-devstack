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
	<title>{m.legal_privacy_title()} | c3labs</title>
	<meta name="description" content="{m.legal_privacy_meta_descritption()}">

	<!-- Open Graph for Facebook, LinkedIn, WhatsApp -->
	<meta property="og:title" content="{m.legal_privacy_title()} | c3labs">
	<meta property="og:description" content="{m.legal_privacy_meta_descritption()}">
	<!-- X (Twitter) Cards -->
    <meta name="twitter:title" content="{m.legal_privacy_title()} | c3labs">
	<meta name="twitter:description" content="{m.legal_privacy_meta_descritption()}">
</svelte:head>
<section data-animate="true" class="section">
	<div class="grid pt-25 lg:col-span-2 lg:grid-cols-2 lg:pt-0">
    
		<h1 class="split title p-5 text-wrap lg:col-start-2 lg:-mr-px lg:border-x lg:pt-75 text-5xl tracking-tighter lg:text-6xl">
			{m.legal_privacy_headline()}
		</h1>
	</div>
	<nav class="lg:col-span-2 lg:col-start-2 lg:border-l">
		<ul>
			<li class="group title relative flex items-center justify-between border-t p-5 text-sm">
				{m.legal_link_imprint()}<a class="absolute inset-0" href="/legal/imprint" aria-label="{m.legal_link_imprint()}"></a>
                <ChevronRight strokeWidth={2} size={16} class="text-muted-foreground transition-colors duration-150 group-hover:text-foreground" />
			</li>
			<!-- <li class="group title relative flex items-center justify-between border-t p-5 text-sm">
				{m.legal_link_privacy()}<a class="absolute inset-0" href="/legal/privacy" aria-label="{m.legal_link_privacy()}"></a>
                <ChevronRight strokeWidth={2} size={16} class="text-muted-foreground transition-colors duration-150 group-hover:text-foreground" />
			</li> -->
		</ul>
	</nav>
</section>

<section class="section section-rich-text">
    <div class="rich-text lg:col-start-2 lg:border-l px-5 py-10">

        <h4>1. Verantwortlicher</h4>

        <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>

        <p>Jürgen Graf | c3labs<br>
        Kirchbergstr. 28<br>
        D-86551 Aichach<br>
        Deutschland</p>

        <p>Telefon: +49 8251 52099<br>
        E-Mail: info[at]c3labs.de</p>

        <h4>2. Allgemeine Hinweise zur Datenverarbeitung</h4>

        <p>Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website, zur Kommunikation mit Interessenten und Kunden oder zur Erfüllung gesetzlicher Pflichten erforderlich ist.</p>

        <p>Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen, zum Beispiel Name, E-Mail-Adresse, IP-Adresse oder Kommunikationsdaten.</p>

        <h4>3. Zugriffsdaten und Server-Logfiles</h4>

        <p>Beim Besuch dieser Website werden technisch notwendige Daten verarbeitet, damit die Website ausgeliefert und sicher betrieben werden kann. Dazu können insbesondere gehören:</p>
        <ul>
            <li>aufgerufene Seite</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>IP-Adresse</li>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer-URL</li>
            <li>übertragene Datenmenge</li>
        </ul>
        <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren, stabilen und fehlerfreien Bereitstellung der Website.</p>

        <h4>4. Kontaktaufnahme</h4>

        <p>Wenn Sie uns kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten zur Bearbeitung Ihrer Anfrage. Dazu können insbesondere Name, E-Mail-Adresse, Telefonnummer, Nachricht und weitere freiwillige Angaben gehören.</p>

        <p>Die Verarbeitung erfolgt je nach Art der Anfrage auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern sie mit vorvertraglichen oder vertraglichen Maßnahmen zusammenhängt, oder auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Beantwortung allgemeiner Anfragen.</p>

        <h4>5. Terminbuchung</h4>
            <p>Für die Vereinbarung und Verwaltung von Terminen nutzen wir eine selbst gehostete Instanz von Cal.com. Die Terminbuchungsanwendung wird auf einer von uns kontrollierten Serverinfrastruktur betrieben. Eine Übermittlung der im Rahmen der Terminvereinbarung eingegebenen Daten an den Anbieter Cal.com, Inc. erfolgt dabei nicht.</p>

            <p>Im Rahmen der Terminbuchung können insbesondere Name, E-Mail-Adresse, Terminangaben sowie freiwillig übermittelte Informationen verarbeitet werden. Die Verarbeitung erfolgt zur Durchführung vorvertraglicher Maßnahmen und zur Kommunikation im Zusammenhang mit der Terminvereinbarung auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</p>

            <p>Die Daten werden ausschließlich auf den von uns eingesetzten Servern verarbeitet. Weitere Informationen zu Cal.com finden Sie unter <a href="https://cal.com" target="_blank" rel="noopener noreferrer">https://cal.com</a> sowie in der Datenschutzerklärung des Anbieters unter <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer">https://cal.com/privacy</a>.</p>
        <h4>6. Cookies und vergleichbare Technologien</h4>

        <p>Diese Website verwendet derzeit nur technisch notwendige Cookies, sofern keine weiteren Dienste eingebunden sind.</p>

        <p>Wir verwenden Ahrefs Web Analytics zur statistischen Auswertung der Nutzung unserer Website. Ahrefs Web Analytics arbeitet ohne den Einsatz von Cookies und verarbeitet die Daten ausschließlich in pseudonymisierter Form. Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO an der Analyse und Optimierung unseres Onlineangebots.</p>

        <p>Weitere Informationen zur Datenverarbeitung durch Ahrefs finden Sie in der Datenschutzerklärung des Anbieters unter:<br>
        <a href="https://ahrefs.com/privacy-policy" target="_blank" rel="noopener noreferrer">https://ahrefs.com/privacy-policy</a></p>

        <h4>7. Externe Links und Profile</h4>

        <p>Diese Website kann Links zu externen Profilen und Plattformen enthalten, zum Beispiel LinkedIn, Bluesky oder Pinterest. Beim Aufruf dieser externen Seiten gelten die Datenschutzbestimmungen der jeweiligen Anbieter.</p>

        <h4>8. Speicherdauer</h4>

        <p>Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.</p>

        <h4>9. Betroffenenrechte</h4>

        <p>Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen bestimmte Verarbeitungen.</p>

        <p>Sofern eine Verarbeitung auf Einwilligung beruht, können Sie diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.</p>

        <p>Außerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.</p>

        <h4>10. Änderung dieser Datenschutzerklärung</h4>

        <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich technische, rechtliche oder organisatorische Änderungen ergeben.</p>

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
