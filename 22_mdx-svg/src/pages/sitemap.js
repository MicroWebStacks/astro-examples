//https://stackoverflow.com/questions/73306060/title-is-undefined-while-generating-sitemap-in-astro
import { getAllPosts } from "../libs/posts";

export async function get(){
    console.log("running get()")
    const feed = []
    const allPosts = (await getAllPosts())

allPosts.forEach((post) => {
    console.log(post)
    feed.push({
        title: post.frontmatter.title,
        id: `https://example.com/${post.url}`,
        link: `https://example.com/${post.url}`,
        content: post.frontmatter.description,
    });
})

return { body: JSON.stringify(feed) }
}
