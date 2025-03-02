import FirecrawlApp from '@mendable/firecrawl-js';

const app = new FirecrawlApp({apiKey: process.env.FIRECRAWL_API_KEY});

export async function crawlResponse(text: string): Promise<string> {
  try {
    const response = await app.crawlUrl(text, {
      limit: 100,
      scrapeOptions: {
        formats: ['markdown', 'html'],
      }
    });

    if (!response.success) {
      throw new Error(`Failed to crawl: ${response.error}`);
    }

    return response.content ?? 'No content found';
  } catch (error) {
    console.error('Error in crawlResponse:', error);
    throw new Error('Failed to process URL');
  }
}
