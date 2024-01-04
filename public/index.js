const { createApp } = Vue

createApp({
    data() {
        return {
            heading: data.music.heading,
            sites: data.music.sites
        }
    }
}).mount("#music")

createApp({
    data() {
        return {
            heading: data.code.heading,
            sites: data.code.sites
        }
    }
}).mount("#code")

createApp({
    methods: {
        openNav() {
            document.getElementById("sidebar").style.width = "250px"
        },
        closeNav() {
            document.getElementById("sidebar").style.width = "0"
        },
    },
    computed: {
        currentView() {
            return this.currentPath.slice(1)
        }
    },
    data() {
        return {
            currentPath: window.location.hash
        }
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            document.getElementById("sidebar").style.width = "0"
            this.currentPath = window.location.hash
        })
    }
}).mount('#main')
