import { json, type RequestHandler } from "@sveltejs/kit";

async function getPosts(){
    let posts = []
    
    const path = import.meta.glob('/src/posts/*.md')

    // console.log(path)
    
    return posts
}

export const GET: RequestHandler = async () => {
    const posts = await getPosts()
    return json(posts);
};