import FirecrawlApp, { ScrapeResponse } from '@mendable/firecrawl-js';

const app = new FirecrawlApp({apiKey: process.env.NEXT_PUBLIC_FIRECRAWL_API_KEY});
console.log("Firecrawl app created");
export async function scrapeUrl(text: string): Promise<String> {
    const scrapeResult = await app.scrapeUrl(text, { formats: ['markdown'] }) as ScrapeResponse;

    if (!scrapeResult.success) {
    throw new Error(`Failed to scrape: ${scrapeResult.error}`)
    }

    console.log(scrapeResult.markdown);
    return scrapeResult.markdown? scrapeResult.markdown : "Failed to scrape content";
}
