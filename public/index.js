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
        colorBox(t) {
            t.target.style["background-color"] = this.randomColor()
        },
        randomColor() {
            let values = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += values[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    },
    computed: {
        currentView() {
            return this.currentPath.slice(1)
        }
    },
    data() {
        return {
            currentPath: window.location.hash,
            boxes: [{}, {}, {}, {},]
        }
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            document.getElementById("sidebar").style.width = "0"
            this.currentPath = window.location.hash
        })
    }
}).mount('#main')
