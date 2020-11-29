const router = require('express').Router();
let Comment = require('../models/comment.model');
let Post = require('../models/post.model'); 


router.post('/add', (req, res) => {
    const post_id = req.body.post_id;
    const username = req.body.username;
    const comment = req.body.comment;

    const newComment = new Comment({username, comment});

    Post.findById(post_id)
        .then(post => {
            post.comments.push(newComment);
            post.save()
                .then(() => {
                    return res.send({success: true});
                })
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;