import { createStore } from 'vuex'

export default createStore({
  state: {
    items: [
      {
        "id": 1,
        "name": "Under the Dome",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
        },
        "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
      },
      {
        "id": 2,
        "name": "Person of Interest",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg"
        },
        "summary": "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
      },
      {
        "id": 3,
        "name": "Bitten",
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg"
        },
        "summary": "<p>Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels, the world's only female werewolf. An orphan, Elena thought she finally found her \"happily ever after\" with her new love Clayton, until her life changed forever. With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack.</p>",
      }
    ],
    searchedItems :[],
    closeButtons: []

  },
  getters: {

  },
  mutations: {
    add(state, {newFavourite}) {
      this.state.items = [...this.state.items, newFavourite ]
    },
    addSearchResults(state, {itemNames}){
      this.state.searchedItems = itemNames;
    }, 
    addButtons(state,newButtons){

    this.state.closeButtons = newButtons

    },
    removeItem(state, removeId){

      const favourites = [...this.state.items];
      let filtered = favourites.filter((fav)=>{
        if(fav.id != removeId){
          return fav
        }
      })
      this.state.items = filtered
      const mapItems = (favourites) => {
        const parentNode = document.getElementById('container-cards');
            let newCardsHtml = '';
            favourites.map((item)=>{
                
                newCardsHtml += `
                <div class="movie-card" style="
                    position: relative;
                    width: 30%;
                    margin-right: 40px;
                    flex-shrink: 0;
                  
                    &:last-child{
                        margin-right: 0;
                    }
                ">
                    <div class="card_pic" style="
                        width: 100%;
                        height: 600px;
                    ">
                        <img src=${item.image.original} alt="" class="fav-image" style="
                            object-fit: cover;
                            width: 100%;
                            height: 100%;
                        ">
                    </div>
                    <div class="movie-card_info" style="

                        background: #5d5b5b;
                        padding: 15px 15px 25px;
                        height: 180px;
                        box-sizing: border-box;
                        width: auto;

                    ">
                        <h3 class="card-info-title" style="
                            text-align: left;
                            display: -webkit-box;
                            -webkit-line-clamp: 1;
                            -webkit-box-orient: vertical;  
                            overflow:hidden;
                            color:#e4e4e4;
                            font-size:30px;
                            line-height:40px;
                            font-weight:600;
                            letter-spacing: 1px;
                            text-transform: normal;
                        ">${item.name}</h3>
                        <div class="card-info-text" style="text-align: left;
                            display: -webkit-box;
                            -webkit-line-clamp: 3;
                            -webkit-box-orient: vertical;  
                            color: #e4e4e4;
                            overflow: hidden;
                            font-size: 18px;
                            line-height: 25px;
                            font-weight: 400;
                            letter-spacing: 1px;
                            margin-top: 15px;">${item.summary}</div>

                    </div>

                    
                    <div class="movie-card_close" value=${item.id} @click="removeThis" style="
                    width: 70px;
                    height: 70px;
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background-color: #00000050;
                    border-radius: 7px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.728" height="12.728" viewBox="0 0 12.728 12.728" class="close-button" style="
                    height: 25px;
                    width: 25px;
                    "
                    value=${item.id}>
                        <g id="Group_8592" data-name="Group 8592" transform="translate(-441.636 -1013.036)" value=${item.id}>
                            <g  id="Group_8586" data-name="Group 8586" transform="translate(1226.737 -260.675) rotate(45)" value=${item.id}>
                            <line value=${item.id} id="Line_133" data-name="Line 133" x2="16" transform="translate(346.5 1455.8)" fill="none" stroke="#fff" stroke-width="2"/>
                            <line value=${item.id} id="Line_134" data-name="Line 134" x2="16" transform="translate(354.5 1447.8) rotate(90)" fill="none" stroke="#fff" stroke-width="2" />
                            </g>
                        </g>
                    </svg>
                </div>
                </div>`
                
                parentNode.innerHTML = newCardsHtml;
                let searchNode = document.getElementById('search-results');
                searchNode.innerHTML = '';
                
            })    
            this.getters.getButtons 
      }
      const getButtons = ()=>{
        const closeButtons = document.getElementsByClassName('movie-card_close');
        for(let button of closeButtons){
          button.addEventListener("click",function(event){
            const removeId = event.target.getAttribute('value');

            const filtered = state.items.filter((element)=>{
                if(element.id != removeId){
                  return element;
                }
            })
            
            state.items = filtered
            const mapItems = (favourites) => {
              const parentNode = document.getElementById('container-cards');
                  let newCardsHtml = '';
                  favourites.map((item)=>{
                      
                      newCardsHtml += `
                      <div class="movie-card" style="
                          position: relative;
                          width: 30%;
                          margin-right: 40px;
                          flex-shrink: 0;
                        
                          &:last-child{
                              margin-right: 0;
                          }
                      ">
                          <div class="card_pic" style="
                              width: 100%;
                              height: 600px;
                          ">
                              <img src=${item.image.original} alt="" class="fav-image" style="
                                  object-fit: cover;
                                  width: 100%;
                                  height: 100%;
                              ">
                          </div>
                          <div class="movie-card_info" style="
      
                              background: #5d5b5b;
                              padding: 15px 15px 25px;
                              height: 180px;
                              box-sizing: border-box;
                              width: auto;
      
                          ">
                              <h3 class="card-info-title" style="
                                  text-align: left;
                                  display: -webkit-box;
                                  -webkit-line-clamp: 1;
                                  -webkit-box-orient: vertical; 
                                  overflow: hidden;
                                  color:#e4e4e4;
                                  font-size:30px;
                                  line-height:40px;
                                  font-weight:600;
                                  letter-spacing: 1px;
                                  text-transform: normal;
                              ">${item.name}</h3>
                              <div class="card-info-text" style="text-align: left;
                                  display: -webkit-box;
                                  -webkit-line-clamp: 3;
                                  -webkit-box-orient: vertical;  
                                  color: #e4e4e4;
                                  overflow: hidden;
                                  font-size: 18px;
                                  line-height: 25px;
                                  font-weight: 400;
                                  letter-spacing: 1px;
                                  margin-top: 15px;">${item.summary}</div>
      
                          </div>
      
                          
                          <div class="movie-card_close" value=${item.id} @click="removeThis" style="
                          width: 70px;
                          height: 70px;
                          position: absolute;
                          top: 20px;
                          right: 20px;
                          background-color: #00000050;
                          border-radius: 7px;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          cursor: pointer;
                      ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.728" height="12.728" viewBox="0 0 12.728 12.728" class="close-button" style="
                          height: 25px;
                          width: 25px;
                          "
                          value=${item.id}>
                              <g id="Group_8592" data-name="Group 8592" transform="translate(-441.636 -1013.036)" value=${item.id}>
                                  <g  id="Group_8586" data-name="Group 8586" transform="translate(1226.737 -260.675) rotate(45)" value=${item.id}>
                                  <line value=${item.id} id="Line_133" data-name="Line 133" x2="16" transform="translate(346.5 1455.8)" fill="none" stroke="#fff" stroke-width="2"/>
                                  <line value=${item.id} id="Line_134" data-name="Line 134" x2="16" transform="translate(354.5 1447.8) rotate(90)" fill="none" stroke="#fff" stroke-width="2" />
                                  </g>
                              </g>
                          </svg>
                      </div>
                      </div>`
                      
                      parentNode.innerHTML = newCardsHtml;
                      let searchNode = document.getElementById('search-results');
                      searchNode.innerHTML = '';
                      
                  })    
                  getButtons()
            }
            mapItems(filtered)
            
          })
        }
       

      }

      mapItems(filtered)
      getButtons()
    },
    insertResults(state, {searchResults}) {
      const parentNode = document.getElementById('search-results');
      let htmlResult = '';

      for(let item of searchResults) {
          var new_row = document.createElement('p');
          new_row.className = "aClassName";
          htmlResult += `<div style="display:flex;justify-content:space-between;align-itemns:center;padding:5px"><p class="results-text">${item.name}</p> <button class='select-button' value=${item.id}>add to list</button></div>`
      }

      parentNode.innerHTML = htmlResult;

      let buttons = document.getElementsByClassName('select-button');
      for(let button of buttons){
          button.addEventListener('click', function(e){
              const filter = e.target.value
              const filtered = searchResults.filter(element => element.id == filter);

              const {id, name, image, summary } =filtered[0];
              const newFavourite = { id, name, image, summary }

              state.items = [...state.items, newFavourite ]
              const favourites = [...state.items]

              mapItems(favourites);
              getButtons()
          })
      }

      const mapItems = (favourites) => {
        const parentNode = document.getElementById('container-cards');
            let newCardsHtml = '';
            favourites.map((item)=>{
                
                newCardsHtml += `
                <div class="movie-card" style="
                    position: relative;
                    width: 30%;
                    margin-right: 40px;
                    flex-shrink: 0;
                  
                    &:last-child{
                        margin-right: 0;
                    }
                ">
                    <div class="card_pic" style="
                        width: 100%;
                        height: 600px;
                    ">
                        <img src=${item.image.original} alt="" class="fav-image" style="
                            object-fit: cover;
                            width: 100%;
                            height: 100%;
                        ">
                    </div>
                    <div class="movie-card_info" style="

                        background: #5d5b5b;
                        padding: 15px 15px 25px;
                        height: 180px;
                        box-sizing: border-box;
                        width: auto;

                    ">
                        <h3 class="card-info-title" style="
                        display: -webkit-box;
                            -webkit-line-clamp: 1;
                            -webkit-box-orient: vertical; 
                            overflow: hidden; 
                            text-align: left;
                            color:#e4e4e4;
                            font-size:30px;
                            line-height:40px;
                            font-weight:600;
                            letter-spacing: 1px;
                            text-transform: normal;
                        ">${item.name}</h3>
                        <div class="card-info-text" style="text-align: left;
                            display: -webkit-box;
                            -webkit-line-clamp: 3;
                            -webkit-box-orient: vertical;  
                            color: #e4e4e4;
                            overflow: hidden;
                            font-size: 18px;
                            line-height: 25px;
                            font-weight: 400;
                            letter-spacing: 1px;
                            margin-top: 15px;">${item.summary}</div>

                    </div>

                    
                    <div class="movie-card_close" value=${item.id} @click="removeThis" style="
                    width: 70px;
                    height: 70px;
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background-color: #00000050;
                    border-radius: 7px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.728" height="12.728" viewBox="0 0 12.728 12.728" class="close-button" style="
                    height: 25px;
                    width: 25px;
                    "
                    value=${item.id}>
                        <g id="Group_8592" data-name="Group 8592" transform="translate(-441.636 -1013.036)" value=${item.id}>
                            <g  id="Group_8586" data-name="Group 8586" transform="translate(1226.737 -260.675) rotate(45)" value=${item.id}>
                            <line value=${item.id} id="Line_133" data-name="Line 133" x2="16" transform="translate(346.5 1455.8)" fill="none" stroke="#fff" stroke-width="2"/>
                            <line value=${item.id} id="Line_134" data-name="Line 134" x2="16" transform="translate(354.5 1447.8) rotate(90)" fill="none" stroke="#fff" stroke-width="2" />
                            </g>
                        </g>
                    </svg>
                </div>
                </div>`
                
                parentNode.innerHTML = newCardsHtml;
                let searchNode = document.getElementById('search-results');
                searchNode.innerHTML = '';
                
            })    
            
      }

      const getButtons = ()=>{
        const closeButtons = document.getElementsByClassName('movie-card_close');
        for(let button of closeButtons){
          button.addEventListener("click",function(event){
            const removeId = event.target.getAttribute('value');

            const filtered = state.items.filter((element)=>{
                if(element.id != removeId){
                  return element;
                }
            })
            
            state.items = filtered
            const mapItems = (favourites) => {
              const parentNode = document.getElementById('container-cards');
                  let newCardsHtml = '';
                  favourites.map((item)=>{
                      
                      newCardsHtml += `
                      <div class="movie-card" style="
                          position: relative;
                          width: 30%;
                          margin-right: 40px;
                          flex-shrink: 0;
                        
                          &:last-child{
                              margin-right: 0;
                          }
                      ">
                          <div class="card_pic" style="
                              width: 100%;
                              height: 600px;
                          ">
                              <img src=${item.image.original} alt="" class="fav-image" style="
                                  object-fit: cover;
                                  width: 100%;
                                  height: 100%;
                              ">
                          </div>
                          <div class="movie-card_info" style="
      
                              background: #5d5b5b;
                              padding: 15px 15px 25px;
                              height: 180px;
                              box-sizing: border-box;
                              width: auto;
      
                          ">
                              <h3 class="card-info-title" style="
                                  text-align: left;
                                  display: -webkit-box;
                                  -webkit-line-clamp: 1;
                                  -webkit-box-orient: vertical; 
                                  overflow:hidden;
                                  color:#e4e4e4;
                                  font-size:30px;
                                  line-height:40px;
                                  font-weight:600;
                                  letter-spacing: 1px;
                                  text-transform: normal;
                              ">${item.name}</h3>
                              <div class="card-info-text" style="text-align: left;
                                  display: -webkit-box;
                                  -webkit-line-clamp: 3;
                                  -webkit-box-orient: vertical;  
                                  color: #e4e4e4;
                                  overflow: hidden;
                                  font-size: 18px;
                                  line-height: 25px;
                                  font-weight: 400;
                                  letter-spacing: 1px;
                                  margin-top: 15px;">${item.summary}</div>
      
                          </div>
      
                          
                          <div class="movie-card_close" value=${item.id} @click="removeThis" style="
                          width: 70px;
                          height: 70px;
                          position: absolute;
                          top: 20px;
                          right: 20px;
                          background-color: #00000050;
                          border-radius: 7px;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          cursor: pointer;
                      ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.728" height="12.728" viewBox="0 0 12.728 12.728" class="close-button" style="
                          height: 25px;
                          width: 25px;
                          "
                          value=${item.id}>
                              <g id="Group_8592" data-name="Group 8592" transform="translate(-441.636 -1013.036)" value=${item.id}>
                                  <g  id="Group_8586" data-name="Group 8586" transform="translate(1226.737 -260.675) rotate(45)" value=${item.id}>
                                  <line value=${item.id} id="Line_133" data-name="Line 133" x2="16" transform="translate(346.5 1455.8)" fill="none" stroke="#fff" stroke-width="2"/>
                                  <line value=${item.id} id="Line_134" data-name="Line 134" x2="16" transform="translate(354.5 1447.8) rotate(90)" fill="none" stroke="#fff" stroke-width="2" />
                                  </g>
                              </g>
                          </svg>
                      </div>
                      </div>`
                      
                      parentNode.innerHTML = newCardsHtml;
                      let searchNode = document.getElementById('search-results');
                      searchNode.innerHTML = '';
                      
                  })    
                  getButtons()
            }
            mapItems(filtered)
          })
        }
       

      }

    }
    
    
  },
  actions: {

  },
  modules: {
  }
})
