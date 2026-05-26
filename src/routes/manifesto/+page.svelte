<script lang="ts">
	import Booking from "$lib/components/Booking.svelte";
	import { m } from "$lib/paraglide/messages";

    let email_valid = $state(false);
    let pattern = "[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$";
    let email = $state("");
    let placeholder = $state<string>(String(m.manifest_form_placeholder()));
    let busy = $state(false);

</script>
<div class="grid-global">
    <header data-animate="true" class="hero text-hero relative">
        <h1 class="flex items-end p-5 font-menu text-xs text-muted-foreground uppercase">{m.manifest_title()}</h1>
        <h2 class="title p-5 text-5xl lg:col-start-2 lg:pt-55 lg:text-6xl lg:border-l text-wrap tracking-tighter">{m.manifest_headline()}</h2>
        <div class="flex items-end pt-10 p-5">
            <div class="flex flex-col gap-5"></div>
        </div>
    </header>
    <aside class="min-w-0 self-start lg:col-start-1 lg:row-start-2 lg:min-h-0 lg:self-stretch" aria-label="Newsletter signup">
        <div class="lg:sticky lg:top-(--blog-newsletter-sticky-top) lg:z-10">
            <form
                action="/api/newsletter"
                method="POST"
                class="flex w-full min-w-0 flex-col overflow-x-hidden border-b border-contrast-tertiary-light"
                onsubmit={async (e) => {
                    e.preventDefault();
                    if (busy) return;
                    busy = true;

                    try {
                        const form = e.currentTarget as HTMLFormElement;
                        const res = await fetch(form.action, {
                            method: "POST",
                            body: new FormData(form)
                        });

                        const payload = await res.json().catch(() => null);

                        if (res.ok && payload?.ok) {
                            email = "";
                            email_valid = false;
                            placeholder = payload?.message ?? "Thanks — you're on the list.";
                        } else {
                            placeholder = payload?.message ?? "Something went wrong. Please try again.";
                        }
                    } catch {
                        placeholder = "Something went wrong. Please try again.";
                    } finally {
                        busy = false;
                    }
                }}
            >
                <div class="flex flex-col gap-2 p-5">
                    <h3 class="title text-2xl tracking-tighter">{m.manifest_form_headline()}</h3>
                    <p class="font-paragraph text-sm leading-relaxed text-muted-foreground">{m.manifest_form_text()}</p>
                </div>
                <div class="relative border-t">
                    <div class="flex max-sm:flex-col sm:items-stretch">
                        <label for="newsletter-email" class="sr-only">Email</label>
                        <input id="newsletter-email" 
                        required 
                        autocomplete="email" 
                        placeholder={placeholder}
                        class="form-input min-w-0 flex-1 disabled:opacity-50 border-0 border-r max-sm:border-b" 
                        type="email" 
                        bind:value={email}
                        name="email" 
                        pattern={pattern}
                        disabled={busy}
                        oninput={(e: Event) => {
                            const target = e.target as HTMLInputElement;
                            email_valid = target?.validity?.valid || false;
                        }}>
                        <button
                            type="submit"
                            aria-busy={busy}
                            disabled={!email_valid || busy}
                            class="button fill-button shrink-0 max-sm:h-14 cursor-pointer disabled:pointer-events-none disabled:opacity-50 text-xs"
                            style="--fillPercentage: {email_valid && !busy ? '1' : '0'};"
                        >
                            <span class="z-10 transition-colors delay-300 {email_valid ? 'text-background' : 'text-accent'} pl-1 lg:pl-0">{m.manifest_form_send()}</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </aside>
    <section data-animate="true" class="relative flex flex-col lg:col-start-2 lg:col-span-2 lg:grid lg:grid-cols-2">
        <a class="group relative min-h-87.5 flex flex-col justify-between overflow-hidden gap-6 p-5 border-b lg:col-span-2 lg:min-h-112.5 lg:border-l" href="/manifesto/what-isitagentready-com-actually-measures">
            <!-- <enhanced:img src="/src/lib/assets/images/manifesto/isitagentready.v2.png?format=avif;webp" alt="Featured article cover" class="-z-10 absolute h-full w-full object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="(min-width: 1024px) 66.66667vw, 100vw" /> -->
            <time datetime="2026-04-20" class="absolute text-featured font-menu text-xs uppercase">Apr 21, 2026</time>
            <div class="flex-start flex w-full max-w-md flex-col items-start gap-6">
                <span class="text-featured title text-4xl tracking-tighter">{m.manifest_1_headline()}</span>
            </div>
            <div class="absolute inset-0 -z-10 bg-black opacity-0 lg:opacity-15 group-hover:opacity-0 transition-opacity duration-300" aria-hidden="true"></div>
        </a>
        <div class="order-2 lg:order-1 flex flex-col">
            <a class="article-card card-hover flex-1 hid" href="/manifesto/how-to-get-your-website-agent-ready">
                <time datetime="2026-04-21" class="text-muted-foreground font-menu text-xs uppercase">Apr 20, 2026</time>
                <div class="flex flex-col flex-start max-w-sm gap-6">
                    <p class="title text-xl lg:text-3xl line-clamp-4 tracking-tighter">{m.manifest_2_headline()}</p>
                </div>
            </a>
            <!-- <a class="hidden article-card card-hover flex-1" href="/manifesto/kiro-the-powerful-agentic-ide">
                <time datetime="2026-02-13" class="text-muted-foreground font-menu text-xs uppercase">Feb 13, 2026</time>
                <div class="flex flex-col flex-start max-w-sm gap-6">
                    <p class="title text-xl lg:text-3xl line-clamp-4 tracking-tighter">Kiro: The (Power)ful Agentic IDE</p>
                </div>
            </a> -->
        </div>
        <div class="order-1 flex h-full flex-col lg:order-2 lg:border-l">
            <div class="relative h-32 border-b lg:min-h-14 lg:h-fit lg:grow">
                <span class="text-muted-foreground absolute bottom-5 left-5 font-menu text-xs uppercase">Top Articles</span>
            </div>
            <a title="llms.txt: Helping AI Understand Your Website" class="relative grid grid-cols-2 border-b lg:h-3/4 card-hover -mb-px overflow-hidden" href="/manifesto/llms-txt-helping-ai-understand-your-website">
                <div class="relative">
                    <!-- <enhanced:img src="/src/lib/assets/images/manifesto/temporal_3.png?format=avif;webp" alt="Featured article cover" class="-z-10 absolute h-full w-full object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="(min-width: 1024px) 66.66667vw, 100vw" /> -->
                </div>
                <div class="flex flex-col items-start justify-between gap-5 p-5">
                    <time datetime="2025-07-24" class="text-muted-foreground font-menu text-xs uppercase">Dec 12, 2025</time>
                    <div class="flex-start flex w-full max-w-md flex-col items-start gap-6">
                        <span class="title text-xl line-clamp-6 lg:line-clamp-1 leading-6 tracking-tighter">{m.manifest_4_headline()}</span>
                    </div>
                </div>
            </a>
            <!-- <a title="2025 Rewind" class="hidden relative grid grid-cols-2 border-b lg:h-1/4 card-hover -mb-px overflow-hidden" href="/manifesto/2025-rewind">
                <div class="relative">
                    <img alt="Featured article cover" loading="lazy" decoding="async" data-nimg="fill" class="object-cover" sizes="(max-width: 1024px) 100vw, 33.333333vw" srcset="https://cdn.sanity.io/images/zep746qw/production/55f8b8b6f29aff434a803debb5e674b195682850-554x423.jpg?w=640&amp;q=75&amp;fit=max&amp;auto=format 640w, https://cdn.sanity.io/images/zep746qw/production/55f8b8b6f29aff434a803debb5e674b195682850-554x423.jpg?w=750&amp;q=75&amp;fit=max&amp;auto=format 750w, https://cdn.sanity.io/images/zep746qw/production/55f8b8b6f29aff434a803debb5e674b195682850-554x423.jpg?w=828&amp;q=75&amp;fit=max&amp;auto=format 828w, https://cdn.sanity.io/images/zep746qw/production/55f8b8b6f29aff434a803debb5e674b195682850-554x423.jpg?w=1080&amp;q=75&amp;fit=max&amp;auto=format 1080w, https://cdn.sanity.io/images/zep746qw/production/55f8b8b6f29aff434a803debb5e674b195682850-554x423.jpg?w=1200&amp;q=75&amp;fit=max&amp;auto=format 1200w, https://cdn.sanity.io/images/zep746qw/production/55f8b8b6f29aff434a803debb5e674b195682850-554x423.jpg?w=1920&amp;q=75&amp;fit=max&amp;auto=format 1920w, https://cdn.sanity.io/images/zep746qw/production/55f8b8b6f29aff434a803debb5e674b195682850-554x423.jpg?w=2048&amp;q=75&amp;fit=max&amp;auto=format 2048w" src="https://cdn.sanity.io/images/zep746qw/production/55f8b8b6f29aff434a803debb5e674b195682850-554x423.jpg?w=2048&amp;q=75&amp;fit=max&amp;auto=format" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                </div>
                <div class="flex flex-col items-start justify-between gap-5 p-5">
                    <time datetime="2026-01-01" class="text-muted-foreground font-menu text-xs uppercase">Jan 01, 2026</time>
                    <div class="flex-start flex w-full max-w-md flex-col items-start gap-6">
                        <span class="title text-xl line-clamp-6 lg:line-clamp-1 leading-6 tracking-tighter">2025 Rewind</span>
                    </div>
                </div>
            </a> -->
            <!-- <a title="The Power of MCP" class="hidden relative grid grid-cols-2 border-b lg:h-1/4 card-hover -mb-px overflow-hidden" href="/manifesto/the-power-of-mcp">
                <div class="relative">
                    <img alt="Featured article cover" loading="lazy" decoding="async" data-nimg="fill" class="object-cover" sizes="(max-width: 1024px) 100vw, 33.333333vw" srcset="https://cdn.sanity.io/images/zep746qw/production/682e7bc1c6ccbfbf21d2d3b88408db498d6df71a-2816x1536.jpg?w=640&amp;q=75&amp;fit=max&amp;auto=format 640w, https://cdn.sanity.io/images/zep746qw/production/682e7bc1c6ccbfbf21d2d3b88408db498d6df71a-2816x1536.jpg?w=750&amp;q=75&amp;fit=max&amp;auto=format 750w, https://cdn.sanity.io/images/zep746qw/production/682e7bc1c6ccbfbf21d2d3b88408db498d6df71a-2816x1536.jpg?w=828&amp;q=75&amp;fit=max&amp;auto=format 828w, https://cdn.sanity.io/images/zep746qw/production/682e7bc1c6ccbfbf21d2d3b88408db498d6df71a-2816x1536.jpg?w=1080&amp;q=75&amp;fit=max&amp;auto=format 1080w, https://cdn.sanity.io/images/zep746qw/production/682e7bc1c6ccbfbf21d2d3b88408db498d6df71a-2816x1536.jpg?w=1200&amp;q=75&amp;fit=max&amp;auto=format 1200w, https://cdn.sanity.io/images/zep746qw/production/682e7bc1c6ccbfbf21d2d3b88408db498d6df71a-2816x1536.jpg?w=1920&amp;q=75&amp;fit=max&amp;auto=format 1920w, https://cdn.sanity.io/images/zep746qw/production/682e7bc1c6ccbfbf21d2d3b88408db498d6df71a-2816x1536.jpg?w=2048&amp;q=75&amp;fit=max&amp;auto=format 2048w" src="https://cdn.sanity.io/images/zep746qw/production/682e7bc1c6ccbfbf21d2d3b88408db498d6df71a-2816x1536.jpg?w=2048&amp;q=75&amp;fit=max&amp;auto=format" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                </div>
                <div class="flex flex-col items-start justify-between gap-5 p-5">
                    <time datetime="2025-08-14" class="text-muted-foreground font-menu text-xs uppercase">Aug 14, 2025</time>
                    <div class="flex-start flex w-full max-w-md flex-col items-start gap-6">
                        <span class="title text-xl line-clamp-6 lg:line-clamp-1 leading-6 tracking-tighter">The Power of MCP</span>
                    </div>
                </div>
            </a> -->
            <!-- <a title="Content Migration Done Right: Moving from Legacy to Headless CMS" class="hidden relative grid grid-cols-2 border-b lg:h-1/4 card-hover -mb-px overflow-hidden" href="/manifesto/content-migration-done-right">
                <div class="relative">
                    <img alt="Featured article cover" loading="lazy" decoding="async" data-nimg="fill" class="object-cover" sizes="(max-width: 1024px) 100vw, 33.333333vw" srcset="https://cdn.sanity.io/images/zep746qw/production/37c1909264f5d8abf8b9e7c0dde6ea2385d0edf2-4256x2832.jpg?w=640&amp;q=75&amp;fit=max&amp;auto=format 640w, https://cdn.sanity.io/images/zep746qw/production/37c1909264f5d8abf8b9e7c0dde6ea2385d0edf2-4256x2832.jpg?w=750&amp;q=75&amp;fit=max&amp;auto=format 750w, https://cdn.sanity.io/images/zep746qw/production/37c1909264f5d8abf8b9e7c0dde6ea2385d0edf2-4256x2832.jpg?w=828&amp;q=75&amp;fit=max&amp;auto=format 828w, https://cdn.sanity.io/images/zep746qw/production/37c1909264f5d8abf8b9e7c0dde6ea2385d0edf2-4256x2832.jpg?w=1080&amp;q=75&amp;fit=max&amp;auto=format 1080w, https://cdn.sanity.io/images/zep746qw/production/37c1909264f5d8abf8b9e7c0dde6ea2385d0edf2-4256x2832.jpg?w=1200&amp;q=75&amp;fit=max&amp;auto=format 1200w, https://cdn.sanity.io/images/zep746qw/production/37c1909264f5d8abf8b9e7c0dde6ea2385d0edf2-4256x2832.jpg?w=1920&amp;q=75&amp;fit=max&amp;auto=format 1920w, https://cdn.sanity.io/images/zep746qw/production/37c1909264f5d8abf8b9e7c0dde6ea2385d0edf2-4256x2832.jpg?w=2048&amp;q=75&amp;fit=max&amp;auto=format 2048w" src="https://cdn.sanity.io/images/zep746qw/production/37c1909264f5d8abf8b9e7c0dde6ea2385d0edf2-4256x2832.jpg?w=2048&amp;q=75&amp;fit=max&amp;auto=format" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                </div>
                <div class="flex flex-col items-start justify-between gap-5 p-5">
                    <time datetime="2025-11-11" class="text-muted-foreground font-menu text-xs uppercase">Nov 11, 2025</time>
                    <div class="flex-start flex w-full max-w-md flex-col items-start gap-6">
                        <span class="title text-xl line-clamp-6 lg:line-clamp-1 leading-6 tracking-tighter">Content Migration Done Right: Moving from Legacy to Headless CMS</span>
                    </div>
                </div>
            </a> -->
        </div>
        <div class="order-3 lg:col-span-2 lg:grid grid-cols-1 lg:grid-cols-2 lg:[&amp;&gt;*:nth-child(even)]:border-l relative">
            <!-- <a class="hidden article-card card-hover" href="/manifesto/from-vector-search-to-knowledge-runtime-the-new-rag-standard">
                <time datetime="2026-02-10" class="text-muted-foreground font-menu text-xs uppercase">Feb 10, 2026</time>
                <div class="flex flex-col flex-start max-w-sm gap-6">
                    <p class="title text-xl lg:text-3xl line-clamp-4 tracking-tighter">From Vector Search to Knowledge Runtime: The New RAG Standard</p>
                </div>
            </a> -->
            <!-- <a class="hidden article-card card-hover" href="/manifesto/why-composable-architecture-will-dominate-2024-and-beyond">
                <time datetime="2024-08-30" class="text-muted-foreground font-menu text-xs uppercase">Aug 30, 2024</time>
                <div class="flex flex-col flex-start max-w-sm gap-6">
                    <p class="title text-xl lg:text-3xl line-clamp-4 tracking-tighter">Why Composable Architecture Will Dominate 2024 and Beyond</p>
                    <p class="text-sm text-muted-foreground line-clamp-3">Discover how c3labs can help you transition to composable architecture.</p>
                </div>
            </a> -->
            <a class="article-card card-hover" href="/manifesto/the-wordpress-problem">
                <time datetime="2020-07-10" class="text-muted-foreground font-menu text-xs uppercase">Apr 05, 2020</time>
                <div class="flex flex-col flex-start max-w-sm gap-6">
                    <p class="title text-xl lg:text-3xl line-clamp-4 tracking-tighter">{m.manifest_3_headline()}</p>
                    <p class="text-sm text-muted-foreground line-clamp-3">{m.manifest_3_subline()}</p>
                </div>
            </a>
            <div class="h-325 max-h-full w-full absolute inset-x-0 bottom-0 -z-50 invisible" aria-hidden="true"></div>
        </div>
    </section>
</div>
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


</style>