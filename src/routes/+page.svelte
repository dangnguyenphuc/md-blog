<script lang="ts">
    import * as config from '$lib/config.js'
    export let data;
</script>

<svelte:head>
    <title>
        {config.title}
    </title>
</svelte:head>

<section>
    <ul class="posts">
        {#each data.posts as post}
            <li class="post">
                <a href={post.slug} class="title">{post.title}</a>
                <p class="date">{post.date}</p>
                <p class="description">{post.description}</p>
            </li>
        {/each}
    </ul>
</section>

<style>
    .posts{
        display: grid;
        gap: var(--size-7);
    }

    .post{
        max-inline-size: var(--size-content-3);
    }   
</style>