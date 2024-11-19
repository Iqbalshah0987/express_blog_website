
    const unsubLetterController = async (req, res) => {
        const param = req.params.u

        const metaData = {
        title : ` Jobaaj Stories`,
        og_discription : `Feedback`,
        og_title: "unsub letter",
        og_url : `unsub`,
        og_key : ""
    }
        let finalObj = {
            param : param,
            metaData:metaData

        }
        res.render("unsub-letter", {finalObj})
    };
    

    export { unsubLetterController };
