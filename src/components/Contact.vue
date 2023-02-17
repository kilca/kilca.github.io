<template>
<div class="section-content">
    <h1>Contact</h1>

      <div class="text-center">
  
          <input
            type="text"
            name="user_name"
            v-model="name"
            class="pinput"
            placeholder="name"
          />

 
          <input
            type="email"
            name="user_email"
            v-model="email"
            placeholder="email"
            class="pinput"
            style="transition-delay: 0.4s"
          />

          <textarea
            name="message"
            v-model="text"
            placeholder="message"
            class="pinput"
            rows="4"
          ></textarea>
        <br/>
        <button
          @click.prevent="sendEmail"
        >
          Send
        </button>
  </div>
</div>
</template>

<script lang="ts">

//import config from "../../config";
//import emailjs from "emailjs-com";
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
  }
})
export default class Contact extends Vue {

  data() {
    return {
      email: "",
      name: "",
      text: "",
      showSnackbar: false,
      snackbarMessage: "",
      snackbarColor: "",
    };
  }
  /*
  sendEmail() {
    if (!this.email || !this.name || !this.text) {
      this.showSnackbar = true;
      this.snackbarMessage = "Please all the fields";
      this.snackbarColor = "#64808E";
    } else {
      var obj = {
        user_email: this.email,
        from_name: this.name,
        message_html: this.text,
        to_name: "Mahy Mohab",
      };

      emailjs
        .send(
          config.emailjs.serviceID,
          config.emailjs.templateID,
          obj,
          config.emailjs.userID
        )
        .then(
          (result) => {
            this.showSnackbar = true;
            this.snackbarMessage = "Thanks! Message recieved.";
            this.snackbarColor = "#1aa260";

            this.email = "";
            this.text = "";
            this.name = "";
          },
          (error) => {
            this.showSnackbar = true;
            this.snackbarMessage = "Oops! Something went wrong.";
            this.snackbarColor = "#64808E";
          }
        );
    }
    */

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.section-content{
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
}

.pinput {
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 7px;
  margin-top:5px;
  padding: 10px;
  width: 50%;
  //transition: all 1s;
  background-color: #b3b3cc;
}

.btn {
  border-color: #759CC9;
  color: #759CC9;
  width: 50%;
}

.btn:hover {
  background-color: #759CC9;
  border-color: #759CC9;
  color: white;
}

.btn:focus {
  background-color: #759CC9;
  border-color: #759CC9;
  color: white;
}

.pgray-dark {
  background-color: #3c4148 !important;
}
</style>