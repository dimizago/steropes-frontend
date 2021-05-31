<script context="module">
import {API} from './API.svelte';

export const getStockListBySymbol = async (symbol) => {
    try {
        const response = await API.get(`/search/${symbol}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const getStockBySymbol = async (symbol, period = "intraday") => {
    try {
        const response = await API.get(`/${period}/${symbol}`);
        return response.results;
    } catch (error) {
        console.error(error);
    }
};

</script>

<div />

<style></style>
