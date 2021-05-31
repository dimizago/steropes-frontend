<script>
import {getStockListBySymbol} from "../services/Stocks.svelte";
import SearchResults from './SearchResults.svelte';

    let query = "";
    let isLoading = false;
    let searchResults = [];
    let timer;

    
   async function debounce(searchString) {
        clearTimeout(timer);
        timer = setTimeout(async() => {
           getStockListBySymbol(query).then(res => {
               isLoading = false;
               searchResults = res;
           });
        }, 300);
    }

    function handleSubmit() {
        searchResults = [];

        let searchTerm = query.trim().toLowerCase();

        if ((searchTerm.length >= 1) && searchTerm) {
            isLoading = true;
            debounce(searchTerm);
        } 
    }
</script>

<div class="title">
    <h1>Steropes</h1>
</div>
<div class="search">
    <form
        id="search-stock"
        class="search-form"
        on:input|preventDefault={handleSubmit}
        on:submit|preventDefault
    >
        <label>
            <input
                bind:value={query}
                class="search-input"
                type="search"
                placeholder="Find a Stock to Predict"
            />
        </label>
    </form>
</div>
<div class="options-container">
        <SearchResults bind:results={searchResults} bind:isLoading={isLoading}/>
</div>

<style>
    .search-input {
        width: 100%;
        max-width: 800px;
        border-radius: 4px;
        border: 1px solid #cccccc;
        padding: 10px 20px;
        font-size: 20px;
        margin: 0;
    }

    .search-input::-webkit-search-cancel-button {
        cursor: pointer;
    }

    label {
        margin-bottom: 0;
    }

    .search-input:focus {
        outline: none;
        border-color: #90bdf1;
    }

    .search {
        animation: fadeInUp 1.5s;
    }

    @keyframes fadeInUp {
        from {
            transform: translate3d(0, 40px, 0);
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .title h1 {
        font-size: 56px;
        text-transform: uppercase;
        font-weight: 100;
    }

    .title {
        animation: fadeInUp 1s;
    }
</style>
