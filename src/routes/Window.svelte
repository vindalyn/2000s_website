<script>
    import TitleBar from "./TitleBar.svelte";    
    export let content;
    export let border_color;
    export let window_background;
    export let titlebar_background_color;
    export let titlebar_text_color;
    export let title;
    export let width;
    export let height;

    border_color = border_color || "#fa4ca9";
    window_background = window_background || "#ffd6ed";
    width = width || "100%";
    height = height || "100%";
    titlebar_text_color = titlebar_text_color || "#fa4ca9";
    titlebar_background_color = titlebar_background_color || "#F3EFEF";
    </script>
    <style>
    
    #window{
        border: var(--border-color) solid 8px;
        background-color: var(--window-background);
        display: flex;
        flex-direction: column;
    }
    
    #content {
        background: var(--window-background);
        flex: 1;
    }
    
    
    </style>
    
    <div id="window" style="--border-color: {border_color}; --window-background: {window_background}; width: {width}; height: {height};">
        <TitleBar {border_color} text_color = {titlebar_text_color} window_tab_background = {titlebar_background_color} {title}/>
    
        <div id="content">
            {#if content}
                <svelte:component this={content} />
            {/if}
        </div>
    </div>