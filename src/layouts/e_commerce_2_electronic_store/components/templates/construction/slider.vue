<template>
<!-- Header - set the background image for the header in the line below -->
<header class="py-5 bg-image-full" style="background-image: url('https://unsplash.it/1900/1080?image=1076');min-height:500px;position:relative">
    <img class="sliderimage" src="http://placehold.it/200x200" alt="">
</header>
</template>

<script>
export default {
    name: "ServiceSlider"
};
</script>

<style scoped>
.sliderimage {
    position: absolute;
    top: 40%;
    left: 45%;
}
</style>
