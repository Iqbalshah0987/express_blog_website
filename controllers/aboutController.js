const aboutController = async(req,res) =>{

    // Explore Topics
    const exploretopics = await fetch('https://stories.jobaaj.com/files/api/category?cats');
    const exploreTopics = await exploretopics.json()

    //India’s Might!
    const sidepost = await fetch('https://stories.jobaaj.com/files/api/post?india_might');
    const sidePost = await sidepost.json()


    const metaData = {
        title : `About | Jobaaj Stories`,
        og_discription : `About`,
        og_title: "About",
        og_url : `/About`,
        og_key : ""
      }
      let finalObj = {
          
          exploreTopics : exploreTopics,
          sidePost : sidePost,
          
          metaData:metaData
  
      }
 res.render('about', {finalObj})
}

export {aboutController}