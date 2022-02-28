module.exports = {
    postsTagList: function (collection) {
        function filterPostsTagList(tags) {
            return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
        }

        let tagSet = new Set();
        collection.getAll().forEach(item => {
            (item.data?.tags || []).forEach(tag => {tagSet.add(tag)});
        });

        return filterPostsTagList([...tagSet]);
    }
}