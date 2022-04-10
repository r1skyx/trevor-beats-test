<template>
    <div class = "border-bottom sticky-top " >
        <b-navbar toggleable="lg"  align-h="between" class = " justify-content-between px-5">
            <b-navbar-brand><h2 class="text-green">trevor beats</h2></b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"><span class="navbar-toggler-icon">   
    <i class="fas fa-bars" style="color:white; font-size:28px;"></i>
</span></b-navbar-toggle>
            <b-collapse  id="nav-collapse" is-nav>
                <b-navbar-nav class="ms-auto">
                    <b-nav-item class="mx-3"><h2 class="text-white"><router-link class="no-style" to="/">>home</router-link></h2></b-nav-item>
                    <b-nav-item href="#about" class="mx-3"><a href="about"><h2 class="text-white"><router-link class="no-style" to="/">>about</router-link></h2></a></b-nav-item>
                    <b-nav-item href="#store" class="mx-3"><router-link class="no-style" to="/#store"><h2 class="text-white">>store</h2></router-link></b-nav-item>
                    <b-nav-item href="#contact" class="mx-3"><router-link class="no-style" to="/#contact"><h2 class="text-white">>contact me</h2></router-link></b-nav-item>
                    <b-nav-item href="#" class="mx-3 no-list-style"><router-link class="no-style" to="/shopping-cart"><h2 class="text-white"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></h2></router-link></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>

export default {
    name: 'trevorNavbar',
    
    data() {
        return {

        }
    },
}
</script>

<style>

.no-style{
    outline: none;
    border:none;
    text-decoration: none;
}

.no-list-style {
    list-style: none;
}

.border-bottom {
    border-bottom:5px dotted #2DB23A !important;
    border-color: #2DB23A !important;
}

.navbar-toggler-icon {
    padding:25px;
    background-color: var(--green);
    border-radius: 10px;
}

</style>
