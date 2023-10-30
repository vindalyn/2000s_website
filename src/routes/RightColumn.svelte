<script>
    import Image from "./Image.svelte";
    import {billson } from "./data.js";
</script>
<style>
    #secret{
        padding-top: 0.3rem;
        padding-bottom: 0.15rem;
    }
    @media (max-width: 768px) {
        #secret{
            
      position: relative;
    }
    }
</style>

    <div id="secret">
        <Image {...billson}/>
    </div>
