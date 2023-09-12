const { createApp } = Vue

  createApp({
    data() {
      return {
        /* message: 'Hello Vue!',
        awesome: true,
        type: 'C',
        ok: false 
        greetings: false,
        template: false,*/

        //items: [{ message: 'Foo' }, { message: 'Bar' }],

        /* myObject: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
            
        } */

        /* items: [
            {
                id : 1000,
                msg : 'ciao',
                number : 30,
                job : 'panettiere',
                comp : true
            },
            {
                id : 1001,
                msg : 'salve',
                number : 25,
                job : 'elettricista',
                comp : false
            },
            {
                id : 1002,
                msg : 'buongiorno',
                number : 45,
                job : 'corriere',
                comp : false
            },
            {
                id : 1003,
                msg : 'addio',
                number : 50,
                job : 'parrucchiere',
                comp : true
            },
        ] */

        colors: [
            'blue', 'red', 'violet'
        ]
      }
    }
  }).mount('#app')