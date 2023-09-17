 import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const RootComponent = {
  template:       `<div>
                    <label><input type="radio" v-model="titleId" name="meetupId" value="1" /> 1</label>
                    <label><input type="radio" v-model="titleId" name="meetupId" value="2" /> 2</label>
                    <label><input type="radio" v-model="titleId" name="meetupId" value="3" /> 3</label>
                    <label><input type="radio" v-model="titleId" name="meetupId" value="4" /> 4</label>
                    <label><input type="radio" v-model="titleId" name="meetupId" value="5" /> 5</label>
                    <hr />
                    <h3>{{meetupTitle}}</h3>
                  </div>`,
  data(){
    return{
        meetupTitle: "",
        titleId: ""
    }
  },
  watch: {
    titleId(){
      fetchMeetupById(this.titleId)
      .then((json) => {
        this.meetupTitle = json.title;
      })
      .catch((error) => {
        console.error("Error:", error);
      });}
  },
}


createApp(RootComponent).mount('#app')
