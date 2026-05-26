<script lang="ts">
	import { base } from '$app/paths';
	import Booking from '$lib/components/Booking.svelte';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import { BrainCog, ChevronRight } from 'lucide-svelte';
</script>
<div class="grid-global">
    <header data-animate="true" class="hero text-hero relative">
        <h1 class="flex items-end p-5 font-menu text-xs text-muted-foreground uppercase"> {m.ai_title()}</h1>
        <h2	class="title p-5 text-5xl max-w-9/12 tracking-tighter text-wrap lg:col-start-2 lg:border-l lg:pt-55 lg:text-6xl">
            {m.ai_headline()}
        </h2>
        <div class="flex items-end p-5 pt-10">
            <div class="flex w-fit items-end">
                <BrainCog strokeWidth={1.1} size={85} class="icon pointer-events-none text-foreground drop-shadow-[0_0_30px_#2d8bb6]" />
            </div>
        </div>
    </header>
    <aside class="min-w-0 self-start lg:col-start-1 lg:row-start-2 lg:min-h-0 lg:self-stretch" aria-label="Newsletter signup">
        <div class="lg:sticky lg:top-(--blog-newsletter-sticky-top) lg:z-10">
            <div data-animate="true" class="col-span-1 flex flex-col justify-end">
                <h2 class="title _max-w-75 p-5 pt-20 text-4xl tracking-tighter lg:text-5xl">
                    {m.ai_subline()}
                </h2>
                <ul>
                    <li class="title group relative flex items-center justify-between border-t p-5 text-sm">
                        {m.ai_p1_headline()}
                        <a class="absolute inset-0" href="#{m.ai_p1_headline().toLowerCase().replaceAll(" ", "-")}" aria-label="Websites and Apps"></a>
                        <ChevronRight strokeWidth={2} size={16} class="text-muted-foreground transition-colors duration-150 group-hover:text-foreground" />
                    </li>
                    <li class="title group relative flex items-center justify-between border-t p-5 text-sm">
                        {m.ai_p2_headline()}
                        <a class="absolute inset-0" href="#{m.ai_p2_headline().toLowerCase().replaceAll(" ", "-")}" aria-label="Websites and Apps"></a>
                        <ChevronRight strokeWidth={2} size={16} class="text-muted-foreground transition-colors duration-150 group-hover:text-foreground" />
                    </li>
                    <li class="title group relative flex items-center justify-between border-t p-5 text-sm">
                        {m.ai_p3_headline()}
                        <a class="absolute inset-0" href="#{m.ai_p3_headline().toLowerCase().replaceAll(" ", "-")}" aria-label="Websites and Apps"></a>
                        <ChevronRight strokeWidth={2} size={16} class="text-muted-foreground transition-colors duration-150 group-hover:text-foreground" />
                    </li>
                    <li class="title group relative flex items-center justify-between border-t p-5 text-sm">
                        {m.ai_p4_headline()}
                        <a class="absolute inset-0" href="#{m.ai_p4_headline().toLowerCase().replaceAll(" ", "-")}" aria-label="Websites and Apps"></a>
                        <ChevronRight strokeWidth={2} size={16} class="text-muted-foreground transition-colors duration-150 group-hover:text-foreground" />
                    </li>
                    <li class="title group relative flex items-center justify-between border-t p-5 text-sm">
                        {m.ai_p5_headline()}
                        <a class="absolute inset-0" href="#{m.ai_p5_headline().toLowerCase().replaceAll(" ", "-")}" aria-label="Websites and Apps"></a>
                        <ChevronRight strokeWidth={2} size={16} class="text-muted-foreground transition-colors duration-150 group-hover:text-foreground" />
                    </li>
                    <li class="title group relative flex items-center justify-between border-t p-5 text-sm">
                        {m.ai_p6_headline()}
                        <a class="absolute inset-0" href="#{m.ai_p6_headline().toLowerCase().replaceAll(" ", "-")}" aria-label="Websites and Apps"></a>
                        <ChevronRight strokeWidth={2} size={16} class="text-muted-foreground transition-colors duration-150 group-hover:text-foreground" />
                    </li>
                    <li class="title group relative flex items-center justify-between border-t p-5 text-sm">
                        {m.ai_p7_headline()}
                        <a class="absolute inset-0" href="#{m.ai_p7_headline().toLowerCase().replaceAll(" ", "-")}" aria-label="Websites and Apps"></a>
                        <ChevronRight strokeWidth={2} size={16} class="text-muted-foreground transition-colors duration-150 group-hover:text-foreground" />
                    </li>
                </ul>
            </div>
        </div>
    </aside>
    <section data-animate="true" class="relative flex flex-col lg:col-start-2 lg:col-span-2 lg:grid lg:grid-cols-2">
        <div class="_object-cover _object-center h-full w-full border-t select-none lg:col-span-2 lg:border-t-0 lg:border-l">
            <!-- <enhanced:img src="/src/lib/assets/images/ai/ai_pioneering@2x.png?format=avif;webp" alt="design area cover" class="h-full w-full object-cover object-center" sizes="(min-width: 1024px) 66.66667vw, 100vw" /> -->
        </div>
        <article data-animate="true" class="section section-blog-content">
            <div class="rich-text px-5 py-10 _lg:col-start-2 lg:border-l">
                {#if getLocale() == "en"}
                <p id="{m.ai_p1_headline().toLowerCase().replaceAll(" ", "-")}" class="anchor">While most small to medium-sized businesses are still trying to understand traditional search engine optimization (SEO), the online world has evolved dramatically. In over 20% of all Google searches, the AI-generated overview now appears at the top of the results. Semrush has conducted a revealing study, <a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://www.semrush.com/blog/semrush-ai-overviews-study">What 2025 SEO Data Tells Us About Google’s Search Shift</a>, which, based on more than 10 million keywords and their SERP feature overlap, reveals where Google is changing the rules of the game and what website owners should do as a result.</p>
                <p>The following questions were of particular interest:</p>
                <ul>
                    <li><strong>How many</strong> queries trigger AI Overviews overall?</li>
                    <li><strong>What kinds</strong> of queries are triggering AI Overviews?</li>
                    <li><strong>Which industries</strong> have been most impacted by AI Overviews so far?</li>
                </ul>
                <h2 id="{m.ai_p2_headline().toLowerCase().replaceAll(" ", "-")}" class="anchor">Key Takeaways & Stats</h2>
                <ul>
                    <li><strong>Strong Growth:</strong>: AI summaries peaked in mid-summer with a 25 % increase.</li>
                    <li><strong>More Than Just Information Searches:</strong>: In January, 91.3 % of search queries that triggered an AI summary were informational in nature. By October, this figure had dropped to 57.1 %.</li>
                    <li><strong>More Navigational Searches:</strong>: The number of navigational searches that triggered AI summaries has jumped – from 0.74 % in January to 10.33 % in October.</li>
                    <li><strong>Food & Drink Summaries on the Rise:</strong>: Since March, this category has seen the largest increase in AI summaries (+7.25 %).
                    <li><strong>General Principles:</strong>: The more specific the query, the higher the likelihood of an AI summary.</li>
                </ul>
                <h2 id="{m.ai_p3_headline().toLowerCase().replaceAll(" ", "-")}" class="anchor">Why Should You Care about AI Overviews?</h2>
                <p>In short: They are transforming Google into both a search engine and an answer engine that helps customers obtain information on detailed questions without having to click through a website beforehand.
                <p>AI Overviews are built on Google's generative AI models and deliver an instant synthesis of multiple relevant sources pulled from the web. The goal is to be one of these sources.</p>
                <p>So it's no longer just about appearing on the first page of Google search results—most users don't even scroll that far.</p>
                <p>When someone finds you through AI search, they're not just browsing. They're prepared, they understand your offer, and they're much closer to actually buying your product.</p>
                <h2 id="{m.ai_p4_headline().toLowerCase().replaceAll(" ", "-")}" class="anchor">Traditional SEO has changed</h2>
                <p>Traditional search engine optimization (SEO) now plays a different role. This transformation is not limited to new platforms, but fundamentally changes how people search and make decisions.</p>
                <p>While everyone’s focused on what’s changing, it’s easy to miss what’s staying the same. Google still processes billions of searches daily, the number of visitors who click through is higher than ever, and AI assistants are dependent on data that SEO helps create and optimize.</p>
                <h3 id="{m.ai_p5_headline().toLowerCase().replaceAll(" ", "-")}" class="anchor">AI still needs to search the web</h3>
                <p>AI doesn’t create original information; it finds and repackages existing content, much of which comes from Google search results. Virtually all AI assistants use RAG (Retrieval-Augmented Generation) to find information beyond what they already know from the data they were trained on.</p>
                <p>This means that ranking high in Google, Bing, or Brave search directly increases your chances of being featured in AI results.</p>
                <h3 id="{m.ai_p6_headline().toLowerCase().replaceAll(" ", "-")}" class="anchor">Use brand building as your SEO flywheel</h3>
                <p>Your brand is now your most important SEO asset. Being a recognized, trusted, and consistently communicated brand matters more than ever because AI assistants and Google prefer to reference well-known, authoritative sources.</p>
                <p>In 2026, brand building and SEO are inseparable. The companies that are winning are those that build brand authority while optimizing for search, creating a flywheel where each brand mention improves search rankings, and each search ranking builds more brand awareness.</p>
                <h2 id="{m.ai_p7_headline().toLowerCase().replaceAll(" ", "-")}" class="anchor">What remains to be done?</h2>
                <p>Every AI search engine (from ChatGPT to Perplexity to Google AI Mode) is slightly different, but the core processes remain the same. In addition to a clear SEO strategy, a review and, if necessary, adjustment of the technical foundations is also required to ensure AI accessibility. You can find more detailed technical background information in our <a class="accent-link-animation" href="/manifesto">Manifesto</a>.</p>
                {:else}
                <p id="{m.ai_p1_headline().toLowerCase().replaceAll(" ", "-")}" class="anchor">Während die meisten kleinen bis mittleren Unternehmen immer noch versuchen traditionelle Suchmaschinenoptimierung (SEO) zu verstehen, hat sich die Online-Welt extremst weiterentwickelt. In über 20% aller Google-Suchen erscheint heute die KI-Übersicht an oberster Stelle des Ergebnisses. Semrush hat dazu eine aussagekräftige Studie <a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://www.semrush.com/blog/semrush-ai-overviews-study">What 2025 SEO Data Tells Us About Google’s Search Shift</a> erstellt, die auf Basis von mehr als 10 Millionen Keywords sowie deren SERP Overlap (Suchergebnisseiten-Überschneidung) offenbart, wo Google die Spielregeln ändert und was Websitenbetreiber daraufhin unternehmen sollten.</p>
                <p>Von besonderem Interesse waren folgende Fragestellungen:</p>
                <ul>
                    <li><strong>Wie viele</strong> Anfragen lösen insgesamt KI-Übersichten aus?</li>
                    <li><strong>Welche Arten</strong> von Anfragen lösen KI-Übersichten aus?</li>
                    <li><strong>Welche Branchen</strong> wurden bisher am stärksten von KI-Übersichten beeinflusst?</li>
                </ul>
                <h2 id="{m.ai_p2_headline().toLowerCase().replaceAll(" ", "-")}" class="anchor">Wichtigste Erkenntnisse & Statistiken</h2>
                <ul>
                    <li><strong>Starkes Wachstum:</strong> KI-Übersichten erreichten Mitte des Sommers ihren Höhepunkt mit +25%.</li>
                    <li><strong>Mehr als nur Informationssuche:</strong> Im Januar waren 91,3% der Suchanfragen, die eine KI-Übersicht auslösten, informativer Natur. Bis Oktober sank dieser Anteil auf 57,1%.</li>
                    <li><strong>Mehr Navigationsanfragen:</strong> Die Anzahl der Navigationssuchen, die KI-Übersichten auslösen, ist sprunghaft angestiegen – von 0,74% im Januar auf 10,33% im Oktober.</li>
                    <li><strong>Zusammenfassungen zu Essen & Trinken im Aufwind:</strong> Seit März verzeichnete diese Kategorie den größten Anstieg an KI-Übersichten (+7,25 %).</li>
                    <li><strong>Grundsätzliches:</strong> Je ausformulierter die Fragestellung, desto höher die Wahrscheinlichkeit einer KI-Übersicht.</li>
                </ul>
                <h2 id="{m.ai_p3_headline().toLowerCase().replaceAll(" ", "-")}" class="anchor">Warum sollten Sie sich für KI-Übersichten interessieren?</h2>
                <p>Kurz gesagt: Sie verwandeln Google sowohl in eine Suchmaschine als auch in eine Antwortmaschine, die Kunden hilft, Informationen zu detailierten Fragestellungen zu erhalten ohne sich vorher umständlich durch eine Website klicken zu müssen.</p>
                <p>Die KI-Übersichten basieren auf Googles generativen KI-Modellen und liefern eine sofortige Synthese mehrerer relevanter Quellen aus dem Web. Eine dieser Quellen zu sein ist die <strong>Zielsetzung</strong>.</p>
                <p>Es geht also nicht mehr nur darum auf der ersten Seite der Google-Suche zu erscheinen – die meisten Nutzer scrollen gar nicht erst so weit.</p>
                <p>Wenn jemand Sie über die KI-Suche findet, stöbert er nicht einfach nur. Er ist vorbereitet, versteht Ihr Angebot und ist viel näher daran, Ihr Produkt tatsächlich zu kaufen.</p>
                <h2 id="{m.ai_p4_headline().toLowerCase().replaceAll(" ", "-")}" class="anchor">Traditionelles SEO hat sich verändert</h2>
                <p>Die traditionelle Suchmaschinenoptimierung (SEO) spielt also jetzt eine andere Rolle. Der Wandel beschränkt sich nicht nur auf neue Plattformen, sondern verändert grundlegend, wie Menschen suchen und Entscheidungen treffen.</p>
                <p>Während sich alle auf die Veränderungen konzentrieren, gerät leicht in Vergessenheit, was gleich bleibt. Google verarbeitet nach wie vor täglich Milliarden von Suchanfragen, die Zahl der Klicks ist höher denn je, und KI-Assistenten sind auf Daten angewiesen, die durch SEO erstellt und optimiert werden.</p>
                <h3 id="{m.ai_p5_headline().toLowerCase().replaceAll(" ", "-")}" class="anchor">Die KI muss das Web weiterhin durchsuchen</h3>
                <p>KI erzeugt keine eigenen Informationen; sie findet und verarbeitet bereits vorhandene Inhalte, die größtenteils aus Google-Suchergebnissen stammen. Nahezu alle KI-Assistenten nutzen RAG (Retrieval-Augmented Generation), um Informationen zu finden, die über das hinausgehen, was sie bereits aus den Trainingsdaten wissen.</p>
                <p>Das bedeutet, dass eine hohe Platzierung in der Google-, Bing- oder Brave-Suche Ihre Chancen, in den KI-Ergebnissen angezeigt zu werden, direkt erhöht.</p>
                <h3 id="{m.ai_p6_headline().toLowerCase().replaceAll(" ", "-")}" class="anchor">Markenaufbau als SEO-Booster</h3>
                <p>Ihre Marke ist heute Ihr wichtigstes SEO-Asset. Eine anerkannte, vertrauenswürdige und konsistent kommunizierte Marke ist wichtiger denn je, da KI-Assistenten und Google bekannte und maßgebliche Quellen bevorzugen.</p>
                <p>Im Jahr 2026 sind Markenaufbau und Suchmaschinenoptimierung untrennbar miteinander verbunden. Erfolgreich sind diejenigen Unternehmen, die Markenautorität aufbauen und gleichzeitig ihre Website für die Suche optimieren. So entsteht ein positiver Kreislauf: Jede Markenerwähnung verbessert das Suchmaschinenranking, und jedes bessere Ranking steigert die Markenbekanntheit.</p>
                <h2 id="{m.ai_p7_headline().toLowerCase().replaceAll(" ", "-")}" class="anchor">Was bleibt zu tun?</h2>
                <p>Jede KI-Suchmaschine (von ChatGPT über Perplexity bis hin zum Google KI-Modus) ist etwas anders, aber die Herangehensweisen bleiben gleich. Neben einer klaren SEO Strategie ist auch eine Überprüfung und gegebenenfalls Anpassung der technischen Grundlagen erforderlich, um die KI-Zugänglichkeit zu gewährleisten. Genauere technische Hintergründe finden Sie in unserem <a class="accent-link-animation" href="/manifesto">Manifest</a>.</p>
                {/if}
            </div>
        </article>
    </section>
</div>



<!-- section booking -->
<Booking title={m.ai_booking_title()} description={m.ai_booking_description()} cta={m.ai_booking_cta()} link={m.nav_contact()}
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

    /* .code-snippet {
        color: #b57eed;
        font-feature-settings: "liga" 0,"calt" 0;
        white-space: pre-wrap;
        font-size: 14px;
        line-height: 1.6 
    }*/

    /* .inline-code {
        border-radius: .125rem;
        background-color: var(--color-muted);
        padding: 1px .25rem;
        color: var(--color-primary);
        font-size: 14px;
        line-height: 1.6
    } */
</style>