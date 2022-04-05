<template>
    <div class="mt-5">
        <div class="hover">
            <img :src="require('../assets/' + image)" alt="">
            <h1>{{clientName}}</h1>
            <p>"{{quote}}"</p>
        </div>
    </div>
</template>

<script>


export default {
    name:'trevorTestimonials',
    props:{
        image: { required: true, type: String },
        clientName:{ required: true, type: String },
        quote:{ required: true, type: String }
    },

    data() {
        return {
            
        }
    },
}
</script>

<style scoped>


    h1 {
        color:var(--green);
    }

    .hover {
        transition: all 0.2s;
    }

    .hover:hover{
        transform:scale(1.02)
    }

</style>