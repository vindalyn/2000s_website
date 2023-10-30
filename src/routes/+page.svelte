<script>

import Middle from './Middle.svelte';
import Column from "./Column.svelte"
import LeftColumn from "./LeftColumn.svelte";
import RightColumn from "./RightColumn.svelte";
</script>
<style>
    @import "/css/color.css";
:global(body){
    margin: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #FFB6C1, #FF69B4, #ffa4d2);
    image-rendering: pixelated;
    background-size: 10px 4px;
    background-repeat: repeat;
    position: absolute;
    overflow: auto;
    color: var(--text-color);
    font-family: 'Pixeloid Sans';
    
}
@font-face {
    font-family: 'Pixeloid Sans';
    src: url('/fonts/pixeloid_sans.ttf') format('truetype');
}




#main{
    width: 100%;
    height: 94vh;
    padding-top: 3vh;
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
@media (max-width: 768px) {
        .row {
            flex-direction: row; /* Stack columns vertically for mobile */
        }
    }



</style>

<body>
    <div id="header">
 
    </div>
    

    <div id="main" class="row">
        
    <Column >
        </Column>
    <Middle />
    <RightColumn />

    </div>

    <div id="footer">

    </div>

</body>


