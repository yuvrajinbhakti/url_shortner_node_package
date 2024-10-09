// src/urlShortener.js
import { createHash } from 'crypto';

// In-memory storage for URLs (in real cases, this should be a database)
const urlDatabase = new Map();

/**
 * Shorten a URL.
 * @param {string} longUrl - The original long URL to be shortened.
 * @returns {string} - The shortened URL.
 */
export function shortenUrl(longUrl) {
  // Create a hash from the URL
  const hash = createHash('md5').update(longUrl).digest('hex').slice(0, 6);
  
  // Store the original URL in the "database"
  urlDatabase.set(hash, longUrl);
  
  // Return the short URL
  return `https://short.url/${hash}`;
}

/**
 * Retrieve the original long URL from the short URL.
 * @param {string} shortUrl - The shortened URL to expand.
 * @returns {string|null} - The original long URL or null if not found.
 */
export function getOriginalUrl(shortUrl) {
  const hash = shortUrl.split('/').pop();
  
  // Retrieve the original URL from the "database"
  return urlDatabase.get(hash) || null;
}


