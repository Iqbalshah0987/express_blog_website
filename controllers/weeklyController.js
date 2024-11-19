const weeklyController = async (req, res) => {
    // const wk = req.params.wk.toLowerCase();
    // const capitalizeFirstLetter = (str) => str.replace(/\b\w/g, (match) => match.toUpperCase());
    // const title = capitalizeFirstLetter(wk.replace(/-/g, ' '));

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
    
    // weekly api
    const weeklyData = await fetch(`https://stories.jobaaj.com/files/api/newsLetter?weekly=1&page=${page}`);
    const weeklydata = await weeklyData.json()
    // console.log(weeklydata.pop.length)

    const totalPages = Math.ceil(weeklydata.total_result/10)

    const metaData = {
      title : `Weekly Digest | Jobaaj Stories`,
      og_discription : "Search Page",
      og_title: "",
      og_url : `/weekly-digest`,
      og_key : ""
  }
    let finalObj = {
        weeklydata : weeklydata.weekly,
        metaData:metaData,
        number_of_page : +totalPages,
        page : +page,
        curr_url : curr_url,
    }
    res.render("weekly", {finalObj})
  };
  

export { weeklyController };
