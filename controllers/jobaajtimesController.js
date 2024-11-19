const jobaajtimesController = async (req, res) => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

 

    // jobaajtmes api
    const jobaajtmes = await fetch(`https://stories.jobaaj.com/files/api/jobaajtimes_index?yo`);
    const jobaajTmes = await jobaajtmes.json()

    // jobaajtmes mags
    // const jobaajtmesMags = await fetch(`https://stories.jobaaj.com/files/api/jobaajtimes_index?year=2023`);
    // const jobaajTmesMags = await jobaajtmesMags.json()



    const metaData = {
      title : `Jobaaj Times`,
      og_discription : `Jobaaj Times`,
      og_title: "Jobaaj Times",
      og_url : `/jobaajtimes`,
      og_key : ""
  }
    let finalObj = {
        dir : jobaajTmes.dir,
        // mags : jobaajTmesMags,
        metaData:metaData

    }
    res.render("jobaajtimes", {finalObj})
  };
  

export { jobaajtimesController };
