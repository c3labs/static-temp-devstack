// set the website url to a variable we can reference in the sitemap
const website = 'https://c3labs.de';

export async function GET() {
	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="http://www.w3.org/1999/xhtml"
			xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
		>
            <url>
                <loc>${website}</loc>
            </url>
            <url>
                <loc>${website}/service</loc>
            </url>
            <url>
                <loc>${website}/design</loc>
            </url>
            <url>
                <loc>${website}/engineering</loc>
            </url>
            <url>
                <loc>${website}/engineering/websites-and-webapps</loc>
            </url>
            <url>
                <loc>${website}/portfolio</loc>
            </url>
            <url>
                <loc>${website}/portfolio/werkd</loc>
            </url>
            <url>
                <loc>${website}/portfolio/subway</loc>
            </url>
            <url>
                <loc>${website}/ai</loc>
            </url>
            <url>
                <loc>${website}/legal</loc>
            </url>
            <url>
                <loc>${website}/about</loc>
            </url>
            <url>
                <loc>${website}/manifesto</loc>
            </url>
            <url>
                <loc>${website}/manifesto/what-isitagentready-com-actually-measures</loc>
            </url>
            <url>
                <loc>${website}/manifesto/how-to-get-your-website-agent-ready</loc>
            </url>
            <url>
                <loc>${website}/manifesto/llms-txt-helping-ai-understand-your-website</loc>
            </url>
            <url>
                <loc>${website}/manifesto/the-wordpress-problem</loc>
            </url>
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}