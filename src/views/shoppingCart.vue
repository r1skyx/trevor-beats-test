<template>
    <div>
        <trevorNavbar></trevorNavbar>
        <div class="border-1 mt-5">
            <b-row v-for="(beat,i) in itemsInCart" :key="i">
            <b-col class="beat-flex" cols="11">
                <h2>{{beat.name}}</h2>
                <h2>bpm:{{beat.bpm}}</h2>
                <h2>genre:{{beat.genre}}</h2>
                <button @click="onPlay(beat)" ><font-awesome-icon class="big-icon" v-if="!beat.isPlaying" icon="fa-solid fa-play" /><font-awesome-icon class="big-icon" v-if="beat.isPlaying" icon="fa-solid fa-pause" /></button>
                <h2>{{beat.price}}$</h2>
                <button @click="removeFromCart(beat)" ><font-awesome-icon class="big-icon" icon="fa-solid fa-circle-minus" /></button>
            </b-col>
        </b-row>  
        <b-row class="total">
            <b-col>
            </b-col>
            <b-col>
                <h2>total:{{total}}$</h2>
            </b-col>
        </b-row>
        </div>
        <button class="submit mt-5 mb-5">check out</button>
    </div>
</template>

<script>
import trevorNavbar from '../components/trevorNavbar';

export default {
    data(){
        return {

        }
    },
    computed:{
        itemsInCart(){
            return this.$store.state.itemsInCart;
        },
        total(){
            return this.$store.getters.total;
        }
    },
    methods:{
        removeFromCart(beat){
            this.$store.commit('removeFromCart',beat)
        },
    },
    components: {
        trevorNavbar
    }
}
</script>

<style scoped>

.submit {
    font-size: 25px;
    border:5px solid green;
}

.total {
    display: flex;
    align-content: center;
    justify-content: center;
    margin:auto;
    max-width: 70vw;
    border-top: 3px dashed green;
}

button {
        background-color: black;
        border: none;
    }

    .border-1 {
        border: 10px solid green !important;
        min-height:70vh;
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