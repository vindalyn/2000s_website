<script>
    import Window from "../Window.svelte";
    import Content from "./Content.svelte";
    import Column from "../Column.svelte";
    import nav from "../nav.svelte";
    nav.mobile_compatible = true;
    const border_color="#8e3a8a";
    const window_background="#b57dbd";
    const titlebar_text_color="#8e3a8a";
    const titlebar_background_color="#c4c2c2";
</script>
<style>
    @import '/css/main.css';

    :global(html){
    background: url('/pix/scanlines.png');
    background-image: linear-gradient(to bottom, #8e3a8a, #8e3a8a, #b57dbd);
    image-rendering: pixelated;
    background-size: 10px 4px;
    background-repeat: repeat;
    overflow: auto;
    font-family: 'Pixeloid Sans';
    height: 100%;
  }
  :global(body), :global(html){
    margin: 0;
    padding: 0;
  }
  #main{
    width: 97%;
    padding-left: 1%;
    flex-direction: row;
    display: flex;
  }
#nav{
    position: fixed;
        left: 0;
        top: 0;
}
  #content {
    margin-left: 240px;
    height: 95vh;
    width: 195vh;
    margin-right: 7.5px;
  }
  

</style>

<div id="main">
    <div id="nav">
        <Column content={nav} title="navigation" border_color={border_color} window_background={window_background}
        titlebar_text_color={titlebar_text_color} titlebar_background_color={titlebar_background_color}/>
    </div>
    <div id="content">
        <Window title="mental health log." content={Content} 
        border_color={border_color} window_background={window_background}
        titlebar_text_color={titlebar_text_color} titlebar_background_color={titlebar_background_color}/>
    </div>
    
</div>

