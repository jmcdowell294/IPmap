<template>
    <div class="input">
        <span class="input__text">Address: </span>
        <input class="input__ip" v-model="$store.state.address" @keydown.enter="searchIP()" placeholder="(required)">
        <span class="input__text">City:  </span>
        <input class="input__city" v-model="$store.state.cityInput" placeholder="(optional)">
        <span class="input__text">State: </span>
        <input class="input__state" v-model="$store.state.stateInput" placeholder="(optional)">
        <span class="input__text">ZIP code: </span>
        <input class="input__zip" v-model="$store.state.zipInput" placeholder="(optional)">
        <button class="input__btn" @click="searchIP()">Search</button>
    </div>
    <button class="info__btn" @click="toggleInfo()" v-bind:class="{active:getInfoVisibility}">
        <span class="info__icon"></span>
    </button>
</template>

<script>
export default{
    name: 'Searchbar',
    methods: {
        toggleInfo(){
            this.$store.commit('toggleInfoVis');
        },
        searchIP(){
            
            let url = 'https://geocoding.geo.census.gov/geocoder/locations/address?street=' + this.getAddress;
            if(this.getCityInput != ''){
                url = url + '&city=' + this.getCityInput;
            }
            if(this.getStateInput != ''){
                url = url + '&state=' + this.getStateInput;
            }
            if(this.getZipInput != ''){
                url = url + '&zip=' + this.getZipInput;
            }
            url = url + '&benchmark=2020&format=json'
            console.log(url)
            
            
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
        getAddress(){
            return this.$store.getters.getAddress;
        },
        getCityInput(){
            return this.$store.getters.getCityInput;
        },
        getStateInput(){
            return this.$store.getters.getStateInput;
        },
        getZipInput(){
            return this.$store.getters.getZipInput;
        }
    }
}
</script>

<style scoped>
.input__text{ 
    margin-left: 1rem;
    font-size: 1.6rem;
}
.input__ip{
    width: 20rem;
    height: 1rem;
}
.input__city{
    height: 1rem;
    width: 8rem;
}
.input__state{
    height: 1rem;
    width: 4rem;
}
.input__zip{
    height: 1rem;
    width: 5rem;
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