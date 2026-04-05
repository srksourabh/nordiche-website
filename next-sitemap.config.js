/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://nordische-energy.com",
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  changefreq: "monthly",
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/products": 0.9,
      "/contact": 0.9,
      "/technology": 0.8,
      "/industries": 0.8,
      "/case-studies": 0.8,
      "/about": 0.7,
      "/manufacturing": 0.7,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? 0.6,
      lastmod: new Date().toISOString(),
    };
  },
};
