<script lang="ts">
	import { base } from '$app/paths';
	import Booking from '$lib/components/Booking.svelte';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import { ChevronLeft, ExternalLink } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
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
				src="/src/lib/assets/images/manifesto/temporal_2.png?format=avif"
				alt="Featured article cover"
				class="absolute -z-10 h-full w-full object-cover"
				style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
				sizes="(min-width: 1024px) 66.66667vw, 100vw"
			/>
		</div>
	</div>
	<div class="flex flex-col gap-5 px-5 py-10 lg:col-span-2 lg:col-start-2 lg:border-l">
		<time datetime="2025-11-11" class="font-menu text-xs text-muted-foreground">Apr 20, 2026</time>
		<h1
			class="title text-4xl tracking-tighter text-wrap whitespace-break-spaces text-foreground lg:pr-24 lg:text-6xl"
		>
			{m.manifest_2_headline()}
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
	<div class="rich-text px-5 py-10 lg:col-start-2 lg:border-l">
        {#if getLocale() == "en"}
		<p>True growth happens when a brand’s platform scales as fast as its ideas. Today, that means optimizing for AI. Cloudflare’s new <a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://isitagentready.com">Agent Readiness</a> score is the new benchmark for the "machine-read web," and at c3labs, making our clients agent-ready is a <strong>top priority</strong>.</p>
	    <h2>The Importance of Discoverability</h2>
        <p>High agent readiness ensures discoverability through emerging standards like <a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/">Markdown content negotiation</a> and <a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://github.com/modelcontextprotocol/modelcontextprotocol/blob/aa59517442d323a33ed915fc408f1584c4a23dfa/seps/2127-mcp-server-cards.md">MCP Server Cards</a> to help agents find and interact with your most relevant content, token efficiency by serving clean, structured responses, and even prepares commerce infrastructure for autonomous transactions through protocols like Stripe and OpenAI's <a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://agenticcommerce.dev/">Agentic Commerce Protocol</a>.</p>
        <h2>What Agents Actually Check</h2>
        <p>Cloudflare's Agent Readiness scanner evaluates sites across five categories — and the bar is higher than most teams expect. At c3labs, we are already working on integrating these standards into our deployment process:</p>
        <ul>
            <li>Discoverability — A valid <code class="inline-code">robots.txt</code> with AI bot rules, an accessible sitemap, and proper <code class="inline-code">Link</code> response headers so agents can navigate your site programmatically.</li>
            <li>Content Accessibility — Markdown content negotiation, serving clean <code class="inline-code">.md</code> variants of your pages so agents don't have to parse heavy HTML.</li>
            <li>Bot Access Control — Content Signals and Web Bot Auth let you define how AI bots interact with your content on your terms.</li>
            <li>Protocol Discovery — MCP Server Cards, Agent Skills, and WebMCP expose structured capabilities so agents know what your site can do, not just what it says.</li>
            <li>Commerce — Protocols like the Agentic Commerce Protocol enable AI agents to initiate checkout and complete purchases on behalf of users.</li>
        </ul>
        <p>Most sites today score poorly. We make sure ours don't.</p>
        <h2>Where to Start</h2>
        <p>If you're not working with us yet, here's where to begin on your own:</p>
        <ol>
            <li>Add AI bot rules to your <code class="inline-code">robots.txt</code> — Define which agents can access what, instead of leaving it ambiguous.</li>
            <li>Serve Markdown variants of key pages — If an agent requests your content with the right Accept header, give it clean Markdown instead of a full HTML payload.</li>
            <li>Expose a sitemap and Link headers — Let agents discover your content structure without guessing.</li>
        </ol>
        <p>The scan even generates implementation instructions you can paste directly into tools like Cursor or Claude Code — turning audit results into code changes in minutes. Of course, if you'd rather have a team that's already done this at scale, that's what we're here for.</p>
        <h2>We Lead the Shift</h2>
        <p>c3labs always tries to understand the latest developments in the field of agent readiness. We have the technical expertise to implement these emerging standards, ensuring your platform isn't left behind as the web evolves. We're here to do more than build for today, we're here to lead the agents of tomorrow.</p>
        {:else}
        <p>Echtes Wachstum entsteht, wenn die Plattform einer Marke genauso schnell skaliert wie ihre Ideen. Heute bedeutet das die Optimierung für KI. Cloudflares neuer <a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://isitagentready.com">Agent Readiness Score</a> ist der neue Maßstab für das maschinenlesbare Web, und bei c3labs hat die Agent Readiness unserer Kunden <strong>höchste Priorität</strong>.</p>
        <h2>Die Bedeutung der Auffindbarkeit</h2>
        <p>Eine hohe Agent Readiness gewährleistet die Auffindbarkeit durch neue Standards wie <a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/">Markdown Content Negotiation</a> und <a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://github.com/modelcontextprotocol/modelcontextprotocol/blob/aa59517442d323a33ed915fc408f1584c4a23dfa/seps/2127-mcp-server-cards.md">MCP Server Cards</a>. So können Agenten Ihre relevantesten Inhalte leichter finden und mit ihnen interagieren. Zudem wird die Token-Effizienz durch die Bereitstellung sauberer, strukturierter Antworten gesteigert und die Handelsinfrastruktur für autonome Transaktionen durch Protokolle wie Stripe und das <a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://agenticcommerce.dev/">Agentic Commerce Protocol</a> von OpenAI vorbereitet.</p>
        <h2>Was Agenten tatsächlich überprüfen</h2>
        <p>Der Agent Readiness Scanner von Cloudflare bewertet Websites anhand von fünf Kategorien – und die Anforderungen sind höher als von den meisten Teams erwartet. Bei c3labs arbeiten wir bereits daran diese Standards in unseren Bereitstellungsprozess zu integrieren:</p>
        <ul>
            <li>Auffindbarkeit – Eine gültige <code class="inline-code">robots.txt</code>-Datei mit KI-Bot-Regeln, einer zugänglichen Sitemap und korrekten <code class="inline-code">Link</code>-Antwortheadern, damit Agenten Ihre Website programmatisch navigieren können.</li>
            <li>Barrierefreiheit für Inhalte – Markdown-Inhaltsverhandlung: Bereitstellung von übersichtlichen <code class="inline-code">.md</code>-Varianten Ihrer Seiten, sodass Suchmaschinen-Agenten kein umfangreiches HTML parsen müssen.</li>
            <li>Bot-Zugriffskontrolle – Mit Content Signals und Web Bot Auth können Sie festlegen, wie KI-Bots mit Ihren Inhalten interagieren – und zwar nach Ihren Vorgaben.</li>
            <li>Protokollerkennung – MCP-Serverkarten, Agentenfähigkeiten und WebMCP stellen strukturierte Funktionen bereit, damit Agenten wissen, was Ihre Website kann, und nicht nur, was sie anzeigt.</li>
            <li>Commerce – Protokolle wie das Agentic Commerce Protocol ermöglichen es KI-Agenten, im Namen von Benutzern den Bezahlvorgang einzuleiten und Käufe abzuschließen.</li>
        </ul>
        <p>Die meisten Websites schneiden heutzutage schlecht ab. Wir sorgen dafür, dass unsere das nicht tun.</p>
        <h2>Where to Start</h2>
        <p>Falls Sie noch nicht mit uns zusammenarbeiten, finden Sie hier Anregungen für Ihren Einstieg:</p>
        <ol>
            <li>Fügen Sie Ihrer <code class="inline-code">robots.txt</code> Regeln für KI-Bots hinzu – definieren Sie, welche Agenten worauf zugreifen dürfen, anstatt es unklar zu lassen.</li>
            <li>Stellen Sie Markdown-Varianten wichtiger Seiten bereit – wenn ein Agent Ihre Inhalte mit dem richtigen Accept-Header anfordert, liefern Sie ihm sauberes Markdown anstelle eines vollständigen HTML-Payloads.</li>
            <li>Stellen Sie eine Sitemap und Link-Header bereit – so können Agenten Ihre Inhaltsstruktur ohne Rätselraten entdecken.</li>
        </ol>
        <p>Der Scan generiert sogar Implementierungsanweisungen, die Sie direkt in Tools wie Cursor oder Claude Code einfügen können – so werden Audit-Ergebnisse innerhalb von Minuten in Codeänderungen umgesetzt. Falls Sie lieber ein Team bevorzugen, das dies bereits in großem Umfang umgesetzt hat, sind wir selbstverständlich auch dafür da.</p>
        <h2>Wir führen den Wandel an</h2>
        <p>c3labs ist stets bestrebt, die neuesten Entwicklungen auf dem Gebiet der KI-Agent Readiness zu verstehen. Wir verfügen über das technische Know-how, um diese neuen Standards zu implementieren und sicherzustellen, dass Ihre Plattform mit der Weiterentwicklung des Webs Schritt hält. Wir wollen nicht nur Lösungen für heute entwickeln, sondern die Agenten von morgen prägen.</p>	
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
