import type { Post } from "$lib/types";
import { json, type RequestHandler } from "@sveltejs/kit";

async function getPosts(){
    let posts: Post[] = []
    
    const paths = import.meta.glob('/src/posts/*.md',{
        eager: true
    })

    // console.log(path)
    for (const path in paths)
    {
        // get SLUG by getting file name
        const slug = path.split('/').at(-1)?.replace(".md",'');
        
        // get file
        const file = paths[path];
        
        // get metadata from file 
        const metadata = file.metadata;

        // merge metadata and slug
        const post: Post = {...metadata, slug};

        post.published && posts.push(post);

    }

    return posts
}

export const GET: RequestHandler = async () => {
    const posts = await getPosts()
    return json(posts);
};