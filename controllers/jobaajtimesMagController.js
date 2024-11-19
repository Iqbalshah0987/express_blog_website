const jobaajtimesMagController = async (req, res) => {

  const edition = req.params.edition

 

    // singlemag api
    const singlemag = await fetch(`https://stories.jobaaj.com/files/api/magazineAPI?edition=${edition}`);
    const singleMag = await singlemag.json()
    console.log(singleMag)

    // jobaajtmes mags
    // const jobaajtmesMags = await fetch(`https://stories.jobaaj.com/files/api/jobaajtimes_index?year=2023`);
    // const jobaajTmesMags = await jobaajtmesMags.json()



    const metaData = {
      title : `Jobaaj Times`,
      og_discription : `Jobaaj Times`,
      og_title: "Jobaaj Times",
      og_url : `/Jobaaj Times`,
      og_key : ""
    }
    let finalObj = {
      singleMag :  singleMag,
        // mags : jobaajTmesMags,
        metaData:metaData

    }
    res.render("jobaajtimesMag", {finalObj})
  };
  

export { jobaajtimesMagController };
