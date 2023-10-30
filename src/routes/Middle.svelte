<script>
import Image from "./Image.svelte";
import TitleBar from "./TitleBar.svelte";
import {hello_kitty, excavator, demon_quote } from "./data.js";

</script>
<style>
@import '/css/main.css';

#middle{
    border: var(--border-color) solid 8px;
    background-color: #ffd6ed;
    width: 45%;
    display: flex;
    flex-direction: column;
}

#content > *{
    margin-left: 20px;
    margin-right: 20px;
}
   

#content {
    background: var(--window-background);
    flex: 1;
}


.window-title-bar p {
    padding-left: 10px;
}
#extra-list{
    width: 100%;
}
#extra-list > tr > td{
    padding-left: 10px;
    padding-right: 30px;
    font-size: small;
}
@media (max-width: 768px) {
        #middle {
            width: 100%;
            order: 2; 
        }
    }

</style>

<div id="middle">
    <TitleBar />


    <div id="content" class="element">
        
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

        <Image {...excavator}/>

    </div>
</div>