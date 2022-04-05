import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        itemsInCart:[],
        beats: [
            {   
                name:'bootstrap',
                bpm:80,
                genre:'css',
                playing:false,
                price:30,
                show:true,
                source:'music.mp3',
                isPlaying:false,
                audio: new Audio(require('../assets/'+ 'music.mp3')),
            },
            {
                name:'tailwind',
                bpm:90,
                genre:'css',
                playing:false,
                price:20,
                show:true,
                source:'music.mp3',
                isPlaying:false,
                audio: new Audio(require('../assets/'+ 'music.mp3'))
            },
            { 
                name:'markuplang',
                bpm:100,
                genre:'html',
                playing:false,
                price:40,
                show:true,
                source:'music.mp3',
                isPlaying:false,
                audio: new Audio(require('../assets/'+ 'music.mp3'))
            }
        ]

    },
    getters:{
        total(state){
            let total=0;
            for(let i=0; i<(state.itemsInCart.length); i++){
                total= total+state.itemsInCart[i].price
            }
            return total;
        }
    },
    mutations: {
        addToCart(state, beat){
            state.itemsInCart.push(beat);            
        },
        removeFromCart(state, beat){
            const index = state.itemsInCart.indexOf(beat);
            if (index > -1) {
                state.itemsInCart.splice(index, 1); // 2nd parameter means remove one item only
            }            
        },
    },
    actions:{

    }
}
)