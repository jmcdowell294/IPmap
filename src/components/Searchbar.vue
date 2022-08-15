<template>
    <div class="input">
        <span class="input__text">IP Address:</span>
        <input class="input__ip" v-model="$store.state.Ip" @keydown.enter="searchIP()">
        <button class="input__btn" @click="searchIP()">Search</button>
    </div>
    <button class="info__btn" @click="toggleInfo()" v-bind:class="{active:getInfoVisibility}">
        <span class="info__icon"></span>
    </button>
</template>

<script>
import axios from 'axios'
export default{
    name: 'Searchbar',
    methods: {
        toggleInfo(){
            this.$store.commit('toggleInfoVis');
        },
        searchIP(){
            let url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_ykk3cUjrQ0W6JaZx6Fjo3tGe3qoZ1&ipAddress="+ this.getIP;
            axios.get(url).then( response => {
                this.setLatitude(response.data.location.lat);
                this.setLongitude(response.data.location.lng);
                this.setCity(response.data.location.city);
                this.setRegion(response.data.location.region);
                this.setCountry(response.data.location.country);
                this.setZipcode(response.data.location.postalCode);
                this.setIsp(response.data.isp);

                this.setMap();
                console.log(response);
                
            }).catch(error => {alert("Invalid request. Enter a valid IP address");
                console.log(error)
                })
        },
        setMap(){
            this.$store.commit('createMap');
        },
        setLatitude(lat){
            this.$store.commit('setLat', lat);
        },
        setLongitude(lng){
            this.$store.commit('setLng', lng);
        },
        setCity(city){
            this.$store.commit('setCity', city);
        },
        setRegion(region){
            this.$store.commit('setRegion', region);
        },
        setCountry(country){
            this.$store.commit('setCountry', country);
        },
        setZipcode(zipcode){
            this.$store.commit('setZipcode', zipcode);
        },
        setIsp(isp){
            this.$store.commit('setIsp', isp);
        },
    },
    computed: {
        getInfoVisibility(){
            return this.$store.getters.getInfoVis;
        },
        getIP(){
            return this.$store.getters.getIp;
        },
    }
}
</script>

<style scoped>
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
</style>