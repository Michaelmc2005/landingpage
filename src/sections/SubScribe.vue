<template>
  <div class="hero">
    <div class="overlap-group">
      <img
        class="homepage-container"
        alt="Homepage container"
        src="../assets/subBG.jpg"
      />
      <img class="ellipse" alt="Ellipse" src="https://c.animaapp.com/g6t9Fn8X/img/ellipse-2-1.png" />
      <img class="img" alt="Ellipse" src="https://c.animaapp.com/g6t9Fn8X/img/ellipse-1-1.png" />
      <div class="text-wrapper">We'd like to invite you to join our</div>
      <p class="not-harder">
        <span class="text-wrapper-3">Join a community of learners and thinkers</span>
      </p>
      <div class="start-learning-back" @click="storeEmail">
        <div class="start-learning">
          <div class="text-wrapper-6">Start Learning</div>
        </div>
      </div>
      <input
        type="email"
        class="email-input"
        placeholder="Enter email"
        v-model="email"
        @keydown.enter="handleEnterPress"
      />
      <div v-if="showThankYouMessage" class="thank-you-message">
        Thank You for joining the Socratique Newsletter!
      </div>
      <p class="div">Redefining the Learning Experience with Socratic Dialogue.</p>
      <div class="rectangle" />
      <div class="text-wrapper-5">Newsletter</div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

export default {
  name: "SubScribe",
  setup() {
    const email = ref("");
    const showThankYouMessage = ref(false);

    const isValidEmail = (email) => {
      const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      return re.test(email);
    };

    const handleEnterPress = async () => {
      if (isValidEmail(email.value)) {
        await storeEmail();
        email.value = "";
        showThankYouMessage.value = true;
      }
    };

    const storeEmail = async () => {
      try {
        const docRef = await addDoc(collection(db, "emails"), {
          email: email.value,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    return {
      email,
      storeEmail,
      showThankYouMessage,
      handleEnterPress,
    };
  },
};
</script>

<style scoped>
.hero {
  height: 784px;
  width: 100%;
  overflow-x: hidden;
  
}
.thank-you-message {
  position: absolute;
  top: 715px;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 24px;
  color: white;
  text-align: center;
  font-weight: 600;
}
.hero .overlap-group {
  height: 1126px;
  position: relative;
  top: -92px;
}

.hero .homepage-container {
  height: 764px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 112px;
  width: 100%;
  
}
.email-input {
  position: absolute;
  top: 648px;
  left: 29%;
  height: 40px;
  width: 478px;
  border-radius: 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  }
.hero .ellipse {
  height: 1126px;
  left: 491px;
  position: absolute;
  top: 0;
  width: 100%;
  overflow: hidden;
}

.hero .img {
  height: 1077px;
  left: 0;
  position: absolute;
  top: 0%;
  width: 1440px;
}

.hero .vector {
  height: 609px;
  right: 3%;
  position: absolute;
  top: 177px;
  width: 634px;
}

.hero .vector-2 {
  height: 625px;
  right: 4%;
  position: absolute;
  top: 147px;
  width: 623px;
}

.hero .start-learning-back {
  background-color: #1d3557;
  border: 1px solid;
  border-color: #000000;
  border-radius: 18px;
  height: 63px;
  left: 60%;
  position: absolute;
  top: 642px;
  width: 175px;
  transition: transform 0.3s ease;
}

.hero .start-learning {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 10px;
  background-color: #1d3557;
  color: #fff;
  border: none;
  cursor: pointer;
  opacity: 0;
  transform-origin: center;
  top: 45%;
}

.hero .smarter {
  background-color: #000000;
  border: 2px solid;
  border-radius: 12px;
  height: 126px;
  left: 83px;
  position: absolute;
  top: 273px;
  width: 568px;
}

.hero .text-wrapper {
  color: #ffffff;
  font-family: "Montserrat", Helvetica;
  font-size: 57px;
  font-weight: 900;
  height: 102px;
  left: 23%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 198px;
  width: 100%;
  transform-origin: center;
}

.hero .not-harder {
  color: #ffffff;
  font-family: "Montserrat", Helvetica;
  font-size: 40px;
  font-weight: 400;
  height: 312px;
  left: -1%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 35%;
  width: 100%;
  text-align: center;

}

.hero .span {
  font-weight: 900;
}

.hero .text-wrapper-2 {
  font-style: italic;
  font-weight: 900;
}

.hero .text-wrapper-3 {
  text-align: center;
  font-size: 50px;
  font-style: italic;
  font-weight: 900;
}

.hero .text-wrapper-4 {
  font-size: 75px;
  font-weight: 900;
}

.hero .div {
  color: #ffffff;
  font-family: "Montserrat", Helvetica;
  font-size: 30px;
  font-weight: 600;
  height: 95px;
  left: 32%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 510px;
  width: 590px;
  text-align: center;

}

.hero .rectangle {
  background-color: #775fff;
  border: 2px solid;
  border-color: #000000;
  border-radius: 13px;
  height: 119px;
  left: 32%;
  position: absolute;
  top: 280px;
  width: 555px;
}

.hero .text-wrapper-5 {
  color: #ffffff;
  font-family: "Montserrat", Helvetica;
  font-size: 120px;
  font-weight: 900;
  height: 324px;
  left: 30.5%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 260px;
  width: 559px;
  transform-origin: center;
  transform: scale(0.85);
}

.hero .message {
  height: 47px;
  right: 35%;
  position: absolute;
  top: 499px;
  width: 114px;
}

.hero .message-2 {
  height: 42px;
  right: 27%;
  position: absolute;
  top: 444px;
  width: 121px;
}
.hero .message:hover,
.hero .message-2:hover {
  transform: scale(1.1);
  transition: transform 0.7s ease;
}
.hero .start-learning:hover {
transform: translate(-50%, -50%) scale(1.1);
transition: transform 0.7s ease;
}
.hero .text-wrapper-6 {
      color: #ffffff;
  font-family: "Montserrat", Helvetica;
  font-size: 20px;
  font-weight: 800;
  height: 24px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  white-space: nowrap;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 1600px) {
  .email-input{
    position: absolute;
    top: 648px;
    left: 24%;
    height: 40px;
    width: 478px;
    border-radius: 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
  }
}
@media (max-width: 1280px) {
  .email-input{
    position: absolute;
    top: 648px;
    left: 25%;
    height: 40px;
    width: 478px;
    border-radius: 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
  }
  .hero .start-learning-back{
    background-color: #1d3557;
    border: 1px solid;
    border-color: #000000;
    border-radius: 18px;
    height: 63px;
    left: 66%;
    position: absolute;
    top: 642px;
    width: 175px;
    transition: transform 0.3s ease;
  }
  .hero .div{
    color: #ffffff;
  font-family: "Montserrat", Helvetica;
  font-size: 30px;
  font-weight: 600;
  height: 95px;
  left: 27%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 510px;
  width: 590px;
  text-align: center;
  }
  .hero .text-wrapper-5{
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 120px;
    font-weight: 900;
    height: 324px;
    left: 26.5%;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 260px;
    width: 559px;
    transform-origin: center;
    transform: scale(0.85);
  }
  .hero .rectangle{
    background-color: #775fff;
    border: 2px solid;
    border-color: #000000;
    border-radius: 13px;
    height: 119px;
    left: 28%;
    position: absolute;
    top: 280px;
    width: 555px;
  }
  .hero .text-wrapper{
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 57px;
    font-weight: 900;
    height: 102px;
    left: 16%;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 198px;
    width: 100%;
    transform-origin: center;
  }
}
</style>
