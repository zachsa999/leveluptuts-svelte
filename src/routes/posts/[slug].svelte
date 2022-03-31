
<script context="module">
	export async function load({ params }) {
		try {
			const Post = (await import(`../../posts/${params.slug}.md`));


			console.log('{Post', Post);
			return {
				//data passed into component
				props: {
					Post: Post.default

				}
			};
		} catch (e) {
			// console.log('e', e);
			// return {
			// 	redirect: "/posts",
			// 	status: 303
			// }

			return{ 
				status: 404,
				error: "Not Found"
			}


		}
	}
</script>

<script>
	// import Hello from '../../posts/hello.md';
	export let Post;
</script>

<Post />
