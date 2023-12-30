export type Categories = 'sveltekit' | 'svelte'

export type Post = {
    title: String,
    slug: String,
    description: String
    date: String
    categories: Categories[]
    published: boolean
}