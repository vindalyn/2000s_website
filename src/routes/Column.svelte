<script>
    //import Image from "./Image.svelte";
    //import {billson } from "./data.js";
    import TitleBar from "./TitleBar.svelte";
    export let content;
</script>
<style>
    @import "/css/main.css";

    #column {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
        margin: 0;
    }

    @media (max-width: 768px) {
        #column {
            height: 20%;
            padding-left: 10%;
            padding-right: 10%;
            width: 80%;
            order: 3; 
        }
      /*  #secret{
      position: relative;
    }
    <div id="secret">
        <Image {...billson}/>
    </div>
    */
    .column-padding{
        padding-top: 15px;
    }
    }
</style>

<div id="column" class="element column-padding">
    <div class="window">
    <TitleBar />
        {#if content}
            {@html content}
        {/if}

    </div>
</div>