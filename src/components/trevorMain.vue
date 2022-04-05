<template>
<div>
    <b-row align-h="between">
      <b-col class="text-white text-start m-3">
        <h3>> more</h3>
        <h3>> than</h3>
        <h3>> beats</h3>
      </b-col>
      <b-col class="ms-5" >
        <img class="smaller-image" src="../assets/j-cole-1.png" alt="j-cole">
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <trevorNotes></trevorNotes>
        <h1 class="text-green"><span class="text-white">/</span>music that inspires<span class="text-white">/</span></h1>
        <h3 class="text-white">>some lorem ipsum</h3>
      </b-col>
    </b-row>
    <b-row align-h="start" >
      <b-col>
        <img class="display-none" align-h="start" src="../assets/tyler-1.png" alt="">
      </b-col>
      <b-col>
        <img class="smaller-image" src="../assets/vector.png" alt="">
      </b-col>
      <b-col>

      </b-col>
    </b-row>
</div>
</template>

<script>

import trevorNotes from './trevorNotes'

export default {
    name:'trevorMain',
    data() {
        return{

        }
    },
    components: {
        trevorNotes
    }
}
</script>