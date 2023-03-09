const { createApp } = Vue


createApp({
    data() {
        return {
            message: "home"
        }
    }
}).mount("#home")

createApp({
    data() {
        return {
            message: "music"
        }
    }
}).mount("#music")

createApp({
    data() {
        return {
            message: "code"
        }
    }
}).mount("#code")

createApp({
    methods: {
        openNav() {
            document.getElementById("sidebar").style.width = "250px";
        },
        closeNav() {
            document.getElementById("sidebar").style.width = "0";
        },
        hashChanged(event) {
            console.log(event)
        }
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
