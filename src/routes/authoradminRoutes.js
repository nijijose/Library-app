const express = require('express');
const authoradminRouter = express.Router();

function router(nav){
    authoradminRouter.get('/',function(req,res){
        res.render('addAuthor',{
            nav,
            title:'Library'
        });
    });

    authoradminRouter.get('/add',function(req,res){
        res.send("Hey the author is added successfully");
    })

    return authoradminRouter;

}

module.exports = router;