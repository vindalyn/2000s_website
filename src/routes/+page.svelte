<script>


import Window from './Window.svelte';
import MiddleWindow from './MiddleWindow.svelte';

import Column from "./Column.svelte"
import LeftColumn from "./LeftColumn.svelte";
import RightColumn from "./RightColumn.svelte";


</script>
<style>
 :global(html){
    background: url('/pix/scanlines.png');
    background-image: linear-gradient(to bottom, #FFB6C1, #FF69B4, #ffa4d2);
    image-rendering: pixelated;
    background-size: 10px 4px;
    background-repeat: repeat;
    overflow: auto;
    font-family: 'Pixeloid Sans';
    margin: 0;
    padding: 0;
    height: 100%;
  }

  :global(body) {
    mix-blend-mode: overlay;
    filter: grayscale(90%) contrast(120%) brightness(95%) blur(0.5px);
  }
@font-face {
    font-family: 'Pixeloid Sans';
    src: url('/fonts/pixeloid_sans.ttf') format('truetype');
}


#main{
    width: 100%;
    height: 100%;
    padding-top: 3%;
    flex-direction: row;
    display: flex;
    justify-content: center;
    
}
#middle{
    height: 100%;
    width: 55%;
}

#left{
    padding-right: 2%;
    padding-left: 1%;
}

#right{
    padding-left: 2%;
    padding-right: 1%;
}
#left, #right{
    flex: 1;
}

@media (max-width: 768px) {
        #main {
            flex-direction: column; 
        }
        #left{
            order: 1;
            padding-bottom: 1rem;
            padding-left: 25%;
        }
        #right{
            order:3;
            padding-left: 25%;
        }
        #left, #right{
            width: 50%;
            flex: 1;
            padding-top: 1rem;
            
        }

        #middle{
            order: 2;
            width: 95%;
            padding-left: 1.25%;
        }
    }



</style>


    <div id="header">
 
    </div>
    

    <div id="main">
        <div id="left">
            <Column content={LeftColumn} title="HUH!?"/>
        </div>

        <div id="middle">
            <Window content={MiddleWindow}/>
        </div>

        <div id="right">
            <Column content={RightColumn} title="fear him." width="95%"/>
        </div>
        

    </div>

    <div id="footer">

    </div>



