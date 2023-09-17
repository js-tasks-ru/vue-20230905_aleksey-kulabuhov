 import { createApp } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

const RootComponent = {
  template: `      <div class="container">
                    <div class="form-group">
                      <input type="search" v-model="searchInput"/>
                    </div>
                    <ul v-for="email in markedEmails" :key="email.id">
                      <li :class="email.class">{{ email.adress }}</li>
                    </ul>
                  </div>`
  ,
  data() {
    return {
      searchInput: null,
    }
  },
  computed: {
    markedEmails(){return [...emails].map(adress => {return this.searchInput && adress.toLowerCase().includes(this.searchInput.toLowerCase()) ? {class: "marked", adress} : {adress}})},
  }
}

createApp(RootComponent).mount('#app')
