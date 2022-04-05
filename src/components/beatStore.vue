<template>
    <div>
    <div class="border-1">
        <b-row>
            <b-col>
                <input type="text" v-model="inputSearch" @keyup="search" @keydown="search" placeholder="type here...">
            </b-col>
        </b-row>
        <b-row wrap>
            <b-col md="2" class="margin-10">
                <select name="genre" v-model="genre" @change="genreFilter" id="">
                    <option value="" disabled selected>genre</option>
                    <option value="any">any</option>
                    <option value="html">html</option>
                    <option value="css">css</option>
                </select>
            </b-col>
            <b-col md="2">
                <select value="bpm" v-model="bpm" @change="bpmFilter" name="bpm" id="">
                    <option value="" disabled selected>bpm</option>
                    <option value="any">any</option>
                    <option value="80">80</option>
                    <option value="90">90</option>
                    <option value="100">100</option>
                </select>
            </b-col>
            <b-col></b-col>
        </b-row>
        <b-row v-for="(beat,i) in beats" :key="i">
            <b-col class="beat-flex" cols="11">
                <h2>{{beat.name}}</h2>
                <h2>bpm:{{beat.bpm}}</h2>
                <h2>genre:{{beat.genre}}</h2>
                <button @click="onPlay(beat)" ><font-awesome-icon class="big-icon" v-if="!beat.isPlaying" icon="fa-solid fa-play" /><font-awesome-icon class="big-icon" v-if="beat.isPlaying" icon="fa-solid fa-pause" /></button>
                <h2>{{beat.price}}$</h2>
                <button @click="addToCart(beat)" ><font-awesome-icon  class="big-icon" icon="fa-solid fa-cart-plus" /></button>
            </b-col>
        </b-row>  
    </div>
    </div>
</template> 


<script>

import Vue from 'vue'
import VueAudio from 'vue-audio-better'
Vue.use(VueAudio)

export default {
    name:'beatStore',
    data() {
        return {
            id:[],
            inputSearch:'',
            genre: '',
            bpm:'',
            pricing:'',
            width:Number(window.innerWidth)*0.78,
            /* beats: [
                {   
                    id:0,
                    name:'bootstrap',
                    bpm:80,
                    genre:'css',
                    playing:false,
                    price:30,
                    show:true,
                    source:'music.mp3',
                },
                {
                    id:1,
                    name:'tailwind',
                    bpm:90,
                    genre:'css',
                    playing:false,
                    price:20,
                    show:true,
                    source:'music.mp3',
                },
                {
                    id:2,
                    name:'markuplang',
                    bpm:100,
                    genre:'html',
                    playing:false,
                    price:40,
                    show:true,
                    source:'music.mp3',
                }
            ] */
        }
    },
    computed: {
        beats(){
            return this.$store.state.beats;
        },
        itemsInCart(){
            return this.$store.state.itemsInCart;
        }
    },
    methods:{
        onPlay(beat){
            if(beat.audio.paused){
                beat.audio.play()
                beat.isPlaying=true;
            }
            else if (!beat.audio.paused){
                beat.audio.pause();
                beat.audio.currentTime=0;
                beat.isPlaying=false;
            }
        },
        
        search(){
            this.$nextTick(()=>{
                let input=this.inputSearch;
                for(let beat of this.beats){
                    if(input.length>0){
                        let name=beat.name;
                        if (name.includes(input)){
                            beat.show = true;
                        }
                        else {
                            beat.show=false;
                        }
                    }
                    if(input==''){
                        beat.show=true;
                    }
                }
                
            }

            )
        },
        addToCart(beat){
            this.$store.commit('addToCart',beat)
        },
        genreFilter(){
            for(let beat of this.beats){
                if (beat.genre==this.genre){
                    beat.show=true;
                }
                else if (this.genre=='any'){
                    beat.show=true;
                }
                else {
                    beat.show=false;
                }
            }
        },
        bpmFilter(){
            for(let beat of this.beats){
                if (beat.bpm==this.bpm){
                    beat.show=true;
                }
                else if (this.bpm=='any'){
                    beat.show=true;
                }
                else {
                    beat.show=false;
                }
            }
        },
        
    },
    
}




</script>

<style scoped>
    button {
        background-color: black;
        border: none;
    }

    .border-1 {
        border: 10px solid green !important;
        min-height:80vh;
    }

    input{
        border: 5px solid green;
        padding: 10px;
        margin-top:20px;
        width:75vw;
        font-size: 25px;
        background-color: black;
    }
    
    input:focus{
        outline:none;
    }

    select{
        background-color: black;
        border: none;
        font-size: 25px;
    }

    select:focus{
        outline: none;
    }

    @media only screen and (min-width: 1000px) {
        .margin-10 {
            margin-left: 20px;
        }
    }
    h2, button {
    min-width: 180px;
}

.big-icon{
    font-size: 30px;
}

button {
    background-color: black;
    border: none;
}

.beat-flex {
        margin:10px auto;
        text-align: center;
        display: flex ;
        flex-wrap: wrap;
        text-align: center;
        align-content: center;
        align-self: center;
        align-items: center;
        flex-direction:row;
        justify-content: space-around;
        border:5px solid green;
    }
</style>