<template>
    <div class="container__search">
        <Searchbar v-if="getIpMode" />
        <SearchbarAddr v-if="getAddrMode" />
    </div>
    <transition name="translateY" class="translateY">
        <div class="info" v-if="getInfoVisibility">
            <span class="info__text">City: {{getCity}}</span>
            <span class="info__text">Region: {{getRegion}}</span>
            <span class="info__text">Country: {{getCountry}}</span>
            <span class="info__text">ZIPcode: {{getZipcode}}</span>
            <span class="info__text">Isp: {{getIsp}}</span>
        </div>
    </transition>
</template>

<script>
import Searchbar from './Searchbar.vue';
import SearchbarAddr from './SearchbarAddr.vue';
export default{
    name: 'Search',
    components: {
    Searchbar,
    SearchbarAddr
},
    data(){
        return {
            infoVisible: false,
        }
    },
    methods: {
        
    },
    computed: {
        getLat(){
            return this.$store.getters.getLat;
        },
        getLng(){
            return this.$store.getters.getLng;
        },
        getCity(){
            return this.$store.getters.getCity;
        },
        getRegion(){
            return this.$store.getters.getRegion;
        },
        getCountry(){
            return this.$store.getters.getCountry;
        },
        getZipcode(){
            return this.$store.getters.getZipcode;
        },
        getIsp(){
            return this.$store.getters.getIsp;
        },
        getInfoVisibility(){
            return this.$store.getters.getInfoVis;
        },
        getIpMode(){
            return this.$store.getters.getIpMode;
        },
        getAddrMode(){
            return this.$store.getters.getAddrMode;
        }

    }
}
</script>

<style scoped>
html{
  font-size: 62.5%;
}
.container__search{
    grid-row: 2;
    grid-column: 2;
    background-color:whitesmoke;

    display: grid;
    grid-template-columns: 1fr 15rem;
    align-items: center;
    justify-items: center;
}

.input__text{ 
    font-size: 1.6rem;
}
.input__ip{
    margin-left: 1rem;
    width: 20rem;
    height: 1rem;
}
.input__btn{
    height: 1.4rem;
    margin-left: 1rem;
    margin-top: 1rem;
}
.info__btn{
    background-color: lightgrey;
    width: 5rem;
    height: 4rem;
    border-radius: 25%;
    z-index: 11;
    border: none;

    display: grid;
    align-items: center;
    justify-items: center;
}
.info__icon{
    position: relative;
}
.info__btn.active .info__icon::after{
    transform: rotate(-135deg);
    top: 0;
}
.info__btn.active .info__icon::before{
    transform: rotate(135deg);
    top: 0;
}
.info__btn.active .info__icon{
    background-color: transparent;
}
.info__btn.active:hover .info__icon::after{
    top: 0;
}
.info__btn.active:hover .info__icon::before{
    top: 0;
}
.info__icon, .info__icon:before, .info__icon:after{
    width: 3rem;
    height: 2px;
    background-color: #333;
    display: inline-block;
}
.info__icon:before, .info__icon:after{
    content: "";
    position: absolute;
    left: 0;
    transition: all .3s;
}
.info__icon:before{
    top: -1rem;
}
.info__icon:after{
    top: 1rem;
}
.info__btn:hover .info__icon::before{
    top: -1.2rem;
}
.info__btn:hover .info__icon::after{
    top: 1.2rem;
}
.translateY-enter-active{
    transform-origin: 0 0 0;
    transition: all .4s ease-out;
}
.translateY-leave-active{
    transition: all .3s ease-in;
}
.translateY-leave-to, .translateY-enter-from{
    transform: translateY(-20%);
    opacity: 0;
}
.translateY-leave-from, .translateY-enter-to{
    top: 0;
    opacity: 1;
}
.info{
    grid-row: 3;
    grid-column: 2;

    z-index: 10;
    background-color: rgb(245, 245, 245, .8);
    width: 15rem;
    height: 12rem;
    justify-self: end;

    display: flex;
    flex-direction: column;
}
.info__text{
    margin-left: 5%;
    margin-top: 1rem;
}
</style>