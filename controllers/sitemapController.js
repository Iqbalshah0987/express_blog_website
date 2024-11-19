const sitemapController = async (req, res) => {
    try {
      // Fetch sitemap data
      const sitemap = await fetch(`https://stories.jobaaj.com/files/api/sitemap?sitemap_url=1`);
      const siteMap = await sitemap.json();
  
      // Set Content-Type header
      res.set('Content-Type', 'application/xml');
      res.charset = 'utf-8';
  
      // Render XML and send response
      res.status(200).render("sitemap", { siteMap });
    } catch (error) {
      // Handle errors
      console.error('Error fetching or rendering sitemap:', error);
      res.status(500).send('Internal Server Error');
    }
  };
  
  export { sitemapController };
