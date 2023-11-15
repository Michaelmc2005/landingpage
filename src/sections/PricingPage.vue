<template>
    <div class="pricingPage">
      <div class="div">
        <div class="back-anew-way">
          <div class="overlap-group">
            <img
              class="back-a-new-way"
              alt="Back a new way"
              src="https://c.animaapp.com/gQPgEYvK/img/backanewway.svg"
            />
            <img
              class="front-a-new-way"
              alt="Front a new way"
              src="https://c.animaapp.com/gQPgEYvK/img/frontanewway.svg"
            />
            <p class="text-wrapper">A new way to learn.</p>
          </div>
        </div>
        <div class="overlap">
          <div class="rectangle" />
          <div class="rectangle-2" />
          <div class="rectangle-3" />
          <p class="p-getready">Get ready to study smarter with Premium!</p>
          <img class="img-back" alt="Img back" src="https://c.animaapp.com/gQPgEYvK/img/imgback.svg" />
          <img class="img" alt="Img" src="https://c.animaapp.com/gQPgEYvK/img/img.png" />
          <img class="message" alt="Message" src="https://c.animaapp.com/gQPgEYvK/img/message1@2x.png" />
          <img class="message-2" alt="Message" src="https://c.animaapp.com/gQPgEYvK/img/message2@2x.png" />
        </div>
        <img class="rectangle-4" alt="Rectangle" src="https://c.animaapp.com/gQPgEYvK/img/rectangle-33.png" />
        <p class="with-socratique">“with Socratique, studying doesn't seem so difficult any more.”</p>
        <div class="free">
          <div class="overlap-2">
            <div class="overlap-3">
              <div class="text-wrapper-2">£0</div>
              <p class="only">
                Only 25,000 characters of dialogue
                <br />
                Access with advertisements
                <br />
                No document functionality
              </p>
              <div class="get-started" @click="signIn">
                <div class="div-wrapper">
                  <div class="text-wrapper-3">Get Started</div>
                </div>
              </div>
            </div>
            <p class="div-2">
              <span class="div-3">Free</span>
              <span class="text-wrapper-4">&nbsp;</span>
            </p>
            <p class="text-wrapper-5">
              For students who want to dip their feet into learning within socratic dialouge
            </p>
          </div>
        </div>
        <div class="premium">
          <div class="overlap-4">
            <div class="overlap-5">
              <div class="star-your-free-trial">
                <div class="overlap-group-2" @click="stripe">
                  <div class="text-wrapper-6" >Get Premium</div>
                </div>
              </div>
              <div class="text-wrapper-7">Per month</div>
              <div class="text-wrapper-8">£6.99</div>
              <p class="unlimted-dialouge-no">
                Unlimited dialouge
                <br />
                No Advertising
                <br />
                Learn from your documents
                <br />
                Access to community of socratique students.
                <br />
              </p>
            </div>
            <p class="text-wrapper-9">
              For serious students who are looking to increase dramitcally increase their rate of learning.
            </p>
            <div class="div-2">Premium</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { signInWithGoogle } from "@/firebase"; 
  export default {
    name: "PricingPage",
    methods: {
    async signIn() {
      try {
        const user = await signInWithGoogle();
        if (user) {
          console.log("User signed in: ", user);
          window.location.href = 'https://socraticdialogue.vercel.app/';

        }
      } catch (error) {
        console.error("Failed to sign in: ", error);
      }
    },
    stripe(){
      window.location.href = 'https://checkout.stripe.com/c/pay/cs_live_a1ecTkrIGSW1POpQoriv0EVgIjXZ78SiSshkwJM4oM3iTHHaWwWQgrzM0d#fidkdWxOYHwnPyd1blppbHNgWjA0SkY0c1dJUz1TPWZObF9ANjVvbkNQck9mYEtIQndrb3dQRGdIRkxudEhPSVBsTWhpfzdRUmd2UWJHNnBHa0J%2FVlBQamlqNX81Y1xfMERqUG5NM1Y9SzVSNTVsakliYzZ%2FdicpJ3VpbGtuQH11anZgYUxhJz8nYVczN2ZhPHQ9Z2QzN241NTU1J3gl';
    }
  }
  };
  </script>
  
  <style scoped>
  .pricingPage {
    background-color: #4e3498;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  .div {
    background-color: #4e3498;
    border: 1px solid;
    border-color: #000000;
    height: 2416px;
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  
  .back-anew-way {
    height: 415px;
    left: 9%;
    position: absolute;
    top: 1117px;
    width: 1264px;
  }
  
  .overlap-group {
    height: 415px;
    position: relative;
    width: 1262px;
  }
  
  .back-a-new-way {
    height: 146px;
    left: 12%;
    position: absolute;
    top: 154px;
    width: 1006px;
  }
  
  .front-a-new-way {
    height: 146px;
    left: 11%;
    position: absolute;
    top: 142px;
    width: 1006px;
  }
  
  .text-wrapper {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 90.2px;
    font-weight: 900;
    height: 415px;
    left: 1%;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 65px;
    width: 1262px;
  }
  
  .overlap {
    height: 621px;
    left: 11%;
    position: absolute;
    top: 151px;
    width: 100%;
  }

  .rectangle {
    background-color: #e71919;
    filter: blur(300px);
    height: 620px;
    left: 779px;
    position: absolute;
    top: 0;
    width: 538px;
  }
  
  .PricingPage .rectangle-2 {
    background-color: #16b5f9;
    filter: blur(300px);
    height: 246px;
    left: 0;
    position: absolute;
    top: 2px;
    width: 417px;
  }
  
  .PricingPage .rectangle-3 {
    background-color: #ffcd1f;
    filter: blur(200px);
    height: 108px;
    left: 231px;
    position: absolute;
    top: 395px;
    width: 499px;
  }
  
  .p-getready {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 90px;
    font-weight: 800;
    height: 501px;
    left: 20px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-shadow: 0px 4px 4px #00000040;
    top: 74px;
    width: 806px;
    z-index: 3;
  }
  
      .img-back {
    height: 576px;
    left: 761px;
    position: absolute;
    top: 45px;
    width: 538px;
  }
  
    .img {
    height: 590px;
    left: 749px;
    position: absolute;
    top: 19px;
    width: 530px;
  }
  
    .message {
    height: 36px;
    left: 1161px;
    position: absolute;
    top: 174px;
    width: 121px;
  }
  
    .message-2 {
    height: 36px;
    left: 1028px;
    position: absolute;
    top: 233px;
    width: 114px;
  }
  
    .rectangle-4 {
    height: 179px;
    left: -4276px;
    position: absolute;
    top: 3000px;
    width: 1002px;
  }
  
    .with-socratique {
    color: #b4c9ff;
    font-family: "Montserrat", Helvetica;
    font-size: 64px;
    font-style: italic;
    font-weight: 400;
    height: 131px;
    left: 12%;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 913px;
    width: 1238px;
  }
  
    .free {
    height: 667px;
    left: 17%;
    position: absolute;
    top: 1614px;
    width: 511px;
  }
  
    .overlap-2 {
    background-color: #2e1d5f;
    border-radius: 71.51px;
    height: 667px;
    position: relative;
    width: 503px;
  }
  
    .overlap-3 {
    height: 429px;
    left: 48px;
    position: absolute;
    top: 186px;
    width: 444px;
  }
  
    .text-wrapper-2 {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 81.3px;
    font-weight: 900;
    height: 119px;
    left: 120px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 15px;
    width: 167px;
  }
  
    .only {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 26px;
    font-weight: 300;
    height: 293px;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 115px;
    width: 444px;
  }
  
    .get-started {
    height: 58px;
    left: 65px;
    position: absolute;
    top: 371px;
    width: 273px;
  }
  
    .div-wrapper {
    background-color: #435aad;
    border: 1.63px solid;
    border-color: #000000;
    border-radius: 18.69px;
    height: 58px;
    position: relative;
    width: 271px;
  }
  
    .text-wrapper-3 {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 29.3px;
    font-weight: 800;
    height: 53px;
    left: 23px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 20%;
    width: 223px;
  }
  
    .free .div-2 {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 52px;
    font-weight: 400;
    height: 54px;
    left: 119px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: -13px;
    white-space: nowrap;
    width: 265px;
  }
  .premium .div-2 {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 52px;
    font-weight: 400;
    height: 54px;
    left: 119px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 36px;
    white-space: nowrap;
    width: 265px;
  }
    .span {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 52px;
    font-weight: 400;
    letter-spacing: 0;
  }
  
    .text-wrapper-4 {
    font-weight: 600;
  }
  
    .text-wrapper-5 {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 19.5px;
    font-weight: 300;
    height: 37px;
    left: 59px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 117px;
    width: 387px;
  }
  
    .premium {
    height: 667px;
    left: 51%;
    position: absolute;
    top: 1614px;
    width: 513px;
  }
  
    .overlap-4 {
    background-color: #9571fc;
    border-radius: 65.81px;
    height: 667px;
    position: relative;
    width: 503px;
  }
  
    .overlap-5 {
    height: 429px;
    left: 45px;
    position: absolute;
    top: 186px;
    width: 444px;
  }
  
    .star-your-free-trial {
    height: 58px;
    left: 21px;
    position: absolute;
    top: 371px;
    width: 377px;
  }
  
    .overlap-group-2 {
    background-color: #4d5fc1;
    border: 1.62px solid;
    border-color: #000000;
    border-radius: 18.69px;
    height: 58px;
    position: relative;
    width: 375px;
  }
  
    .text-wrapper-6 {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 29.2px;
    font-weight: 800;
    height: 55px;
    left: -2px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 20%;
    width: 371px;
  }
  
    .text-wrapper-7 {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 26px;
    font-weight: 400;
    height: 37px;
    left: 39px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 102px;
    width: 340px;
  }
  
  .text-wrapper-8 {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 81.2px;
    font-weight: 900;
    height: 119px;
    left: 58px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 14px;
    width: 288px;
  }
  
  .unlimted-dialouge-no {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 26px;
    font-weight: 300;
    height: 200px;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 124px;
    width: 444px;
  }
  
  .text-wrapper-9 {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 19.5px;
    font-weight: 300;
    height: 37px;
    left: 76px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 98px;
    width: 340px;
  }
  </style>
  