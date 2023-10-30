<script>

export let src;
export let alt;
export let height;
export let width;
</script>

<style>
.centered-image{
    display: flex;
    justify-content: center;
}
</style>

<div class="centered-image">
    <img {src} {alt} {width} {height}>
</div>