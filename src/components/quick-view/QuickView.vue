<script>
    import store from '../../store/index';
    import axios from 'axios';

    let favourites = [...store.state.items]
    let searchResults = [...store.state.searchedItems]
    let closeButtons = [...store.state.items];

    (function(){
        let defaultButtons = document.getElementsByClassName('movie-card_close');
        store.commit('addButtons', defaultButtons)

    })();

    
    export default {
        name: 'Quick-View', 
        data() {
            return {
                favourites,
                searchResults,
                closeButtons,
    
            }
        },

        methods: {

            searchValue(value){
    
                axios.get(`https://api.tvmaze.com/search/shows?q=${value}`)
                .then(function (response) {
                    // handle success
                    const data = response.data
                    let itemNames = []
                    for(let item of data) {  
                        itemNames = [...itemNames, item.show]  
                    }
                    store.commit('addSearchResults', {itemNames});
                    searchResults = [...store.state.searchedItems]
                    
                    store.commit('insertResults', {searchResults})
                    
                    
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })

            },
            inputValue(e) {
                if(e.which ===13){
                    this.searchValue(e.target.value)
                }    
            },
            searchedItems () {
                return this.$store.searchedItems
            },
            removeThis(event){
                const removeId = event.target.getAttribute('value')
                store.commit('removeItem', removeId)
            }

        }

    }
    </script>

<template>

    <div class="quick-view">
        <div class="quick-view-container">
            <div id="search-results">
              
            </div>
            <div class="container-title-search">

                <h2 class="search-title">Collect your favourites</h2>
                <div class="search-input-container">
                    <input  type="text" class="search-input" placeholder="Search title and add to grid" @keydown="inputValue"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.414" height="22.414" viewBox="0 0 22.414 22.414" class="search-icon"> 
                        <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(1 1)">
                            <path id="Path_17" data-name="Path 17" d="M22.278,13.389A8.889,8.889,0,1,1,13.389,4.5a8.889,8.889,0,0,1,8.889,8.889Z" transform="translate(-4.5 -4.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            <path id="Path_18" data-name="Path 18" d="M29.808,29.808l-4.833-4.833" transform="translate(-9.808 -9.808)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        </g>
                    </svg>

                </div>

                
            </div>
            
            <div id="container-cards">
                
                <div class="movie-card" v-for='(item) in favourites' :key="item.id">
                    <div class="movie-card_pic">
                        <img :src=item.image.original alt="" class="fav-image">
                    </div>
                    <div class="movie-card_info">
                        <h3 class="card-info-title">{{item.name}}</h3>
        
                        <div v-html=item.summary class="card-info-text"></div>
                    </div>
                    <div class="movie-card_close" :value="item.id" @click="removeThis">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.728" height="12.728" viewBox="0 0 12.728 12.728" class="close-button" :value="item.id">
                            <g id="Group_8592" data-name="Group 8592" transform="translate(-441.636 -1013.036)" :value="item.id">
                                <g id="Group_8586" data-name="Group 8586" transform="translate(1226.737 -260.675) rotate(45)" :value="item.id">
                                <line id="Line_133" data-name="Line 133" x2="16" transform="translate(346.5 1455.8)" fill="none" stroke="#fff" stroke-width="2" :value="item.id" />
                                <line id="Line_134" data-name="Line 134" x2="16" transform="translate(354.5 1447.8) rotate(90)" fill="none" stroke="#fff" stroke-width="2" :value="item.id"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>


<style scoped lang="scss">
    @import './quick_view.scss';

    
</style>