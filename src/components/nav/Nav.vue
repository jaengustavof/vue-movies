
<template>
    
    <nav class="desktop-nav">
        <ul>
            <li 
            v-for="(item) in items"
            :key="item" class="nav-item" @click="selected">{{item}}</li>
        </ul>
    </nav>

    <nav class="mobile-nav" >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 32 20" @click="displayMenu">
            <g id="Icon_feather-menu" data-name="Icon feather-menu" transform="translate(-3.5 -8)">
                <path id="Path_1" data-name="Path 1" d="M4.5,18h30" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path id="Path_2" data-name="Path 2" d="M4.5,9h30" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path id="Path_3" data-name="Path 3" d="M4.5,27h30" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </g>
        </svg>



        <div class="mobile-menu" id="menuMobile">
            <div class="mobile-menu_items " @click="displayMenu">
                <div class="mobile-menu_close" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12.728 12.728" >
                        <g id="Group_8590" data-name="Group 8590" transform="translate(-441.636 -1013.036)">
                            <g id="Group_8586" data-name="Group 8586" transform="translate(1226.737 -260.675) rotate(45)">
                            <line id="Line_133" data-name="Line 133" x2="16" transform="translate(346.5 1455.8)" fill="none" stroke="#b7b7b7" stroke-width="2"/>
                            <line id="Line_134" data-name="Line 134" x2="16" transform="translate(354.5 1447.8) rotate(90)" fill="none" stroke="#b7b7b7" stroke-width="2"/>
                            </g>
                        </g>
                    </svg>
                </div>
                <p>location & contact</p>
                <p>gallery</p>
            </div>

        </div>
    </nav>

</template>

<script>
    export default {
      name: 'Nav-Menu',
      props: {
        items: Array
      },
      methods: {
        selected(e){
            const menuItems = document.getElementsByClassName('nav-item');
            for(let item of menuItems){
                item.classList.remove('selected');
            }
            e.target.classList.add('selected')
        },
        displayMenu(){
            const mobileMenu = document.getElementById('menuMobile');
            mobileMenu.classList.toggle('displayed');   
        }
      }
    }
</script>

<style scoped lang="scss">
    @import './nav.scss';
</style>