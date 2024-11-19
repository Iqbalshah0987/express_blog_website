
    const unsubController = async (req, res) => {
        const email = req.params.unsubscribe_email;
        // const message = req.body.msg;
        // console.log(name,message)

        const metaData = {
        title : ` Jobaaj Stories`,
        og_discription : `Feedback`,
        og_title: "unsub",
        og_url : `unsubscribe`,
        og_key : ""
    }
        let finalObj = {
            email:email,
            metaData:metaData

        }
        res.render("unsub", {finalObj})
    };
    

    export { unsubController };
