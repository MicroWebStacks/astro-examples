//https://stackoverflow.com/questions/73306060/title-is-undefined-while-generating-sitemap-in-astro

async function load() {
    console.log("load()")
    const fetchedPosts = import.meta.glob('../pages/*.mdx', { eager: true });
    const getPost = async (key) => {
      const url = key.replace('../pages/', '/').replace('.mdx', '/');
      //const awaitedPost = await fetchedPosts[key].default();
      const awaitedPost = fetchedPosts[key]
      const item = {
        ...awaitedPost,
        url,
        key,
      }
      return item;
    };
  
    const mappedPosts = Object.keys(fetchedPosts).map((key) => {
      const awaitedPost = getPost(key);
      return awaitedPost;
    });
  
    const results = await Promise.all(mappedPosts);
    return results;
  }
  
  let _posts;
  
  export async function getAllPosts() {
    _posts = _posts || load();
  
    return await _posts;
}
