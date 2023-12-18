const { createApp } = Vue;

createApp({
  data() {
    return {
      newMessage: "", // variabile vuota per nuovo messaggio
      searchChat: "", // variabile vuota per la ricerca chat
      contacts: [
        {
          name: 'Michele',
          avatar: 'Avatar/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'message user-message'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'message user-message'
            },
            {
              date: '10/01/2020 16:30:55',
              message: 'Tutto fatto',
              status: 'message interlocutor-message'
            },
          ]
        },
        {
            name: 'Fabio',
            avatar: 'Avatar/avatar_2.jpg',
            visible: true,
            messages: [
              {
                date: '10/01/2020 16:30:55',
                message: 'Hai visto la partita ieri?',
                status: 'message interlocutor-message'
              },
              {
                date: '10/01/2020 15:50:00',
                message: 'Si! male male ieri a Bologna',
                status: 'message user-message'
              },
            ]
        },
        {
            name: 'Samuele',
            avatar: 'Avatar/avatar_3.jpg',
            visible: true,
            messages: [
              {
                date: '15/05/2023 17:30:55',
                message: 'Andiamo al mare?',
                status: 'message interlocutor-message'
              },
              {
                date: '15/05/2023 17:30:55',
                message: 'Non ci sono amico mio',
                status: 'message user-message'
              },
              {
                date: '15/05/2023 17:30:55',
                message: 'Ok allora andiamo domani',
                status: 'message interlocutor-message'
              },
              
            ]
        },
        {
            name: 'Alessandro',
            avatar: 'Avatar/avatar_4.jpg',
            visible: true,
            messages: [
              {
                date: '15/05/2023 17:40:30',
                message: 'Ciao Bro.. come sta andando il corso?',
                status: 'message interlocutor-message'
              },
              {
                date: '15/05/2023 17:40:30',
                message: 'Bello tosto, ma ci sta dai!',
                status: 'message user-message'
              },
            ]
        },
        {
            name: 'Giovanni',
            avatar: 'Avatar/avatar_io.jpg',
            visible: true,
            messages: [
              {
                date: '15/05/2023 14:40:30',
                message: 'Stasera calcetto?',
                status: 'message user-message'
              },
              {
                date: '15/05/2023 14:40:30',
                message: 'Certo, chi perde paga il campo',
                status: 'message interlocutor-message'
              },
              // Altri messaggi...
            ]
        },
        {
            name: 'Claudia',
            avatar: 'Avatar/avatar_4.jpg',
            visible: true,
            messages: [
              {
                date: '15/05/2023 14:40:30',
                message: 'Ciao!',
                status: 'message interlocutor-message'
              },
              // Altri messaggi...
            ]
        },
        {
            name: 'Federico',
            avatar: 'Avatar/avatar_1.jpg',
            visible: true,
            messages: [
              {
                date: '09/02/2023 09:40:30',
                message: 'Hai finito il progetto?',
                status: 'message user-message'
              },
              {
                date: '09/02/2023 09:40:30',
                message: 'Si! ora ho pushato',
                status: 'message interlocutor-message'
              },
              // Altri messaggi...
            ]
        },
        {
            name: 'Davide',
            avatar: 'Avatar/avatar_io.jpg',
            visible: true,
            messages: [
              {
                date: '09/02/2023 09:40:30',
                message: 'Buondi',
                status: 'message interlocutor-message'
              },
              // Altri messaggi...
            ]
        },
        
      ],
      selectContact: 0, // si parte da nessun contatto selezionato
    };
  },

methods: {
    showChat(index) {
        this.selectContact= index;
    },

    addMessage(){
      if (this.newMessage !=="") {
        this.contacts[this.selectContact].messages.push({
          message:this.newMessage,
          status: 'message user-message',
        });
        this.newMessage=""; // resetta vuota la barra del messaggio
      }
    }
}, 
/*methods:{
  addMessage(){
    if (this.newMessage !=="") {
      this.contacts[this.selectContact].messages.push({
        message:this.newMessage,
        status: 'message user-message',
      });
      this.newMessage=""; // resetta vuota la barra del messaggio
    }
  },
},*/

}).mount('#app');




