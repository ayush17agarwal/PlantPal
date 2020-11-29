const router = require('express').Router();
let Post = require('../models/post.model');
let Comment = require('../models/comment.model');
// const multer = require('multer');
// const upload = multer({dest: 'uploads/'});

// // router.post('/', upload.single('postImage'), (req, res, next) => {});


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

    const agg = [{'$match': {'_id': post_id}}, {'$count': {'$sum': 1}}];

    Post.aggregate(agg, (err, results) => {
        if(err) return res.status(400).json('Error: ' + err);

        return res.send(results);
    });
});

//num posts
router.get('/num-posts', (req, res) => {
    const {username} = req.query;

    const agg = [{'$match': {'username': username}}, {'$count': {'$sum': 1}}];

    Post.aggregate(agg, (err, results) => {
        if(err) return res.status(400).json('Error: ' + err);

        return res.send(results);
    });
});

//add post


module.exports = router;
