import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

import "leaflet/dist/leaflet.css"
import L from "leaflet"
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'


const store = createStore({
    state(){
        return{
            Ip: '',
            lat: '',
            lng: '',
            city: '',
            region: '',
            country: '',
            zipcode: '',
            isp: '',
            map: null,
            infoVisible: false,
            ipMode: true,
            addrMode: false,
            address: '',
            cityInput: '',
            stateInput: '',
            zipInput: '',
        };
    },
    mutations: {
        setLat(state, payload){
            state.lat = payload;
        },
        setLng(state, payload){
            state.lng = payload;
        },
        setCity(state, payload){
            state.city = payload;
        },
        setRegion(state, payload){
            state.region = payload;
        },
        setCountry(state, payload){
            state.country = payload;
        },
        setZipcode(state, payload){
            state.zipcode = payload;
        },
        setIsp(state, payload){
            state.isp = payload;
        },
        setIpMode(state, payload){
            state.ipMode = payload;
        },
        setAddrMode(state, payload){
            state.addrMode = payload;
        },
        toggleInfoVis(state){
            state.infoVisible = !state.infoVisible;
        },
        createMap(state){
            if(state.map){
                state.map.remove();
            }
            state.map = L.map('map',{
              center: [state.lat, state.lng],
              zoom: 13
            })
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: 19,
              attribution: '© OpenStreetMap'
            }).addTo(state.map);
            L.marker([state.lat, state.lng],{icon: new Icon({iconUrl: markerIconPng})}).addTo(state.map)
            console.log(state.map)
        },
        addMarker(state){
            L.marker([state.lat+.01, state.lng],{icon: new Icon({iconUrl: markerIconPng}), draggable: true}).addTo(state.map)
        }
    },
    getters: {
        getIp(state){
            return state.Ip;
        },
        getLat(state){
            return state.lat;
        },
        getLng(state){
            return state.lng;
        },
        getCity(state){
            return state.city;
        },
        getRegion(state){
            return state.region;
        },
        getCountry(state){
            return state.country;
        },
        getZipcode(state){
            return state.zipcode;
        },
        getIsp(state){
            return state.isp;
        },
        getInfoVis(state){
            return state.infoVisible;
        },
        getIpMode(state){
            return state.ipMode;
        },
        getAddrMode(state){
            return state.addrMode;
        },
        getAddress(state){
            return state.address;
        },
        getCityInput(state){
            return state.cityInput;
        },
        getStateInput(state){
            return state.stateInput;
        },
        getZipInput(state){
            return state.zipInput;
        },
    },
    
});

const app = createApp(App);
app.use(store);
app.mount('#app');

