var app= new Vue({
  el: '#app',
  data: {
    indexChat:0,
    Newtext:"",
    searchName:"",

    user:{
        name: 'Massimo',
        surname: '',
      },

    contacts: [
      {
        name: "Michele",
        avatar: 'img/avatar_2.jpg',
        visible: true,
        find:true,


        log: "ultimo accesso oggi alle: "+ dayjs(new Date()).subtract(20,'minute').format('HH:mm:ss').toString(),
        messages: [
          {
            date: '16/03/2022 15:30:55',
            text: 'Lorem ipsum dolor sit amet consectetur ad',
            status: 'sent',
            isHiddenOptions: true,
          },
          {
            date: '16/03/2022 15:30:55',
            text: 'Lorem ipsum dolor sit amet consectetur ad',
            status: 'sent',
            isHiddenOptions: true,
          },
          {
            date: '16/03/2022 15:30:55',
            text: 'Lorem ipsum dolor sit amet consectetur ad',
            status: 'received',
            isHiddenOptions: true,
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: 'img/avatar_3.jpg',
        visible: false,
        find:true,
        log: "ultimo accesso oggi alle: "+ dayjs(new Date()).subtract(126,'minute').format('HH:mm:ss').toString(),
        messages: [
          {
            date: '16/03/2022 15:30:55',
            text: 'Lorem ipsum dolor sit amet consectetur ad',
            status: 'sent',
            isHiddenOptions: true,
          },
          {
            date: '16/03/2022 15:30:55',
            text: 'Lorem ipsum dolor sit amet consectetur ad',
            status: 'received',
            isHiddenOptions: true,
          },
          {
            date: '16/03/2022 15:30:55',
            text: 'Lorem ipsum dolor sit amet consectetur ad',
            status: 'sent',
            isHiddenOptions: true,
          }
        ],
      },
    ],
  },

  methods: {

    activeChat: function (index) {


      this.contacts.forEach((element) => {
        element.visible=false;
      });

      this.contacts[index].visible=true;
      this.indexChat=index;

    },

    submit: function (text,date,status) {

        text=this.Newtext,
        date=dayjs(new Date()).format('DD/MM/YYYY HH:mm:ss');
        status='received';
        isHiddenOptions= true,
        this.contacts[this.indexChat].messages.push(
          {
            text,
            date,
            status,
            isHiddenOptions,
          }
        );
        this.newSentMesseage();


    },

    newSentMesseage: function (text,date,status) {
        var adresses=this.contacts[this.indexChat].messages;
        setTimeout(function(){
        text="Ok";
        date=dayjs(new Date()).format('DD/MM/YYYY HH:mm:ss');
        status='sent';
        isHiddenOptions= true,
        adresses.push(
          {
            text,
            date,
            status,
            isHiddenOptions,
          }
        )
        }, 1000);

    },

  },
})