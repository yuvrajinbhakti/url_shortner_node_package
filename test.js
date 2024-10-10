// test.js
import { shortenUrl, getOriginalUrl } from "./src/index.js";

// Original URL to be shortened
const longUrl = "https://www.example.com/some-long-url";

// Shorten the URL
const shortUrl = shortenUrl(longUrl);
console.log(`Short URL: ${shortUrl}`);

// Retrieve the original URL
const originalUrl = getOriginalUrl(shortUrl);
console.log(`Original URL: ${originalUrl}`);
