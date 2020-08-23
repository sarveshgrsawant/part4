const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce(
        (counter, blog) => counter + blog.likes,
        0
    )
}
module.exports = {
    dummy,
    totalLikes
}