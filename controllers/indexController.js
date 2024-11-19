const indexController = async (req, res) => {
    
    const ress = await fetch('https://stories.jobaaj.com/files/api/newsLetter?mailsPosts=4');
    const data = await ress.json()
    const allpostfrmserver = await fetch('https://stories.jobaaj.com/files/api/stories?mainstory');
    const allpostdata = await allpostfrmserver.json()
    const homepagepost = await fetch('https://stories.jobaaj.com/files/api/post?home_page_post');
    const homePagePost = await homepagepost.json()
    const exploretopics = await fetch('https://stories.jobaaj.com/files/api/category?cats');
    const exploreTopics = await exploretopics.json()
    const sidepost = await fetch('https://stories.jobaaj.com/files/api/post?india_might');
    const sidePost = await sidepost.json()
    const mag = await fetch('https://stories.jobaaj.com/files/api/mag_api');
    const magazines = await mag.json()
    // console.log(data)

    const workshops = [
        {
            id:0,
            title:"Management",
            cat:"2 days Management Consulting Workshop",
            desc : "Learn to build strategic frameworks, crack case interviews, and succeed as a management consultant.",
            url:"https://go.jobaaj.com/Shubham-Agarwal",
            img:"https://www.jobaajlearnings.com/assets/workshop/2.png"
        },
        {
            id:1,
            title:"Data Science",
            cat:"5 Days Kickstarter Data Science Workshop",
            desc : "Land a 5-figure data scientist job with no coding experience. Learn the path to success now.",
            url:"https://go.jobaaj.com/tableau-workshop-p1",
            img:"https://www.jobaajlearnings.com/assets/workshop/5.png"
        },
        {
            id:2,
            title:"Trading",
            cat:"3 Days Option Trading Workshop",
            desc : "Discover the secrets to profitable options trading, no matter which way the markets move.",
    
            url:"https://go.jobaaj.com/option-trading-workshop",
            img:"https://www.jobaajlearnings.com/assets/workshop/4.png"
        },
        {
            id:3,
            title:"Finance",
            cat:"Financial Modelling Workshop",
            desc : "Become a Financial Modelling Expert and land your dream job in Finance with our training program.",
    
            url:"https://go.jobaaj.com/financial_modelling",
            img:"https://www.jobaajlearnings.com/assets/workshop/1.png"
        },
    ]
    const metaData = {
        title : "Jobaaj Stories: Where Inspiration Meets Knowledge!",
        og_discription : "Jobaaj Stories is home to a plethora of content categorised in distinctive niches such as finance related news updates, inspirational stories about professionals and entrepreneurs in various domains, and global financial insights.",
        og_title: "",
        og_url : "https://stories.jobaaj.com/",
        og_key : "test,test2"
    }
    let finalObj = {
        allpost : allpostdata,
        mail : data.pop,
        homePagePost : homePagePost,
        workshops: workshops,
        exploreTopics: exploreTopics,
        sidePost: sidePost,
        magazines : magazines,
        metaData : metaData,
        slot : 1363350575
    };

   // data.pop[0].thumb = "images/placeholder.jpg"
    res.render("index", {finalObj})
}
  

export { indexController };
