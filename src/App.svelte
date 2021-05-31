<script>
	import Search from "./components/Search.svelte";
	import Stocks from "./services/Stocks.svelte"

	let searchQuery = null;

	function handleSubmit () {
	}
	
</script>

<div class="steropes-container">
	<div class="basic-container">
		<Search/>
	</div>
</div>

<style>
	.steropes-container {
		text-align: center;
		width: 100%;
		height: 100%;
		margin: 0 auto;
	}
</style>