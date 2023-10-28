<script>
const excavator_url = new URL('/public/pix/construction.gif', import.meta.url).href;
console.log(excavator_url)
</script>
<style>
    
:global(body){
    margin: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #00FF00, #000000, #00FF00);
    background-size: 100% 105%;
    background-repeat: repeat;
    position: absolute;
    overflow: auto;
    color: white;
    font-family: 'Pixeloid Sans';
    
}
@font-face {
    font-family: 'Pixeloid Sans';
    src: url('/public/fonts/pixeloid_sans.ttf') format('truetype');
}


#leftcolumn, #rightcolumn, #content{
    margin: 0;
}
#middle{
    border: darkgreen solid 8px;
    width: 100vh;
    display: flex;
    flex-direction: column;
}

#content > *{
    margin-left: 20px;
}
   

#content {
    background: linear-gradient(to bottom, #000000, #333333);
    flex: 1;
}
.window-title-bar{
    background-color: #2fb43a;
    border-bottom: darkgreen solid 3px;
    position: relative;
    width: 100%;
    height: 30px;
    font-size: 14px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    align-items: center; 
}
.window-title-bar p {
    padding-left: 10px;
}
#extra-list{
    width: 100%;
}
#extra-list > tr > td{
    padding-left: 10px;
    font-size: small;
}

#middle .exc{
    padding-left: calc(50vh - 184px*0.6)
}
#main{
    width: 100%;
    height: 94vh;
    padding-top: 3vh;
}
.row {
  display: flex;
  flex-wrap: wrap;
}

.element {
  flex: 1;
  margin: 5px; 
}


@media (max-width: 768px) {
  .element {
    flex: 0 0 calc(50% - 10px); 
  }
}

</style>

<body>
    <div id="header">
 
    </div>
    
    <div id="main" class="row">
        
        <div id="leftcolumn" class="element">
            <p></p>
        </div>

        <div id="middle">
            <div class="window-title-bar">
                <span style="margin-left: 98vh; font-size:19px;">X</span>
            </div>
            <div id="content" class="element">
                
                <p>center</p>
                <p>hiii this is my epic website - vindalyn ;3</p>
                <p>also:</p>
                <table id="extra-list">
                    <tr>
                        <td>dwizzy is a certified cat girl!!! the cutest one there is!!!</td>
                    </tr>
                </table>
                <p>this website is still under construction!</p>
                <img src={excavator_url} alt="excavator digging" class="exc" width=184px height=124px>
            </div>
        </div>
       
        <div id="rightcolumn" class="element">
            <p></p>
        </div>
    </div>

    <div id="footer">

    </div>

</body>


