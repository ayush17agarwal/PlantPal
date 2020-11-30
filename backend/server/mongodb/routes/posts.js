const router = require('express').Router();
let Post = require('../models/post.model');
let Comment = require('../models/comment.model');


//add like
router.post('/like', (req, res) => {
    const {post_id, username} = req.body;

    Post.findById(post_id)
        .then(post => {
            post.likes.push(username);
            post.save()
                .then(() => {
                    return res.send({success: true});
                })
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
});

//num likes
router.get('/num-likes', (req, res) => {
    const {post_id} = req.query;

    Post.findById(post_id)
        .then(post => {
            const num_likes = '' + post.likes.length
            return res.send(num_likes);
        })
});

//num posts
router.get('/num-posts', (req, res) => {
    const {username} = req.query;

    const agg = [{'$match': {'username': username}}, 
                {'$group': {'_id': '$username', 'sum': {'$sum': 1}}}];

    Post.aggregate(agg, (err, results) => {
        if(err) return res.status(400).json('Error: ' + err);

        return res.send(results[0]);
    });
});

//add post no image
router.post('/add', (req, res) => {
    const{caption, username} = req.body;

    const newPost = new Post({username, caption});
    newPost.save()
        .then(() => {
            return res.send({
                success: true,
                message: 'Added a post'
            });
        })
        .catch((err) => res.status(400).json('Error: ' + err));
});

//get all posts by username
router.get('', (req, res) => {
    const{username} = req.query;

    Post.find({username: username}, (err, posts) => {
        if(err) {
            return res.status(400).json('Error: ' + err);
        }

        return res.send(posts);
    });
});

//get all posts sorted by num-likes
router.get('/all', (req, res) => {
    Post.find({}, (err, posts) => {
        if(err) return res.status(400).json('Error: ' + err);

        return res.send(posts);
    })
})


module.exports = router;
