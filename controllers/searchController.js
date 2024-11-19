const searchController = async (req, res) => {
    const searchtext = req.params.searchtext.toLowerCase();
    let page = req.params.page;
    let curr_url = `${req.originalUrl}`;
    
    if(page===undefined){
      page = 1;
      curr_url = curr_url + '/'
    }else{
      // Define a regular expression to match the last digit in the URL path
      const lastDigitRegex = /\d(?=[^/]*$)/;

      // Modify the URL path by removing the last digit
      curr_url = curr_url.replace(lastDigitRegex, '');
    }

    console.log(searchtext,page)
    console.log(`https://stories.jobaaj.com/files/api/search?search_keyword=${searchtext}&page=${page}`)

    
    // post api
    const searchDataResponse  = await fetch(`https://stories.jobaaj.com/files/api/search?search_keyword=${searchtext}&page=${page}`);

    if (!searchDataResponse.ok) {
      throw new Error(`Failed to fetch search data. Status: ${searchDataResponse.status}`);
    }
    let searchdata;
    try {
        const responseData = await searchDataResponse.text();
        searchdata = responseData ? JSON.parse(responseData) : {};
    } catch (error) {
        console.error('Error parsing JSON:', error);
        searchdata = {};
    }

    // Explore Topics
    const exploretopics = await fetch('https://stories.jobaaj.com/files/api/category?cats');
    const exploreTopics = await exploretopics.json()

    //India’s Might!
    const sidepost = await fetch('https://stories.jobaaj.com/files/api/post?india_might');
    const sidePost = await sidepost.json()

    const totalPages = Math.ceil(searchdata.total_result/10)
    

    const metaData = {
      title : `${searchtext} | Jobaaj Stories`,
      og_discription : "Search Page",
      og_title: "",
      og_url : `/search/${searchtext}`,
      og_key : ""
  }
    let finalObj = {
        
        page : +page,
        searchdata : searchdata.search,
        searchtext : searchtext,
        exploreTopics : exploreTopics,
        sidePost : sidePost,
        metaData:metaData,
        number_of_page : +totalPages,
        curr_url : curr_url,

    }
    res.render("search", {finalObj})
  };
  

export { searchController };
