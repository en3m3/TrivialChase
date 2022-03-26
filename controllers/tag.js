exports.getAllTags = (req, res, next) => {
    console.log("here");
    res.status(200).json({
        posts: [{ title: 'tag', content: 'This is the tag endpoint' }]
    });
};

exports.getTag = (req, res, next) => {
    console.log("here");
    res.status(200).json({
        posts: [{ title: 'tag', content: 'This is the tag endpoint' }]
    });
};

exports.postTag = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'tag', content: 'This is the tag endpoint' }]
    });
};

exports.putTag = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'tag', content: 'This is the tag endpoint' }]
    });
};

exports.deleteTag = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'tag', content: 'This is the tag endpoint' }]
    });
};