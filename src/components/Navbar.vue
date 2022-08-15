<template>
    <div class="container__nav">
        <div class="nav__title">
            <span>Search By:</span>
        </div>
        <button class="nav__btn" v-bind:class="{active:getIpMode}" @click="setIpMode(true),setAddrMode(false)"><span class="nav__btn-text">IP Address</span></button>
        <button class="nav__btn" v-bind:class="{active:getAddrMode}" @click="setAddrMode(true), setIpMode(false)"><span class="nav__btn-text">Physical Address</span></button>
        <button class="nav__btn" @click="addMarker()"><span class="nav__btn-text">Add Marker</span></button>
   </div>
</template>

<script>
export default{
    name: 'Navbar',
    methods: {
        setIpMode(val){
            this.$store.commit('setIpMode', val);
        },
        setAddrMode(val){
            this.$store.commit('setAddrMode', val);
        },
        addMarker(){
            this.$store.commit('addMarker');
        },
        update(){
            this.$store.commit('updateCoords');
        }
    },
    computed: {
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
.container__nav{
    grid-row: 3;
    grid-column: 1;
    margin-left: 50%;
    

    display: flex;
    flex-direction: column;
}
.nav__btn{
    height: 3rem;
    border: none;
    background-color: lightgrey;
    position: relative;
}
.nav__btn::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    z-index: 1;
    background-color: whitesmoke;
    transform: scaleY(0);
    transition: transform .2s, width .4s cubic-bezier(1,0,0,1) .2s, background-color .1s;
}
.nav__btn:hover{
    cursor: pointer;
}
.nav__btn:hover::before{
    transform: scaleY(1);
    width: 100%;
}
.nav__btn.active::before{
    transform: scaleY(1);
    width: 100%;
}
.nav__btn-text{
    position: relative;
    z-index: 3;
}
.nav__title{
    font-size: 1.5rem;
    padding: .5rem 0;
    text-align: center;
    background-color: lightgrey;
}

</style>