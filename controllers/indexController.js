class Index {
    static showIndex(req,res){
        res.render("index");
    }

    static showNewIndex(req,res){
        res.render("newIndex");
    }
}

module.exports = Index;
