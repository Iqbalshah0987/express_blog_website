const postController = async (req, res) => {
    const postname = req.params.postname;
    // const cat_slug = req.params.cat_slug;

    
    // post api
    const postData = await fetch(`https://stories.jobaaj.com/files/api/post?post_name=${postname}`);
    const postdata = await postData.json()

    const cat_slug = postdata.cat_slug;


    // similar stories api
    const similarstory = await fetch(`https://stories.jobaaj.com/files/api/post?cat_slug=${cat_slug}&post_id=${postdata.id}`);
    const similarStory = await similarstory.json() 
    console.log(`https://stories.jobaaj.com/files/api/post?cat_slug=${cat_slug}&post_id=${postdata.id}`)

    // parent category api
    // const pC = await fetch(`https://stories.jobaaj.com/files/api/post?parent_slug=${cat_slug}`);
    // const pc = await pC.json() 

    // Explore Topics
    const exploretopics = await fetch('https://stories.jobaaj.com/files/api/category?cats');
    const exploreTopics = await exploretopics.json()

    //India’s Might!
    const sidepost = await fetch('https://stories.jobaaj.com/files/api/post?india_might');
    const sidePost = await sidepost.json()

    

    const metaData = {
      title : `${postdata.post_title}`,
      og_discription : postdata.meta,
      og_url : req.originalUrl,
      og_key : postdata.keyword
  }
    let finalObj = {
        
        cat_slug : cat_slug,
        postdata : postdata,
        exploreTopics : exploreTopics,
        sidePost : sidePost,
        similarStory : similarStory,
        metaData:metaData

    }
    res.render("post", {finalObj})
  };
  

export { postController };
