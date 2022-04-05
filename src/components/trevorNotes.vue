<template>
<ul>
    <li v-for="(index, i) in repeats" :key = "i">
        <font-awesome-icon icon="fa-solid fa-music" />
    </li>
</ul>
</template>


<script>

export default {
    name: 'trevorNotes',
    
    data() {
        return {
            repeats:[0],
        }
    },
    methods: {
        addNote(){
            let counter=0;
        let i = setInterval(()=>{
            this.repeats.push(i);
            counter++;
            if(counter===4){
                this.repeats=[0];
                counter=0;
                this.addNote();
                clearInterval(i);
            }
        },1000)
        }
    },
    created(){
        let counter=0;
        let i = setInterval(()=>{
            this.repeats.push(i);
            counter++;
            if(counter===4){
                this.repeats=[0];
                counter=0;
                this.addNote();
                clearInterval(i);
            }
        },1000)
        }
    }
</script>

<style scoped>
    ul {
        display: flex;
        flex-direction:row;
        list-style: none;
        justify-content: center;
        font-size: 50px;
    }
    li {
        margin:10px;
        color: white;
    }
    li:last-child{
        margin-right:50px;
    }
</style>