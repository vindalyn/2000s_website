<script>
import {hello_kitty, excavator, demon_quote } from "./data.js";
import Image from "./Image.svelte";
</script>
<style>
* {
    padding-left: 2.5px;
}
#exc{
    padding: 0;
    padding-bottom: 1rem;
}
#extra-list > tr > td{
    padding-left: 10px;
    padding-right: 30px;
    font-size: small;
}
.color{
    color: #fa4ca9;
}
</style>

<div class="color">

<p>hiii, and welcome to my epic website!</p>

<Image {...hello_kitty}/>


<p>i'm vindalyn, a silly, sixteen-year-old transfem gal, and... i was really, really bored, so i decided to make this website! :3</p>

<p>also:</p>
<p>good people :3:</p>

<table id="extra-list">
    <tr>
        <td>dwizzy!!</td>
    </tr>

</table>

<p>this website is still under construction!</p>

<span style="color: var(--window-background);">{demon_quote}</span>

<p>as seen here!!! this gif signifies construction, y'know? progress ;3</p>
<div id="exc">

<Image {...excavator}/>

</div>

</div>
