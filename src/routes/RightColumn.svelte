<script>
    import Image from "./Image.svelte";
    import {billson } from "./data.js";
</script>
<style>
    @import "/css/main.css";

    #rightcolumn {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
        margin: 0;
    }

    @media (max-width: 768px) {
        #rightcolumn {
            height: 20%;
            width: 100%;
            order: 3; 
        }
        #secret{
      position: relative;
    }
    .column-padding{
        padding-top: 15px;
    }
    }
</style>

<div id="rightcolumn" class="element column-padding">
    <div id="secret">
        <Image {...billson}/>
    </div>
</div>