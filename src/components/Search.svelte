<script>
    export let query;
    export let handleSubmit;

</script>

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

    .search-input::-webkit-search-cancel-button{
        cursor: pointer;
    }

    label{
        margin-bottom: 0;
    }

    .search-input:focus{
        outline:none;
        border-color: #ffa500;
    }

    .search {
        animation: fadeInUp 1s;
    }

    @keyframes fadeInUp {
        from { 
            transform: translate3d(0,40px,0);
            opacity: 0; 
        }
        to { 
            opacity: 1;
        }
    }

</style>

<div class="search">
    <form id="searchStock" class="search-form" on:input|preventDefault={handleSubmit} on:submit|preventDefault>
        <label>
            <input bind:value={query} class="search-input" type="search"
                   placeholder="Find a Stock to Predict" />
        </label>
    </form>
</div>

<div class="results">

</div>