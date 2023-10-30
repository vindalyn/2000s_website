<script>
    import Window from "./Window.svelte";
    export let content;
    export let border_color;
    export let window_background;
    export let titlebar_background_color;
    export let titlebar_text_color;
    export let width;
    export let title;
    width = width || "100%";
</script>
<style>
    #column {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin: 0;
    }
</style>

<div id="column" style="width: {width}">
    <Window {content} {border_color} {window_background} {titlebar_background_color} {titlebar_text_color} {title}/>
</div>