<script lang="ts">
	import { m } from "$lib/paraglide/messages";
	import { ChevronRight } from "lucide-svelte";

    let { title = 'Start your Project', description = 'Claim a time to meet. We will help you do the rest.', cta = "Open Calender App", link = 'https://calcom.c3labs.de', ...others } = $props();
</script>

<div class="grid grid-cols-1 border-b lg:grid-cols-3" id="contact">
    <div class="relative max-lg:pt-10">
        <h2 class="p-5 font-menu uppercase lg:sticky lg:top-16 text-muted-foreground text-xs">{m.nav_contact()}</h2>
    </div>
    <div class="flex flex-col gap-16 pb-25 lg:border-l lg:pt-50">
        <div class="flex max-w-117.5 flex-col gap-6 px-5">
            <h3 class="text-5xl lg:text-6xl text-wrap text-foreground tracking-tighter title leading-[0.9]">{title}</h3>
            <p class="text-sm text-muted-foreground">{description}</p>
        </div>
        <a class="button bg-accent transition-colors duration-300 px-5 font-menu text-xs cursor-pointer hover:bg-accent-hover text-card" href="https://calcom.c3labs.de/cal3labs" target="_blank">
            <span class="z-10">{cta}</span>
            <ChevronRight strokeWidth={2} size={16} />
        </a>
    </div>
    <div class="border-l"></div>
</div>
