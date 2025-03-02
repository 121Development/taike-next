import FirecrawlApp, { ScrapeResponse } from '@mendable/firecrawl-js';

const app = new FirecrawlApp({apiKey: process.env.NEXT_PUBLIC_FIRECRAWL_API_KEY});

export async function scrapeUrl(text: string): Promise<ScrapeResponse> {
    const scrapeResult = await app.scrapeUrl(text, { formats: ['markdown', 'html'] }) as ScrapeResponse;

if (!scrapeResult.success) {
  throw new Error(`Failed to scrape: ${scrapeResult.error}`)
}

console.log(scrapeResult);
}
