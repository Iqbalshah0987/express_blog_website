
    const feedbackController = async (req, res) => {
        // const name = req.body.name;
        // const message = req.body.msg;
        // console.log(name,message)

        const metaData = {
        title : ` Jobaaj Stories`,
        og_discription : `Feedback`,
        og_title: "title",
        og_url : `unsub`,
        og_key : ""
    }
        let finalObj = {
            
            metaData:metaData

        }
        res.render("feedback", {finalObj})
    };
    

    export { feedbackController };
