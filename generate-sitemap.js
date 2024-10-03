const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

// Define the URLs and their change frequency & priority
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/faqs', changefreq: 'monthly', priority: 0.8 },
  // Add more URLs for your website here
];

// Create a sitemap stream with the base URL of your site
const stream = new SitemapStream({ hostname: 'https://healmefit.io' });

// Write the sitemap to the public directory
const writeStream = createWriteStream('./public/sitemap.xml');

// Generate the sitemap
Readable.from(links)
  .pipe(stream)            // Pipe links to the stream
  .pipe(writeStream);      // Write the result to a file

// Wait for the sitemap to finish and log success message
streamToPromise(stream).then(() => {
  console.log('Sitemap created!');
});
