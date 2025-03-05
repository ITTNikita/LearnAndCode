import * as readline from 'readline';

class BloggerScraper {
    private blogName: string;
    private apiUrl: string;

    constructor(blogName: string) {
        this.blogName = blogName;
        this.apiUrl = `https://${blogName}.blogspot.com/feeds/posts/default?alt=json`;
    }

    async fetchData(): Promise<any> {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(this.apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        return response.json();
    }
}

interface BasicInfo {
    title: string;
    description: string;
    name: string;
    totalPosts: number;
}

class BloggerDataProcessor {
    private blogData: any;

    constructor(blogData: any) {
        this.blogData = blogData;
    }

    extractBasicInfo(): BasicInfo {
        const feed = this.blogData.feed;
        return {
            title: feed.title?.$t || "No title",
            description: feed.subtitle?.$t || "No description",
            name: feed.author?.[0]?.name?.$t || "Unknown",
            totalPosts: feed.entry?.length || 0
        };
    }

    extractAllImages(): string[] {
        const posts = this.blogData.feed.entry || [];
        let imageUrls: string[] = [];

        posts.forEach((post: any) => {
            const content: string = post.content?.$t || "";

            // Extract image URLs using regex
            const images = [...content.matchAll(/<img.*?src=["'](.*?)["']/g)].map(match => match[1]);

            if (images.length > 0) {
                imageUrls.push(...images);
            }
        });

        return imageUrls;
    }
}

class BloggerOutputFormatter {
    static printData(basicInfo: BasicInfo, imageUrls: string[]): void {
        console.log(`\nTitle: ${basicInfo.title}`);
        console.log(`Name: ${basicInfo.name}`);
        console.log(`Description: ${basicInfo.description}`);
        console.log(`No of posts: ${basicInfo.totalPosts}\n`);

        imageUrls.forEach((url, index) => {
            console.log(`${index + 1}. ${url}`);
        });
    }
}

class BloggerUserInput {
    static getUserInput(callback: (blogName: string) => void): void {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Enter the Blogger blog name (e.g., 'dummyqwert'): ", (blogName: string) => {
            callback(blogName);
            rl.close();
        });
    }
}

async function main(blogName: string): Promise<void> {
    try {
        const scraper = new BloggerScraper(blogName);
        const blogData = await scraper.fetchData();

        const processor = new BloggerDataProcessor(blogData);
        const basicInfo = processor.extractBasicInfo();
        const imageUrls = processor.extractAllImages();

        BloggerOutputFormatter.printData(basicInfo, imageUrls);
    } catch (error: any) {
        console.error("Error:", error.message);
    }
}

BloggerUserInput.getUserInput(main);