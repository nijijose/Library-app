const express = require('express');

const authorsRouter = express.Router();

function router(nav){
    var authors = [
        {
            name: 'Joseph Barbera',
            genre:'Cartoons',
            img:'barbera.jpg'
        },
        {
            name:'J K Rowling',
            genre:'Fantasy,drama, young adult fiction, tragicomedy, crime fiction',
            img:'rowling.jpg'
        },
        {
            name:'Vaikom Muhammad Basheer',
            genre:'Novel, short story, essays, memoirs',
            img:'basheer1.jpg'
        }
    ];
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
           title:'Library',
           authors
        });
    });

    authorsRouter.get('/:id',function(req,res){
        const id =  req.params.id;
        res.render("author",{
            nav,
            title:'Library',
            author: authors[id]
        });
    });

    return authorsRouter;

}

module.exports = router;

