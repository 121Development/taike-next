import FirecrawlApp, { ScrapeResponse } from '@mendable/firecrawl-js';

const app = new FirecrawlApp({apiKey: process.env.NEXT_PUBLIC_FIRECRAWL_API_KEY});
const apiKey = process.env.NEXT_PUBLIC_FIRECRAWL_API_KEY;
console.log("Firecrawl app created");
export async function scrapeUrl(text: string): Promise<String> {
    const scrapeResult = await app.scrapeUrl(text, { formats: ['markdown'] }) as ScrapeResponse;

    if (!scrapeResult.success) {
    throw new Error(`Failed to scrape: ${scrapeResult.error}`)
    }

    console.log(scrapeResult.markdown);
    return scrapeResult.markdown? scrapeResult.markdown : "Failed to scrape content";
}

export async function llmScrape(url: string): Promise<string> {
    console.log("LLM scrape url:", url);
    try {
        const response = await fetch('https://api.firecrawl.dev/v1/scrape', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                url: url.trim(),
                formats: ["json"],
                jsonOptions: {
                    prompt: "Extract the essential item with a short description or a short summary of the page content"
                }
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API request failed: ${response.status} ${errorText}`);
        }

        const data = await response.json();
        console.log("LLM scrape data:", data);
        
        if (!data.success) {
            throw new Error(`Failed to scrape: ${data.error || 'Unknown error'}`);
        }

        return data.json || "No content extracted";
    } catch (error) {
        console.error("LLM scrape error:", error);
        throw error;
    }
}
