<template>
    <div>
        <h1 class="text-white text-left">>contact me</h1>
        <form action="" id="contact">
            <h5>{{nameAlert}}</h5>
            <h5>{{emailAlert}}</h5>
            <h5>{{msgAlert}}</h5>
            <h5>{{successAlert}}</h5>
            <input type="text" name="name" placeholder="name..." v-model="name" id="">
            <input type="email" name="email" placeholder="email..." v-model="email" id="">
            <textarea form="contact" type="text" name="message" placeholder="message..." v-model="message" id="msg"></textarea>
        </form>
        <button type="submit" @click="submitForm">/submit/</button>
    </div>
</template>

<script>
export default {
    name:'contact-form',
    data(){
        return {
            name:'',
            email:'',
            message:'',
            nameAlert:'',
            emailAlert:'',
            msgAlert:'',
            successAlert:''
        }
    },
    methods: {
        submitForm(){
            if(this.name.length<3){
                this.nameAlert="*name should be longer than 3 characters"
                this.successAlert=""
            }
            else if (this.name.length>=3){
                this.nameAlert=""
            }
            if(this.email.includes('@') && this.email.includes('.')){
                this.emailAlert=""
            }
            else {
                this.successAlert=""
                this.emailAlert="*invalid email"
            }
            if(this.message.length>300){
                this.successAlert=""
                this.msgAlert="message should be under 300 characters"
            }
            else if(this.message.length<10){
                this.successAlert=""
                this.msgAlert="*message should be longer than 10 characters"
            }
            else {
                this.msgAlert=""
            }
            if(this.nameAlert=='' && this.emailAlert=='' && this.msgAlert==''){
                this.name='';
                this.email='';
                this.message='';
                this.successAlert="message sent!"
            }
        }
    }
}
</script>

<style scoped>
h5 {
    align-items: flex-start;
    justify-content: flex-start;
    align-content: flex-start;
    float: left;
    text-align: left;
}
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

form:first-child{
    align-items: flex-start;
}

input {
    width:75vw;
    font-size: 25px;
    padding:10px;
    background-color: black;
    border: 5px solid green;
    margin-top:20px;
}


#msg:focus{
    outline:none;
}

input:focus{
    outline:none;
}

form {
    border: 10px solid green;
}

#msg {
    margin-bottom: 20px;
    resize: none;
    text-align:start;
    height: 40vh;
    width:75vw;
    font-size: 25px;
    padding:10px;
    background-color: black;
    border: 5px solid green;
    margin-top:20px;
}

button {
    width:200px;
    font-size: 25px;
    padding:10px;
    background-color: black;
    border: 5px solid green;
    margin-top:20px;
    color:white;
}

button:active{
    transform: scale(0.98);
}

</style>