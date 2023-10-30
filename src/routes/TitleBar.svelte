<script>
    export let title;
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
</style>

<div class="window-title-bar">
    {#if title}
        <p>{title}</p>
    {/if}
   <span style="position: absolute;right: 5px; font-size:19px;">X</span>
</div>