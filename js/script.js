console.log("Collegamento javascript ok")

const { createApp } = Vue;

createApp ({
    data () {
        return {
            randomEmail: []
        }
    },
    mounted () {
        for(let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then ((resp) => {
                this.randomEmail.push(resp.data.response);
            });
        }
    }
}).mount('#app');