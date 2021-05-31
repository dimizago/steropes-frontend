<script>
	import Search from "./components/Search.svelte";
	import Stocks from "./services/Stocks.svelte"

	let searchQuery = null;

	function handleSubmit () {

	}
	
</script>

<main>
	<Search bind:query={searchQuery} handleSubmit={handleSubmit}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>