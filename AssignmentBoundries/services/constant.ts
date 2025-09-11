import * as dotenv from 'dotenv';
dotenv.config();

// Runtime validation
if (!process.env.API_URL || !process.env.API_KEY) {
    throw new Error("Missing required environment variables: API_URL or API_KEY");
}

// Safe export with type assertion
export const constant = {
    API_URL: process.env.API_URL as string,
    API_KEY: process.env.API_KEY as string,
};
