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
				src="/src/lib/assets/images/manifesto/isitagentready.v2.png?format=avif;webp"
				alt="Featured article cover"
				class="absolute -z-10 h-full w-full object-cover"
				style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
				sizes="(min-width: 1024px) 66.66667vw, 100vw"
			/>
		</div>
	</div>
	<div class="flex flex-col gap-5 px-5 py-10 lg:col-span-2 lg:col-start-2 lg:border-l">
		<time datetime="2025-11-11" class="font-menu text-xs text-muted-foreground">Apr 21, 2026</time>
		<h1
			class="title text-4xl tracking-tighter text-wrap whitespace-break-spaces text-foreground lg:pr-24 lg:text-6xl"
		>
			{m.manifest_1_headline()}
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
		<p>
			Cloudflare's <a	class="accent-link-animation" rel="noreferrer noopener"	target="_blank" href="https://isitagentready.com/">isitagentready.com</a>        
            scores your site across five categories: Discoverability, Content Accessibility, Bot Access
            Control, Protocol Discovery, and Commerce. Each one maps to a set of emerging standards that
            define how well AI agents can find, read, and interact with your platform. We covered the
            high-level picture in <a href="/manifesto/how-to-get-your-website-agent-ready">How to get your website agent-ready</a>. This post goes deeper into what
            each standard is, where it comes from, and how mature it is today.<br />
		</p>
		<h2>Discoverability</h2>
		<p>
			Agents need to find your content the same way search engines do, but with stricter
			expectations.
		</p>
		<p>
			<br /><strong>robots.txt</strong> is still the first file any crawler reads. Agents look for
			explicit AI bot rules here — not just legacy Googlebot directives. If your
			<code class="inline-code">robots.txt</code> doesn't mention AI-specific user agents, most bots
			will default to crawling everything — which means you've given up control without realizing it.
		</p>
		<p>
			<br /><strong>Sitemap</strong> — a properly maintained XML sitemap lets agents map your content
			structure in a single request. This is table stakes for SEO and equally important for agents doing
			structured content discovery.
		</p>
		<p>
			<br /><strong>Link headers</strong> — HTTP <code class="inline-code">Link</code> response headers
			expose relationships between resources (alternate formats, canonical URLs, pagination) without
			parsing HTML. Agents use these to navigate between related pages efficiently — particularly useful
			when combined with Markdown content negotiation.
		</p>
		<p>
			<br />None of these are new. But most sites have a <code class="inline-code">robots.txt</code>
			written for 2015, not for agents. Updating these three files is the highest-impact,
			lowest-effort starting point.<br />
		</p>
		<h2>Content Accessibility</h2>
		<p>
			Agents perform better with clean, structured text than with HTML documents full of nav
			bars, cookie banners, and tracking scripts.
		</p>
		<p>
			<br />
            <a class="accent-link-animation" rel="noreferrer noopener" target="_blank"	href="https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/">
                Markdown content negotiation
            </a>
			addresses this directly. When an agent sends a request with
			<code class="inline-code">Accept: text/markdown</code>, your server responds with a Markdown
			variant of the page instead of full HTML. Less noise, fewer tokens, faster processing.
		</p>
		<p>
			<br />The implementation can be as simple as a middleware that intercepts the
			<code class="inline-code">Accept</code>
			header and returns a pre-rendered <code class="inline-code">.md</code> version of the page —
			or as sophisticated as on-the-fly HTML-to-Markdown conversion. 
            <!-- c3labs sites ship with
			Markdown-ready routes by default. You can see it in action by appending
			<code class="inline-code">.md</code>
			to any URL on <a class="accent-link-animation" rel="noreferrer noopener" target="_self" href="https://c3labs.de">c3labs.de</a>. -->
		</p>
		<p>
			<br />Of all the standards on this list, Markdown negotiation has the most immediate practical
			value. Agents that can get clean Markdown from your site use fewer tokens processing your
			content, which makes them more likely to include your information in their responses. Same
			dynamic as fast-loading pages ranking better in search.
		</p>
		<h2>Bot Access Control</h2>
		<p>
			Beyond discoverability, there's the question of control — defining how agents interact with
			your content after they've found it.
		</p>
		<p>
			<br /><strong>AI bot rules</strong> — directives in
			<code class="inline-code">robots.txt</code>
			that go beyond crawl permissions to specify usage intent. You might allow an agent to crawl
			your docs but block it from using that content for training. The
			<code class="inline-code">robots.txt</code> spec doesn't natively support this distinction well,
			which is why the next two standards exist.
		</p>
		<p>
			<br />
            <a class="accent-link-animation"	rel="noreferrer noopener" target="_blank" href="https://contentsignals.org/"><strong>Content Signals</strong></a>
			— a Cloudflare proposal that adds a structured layer on top of
			<code class="inline-code">robots.txt</code>. Instead of binary allow/disallow, you can express
			preferences for how content is used <em>after</em> access: allow search indexing but block AI training,
			permit grounding but not fine-tuning, allow summarization but not verbatim reproduction. It's a
			more nuanced permission model that reflects how content is actually used today.
		</p>
		<p>
			<br />
            <a class="accent-link-animation" rel="noreferrer noopener" target="_blank"	href="https://blog.cloudflare.com/web-bot-auth/"><strong>Web Bot Auth</strong></a>
			— cryptographic identity for bots. Instead of trusting a user-agent string (which anyone can
			spoof), agents prove who they are by signing HTTP requests with Ed25519 keys. The verification
			keys are published at
			<code class="inline-code">/.well-known/http-message-signatures-directory</code>. This lets you
			make access decisions based on verified identity rather than self-reported names.
		</p>
		<p>
			<br />Content Signals and Web Bot Auth are both Cloudflare proposals still gaining traction
			outside their ecosystem. Adoption beyond Cloudflare-powered sites is early. Worth implementing
			if you're on Cloudflare, worth watching if you're not.<br />
		</p>
		<h2>Protocol Discovery</h2>
		<p>
			These standards go further than content access — they let agents discover and use your
			services programmatically.
		</p>
		<p>
			<br />
            <a class="accent-link-animation" rel="noreferrer noopener" target="_blank"	href="https://modelcontextprotocol.io/community/server-card/charter">
                <strong>MCP Server Cards</strong>
            </a>
			— a JSON document hosted at <code class="inline-code">/.well-known/mcp/server-card.json</code>
			that declares your MCP server's capabilities. It tells agents what tools you offer, what resources
			are available, how to authenticate, and which transport protocol to use — all before establishing
			a full session.
		</p>
		<p>
			<br />The spec is being drafted as
			<a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://github.com/modelcontextprotocol/modelcontextprotocol/blob/aa59517442d323a33ed915fc408f1584c4a23dfa/seps/2127-mcp-server-cards.md">SEP-2127</a>
            by Anthropic and GitHub. 
            <!-- A Server Card looks roughly like this: -->
		</p>
		<p></p>
		<!-- <div class="relative mb-4 overflow-hidden rounded-lg bg-[#111]">
			<pre class="scrollbar overflow-scroll py-2 pr-16 pl-3">
                <code class="code-snippet">404 not found</code>
            </pre>
			<button	class="absolute top-2 right-2 z-10 flex h-4 w-10 justify-end rounded px-1.5 py-1 font-mono text-xs text-white backdrop-blur-3xl transition-colors hover:bg-border/10 disabled:pointer-events-none">
                <span class="absolute transition duration-300 ease-in-out">Copy</span>
                <span	class="absolute -translate-y-full skew-y-6 opacity-0 transition duration-300 ease-in-out">Copied</span>
            </button>
		</div> -->
		<p>
			Agents shouldn't need to initialize a full MCP session just to find out if a server has what
			they're looking for. The spec is still in draft and reference SDK implementations are on the
			roadmap, but the pattern is minimal enough that early adoption carries little risk.
		</p>
		<p>
			<br /><a class="accent-link-animation" rel="noreferrer noopener" target="_blank"	href="https://agentskills.io/home"><strong>Agent Skills</strong></a>
			— a file-based standard for packaging domain expertise. Sites expose an index at
			<code class="inline-code">/.well-known/agent-skills/index.json</code> that lists available capabilities,
			each defined as a YAML frontmatter header plus Markdown instructions. Agents can load these on
			demand based on the task they're working on.
		</p>
		<p>
			<br /><a class="accent-link-animation" rel="noreferrer noopener" target="_blank"	href="https://webmachinelearning.github.io/webmcp/"><strong>WebMCP</strong></a>
			— a W3C Community Group draft led by engineers from Microsoft and Google that brings MCP to
			the browser. Instead of requiring a backend server, web pages declare tools directly via
			<code class="inline-code">navigator.modelContext</code> — agents running in the browser can discover
			and invoke JavaScript functions on your page. Currently shipping in Chrome Canary, this bridges
			the gap between server-side MCP and client-side agent interactions.
		</p>
		<p>
			<br /><strong>API Catalog</strong> — standard API documentation (OpenAPI/Swagger) that agents can
			parse to understand your available endpoints. If you already have an OpenAPI spec, you're most
			of the way there.
		</p>
		<p>
			<br /><strong>OAuth discovery</strong> — standard OAuth 2.0 metadata at
			<code class="inline-code">/.well-known/oauth-authorization-server</code> so agents know how to
			authenticate programmatically. This matters more as agents move from reading public content to
			performing authenticated actions on behalf of users.
		</p>
		<p>
			<br />Most of these are in draft or early adoption. That's exactly when it pays to start
			implementing — before the ecosystem matures and the early movers have already captured agent
			traffic.<br />
		</p>
		<h2>E-Commerce</h2>
		<p>
			These protocols enable AI agents to discover products, initiate checkout, and complete
			purchases autonomously.
		</p>
		<p>
			<br /><a class="accent-link-animation" rel="noreferrer noopener" target="_blank"	href="https://agenticcommerce.dev/"><strong>Agentic Commerce Protocol</strong></a>
            (ACP) — developed by Stripe and OpenAI as an open standard under Apache 2.0. It defines how agents
			interact with merchant checkouts: discovering products, adding items to a cart, and completing
			payment — all through structured API calls. ChatGPT is the first agent platform implementing it,
			Stripe the first payment processor. Hard to find stronger backing than that.
		</p>
		<p>
			<br /><a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://www.x402.org/"><strong>x402</strong></a>
			— revives the HTTP <code class="inline-code">402 Payment Required</code> status code for machine-native
			micropayments. An agent hits your endpoint, gets a 402 response with payment instructions, pays
			(currently via stablecoins), and retries — all within a single HTTP request-response cycle. The
			protocol design is clean, but the dependency on crypto payment rails limits near-term adoption.
		</p>
		<p>
			<br /><a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://ucp.dev/"><strong>UCP</strong></a>
             (Universal Commerce Protocol) — co-developed by Google, Shopify, and Etsy, with endorsements
			from Visa, Mastercard, PayPal, and dozens of major retailers. UCP defines building blocks for the
			full commerce lifecycle — discovery, checkout, identity linking, and order management — and is
			designed to work alongside MCP and A2A.
		</p>
		<p>
			<br />Agentic commerce is the furthest out in terms of mainstream readiness, but Stripe and
			OpenAI backing ACP signals where this is headed. For ecommerce clients, we're already
			evaluating ACP integration paths.
		</p>
		<h2>Where This Leaves Us</h2>
		<p>
			Most sites score poorly on the scanner today. The highest-impact changes are also the
			simplest:
		</p>
		<ol>
			<li>Update your <code class="inline-code">robots.txt</code> with explicit AI bot rules</li>
			<li>Serve Markdown variants of your key pages</li>
			<li>
				Make sure your sitemap is current and your <code class="inline-code">Link</code> headers are
				present
			</li>
			<li>Add a Server Card if you expose any API or service</li>
			<li>
				Run the scan at <a class="accent-link-animation tracking-tighter" rel="noreferrer noopener" target="_blank" href="https://isitagentready.com/">isitagentready.com</a>
                and use the generated instructions to close the gaps
			</li>
		</ol>
		<p>
			The scan generates implementation instructions you can paste directly into tools like Cursor
			or Claude Code — turning audit results into code changes in minutes.
		</p>
		<p>
			<br />We'll integrate the production-ready standards into our delivery process
			and we're tracking the rest as they mature.<br />
		</p>
        {:else}
		<p>
			Cloudflare's <a	class="accent-link-animation" rel="noreferrer noopener"	target="_blank" href="https://isitagentready.com/">isitagentready.com</a>        
            bewertet Ihre Website anhand von fünf Kategorien: Auffindbarkeit, Inhaltszugänglichkeit, 
            Bot-Zugriffssteuerung, Protokollerkennung und E-Commerce. Jede dieser Kategorien bezieht 
            sich auf eine Reihe neu entstehender Standards, die definieren, wie gut KI-Agenten Ihre 
            Plattform finden, auslesen und mit ihr interagieren können. Die übergeordnete Perspektive 
            haben wir bereits im Beitrag <a href="/manifesto/how-to-get-your-website-agent-ready">How to get your website agent-ready</a> beleuchtet. 
            Dieser Artikel geht nun detaillierter darauf ein, worin die einzelnen Standards bestehen, 
            woher sie stammen und welchen Reifegrad sie heute erreicht haben.<br />
		</p>
		<h2>Auffindbarkeit</h2>
		<p>
			Agenten müssen Ihre Inhalte auf dieselbe Weise finden wie Suchmaschinen, jedoch mit strengeren Erwartungen.
		</p>
		<p>
			<br /><strong>robots.txt</strong> ist nach wie vor die erste Datei, die jeder Crawler ausliest. 
            Agents suchen hier nach expliziten Regeln für KI-Bots – und nicht bloß nach veralteten Googlebot-Direktiven. 
            Wenn Ihre <code class="inline-code">robots.txt</code> keine KI-spezifischen User-Agents aufführt, 
            werden die meisten Bots standardmäßig einfach alles crawlen – was bedeutet, dass Sie die 
            Kontrolle abgegeben haben, ohne es zu bemerken.
		</p>
		<p>
			<br /><strong>Sitemap</strong> — eine ordnungsgemäß gepflegte XML-Sitemap ermöglicht es Agents, 
            Ihre Inhaltsstruktur mit einer einzigen Anfrage zu erfassen. Dies ist eine unverzichtbare 
            Grundvoraussetzung für SEO und gleichermaßen wichtig für Agents, die strukturierten Content ermitteln.
		</p>
		<p>
			<br /><strong>Link Headers</strong> — HTTP <code class="inline-code">Link response headers</code>
			offenbaren Beziehungen zwischen Ressourcen (alternative Formate, kanonische URLs, Paginierung), 
            ohne dass HTML geparst werden muss. Agents nutzen diese, um effizient zwischen verknüpften 
            Seiten zu navigieren – was insbesondere in Kombination mit Markdown-Content-Negotiation von großem Nutzen ist.
		</p>
		<p>
			<br />Nichts davon ist neu. Doch die meisten Websites verfügen über eine <code class="inline-code">robots.txt</code>
			die für das Jahr 2015 verfasst wurde – und nicht für Agents. Die Aktualisierung dieser drei 
            Dateien stellt den Ausgangspunkt mit der größten Wirkung und dem geringsten Aufwand dar.<br />
		</p>
		<h2>Barrierefreiheit von Inhalten</h2>
		<p>
			Agenten erzielen bessere Ergebnisse mit sauberem, semantisch strukturiertem Text als mit  
            HTML-Dokumenten voller Navigationsleisten, Cookie-Banner und Tracking-Skripten.
		</p>
		<p>
			<br />
            <a class="accent-link-animation" rel="noreferrer noopener" target="_blank"	href="https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/">
                Markdown-Content-Negotiation 
            </a>
			geht dieses Problem direkt an. Wenn ein Agent eine Anfrage mit
			<code class="inline-code">Accept: text/markdown</code> sendet, antwortet der Server mit einer 
            Markdown-Variante der Seite anstelle von vollständigem HTML. Weniger Rauschen, weniger Tokens, 
            schnellere Verarbeitung.
		</p>
		<p>
			<br />Die Implementierung kann einfach eine Middleware sein, die den <code class="inline-code">Accept</code>
			Header abfängt und eine vorgerenderte <code class="inline-code">.md</code>-Version der Seite 
            zurückgibt – oder so komplex wie eine dynamische HTML-zu-Markdown-Konvertierung. 
            <!-- c3labs-Websites werden standardmäßig mit Markdown-fähigen Routen ausgeliefert. Sie können 
            dies in Aktion sehen, indem Sie <code class="inline-code">.md</code> an jede beliebige URL 
            auf <a class="accent-link-animation" rel="noreferrer noopener" target="_self" href="https://c3labs.de">c3labs.de</a> anhängen. -->
		</p>
		<p>
			<br />Von allen Standards auf dieser Liste hat die Markdown-Variante den unmittelbarsten praktischen Nutzen.
            Agenten, die sauberes Markdown von der Website erhalten, benötigen weniger Tokens bei der Verarbeitung Ihrer Inhalte.
            Dadurch ist es wahrscheinlicher, dass sie Ihre Informationen in ihre Antworten aufnehmen.
            Dasselbe gilt für schnell ladende Seiten, die ein besseres Suchmaschinenranking erzielen.
		</p>
		<h2>Bot-Zugriffskontrolle</h2>
		<p>
			Neben der Auffindbarkeit stellt sich die Frage der Kontrolle - wie Agenten mit Inhalten interagieren, 
            nachdem sie diese gefunden haben.
		</p>
		<p>
			<br /><strong>KI-Bot Regeln</strong> — Anweisungen in der <code class="inline-code">robots.txt</code> die 
            über die Crawling-Berechtigungen hinausgehen und die Nutzungsabsicht festlegen. Sie können einem Agenten erlauben,
            Ihre Dokumente zu crawlen, ihm aber gleichzeitig die Verwendung dieser Inhalte für das Training untersagen. Die
			<code class="inline-code">robots.txt</code>Spezifikation unterstützt diese Unterscheidung nicht optimal,
            weshalb die folgenden beiden Standards existieren.
		</p>
		<p>
			<br />
            <a class="accent-link-animation"	rel="noreferrer noopener" target="_blank" href="https://contentsignals.org/"><strong>Content Signals</strong></a>
			— ein Cloudflare-Vorschlag, der eine strukturierte Ebene über die Datei 
			<code class="inline-code">robots.txt</code> legt. Anstatt nur binär zu erlauben/verbieten, können Sie Präferenzen 
            für die Verwendung von Inhalten <em>nach</em> dem Zugriff festlegen: Suchindexierung erlauben, aber KI-Training 
            blockieren; Grounding erlauben, aber kein Feintuning; Zusammenfassung erlauben, aber keine wörtliche Wiedergabe. 
            Es handelt sich um ein differenzierteres Berechtigungsmodell, das die heutige tatsächliche Nutzung von Inhalten widerspiegelt.
		</p>
		<p>
			<br />
            <a class="accent-link-animation" rel="noreferrer noopener" target="_blank"	href="https://blog.cloudflare.com/web-bot-auth/"><strong>Web Bot Auth</strong></a>
			— Kryptografische Identität für Bots. Anstatt einem User-Agent-String zu vertrauen (den jeder fälschen kann), 
            beweisen Agenten ihre Identität, indem sie HTTP-Anfragen mit Ed25519-Schlüsseln signieren. 
            Die Verifizierungsschlüssel werden unter folgendem Link veröffentlicht:
			<code class="inline-code">/.well-known/http-message-signatures-directory</code>. Dadurch können Sie Zugriffsentscheidungen 
            auf Basis der verifizierten Identität und nicht der selbst angegebenen Namen treffen.
		</p>
		<p>
			<br />Content Signals und Web Bot Auth sind beides Cloudflare-Vorschläge, die außerhalb des Cloudflare-Ökosystems
            erst langsam an Bedeutung gewinnen. Die Nutzung über Cloudflare-basierte Websites hinaus steht noch am Anfang. 
            Eine Implementierung lohnt sich, wenn man Cloudflare nutzt. In jedem Fall jedoch lohnt es sich, die Entwicklung zu beobachten.<br />
		</p>
		<h2>Protokoll Erkennung</h2>
		<p>
			Diese Standards gehen über den Zugriff auf Inhalte hinaus – sie ermöglichen es Agenten, Dienste programmatisch zu 
            entdecken und zu nutzen.
		</p>
		<p>
			<br />
            <a class="accent-link-animation" rel="noreferrer noopener" target="_blank"	href="https://modelcontextprotocol.io/community/server-card/charter">
                <strong>MCP Server Cards</strong>
            </a>
			— ein JSON-Dokument unter <code class="inline-code">/.well-known/mcp/server-card.json</code>, das die Funktionen eines MCP-Servers 
            beschreibt. Es informiert Agenten darüber, welche Tools angeboten werden, welche Ressourcen verfügbar sind, wie die Authentifizierung 
            erfolgt und welches Transportprotokoll verwendet werden soll – alles vor dem Aufbau einer vollständigen Sitzung.
		</p>
		<p>
			<br />Die Spezifikation wird derzeit von Anthropic und GitHub als 
			<a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://github.com/modelcontextprotocol/modelcontextprotocol/blob/aa59517442d323a33ed915fc408f1584c4a23dfa/seps/2127-mcp-server-cards.md">SEP-2127</a>
            ausgearbeitet. 
            <!-- Eine Server Card sieht in etwa so aus: -->
		</p>
		<p></p>
		<!-- <div class="relative mb-4 overflow-hidden rounded-lg bg-[#111]">
			<pre class="scrollbar overflow-scroll py-2 pr-16 pl-3">
                <code class="code-snippet">404 not found</code>
            </pre>
			<button	class="absolute top-2 right-2 z-10 flex h-4 w-10 justify-end rounded px-1.5 py-1 font-mono text-xs text-white backdrop-blur-3xl transition-colors hover:bg-border/10 disabled:pointer-events-none">
                <span class="absolute transition duration-300 ease-in-out">Copy</span>
                <span class="absolute -translate-y-full skew-y-6 opacity-0 transition duration-300 ease-in-out">Copied</span>
            </button>
		</div> -->
		<p>
			Agenten sollten keine vollständige MCP-Session initialisieren müssen, nur um herauszufinden, 
            ob ein Server das Gesuchte bereitstellt. Die Spezifikation befindet sich noch im Entwurfsstadium und 
            Referenz-SDK-Implementierungen sind in Planung, aber der Aufwand ist gering, sodass Early Adoption kaum 
            ein Risiko birgt.
		</p>
		<p>
			<br /><a class="accent-link-animation" rel="noreferrer noopener" target="_blank"	href="https://agentskills.io/home"><strong>Agent Skills</strong></a>
			— ein dateibasierter Standard für die Bündelung von Domänenexpertise. Websites stellen einen Index unter
            <code class="inline-code">/.well-known/agent-skills/index.json</code> bereit, der die verfügbaren Fähigkeiten auflistet. 
            Jede Fähigkeit ist als YAML-Frontmatter-Header plus Markdown-Anweisungen definiert. Agenten können diese bei Bedarf 
            je nach Aufgabe laden.
		</p>
		<p>
			<br /><a class="accent-link-animation" rel="noreferrer noopener" target="_blank"	href="https://webmachinelearning.github.io/webmcp/"><strong>WebMCP</strong></a>
			— ein Entwurf der W3C Community Group unter der Leitung von Ingenieuren von Microsoft und Google bringt MCP in den Browser. 
            Anstatt einen Backend-Server zu benötigen, deklarieren Webseiten Tools direkt über 
            <code class="inline-code">navigator.modelContext</code> – im Browser ausgeführte Agents können diese erkennen 
            und JavaScript-Funktionen auf Ihrer Seite aufrufen. Diese Funktion, die aktuell in Chrome Canary verfügbar ist, 
            schließt die Lücke zwischen serverseitigem MCP und clientseitigen Agent-Interaktionen.
		</p>
		<p>
			<br /><strong>API Catalog</strong> — Standardisierte API-Dokumentation (OpenAPI/Swagger), die Agenten 
            analysieren können, um verfügbare Endpunkte zu verstehen. Wer bereits eine OpenAPI-Spezifikation hat, ist schon fast am Ziel.
		</p>
		<p>
			<br /><strong>OAuth discovery</strong> — standardmäßige OAuth 2.0-Metadaten unter
            <code class="inline-code">/.well-known/oauth-authorization-server</code>, damit Agenten wissen, wie sie sich 
            programmatisch authentifizieren können. Dies ist umso wichtiger, je mehr Agenten vom Lesen öffentlicher Inhalte zum 
            Ausführen authentifizierter Aktionen im Namen der Benutzer übergehen.
		</p>
		<p>
			<br />Die meisten dieser Lösungen befinden sich noch im Entwurfsstadium oder in der frühen Einführungsphase. 
            Genau dann lohnt es sich aber mit der Implementierung zu beginnen – bevor das Ökosystem ausgereift ist und die 
            Vorreiter bereits den Agentenverkehr für sich beansprucht haben.<br />
		</p>
		<h2>E-Commerce</h2>
		<p>
			Diese Protokolle ermöglichen es KI-Agenten, Produkte zu entdecken, den Bezahlvorgang einzuleiten und 
            Käufe autonom abzuschließen.
		</p>
		<p>
			<br /><a class="accent-link-animation" rel="noreferrer noopener" target="_blank"	href="https://agenticcommerce.dev/"><strong>Agentic Commerce Protocol</strong></a>
            (ACP) — entwickelt von Stripe und OpenAI als offener Standard unter Apache 2.0. Er definiert, wie Agenten 
            mit Händler-Checkouts interagieren: Produkte entdecken, Artikel in den Warenkorb legen und die Zahlung 
            abschließen – alles über strukturierte API-Aufrufe. ChatGPT ist die erste Agentenplattform, die ihn implementiert,
            Stripe der erste Zahlungsabwickler. Eine stärkere Unterstützung ist kaum vorstellbar.
		</p>
		<p>
			<br /><a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://www.x402.org/"><strong>x402</strong></a>
			— reaktiviert den HTTP-Statuscode <code class="inline-code">402 Payment Required</code> für maschinennahe Micropayments. 
            Ein Agent greift auf Ihren Endpunkt zu, erhält eine 402-Antwort mit Zahlungsanweisungen, zahlt 
            (derzeit über Stablecoins) und versucht es erneut – alles innerhalb eines einzigen HTTP-Anfrage-Antwort-Zyklus. 
            Das Protokolldesign ist übersichtlich, aber die Abhängigkeit von Krypto-Zahlungsinfrastrukturen schränkt die kurzfristige Akzeptanz ein.
		</p>
		<p>
			<br /><a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://ucp.dev/"><strong>UCP</strong></a>
             (Universal Commerce Protocol) — gemeinsam entwickelt von Google, Shopify und Etsy, mit Unterstützung von 
             Visa, Mastercard, PayPal und Dutzenden großer Einzelhändler. UCP definiert Bausteine ​​für den gesamten 
             E-Commerce-Lebenszyklus – von der Produktsuche über den Checkout und die Identitätsverknüpfung bis hin zur 
             Auftragsverwaltung – und ist für die Zusammenarbeit mit MCP und A2A konzipiert.
		</p>
		<p>
			<br />Agentic Commerce ist hinsichtlich der Marktreife noch am weitesten entfernt, aber die Unterstützung 
            von Stripe und OpenAI für ACP deutet darauf hin, wohin die Reise geht.
		</p>
		<h2>Wo wir nun stehen</h2>
		<p>
			Die meisten Websites schneiden heute beim Scan schlecht ab. Die wirkungsvollsten Änderungen sind gleichzeitig 
            die einfachsten:
		</p>
		<ol>
			<li>Aktualisieren von <code class="inline-code">robots.txt</code> mit expliziten KI-Bot-Regeln</li>
			<li>Bereitstellung von Markdown-Versionen der wichtigsten Seiten</li>
			<li>Bereitstellung einer aktuellen Sitemap</li>
            <li>Korrekte Implementierung des <code class="inline-code">Link</code>-Headers.</li>
			<li>Bereitstellung einer Server-Card, wenn eine API oder ein Dienst existiert</li>
			<!-- <li>Der Scan unter <a class="accent-link-animation tracking-tighter" rel="noreferrer noopener" target="_blank" href="https://isitagentready.com/">isitagentready.com</a> generiert zu den Ergebnissen konkrete Anweisungen, um die Lücken zu schließen.
			</li> -->
		</ol>
		<p>
			Der Scan unter <a class="accent-link-animation tracking-tighter" rel="noreferrer noopener" target="_blank" href="https://isitagentready.com/">isitagentready.com</a> generiert Implementierungsanweisungen, die direkt in Tools wie Cursor oder Claude Code eingefügt werden können – so werden Audit-Ergebnisse innerhalb von Minuten in Codeänderungen umgesetzt.
		</p>
		<p>
			<br />Wir werden nun die produktionsreifen Standards in unsere Entwicklung integrieren. Und wir verfolgen die Entwicklung der übrigen Standards, sobald diese ausgereift sind.<br />
		</p>
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
