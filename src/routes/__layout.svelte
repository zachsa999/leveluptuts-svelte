<script>
    import "../app.css";
    import Header from '$lib/header.svelte';
</script>


<Header />

<main class="bg-blue-400">
    <slot />    
</main>

<footer>
    <p class="text-3xl font-bold underline">Copywrite 2029</p>
</footer>

<style >
    :root {
        --primary: #ff0000;
    }
    main {
        padding: 1rem;
    }
    footer{
        padding: 1rem;
        background: var(--primary);
    }
    :global(header) {
        /* :global(nav) {
            background: blue;
        } */
        padding: 1rem;
        background: var(--primary);

    }
</style>