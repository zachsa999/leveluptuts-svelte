<script>
    // import '../tailwind.css';
</script>

<header>
    <h1>Welcome</h1>
    <nav class="bg-blue-200">
        <ul>
        <li><a sveltekit:prefetch href="/">Home</a></li>
        <li><a sveltekit:prefetch href="/about">About</a></li>
        <li><a sveltekit:prefetch href="/posts">Posts</a></li>

        <!-- <li><a sveltekit:prefetch href="/contact">Contact</a></li> -->
        </ul>
    </nav>
</header>

<!-- <style lang="scss">
    :root {
        --primary: #ff0000;
    }

    header {
        nav {
            background: blue;
        }
        padding: 1rem;
        background: var(--primary);
    }
</style> -->