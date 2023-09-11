const { createApp } = Vue

  createApp({
    data() {
      return {
        /* message: 'Hello Vue!',
        name: '',
        surName: '', */
        titleColor: 'text-red'
      }
    },
    methods: {
        upDateColor() {
            
            console.log(this.titleColor);
            if (this.titleColor === 'text-red'){
                this.titleColor = 'text-blue';
            } else {
                this.titleColor = 'text-red';
            }
        }
    }

  }).mount('#app')

/* 
Predisponiamo due input, in cui inseriremo Nome e Cognome.
In un paragrafo utilizzare Nome e Cognome per salutare l’utente
*/

/* 
Creiamo una pagina con all’interno un titolo di colore rosso.
Al click di un bottone il titolo diventerà blu.
*/