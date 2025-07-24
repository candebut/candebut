/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://candelabuttigliero.com',
  generateRobotsTxt: true,       // genera también robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/secret-page'],     // si hay rutas que no querés indexar
}