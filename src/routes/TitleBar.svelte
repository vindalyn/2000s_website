<script>
    export let title;
    export let window_tab_background;
    export let border_color;
    export let text_color;
    window_tab_background = window_tab_background || "#F3EFEF";
    border_color = border_color || "#fa4ca9";
    text_color = text_color || "#fa4ca9";
</script>

<style>
.window-title-bar{
  background-color: var(--window-tab-background);
  border-bottom: var(--border-color) solid 3px;
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
</style>

<div class="window-title-bar" style="--window-tab-background: {window_tab_background}; --border-color: {border_color}; color: {text_color};">
    {#if title}
        <p>{title}</p>
    {/if}
   <span style="position: absolute;right: 5px; font-size:19px;">X</span>
</div>