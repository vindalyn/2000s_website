<script>
import {nav} from "./data.js";
export let mobile_compatible;

mobile_compatible = mobile_compatible || true;
</script>
<style>
#navlist{
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 10px;
    font-size: 17px;
    height: 32.25rem;
}
.entry{
    padding-top: 2px;
    display: flex;
    align-items: center;
    
      
}
@media (max-width: 768px) {
    .mobile-compatible{
        height: 4rem;
    }
}

.entry img{
    padding-right: 7.5px;
}

</style>

<div id="navlist" class:mobile-compatible={mobile_compatible}>
    {#each nav as entry}
    <div class="entry">
        <img src="{entry.src}" alt={entry.alt} width={entry.width} height={entry.height}>
        <a href={entry.url}>{entry.page}</a>
    </div>
    {/each}
</div>