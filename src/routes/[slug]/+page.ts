import { error } from "@sveltejs/kit";
import type { PageLoad } from "../$types";

export const load: PageLoad = async ({ params }) => {
    try{
        const post = await import(`../../posts/${params.slug}.md`)
        return {
            content: post.default,
            metadata: post.metadata
        }
    }catch(e){
        throw error(404, `Could not find ${params.slug}`);
        
    }
};