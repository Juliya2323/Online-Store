<template lang="pug">
div.main
    img.main_bg(src="../public/icons/bg.svg")
    .main_info 
        h1.main_title The Best Products In Every Category
        h2.main_subtitle Shopping With Joy!
        ul.main_icons 
           li.main_icons_item
              img(src='../public/icons/item1.svg')
           li.main_icons_item
              img(src='../public/icons/item2.svg')
           li.main_icons_item
              img(src='../public/icons/item3.svg')
           li.main_icons_item
              img(src='../public/icons/item4.svg')
        nuxt-link.btn.main_button(to='/products') Products
</template>

<script setup>
</script>

<style scoped lang="scss">
.main {
    position: relative;
    height: 60vh;
    background-color: #fff;
    border-radius: 20px;
    padding: 30px;
    margin-top: 100px;

    &_info {
        width: 24%;
        height: 80%;
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin: 20px 0 0 100px;
        padding: 20px;
        border-radius: 20px;
    }

    &_title {
        font-size: 40px;
        font-weight: 600;
        line-height: 120%;
        margin-bottom: 20px;
    }

    &_subtitle {
        font-size: 24px;
        font-weight: 400;
    }

    &_button {
        width: 80px;
        margin-top: 20px;
    }

    &_icons {
        display: flex;
        gap: 30px;

        &_item {
            cursor: pointer;

            &:hover {
              transform: scale(1.1);
            
            }
        }
    }

    &_bg {
       position: absolute;
       right: 70px;
       bottom: 0;
       height: 450px;
       width: 710px;
    }
}
</style>