const Comment = require('../models/comments');
const Like = require('../models/likes');
const Blog = require('../models/blogs');

module.exports.home = function(req, res){
    return res.render('blogs_home');
}

module.exports.zeller = async function(req, res){
    try{
        let blog = await Blog.findOne({topic: 'zeller'})
        .populate({
            path: 'comments',
            populate: {
                path: 'user',
            }
        })
        .populate('likes');
        
        let comments = await Comment.find({})
        .sort('-createdAt')
        .populate('user', 'email username name');
    
        return res.render('zeller_intro', {
            topic: 'zeller',
            comments: comments,
            blog: blog,
        });
    } catch (err) {
        console.log('Error: ', err);
        return;
    }    
}

module.exports.traffic = function(req, res){
    return res.render('traffic_intro', {
        topic: 'traffic'
    });
}
