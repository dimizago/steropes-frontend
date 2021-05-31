<script>
    import Backend from "./Backend.svelte"

    export const search = async (symbol) => {
        try {
            const response = await API.get(`search/${symbol}`)
            return response
        } catch (error) {
            console.error(error);
        }
    }
</script>

<main>

</main>

<style>

</style>