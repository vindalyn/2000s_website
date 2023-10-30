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


<p>i'm vindalyn, and... i was really, really bored, so i decided to make this website!</p>

<p>also:</p>

<table id="extra-list">
    <p>good girls:</p>
    <tr>
        <td>dwizzy!!<img src="/pix/gifs/cute/hearts.gif" alt="a floating hearts gif ;3" width=46px height=46px></td>
    </tr>
    <tr>
        <td>AZULI!!!</td>
    </tr>

</table>
<p>WHY THE HELL IS AZULI ABLE TO MAKE ME MELT? WHAT THE HELL-</p>

<p>this website is still under construction!</p>

<span style="color: var(--window-background);">{demon_quote}</span>

<p>as seen here!!! this gif signifies construction, y'know? progress ;3</p>
<div id="exc">

<Image {...excavator}/>

</div>

</div>
