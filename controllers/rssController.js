getRssSourceFromLink = (req, res) => {
    res.status(200).send(req.params.link);
};

getAllLinks = (req, res) => {
    res.status(200).send("all links");
}

module.exports = {
    getRssSourceFromLink,
    getAllLinks
};