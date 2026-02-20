<script>
    import {author_name, published_year} from '$lib/config';
</script>

<footer>
    <p>By <b>{author_name}</b> &copy  {published_year}-{new Date().getFullYear()}</p>
</footer>

<style>
    footer{
        padding-block: var(--size-7);
        border-top: 1px solid var(--border);
    }

    p{
        color: var(--text-2);
    }
</style>