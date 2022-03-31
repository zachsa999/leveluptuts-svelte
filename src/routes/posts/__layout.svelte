<!-- <script>
// import { time_ranges_to_array } from "svelte/internal";
    export async function load() {
        const posts = import.meta.globEager('../../posts/*.md');
        const postList = Object.values(posts);
        const postsMeta = PerformanceObserverEntryList.Map((post) => {
            return postMessage.metadata;
        });
        
        console.log('posts');
        return {
            props: {
                posts: postsMeta
            }
        };
    }
    </script>

<div>
    <slot />
    <aside>
        <h5>Archive</h5>
        <ul>
            {#each posts as post}
                <li><a href={`/posts/${post.slug}`>{post.title}</a></li>
        </ul>
    </aside> 
</div> -->

<script context="module">
	export async function load() {
		const posts = import.meta.globEager('../../posts/*.md');
		const postsList = Object.values(posts);
		const postsMeta = postsList.map((post) => {
			return post.metadata;
		});
		return {
			props: {
				posts: postsMeta
			}
		};
	}
</script>

<script>
	export let posts;
</script>

<div>
	<slot />
	<aside>
		<h5>Archive</h5>
		<ui>
			{#each posts as post}
				<li><a sveltekit:prefetch href={`/posts/${post.slug}`}>{post.title}</a></li>
			{/each}
            <li><a rel="external" href="https://leveluptutorials.com">hemlo</a></li>
		</ui>
	</aside>
</div>