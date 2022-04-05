<template>
    <div>
        <trevorNavbar></trevorNavbar>
        <trevorMain></trevorMain>
        <trevorAbout id="about"></trevorAbout>
        <b-row>
        <h1 class="text-white mt-5">testimonials</h1>
        <responsiveCarousel>
            <trevorTestimonials v-for="(index, i) in clients" :key="i" :image="index.img" :clientName="index.name" :quote="index.quote"></trevorTestimonials>
        </responsiveCarousel>
        </b-row>
        <b-row >
        <div class="shadow mt-5">
            <h2>find your vibe</h2>
            <a href="#store"><font-awesome-icon icon="fa-solid fa-chevron-down" /></a>
        </div>
        </b-row>
        <b-row>
          <b-col cols=8>
            <h2 id="store" class="text-left text-white mt-5">the right sound is waiting for you...</h2>
          </b-col>
          <b-col>
            <h2 class="mt-5">({{(itemsInCart.length)}}) items in cart<router-link to="/shopping-cart"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></router-link></h2>
          </b-col>
        </b-row>
        <beatStore class="mt-2"></beatStore>
        <contactForm class="my-5" id="contact"></contactForm>
        <trevorFooter></trevorFooter>
    </div>
</template>

<script>

import trevorNavbar from '../components/trevorNavbar';

import trevorMain from '../components/trevorMain'

import trevorAbout from '../components/trevorAbout';

import trevorTestimonials from '../components/trevorTestimonials';

import responsiveCarousel from '../components/responsiveCarousel';

import beatStore from '../components/beatStore';

import contactForm from '../components/contactForm';

import trevorFooter from '../components/trevorFooter';

export default {
    name:'Home-view',
    data(){
        return{
            clients:[
                {
                img:'testimonial-1.png',
                name:'john',
                quote:`Stars above form to. Earth sea had make god bring spirit seed from. Seas don't which the. Heaven deep, his.`
                },

                {
                img:'testimonial-2.png',
                name:'mike',
                quote:`Whales waters be behold so, hath let a form isn't have moving there they're shall meat it kind void wherein.`
                },

                {
                img:'testimonial-3.png',
                name:'andy',
                quote:`Morning is, beast. Void the upon was seed female signs, greater which fish our there saw unto to had blessed.`
                }
            ],
            }
        },

        components: {
            trevorNavbar,
            trevorMain,
            trevorAbout,
            trevorTestimonials,
            responsiveCarousel,
            beatStore,
            contactForm,
            trevorFooter,
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
            
        }
    }



</script>