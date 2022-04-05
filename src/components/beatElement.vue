<template>
    <div>
        
    </div>
</template>

<script>

export default {
    name:'beatElement',
    computed: {
        beats(){
            return this.$store.state.beats;
        },
        itemsInCart(){
            return this.$store.state.itemsInCart;
        }
    },
    methods: {
        onPlay(){
            if(this.audio.paused){
                this.beats.audio.play()
                this.beats.isPlaying=true;
            }
            else if (!this.audio.paused){
                this.beats.audio.pause();
                this.beats.audio.currentTime=0;
                this.beats.isPlaying=false;
            }
        },
        addToCart(){
            
        }
    },
    
}
</script>

<style scoped>


</style>