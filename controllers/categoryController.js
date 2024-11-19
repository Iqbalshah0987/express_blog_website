const categoryController = async (req, res) => {
    const categoryName = req.params.id;
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
    // category api
    const catpost = await fetch(`https://stories.jobaaj.com/files/api/category?cat_slug=${categoryName}&page=${page}`);
    const catPost = await catpost.json()

    // Explore Topics
    const exploretopics = await fetch('https://stories.jobaaj.com/files/api/category?cats');
    const exploreTopics = await exploretopics.json()

    //India’s Might!
    const sidepost = await fetch('https://stories.jobaaj.com/files/api/post?india_might');
    const sidePost = await sidepost.json()

    // console.log(catPost.total_result)
    const totalPages = Math.ceil(catPost.total_result/10)

    // Meta
    const capitalizeFirstLetter = (str) => str.replace(/\b\w/g, (match) => match.toUpperCase());
    const title = capitalizeFirstLetter(categoryName.replace(/-/g, ' '));

    const categoryDescriptions = {
      'startups-on-fire': 'Listing down those amazing startup stories who are leading in their fields. Make note of what’s happening in emerging businesses',
      'market-leaders-in-action': 'Get to know what is Google up to or what OpenAi is planning for the future. All the updates about the world’s biggest companies',
      'billionaire-insights': 'Stay Updated on what Tesla Mogul’s profit is! Not just Elon Musk, but Adani, Dhamani, and other billionaires are investing or bearing losses.',
      'pathbreaking-announcements': 'Whether a new CEO is appointed or a firm headed to another segment, you’ll find all of that here. So, Business Enthusiasts check this section weekly more.',
  
      // Must Reads 
      'must-reads': 'Some Important topics that should be discussed about some of the most trending topics. Read the ideas conveyed through Jobaaj author’s perspective.',
  
      // ECONOMIC EXPOSE
      'crazy-stock-movements':'Track down how the company’s stocks are performing every day. Find out that one company that has a big name in stock markets and is relevant for investment.' ,
      'the-ipo-train': 'What? A new IPO alert? We have it covered. In a recent update, the IREDA IPO launched and grabbed strong interest in the Market.',
      'quarterly-results': 'Breakdown of a company’s progress per year basis. Was there a boost in profits or a decrease in losses that can depict a firm’s success this year?',
      'financial-insight': 'Do you remember when Go First Flights filed for bankruptcy? We’ve got you covered for such updates that form breaking news in the world of Finance.',
  
      //People@Work
      'entrepreneurial-spirit' : 'Explore the stories behind some brilliant minds of India and Abroad. This section is known to motivate young individuals to emerge as business owners.',
      'financial-fables' : 'Young professionals who are leading in their respective fields, especially finance. Have a look at journeys of such guiding individuals with their back stories.',
      'struggle-to-success' : '“Where they came from to where they are…look at what it took for some to reach a level of success. Share those inspirational tales where abilities got glorified. ',
      'jobaaj-mentors' : 'Find story of your mentor! This segment is specially for the alumnus and students of Jobaaj Learnings where backstories of workshop mentors are penned.',
  
      // Learning resource
      'ca-cfa-frm': 'Check out the salaries, positions and the top firms who are hiring. Look whether you are actually interested or it is really worth it!',
      'ai-ml' : 'What are the threats of AI or some positive impacts of it in the near future. Help yourself answer the question whether technology can be so advanced as to defeat humans?',
      'top-investors' : 'Who is investing in businesses worldwide or the top Investor in the entire world. We got you find out who’s leading in the investing world with power of money.',
      'around-the-globe' : 'What’s happening around the world and what impact can some events have click on most concerning topics and find out under this section',
      'articleships' : 'Hey CA enthusiasts, This will help you find the best companies to complete your articleship around your area.',
      'industrial-training' : '',
  
    };

    const discription = categoryDescriptions[categoryName];

    const metaData = {
      title : `${title} | Jobaaj Stories`,
      og_discription : `${discription}`,
      og_title: title,
      og_url : `/category/${categoryName}`,
      og_key : ""
  }
    let finalObj = {
        categoryName:categoryName,
        exploreTopics : exploreTopics,
        sidePost : sidePost,
        catPost : catPost.cat_posts,
        number_of_page : +totalPages,
        page : +page,
        curr_url : curr_url,
        metaData:metaData

    }
    res.render("category", {finalObj})
  };
  

export { categoryController };
