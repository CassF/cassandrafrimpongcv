class Index {
    static showIndex(req,res){
        res.render("underConstruction");
    }

    static showNewIndex(req,res){
        res.render("newIndex");
    }
}

module.exports = Index;