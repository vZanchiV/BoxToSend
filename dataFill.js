var casual =  require('casual');

module.exports = () => {
    const data = { posts: [] }
    // Create 25 users
    for (let i = 0; i < 25; i++) {
      data.posts.push({ id: i, title: casual.title, content:casual.sentences(n=58),author: casual.name})
    }
    return data
  }