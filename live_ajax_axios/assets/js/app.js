/* const { createApp } = Vue

  createApp({
    data() {
      return {
        randomNumber: '',
        error: false
      }
    },
    mounted() {
        // get al link e mentre aspetto la risposta uso il then che mi dà accesso all'intera risposta e quindi posso recuperare i dati all'interno
        axios('https://flynn.boolean.careers/exercises/api/random/int')
        .then(response=>{

            console.log(response); // intero oggetto

            console.log(response.data); // oggetto js

            console.log(response.data.response); // entro nel dato selezionato

            this.randomNumber = response.data.response // stampo in pagina sull'h1 collegato
        })
        // error mi da il messaggio di errore
        .catch(error=>{
            console.log(error);
            console.log(error.message);

            this.error = error.message;
        })
    }
  }).mount('#app') */






















/* const { createApp } = Vue

  createApp({
    data() {
      return {
        message:'hi',
        randomNumb: ''
      }
    
    },
    mounted() {
        console.log('ciao');

        axios.get('https://flynn.boolean.careers/exercises/api/random/int')
        .then(response=> {
            console.log(response);
            this.randomNumb = response.data.response;
    })
    }
}).mount('#app') */



/* 
Tramite due chiamate axios, generiamo 2 numeri casuali: uno per l'utente e uno per il pc. 
Stampiamo in pagina i due numeri e il vincitore, ossia chi ha il numero più grande.
*/


/* const { createApp } = Vue

  createApp({
    data() {
      return {
        playerNumber: '',
        pcNumber: '',
        
      }
    
    },
    mounted() {
       axios.get('https://flynn.boolean.careers/exercises/api/random/int')
       .then(response=> {
        console.log(response);
        this.playerNumber = response.data.response;
       });

       axios.get('https://flynn.boolean.careers/exercises/api/random/int')
       .then(response=> {
        console.log(response);
        this.pcNumber = response.data.response;
       })
    
    }
}).mount('#app') */

/* 
Richiedere all'endpoint una frase e stamparla in pagina
https://flynn.boolean.careers/exercises/api/random/sentence
*/

const { createApp } = Vue

  createApp({
    data() {
      return {
        frase:''
        
      }
    
    },
    mounted() {
       axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
       .then(response=>{
        console.log(response.data.response);

        this.frase = response.data.response;
       })
    
    }
}).mount('#app')