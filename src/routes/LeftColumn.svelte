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

    #secret{
        color: green; 
        font-size: 12px;
    }

    @media (max-width: 768px) {
        #leftcolumn {
            height: 20%;
            width: 100%;
            order: 1; 
        }
        #secret{
      position: relative;
    }
    .column-padding{
        padding-bottom: 5px;
    }
    }

    
</style>

<div id="leftcolumn" class="element column-padding">
    <div id="secret">
        <p><Image {...kris_where_are_we}/>{ralsei_quote}</p>
    </div>
</div>