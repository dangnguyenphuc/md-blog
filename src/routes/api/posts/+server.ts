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
        const slug = path.split('/').at(-1)?.replace('.md','');
        // get file
        const file = paths[path];
        if(
            slug &&                 // slug exists
            file &&                 // file exists
            typeof file === 'object' &&     // file is an obj
            'metadata' in file      // file has metadata field
        ){
            // get metadata from file 
            const metadata = file.metadata as Omit<Post, 'slug'>;

            // merge metadata and slug
            const post = { ...metadata, slug } satisfies Post;

            post.published && posts.push(post);
        }
    }

    // sort posts 
    posts = posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return posts
}

export const GET: RequestHandler = async () => {
    const posts = await getPosts()
    return json(posts);
};