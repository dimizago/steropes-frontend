<script>
    export let results;
    export let handleClick;

</script>

<style>
    ul {
        width: 100%;
        margin: 0;
        padding-inline-start: 0;
    }

    li {
        padding: 0.2rem;
        list-style: none;
        text-align: left;
        width: 100%;
        padding-inline-start: 20px;
    }

    li:hover {
        background-color: rgb(232, 232, 232);
    }

    .results {
        width: 100%;
        max-width: 800px;
        border-radius: 0 0 4px 4px;
        border: 1px solid #ccc;
        font-size: 18px;
        margin: auto;
    }

    .spin {
        margin-top: 10px;
    }

    .stockSymbol {
        font-weight: bold;
    }

    .stockName {
        font-weight: normal;
        color: rgb(112, 112, 112);
        display: inline;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }
</style>

<div>
        <div class="options">
            <ul>
                {#each Object.keys(results) as key}
                    <a on:click|preventDefault={() => handleClick(`http://localhost:8000/stock/v1/intraday/${results[key]['symbol']}`)} href="http://localhost:8000/stock/v1/intraday/{results[key]['symbol']}">
                        <li>
                            <span class="stockSymbol">{@html results[key]['symbol']}</span> 
                            <span class="stockName"> - {@html results[key]['name']}</span>
                        </li>
                    </a>
                 {/each}
            </ul>
        </div>
</div>