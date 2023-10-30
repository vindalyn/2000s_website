<script>

import Image from "./Image.svelte";
import {ralsei_quote, kris_where_are_we } from "./data.js";

</script>
<style>
    #secret{ 

        color: green; 
        font-size: 12px;
    }

    @media (max-width: 768px) {
        #secret{
      position: relative;
    }

    }


    
</style>

<div id="secret">

    <p><Image {...kris_where_are_we}/>{ralsei_quote}</p>

</div>