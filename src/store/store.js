import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);




export const store = new Vuex.Store({
    state: {
        itemsInCart:[],
        beats: [],
        genres: [],
        // [
        //     {   
        //         name:'bootstrap',
        //         bpm:80,
        //         genre:'css',
        //         playing:false,
        //         price:30,
        //         show:true,
        //         source:'music.mp3',
        //         isPlaying:false,
        //         audio: new Audio(require('../assets/'+ 'music.mp3')),
        //     },
        //     {
        //         name:'tailwind',
        //         bpm:90,
        //         genre:'css',
        //         playing:false,
        //         price:20,
        //         show:true,
        //         source:'music.mp3',
        //         isPlaying:false,
        //         audio: new Audio(require('../assets/'+ 'music.mp3'))
        //     },
        //     { 
        //         name:'markuplang',
        //         bpm:100,
        //         genre:'html',
        //         playing:false,
        //         price:40,
        //         show:true,
        //         source:'music.mp3',
        //         isPlaying:false,
        //         audio: new Audio(require('../assets/'+ 'music.mp3'))
        //     }
        // ]

    },
    getters:{
        total(state){
            let total=0;
            for(let i=0; i<(state.itemsInCart.length); i++){
                total= total+state.itemsInCart[i].price
            }
            return total;
        },
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

        FETCH_BEATS(state, beats) {
            return state.beats = beats
        },

        FETCH_GENRES(state, genres) {
            return state.genres = genres
        }
    },
    actions:{
        fetchBeats({commit}) {
            axios.get('http://localhost:8000/api/beats')
                .then(res => {
                    commit('FETCH_BEATS', res.data)
                }).catch(err => {
                console.log(err)
            })
        },

        fetchGenres({commit}) {
            axios.get('http://localhost:8000/api/genres')
                .then(res => {
                    commit('FETCH_GENRES', res.data)
                }).catch(err => {
                console.log(err)
            })
        },

        searchBeats({commit},name) {
            axios.get('http://localhost:8000/api/beats/search/' + name)
                .then(res => {
                    commit('FETCH_BEATS', res.data)
                }).catch(err => {
                console.log(err)
            })
        },

        filterGenre({commit},id) {
            axios.get('http://localhost:8000/api/genre/' + id)
                .then(res => {
                    commit('FETCH_BEATS', res.data)
                }).catch(err => {
                console.log(err)
            })
        }

    },
}
)