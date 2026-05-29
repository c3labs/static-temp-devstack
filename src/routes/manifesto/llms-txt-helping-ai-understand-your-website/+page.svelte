<script lang="ts">
	import { base } from '$app/paths';
	import Booking from '$lib/components/Booking.svelte';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import { ChevronLeft, ExternalLink } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

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
						duration: 0.5,
						autoAlpha: 0, 
						stagger: {
							amount: 1,
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

<button
	in:fade
	onclick={() => {
		history.back();
	}}
	title="Back to previous page"
	aria-label="Back to previous page"
	class="border_ fixed top-[--nav-height] left-5 z-40 mt-5 flex h-12 w-12 cursor-pointer items-center justify-center bg-accent text-background transition-colors hover:bg-accent-hover"
>
	<ChevronLeft strokeWidth={2} size={16} />
</button>
<header class="article-hero hero">
	<div class="relative lg:col-span-3">
		<div class="grid-global relative h-75 lg:h-150">
			<div class="relative z-10 border-[#888]/20 lg:col-start-2 lg:border-l"></div>
			<enhanced:img
				src="/src/lib/assets/images/manifesto/temporal_3.png?format=avif"
				alt="Featured article cover"
				class="absolute -z-10 h-full w-full object-cover"
				style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
				sizes="(min-width: 1024px) 66.66667vw, 100vw"
			/>
		</div>
	</div>
	<div class="flex flex-col gap-5 px-5 py-10 lg:col-span-2 lg:col-start-2 lg:border-l">
		<time datetime="2025-11-11" class="font-menu text-xs text-muted-foreground">Dec 12, 2025</time>
		<h1 class="split title text-4xl tracking-tighter text-wrap whitespace-break-spaces text-foreground lg:pr-24 lg:text-6xl">
			{m.manifest_4_headline()}
		</h1>
		<ul class="mt-6 flex flex-wrap gap-6">
			<li class="flex items-center gap-4">
				<enhanced:img src="/src/lib/assets/images/manifesto/me_c3labs.png?w=400" alt="Avatar: Jürgen Graf" class="rounded-sm w-7 h-8 object-cover" />
				<address class="not-italic">	
					<div>Jürgen Graf</div>
					<div class="font-menu text-xs text-muted-foreground">Design Engineer</div>
				</address>
			</li>
		</ul>
	</div>
</header>
<article data-animate="true" class="section section-blog-content">
	<div class="rich-text px-5 py-10 _col-span-1 lg:col-start-2 lg:border-l">
        {#if getLocale() == "en"}
		<p>AI-powered systems like ChatGPT, Google Gemini, Claude, and Perplexity are changing how we get information online. They aim to process complex web content to provide faster and more accurate answers. However, these models often struggle. They aren’t human; they process the underlying code of a website, and the complex HTML structures, navigation menus, and scripts can obscure the core information. To address this challenge, a new web standard has been proposed:&nbsp;<a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://llmstxt.org/">llms.txt</a>.</p>
		<p>It's a simple text file placed in a site's root directory to act as a direct guide for AI. Instead of forcing a model to parse a visually complex webpage, it provides a concise summary and direct links to clean, markdown <code class="inline-code">.md</code> versions of the site’s most important content. It creates a clear, predictable pathway to the data that matters, in a format built for AI.</p>
        <h2>The Thinking Behind the llms.txt Proposal</h2>
        <p>The <code class="inline-code">llms.txt</code> proposal is based on a simple, practical idea: AI models process information more accurately when it's provided in a clear, structured format. This is why the standard uses&nbsp;markdown—it's a clean, text-based language that LLMs can easily understand, free from the clutter of code.</p>
        <p>The thinking behind the standard suggests a few potential benefits for the web:</p>
        <ul>
            <li><strong>For Marketers:</strong> It offers a way to directly signal which content is most important, potentially leading to more accurate representation of your brand or information in AI-generated answers.</li>
            <li><strong>For AI Systems:</strong> It provides a clear, efficient path to high-quality information. Instead of trying to parse a standard webpage—with its complex HTML, CSS, and JavaScript—the model gets a direct feed of the core content, removing guesswork and potential for error.</li>
        </ul>
        <p>Essentially, it aims to create a more direct line of communication between a website's core content and the models that consume it.</p>
        <h2>Why we added a llms.txt to our site</h2>
        <p>As AI systems become a primary source of information for users, we want to ensure that the answers they generate about c3labs — our mission, our services, and our work—are accurate, current, and sourced directly from us. By providing a clean, machine-readable guide to our content, we take control of our narrative and reduce the risk of AI models misinterpreting complex layouts or outdated information.</p>
        <h3>Our Approach: A Look at our live llms.txt</h3>
        <p>While <a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://llmstxt.org/#proposal">the full proposal</a> emphasizes linking to clean&nbsp;.md&nbsp;versions of pages, we've taken a strategic first step. Our initial implementation focuses on providing a high-level, curated guide for AI. Instead of pointing to&nbsp;.md&nbsp;files, we provide direct links to our key pages, each accompanied by a concise, human-written description.</p>
        <p>This approach provides immediate value by acting as an expert-curated sitemap. It tells an AI, "Don't just crawl randomly; start with these important pages, and here is exactly what you will find on each one." Here is the content of our live&nbsp;<a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://c3labs.de/llms.txt">llms.txt file</a>.</p>
        <h2>The Growing Case for llms.txt</h2>
        <p>Our reason for implementing <code class="inline-code">llms.txt</code> is straightforward: we want to make it easier for AI systems to find and accurately understand our most important information. While the standard is still a proposal, it’s one that’s quickly gaining traction. We’re not alone in seeing its potential. A growing number of major players in AI and web infrastructure have also implemented <code class="inline-code">llms.txt</code> files, primarily for their documentation sites:</p>
        <ul><li><a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://ai.google.dev/gemini-api/docs/llms.txt">Gemini</a></li><li><a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://vercel.com/docs/llms.txt">Vercel</a></li><li><a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://docs.anthropic.com/llms.txt">Anthropic</a></li><li><a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://developers.hubspot.com/docs/llms.txt">HubSpot</a></li><li><a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://docs.perplexity.ai/llms-full.txt">Perplexity</a></li><li><a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://docs.stripe.com/llms.txt">Stripe</a></li></ul>
        <p>This growing adoption demonstrates its value. By offering a direct path to key content, the file provides a clear signal of intent to any system designed to look for it. For c3labs, and for these other early adopters, it’s about taking a simple, proactive step to provide clarity to AI.</p>
        {:else}
		<p>KI-gestützte Systeme wie ChatGPT, Google Gemini, Claude und Perplexity verändern die Art und Weise, wie wir online Informationen abrufen. Sie sollen komplexe Webinhalte verarbeiten, um schnellere und präzisere Antworten zu liefern. Allerdings stoßen diese Modelle oft an ihre Grenzen. Sie sind nicht menschlich; sie verarbeiten den zugrundeliegenden Code einer Website, und die komplexen HTML-Strukturen, Navigationsmenüs und Skripte können die Kerninformationen verschleiern. Um dieser Herausforderung zu begegnen, wurde ein neuer Webstandard vorgeschlagen.:&nbsp;<a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://llmstxt.org/">llms.txt</a>.</p>
		<p>Es handelt sich um eine einfache Textdatei im Stammverzeichnis einer Website, die als direkter Leitfaden für KI dient. Anstatt ein Modell mit der Analyse einer visuell komplexen Webseite zu überfordern, bietet sie eine prägnante Zusammenfassung und direkte Links zu übersichtlichen Markdown-Versionen <code class="inline-code">.md</code> der wichtigsten Inhalte der Website. So entsteht ein klarer, nachvollziehbarer Weg zu den relevanten Daten in einem für KI optimierten Format.</p>
        <h2>Die Überlegungen hinter dem llms.txt-Vorschlag</h2>
        <p>Der Vorschlag für <code class="inline-code">llms.txt</code> basiert auf einer einfachen, praktischen Idee: KI-Modelle verarbeiten Informationen genauer, wenn diese in einem klaren, strukturierten Format vorliegen. Deshalb verwendet der Standard Markdown – eine übersichtliche, textbasierte Sprache, die LLMs leicht verstehen können und die frei von unübersichtlichem Code ist.</p>
        <p>Die dem Standard zugrunde liegenden Überlegungen deuten auf einige potenzielle Vorteile für das Web hin:</p>
        <ul>
            <li><strong>Für Marketingfachleute:</strong> Es bietet eine Möglichkeit, direkt zu signalisieren, welche Inhalte am wichtigsten sind, was potenziell zu einer genaueren Darstellung Ihrer Marke oder Informationen in KI-generierten Antworten führt.</li>
            <li><strong>Für AI Systeme:</strong> Es bietet einen klaren und effizienten Weg zu hochwertigen Informationen. Anstatt eine herkömmliche Webseite mit ihrem komplexen HTML-, CSS- und JavaScript-Code zu analysieren, erhält das Modell den Kerninhalt direkt, wodurch Spekulationen und Fehlerquellen vermieden werden.</li>
        </ul>
        <p>Im Wesentlichen zielt es darauf ab, eine direktere Kommunikationslinie zwischen den Kerninhalten einer Website und den Models, die diese konsumieren, herzustellen.</p>
        <h2>Warum wir eine llms.txt-Datei zu unserer Website hinzugefügt haben</h2>
        <p>Da KI-Systeme für Nutzer immer mehr zur Hauptinformationsquelle werden, möchten wir sicherstellen, dass die von ihnen generierten Antworten zu c3labs – unserer Mission, unseren Dienstleistungen und unserer Arbeit – korrekt, aktuell und direkt von uns stammen. Indem wir einen übersichtlichen, maschinenlesbaren Leitfaden zu unseren Inhalten bereitstellen, behalten wir die Kontrolle über unsere Darstellung und minimieren das Risiko, dass KI-Modelle komplexe Strukturen oder veraltete Informationen falsch interpretieren.</p>
        <h3>Unser Ansatz: Ein Blick auf unsere llms.txt</h3>
        <p>Während <a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://llmstxt.org/#proposal">der vollständige Vorschlag</a> die Verlinkung auf saubere <code class="inline-code">.md</code>-Versionen von Seiten betont, haben wir einen strategischen ersten Schritt unternommen. Unsere erste Implementierung konzentriert sich darauf, KI einen übersichtlichen, kuratierten Leitfaden bereitzustellen. Anstatt auf <code class="inline-code"> .md-Dateien </code> zu verweisen, bieten wir direkte Links zu unseren wichtigsten Seiten an, jeweils mit einer prägnanten, von einem Menschen verfassten Beschreibung.</p>
        <p>Dieser Ansatz bietet sofortigen Mehrwert, indem er als von Experten erstellte Sitemap fungiert. Er weist die KI an: „Crawle nicht einfach wahllos; beginne mit diesen wichtigen Seiten, und hier ist genau, was du auf jeder einzelnen findest.“ Hier ist der Inhalt unserer Live-Website. <a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://c3labs.de/llms.txt">llms.txt file</a>.</p>
        <h2>Wachsende Argumentation für llms.txt</h2>
        <p>Unser Grund für die Implementierung von <code class="inline-code"> llms.txt </code> ist einfach: Wir möchten es KI-Systemen erleichtern, unsere wichtigsten Informationen zu finden und korrekt zu verstehen. Obwohl der Standard noch ein Vorschlag ist, gewinnt er schnell an Bedeutung. Wir sind nicht die Einzigen, die sein Potenzial erkennen. Immer mehr große Unternehmen im Bereich KI und Webinfrastruktur haben ebenfalls <code class="inline-code">llms.txt</code>-Dateien implementiert, vorwiegend für ihre Dokumentation:</p>
        <ul><li><a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://ai.google.dev/gemini-api/docs/llms.txt">Gemini</a></li><li><a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://vercel.com/docs/llms.txt">Vercel</a></li><li><a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://docs.anthropic.com/llms.txt">Anthropic</a></li><li><a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://developers.hubspot.com/docs/llms.txt">HubSpot</a></li><li><a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://docs.perplexity.ai/llms-full.txt">Perplexity</a></li><li><a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://docs.stripe.com/llms.txt">Stripe</a></li></ul>
        <p>Wachsende Akzeptanz beweist ihren Wert. Indem die Datei einen direkten Zugriff auf wichtige Inhalte ermöglicht, sendet sie ein klares Signal an KI-Systeme die danach suchen sollen. Für uns und andere Early Adopters geht es darum, einen einfachen, proaktiven Schritt zu unternehmen, um KI mehr Klarheit zu verschaffen.</p>
        {/if}
	</div>
</article>
<!-- section booking -->
<Booking title={m.manifest_booking_title()} description={m.manifest_booking_description()} cta={m.manifest_booking_cta()}  link={m.nav_contact()}/>
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

    /* .code-snippet {
        color: #b57eed;
        font-feature-settings: "liga" 0,"calt" 0;
        white-space: pre-wrap;
        font-size: 14px;
        line-height: 1.6 
    }*/

    .inline-code {
        border-radius: .125rem;
        background-color: var(--color-muted);
        padding: 1px .25rem;
        color: var(--color-primary);
        font-size: 14px;
        line-height: 1.6
    }
</style>
