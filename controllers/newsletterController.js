const newsletterController = async (req, res) => {
    const newslettertext = req.params.newsletter.toLowerCase();
    const capitalizeFirstLetter = (str) => str.replace(/\b\w/g, (match) => match.toUpperCase());
    const title = capitalizeFirstLetter(newslettertext.replace(/-/g, ' '));
    

    
    // newsletter api
    const newsLetterData = await fetch(`https://stories.jobaaj.com/files/api/newsLetter?newsletter=${newslettertext}`);
    const newsletterdata = await newsLetterData.json()

    // similar  api
    const similarstory = await fetch(`https://stories.jobaaj.com/files/api/newsLetter?mailsPosts=100`);
    const similarStory = await similarstory.json()
    const slicedSimilarStory = similarStory.pop.slice(1, 6);

    const firstWordOfTitle = title.split(' ')[0];

    const filteredPosts = similarStory.pop.filter((post) => {
        const firstWordOfPostTitle = post.title.split(' ')[0];
        return firstWordOfPostTitle !== firstWordOfTitle;
      });
    console.log(filteredPosts.slice(0,6))


    // Now, you can use the slicedSimilarStory array as needed
    // console.log(slicedSimilarStory);

    // Explore Topics
    const exploretopics = await fetch('https://stories.jobaaj.com/files/api/category?cats');
    const exploreTopics = await exploretopics.json()

    //India’s Might!
    const sidepost = await fetch('https://stories.jobaaj.com/files/api/post?india_might');
    const sidePost = await sidepost.json()

    const metaData = {
      title : `${title} | Jobaaj Stories`,
      og_discription : newsletterdata.meta_description,
      og_url : `/newsletter/${newslettertext}`,
      og_key : ""
  }
    let finalObj = {
        
        
        newslettertext : newslettertext,
        newsletterdata :newsletterdata,
        exploreTopics : exploreTopics,
        sidePost : sidePost,
        metaData:metaData,
        similarStory : slicedSimilarStory,
        newsletterPost : filteredPosts
        

    }
    res.render("newsletter", {finalObj})
  };
  

export { newsletterController };
