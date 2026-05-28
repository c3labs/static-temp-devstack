<script lang="ts">
	import { base } from '$app/paths';
	import Booking from '$lib/components/Booking.svelte';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import { ChevronLeft, ExternalLink } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	import me_c3labs from '$lib/assets/images/manifesto/me_c3labs.png';
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
				src="/src/lib/assets/images/manifesto/temporal_1.png?format=avif"
				alt="Featured article cover"
				class="absolute -z-10 h-full w-full object-cover"
				style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
				sizes="(min-width: 1024px) 66.66667vw, 100vw"
			/>
		</div>
	</div>
	<div class="flex flex-col gap-5 px-5 py-10 lg:col-span-2 lg:col-start-2 lg:border-l">
		<time datetime="2025-11-11" class="font-menu text-xs text-muted-foreground">Apr 05, 2026</time>
		<h1
			class="title text-4xl tracking-tighter text-wrap whitespace-break-spaces text-foreground lg:pr-24 lg:text-6xl"
		>
			{m.manifest_3_headline()}
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
		<h2>To be absolutely clear: WordPress is a mess!</h2>
		<p>
			In 2026, we find ourselves at a turning point: <br />
			Profound technological change and increasing pressure to implement new security measures, 
			in order to comply with EU regulations such as the <a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Cyber_Resilience_Act/cyber_resilience_act_node.html">Cyber Resilience Act</a> 
			will shape the future.
		</p>
		<p>
			Even if your new WordPress website appears to be working perfectly, it is already exposed to countless automated threats. According to a recent whitepaper by <a	class="accent-link-animation" rel="noreferrer noopener"	target="_blank" href="https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/">patchstack</a>, 
			published on February 25, 2026, the average WordPress installation is subjected to over 2,000 automated attack attempts within the first 24 
			hours of going live. It is scanned and analyzed hundreds of times per minute – searching for ways to infiltrate and cause massive damage. 
			These figures can no longer be ignored or dismissed and point to a worrying trend – <strong>WordPress is transforming from a solution to a problem!</strong>
		</p>
		<h2>Four Numbers to show you why</h2>
		<ul>
			<li>4.7 million WordPress sites hacked anually - that's roughly 13,000 every single day, approximately one every six seconds</li>
			<li>11,334 New vulnerabilities in 2025 - 42% increase year-on-year</li>
			<li>5 hrs time frame to patch your site before mass exploitation</li>
			<li>87.8% WordPress-specific exploits bypass standard hosting firewalls</li>
		</ul>
		<p>
			Patchstack confirmed a record year. Not close to a record. Definitively the worst year on record. This represents a nearly 
			exponential increase — thus, truly shocking!
		</p>
		<p>
			If you only remember four numbers from this manifest, those are the ones. To be blunt - the only thing a WordPress site 
			owner can still rely on is: It won't get any better! But, these numbers can safe you a lot of money if you take the 
			figures seriously and understand the economics.
		</p>
		<h3>The Severity Jump</h3>
		<p>
			Highly exploitable vulnerabilities, the ones attackers weaponize at scale, increased by 113% year-on-year in 2025 
			(The Repository / Patchstack, Mar 2026). More high-severity CVEs were found in 2025 than in the previous two years combined.
		</p>
		<h2>Plugins are the problem</h2>
		<p>
			WordPress markets itself as a “complete” website solution, but the base installation is surprisingly bare. To achieve basic 
			business website functionality, you need to write your own custom code. But many WordPress providers can’t actually write code, 
			so they rely on pre-written plugins to provide the functionality they need.
		</p>
		<p>Every plugin you install is a potential entry point. The average WordPress installation runs 20 to 30 plugins. The math is not complicated.</p>
		<p>You might need plugins for:</p>
		<ul>
			<li>Contact forms</li>
			<li>SEO optimisation</li>
			<li>Security features</li>
			<li>Backup systems - ironically to backup your site in case it is hacked</li>
			<li>Cache management</li>
			<li>Image optimisation</li>
			<li>Social media integration</li>
			<li>Analytics</li>
			<li>Spam protection</li>
			<li>Performance optimisation - of course</li>
		</ul>
		<h3>AI-Generated Plugins Are Making It Worse</h3>
		<p>
			Patchstack's 2026 report specifically calls out "vibe coding," where developers use LLMs to generate plugin code and ship it 
			without being able to audit what the model wrote. When the person shipping the code can't review it for security problems, 
			vulnerabilities go live silently. This trend is accelerating, not stabilizing.
		</p>
		<h2>The 5-Hour Problem</h2>
		<p>Here is the number from Patchstack's 2026 report that fundamentally changes how you should think about WordPress security:</p>
		<blockquote class="p-4 my-4 border-s-4 border-accent bg-muted">
			<div class="text-xl text-foreground italic font-medium leading-relaxed text-heading">"The weighted median time to first mass exploitation was five hours."</div>
		</blockquote>
		<p>
			Five hours from public disclosure to active mass exploitation. The traditional advice, "keep your plugins updated," assumes you have time to react. 
			For heavily targeted vulnerabilities, you often don't.
		</p>
		<h3>And what makes the 5-hour window even more dangerous</h3>
		<p>46% of vulnerabilities had no patch available at the time of public disclosure (WP Edition / Patchstack, Feb 2026). There is no update to apply. The vulnerability is public, documented, actively scanned for, and the plugin is still broken.</p>
		<p>Why? Because 52% of plugin developers do not patch before disclosure (Patchstack via Xictron, 2026). The researcher found the bug, reported it responsibly, waited the standard disclosure window, published, and the developer still hadn't shipped a fix.</p>
		<p>Patchstack says it plainly:</p>
		<blockquote class="p-4 mb-16 my-4 border-s-4 border-accent bg-muted">
			<div class="text-xl text-foreground italic font-medium leading-relaxed text-heading">"Regular plugin updates are the second line of defence, but as attackers weaponize new vulnerabilities within mere hours, this is not a viable defence."</div>
		</blockquote>
		<h2>What Does a WordPress Hack Actually Cost</h2>
		<p>Emergency developer time, downtime, lost revenue, and the months of SEO work required to undo injected spam links and Google manual penalties.</p>
		<p><strong>The headline figure: Too much!</strong> - I don't get into the details here - please read the <a class="accent-link-animation" rel="noreferrer noopener"	target="_blank" href="https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/">patchstack whitepaper</a>. Mind the economics.</p>
		<h2>What to do if you have a WordPress website</h2>
		<p>Best thing to do is to retire it ASAP! Of course we would say that but the fact is in most cases its usually good advice.<br />In the meantime you can:</p>
		<ul>
			<li>Audit your current WordPress security and security costs, you’re probably paying a monthly fee for security | updates - does this mean you are secure?</li>
			<li>Evaluate your website’s actual functionality needs - are these being met? Or are you making do with what plugins can provide?</li>
			<li>Explore modern alternatives to WordPress - there are modern Open-Source Headless-CMS platforms out there.  Ask us for help.</li>
			<li>Request a security assessment of your current WordPress installation. Ask us for help.</li>
			<li>Calculate the potential ROI of switching to a static solution - clue: it’s a no brainer!</li>
			<li>Get in touch with c3labs for a custom website design and build!</li>
		</ul>
        {:else}
		<h2>Klar und eindeutig: WordPress is a mess!</h2>
		<p>
			Im Jahr 2026 befinden wir uns an einem Wendepunkt: <br />
			Ein tiefgreifender technologischer Wandel und zunehmender Druck, neue Sicherheitsmaßnahmen zu ergreifen, 
			um EU-Vorschriften wie den <a class="accent-link-animation" rel="noreferrer noopener"	target="_blank" href="https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Cyber_Resilience_Act/cyber_resilience_act_node.html">Cyber Resilience Act</a> 
			zu erfüllen, werden die Zukunft prägen.
		</p>
		<p>
			Auch wenn Ihre neue WordPress-Website scheinbar einwandfrei funktioniert, ist sie längst unzähligen 
			automatisierten Bedrohungen ausgesetzt. Laut einem aktuellen Whitepaper von <a class="accent-link-animation" rel="noreferrer noopener"	target="_blank" href="https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/">patchstack</a> 
			veröffentlich am 25. Feb 2026 wird eine durchschnittliche WordPress-Installation innerhalb der ersten 24 Stunden nach dem Livegang über 2.000 
			automatisierten Angriffsversuchen ausgesetzt. Sie wird hunderte Male pro Minute gescannt und analysiert – auf der Suche nach Wegen, 
			einzudringen und massiven Schaden anzurichten. Diese Zahlen sind nicht mehr zu ignorieren oder wegzudiskutieren und weisen auf einen 
			besorgniserregenden Trend hin - <strong>WordPress transformiert sich von der Lösung zum Problem!</strong>
		</p>
		<h2>Vier Werte die Ihnen zeigen warum</h2>
		<ul>
			<li>Jährlich werden 4,7 Millionen WordPress-Websites gehackt – das sind rund 13.000 pro Tag, also etwa eine alle sechs Sekunden.</li>
			<li>11.334 neue Sicherheitslücken im Jahr 2025 – ein Anstieg von 42 % im Vergleich zum Vorjahr.</li>
			<li>5 Stunden Zeitfenster, um Ihre Website vor einem Massenangriff zu patchen.</li>
			<li>87,8 % der WordPress-spezifischen Sicherheitslücken umgehen Standard-Hosting-Firewalls.</li>
		</ul>
		<p>
			Patchstack bestätigte ein Rekordjahr. Nicht nur <strong>ein Rekord</strong>. Definitiv das schlechteste Jahr aller Zeiten. 
			Dies entspricht einem nahezu exponentiellen Anstieg – und ist daher wirklich schockierend!
		</p>
		<p>
			Wenn Sie sich nur vier Zahlen aus dieser Liste merken, dann sind es genau diese. Um es klar zu sagen: Das Einzige, worauf 
			sich ein WordPress-Website-Betreiber noch verlassen kann, ist: <br />Es wird nicht besser werden! Aber diese Zahlen können 
			Ihnen viel Geld sparen, wenn Sie sie ernst nehmen und die wirtschaftlichen Zusammenhänge verstehen.
		</p>
		<h3>Ein ernsthafter Anstieg</h3>
		<p>
			Hochgradig ausnutzbare Sicherheitslücken, die Angreifer massiv attackieren, nahmen 2025 im Vergleich zum Vorjahr um 113 % zu. 
			(The Repository / Patchstack, März 2026). Im Jahr 2025 wurden mehr kritische CVEs gefunden als in den beiden Vorjahren zusammen.
		</p>
		<h2>Plugins sind das Problem</h2>
		<p>
			WordPress vermarktet sich als „komplette“ Website-Lösung, doch die Basisinstallation ist überraschend spartanisch. 
			Um grundlegende Funktionen für eine Unternehmenswebsite zu realisieren, muss man eigenen Code schreiben. 
			Viele WordPress-Anbieter können jedoch nicht programmieren und greifen daher auf vorgefertigte Plugins zurück, 
			um die benötigten Funktionen bereitzustellen.
		</p>
		<p>Jedes installierte Plugin stellt einen potenziellen Angriffsvektor dar. Eine durchschnittliche WordPress-Installation nutzt 20 bis 30 Plugins - Die Rechnung ist einfach.</p>
		<p>Möglicherweise benötigen Sie Plugins für:</p>
		<ul>
			<li>Kontaktformulare</li>
			<li>SEO-Optimierung</li>
			<li>Sicherheitsfunktionen</li>
			<li>Backup-Systeme – ironischerweise, um Ihre Website im Falle eines Hackerangriffs zu sichern</li>
			<li>Cache-Verwaltung</li>
			<li>Bildoptimierung</li>
			<li>Social-Media-Integration</li>
			<li>Analysefunktionen</li>
			<li>Spamschutz</li>
			<li>Leistungsoptimierung – natürlich!</li>
		</ul>
		<h3>KI-generierte Plugins verschlimmern die Situation zusätzlich</h3>
		<p>
			Der Patchstack-Bericht von 2026 prangert insbesondere „Vibe-Coding“ an, bei dem Entwickler LLMs verwenden, um Plugin-Code zu 
			generieren und diesen auszuliefern, ohne überprüfen zu können, was das Modell geschrieben hat. Wenn derjenige, der den Code 
			ausliefert, ihn nicht auf Sicherheitsprobleme prüfen kann, werden Schwachstellen unbemerkt aktiv. Dieser Trend beschleunigt 
			sich, anstatt sich zu stabilisieren.
		</p>
		<h2>Das 5-Stunden-Problem</h2>
		<p>Hier ist die Zahl aus dem Patchstack-Bericht von 2026, die Ihre Denkweise über die Sicherheit von WordPress grundlegend verändern sollte:</p>
		<blockquote class="p-4 my-4 border-s-4 border-accent bg-muted">
			<div class="text-xl text-foreground italic font-medium leading-relaxed text-heading">"The weighted median time to first mass exploitation was five hours."</div>
		</blockquote>
		<p>
			Fünf Stunden von der öffentlichen Bekanntgabe bis zum aktiven Massenangriff. Der gängige Ratschlag „Halten Sie Ihre Plugins aktuell“ setzt voraus, 
			dass man Zeit zum Reagieren hat. Bei gezielten Angriffen auf Sicherheitslücken hat man diese Zeit oft nicht.
		</p>
		<h3>Und was macht das 5-Stunden-Fenster noch gefährlicher</h3>
		<p>Für 46 % der Sicherheitslücken war zum Zeitpunkt der Veröffentlichung noch kein Patch verfügbar (WP Edition / Patchstack, Februar 2026). Es gibt kein Update, das installiert werden könnte. Die Sicherheitslücke ist öffentlich bekannt, dokumentiert, wird aktiv gesucht, und das Plugin ist weiterhin fehlerhaft.</p>
		<p>Warum? Weil 52 % der Plugin-Entwickler den Fehler nicht vor der Veröffentlichung beheben (Patchstack via Xictron, 2026). Der Security-Researcher findet den Fehler, meldet ihn verantwortungsvoll, wartet die übliche Meldefrist ab, veröffentlicht den Fehlerbericht, und der Plugin-Entwickler hat immer noch keinen Patch bereitgestellt.</p>
		<p>Patchstack bringt es auf den Punkt:</p>
		<blockquote class="p-4 mb-16 my-4 border-s-4 border-accent bg-muted">
			<div class="text-xl text-foreground italic font-medium leading-relaxed text-heading">"Regular plugin updates are the second line of defence, but as attackers weaponize new vulnerabilities within mere hours, this is not a viable defence."</div>
		</blockquote>
		<h2>Was kostet ein WordPress-Hack tatsächlich?</h2>
		<p>Notfall-Entwicklerzeit, Ausfallzeiten, Umsatzeinbußen und die monatelangen SEO-Arbeiten, die erforderlich sind, um eingeschleuste Spam-Links und den Verlust der Google-Ranking-Position rückgängig zu machen.</p>
		<p><strong>Die wichtigste Zahl: Zu viel!</strong> - Ich gehe hier nicht auf die Details ein – bitte lesen Sie das <a class="accent-link-animation" rel="noreferrer noopener" target="_blank" href="https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/">patchstack whitepaper</a>. Beachten Sie die wirtschaftlichen Aspekte.</p>
		<h2>Was tun, wenn Sie eine WordPress-Website haben</h2>
		<p>Aus unserer Sicht wäre es am besten, sie so schnell wie möglich außer Betrieb zu setzen! Es war zu erwarten, dass wir das sagen, aber Tatsache ist, dass es in den meisten Fällen ein guter Rat ist.<br />In der Zwischenzeit sollten Sie folgendes tun:</p>
		<ul>
			<li>Überprüfen Sie Ihre aktuelle WordPress-Sicherheit und die damit verbundenen Kosten. Wahrscheinlich zahlen Sie monatlich für Sicherheit | Updates – bedeutet das, dass Sie wirklich sicher sind?</li>
			<li>Prüfen Sie welche funktionalen Anforderungen an Ihre Website tatsächlich gestellt werden – werden diese erfüllt? Oder begnügen Sie sich mit dem, was Ihre Plugins bieten können?</li>
			<li>Entdecken Sie moderne Alternativen zu WordPress – es gibt eine Vielzahl an Open-Source Headless-CMS-Plattformen. Wir beraten Sie gern.</li>
			<li>Lassen Sie ein Sicherheits-Assessment Ihrer aktuellen WordPress-Installation erstellen.  Wir helfen Ihnen gern.</li>
			<li>Kalkulieren Sie den potenziellen ROI eines Wechsels zu einer statischen Lösung – Tipp: It’s a no brainer!</li>
			<li>Kontaktieren Sie uns für die Gestaltung und Entwicklung einer Website basierend auf modernsten Technologien!</li>
		</ul>
        {/if}
	</div>
</article>
<!-- section booking -->
<Booking title={m.wordpress_booking_title()} description={m.wordpress_booking_description()} cta={m.wordpress_booking_cta()}  link={m.nav_contact()}/>
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
        white-space: pre-wrap
    }

    .code-snippet,.inline-code {
        font-size: 14px;
        line-height: 1.6
    } */

    /* .inline-code {
        border-radius: .125rem;
        background-color: var(--color-muted);
        padding: 1px .25rem;
        color: var(--color-primary)
    } */
</style>
