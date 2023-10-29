<script>


import Image from "./Image.svelte";
import {ralsei_quote, kris_where_are_we } from "./data.js";

</script>
<style>
    @import "/css/main.css";
    #leftcolumn {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
        margin: 0;
    }
</style>

<div id="leftcolumn" class="element">
    <p style="position: absolute; bottom: 5px; color: green; font-size: 12px;"><Image {...kris_where_are_we}/>{ralsei_quote}</p>
</div>