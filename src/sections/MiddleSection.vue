<template>
    <div class="middle-section">
      <div class="overlap">
        <div class="overlap-group">
        <div class="chat-box">
          <div class="div">
            <div class="chat-box-2" />
            <div class="input" />
            <img
              class="send-button"
              alt="Send button"
              src="https://c.animaapp.com/bwApDxbr/img/sendbutton-1.svg"
            />
            <img
              :class="['message-three', showMessageThree ? 'animated show' : 'animated']"
              alt="Message three"
              src="https://c.animaapp.com/bwApDxbr/img/messagethree-1.png"
            />
            <div
              :class="['message-two', showMessageTwo ? 'animated show' : 'animated']"
            >
              <div class="overlap-group-2">
                <div class="rectangle" />
                <img
                  class="vector"
                  alt="Vector"
                  src="https://c.animaapp.com/bwApDxbr/img/vector-5-1.svg"
                />
                <div class="text-wrapper-2">Photosynthesis!</div>
              </div>
            </div>
            <img
              :class="['message-one', showMessageOne ? 'animated show' : 'animated']"
              alt="Message one"
              src="https://c.animaapp.com/bwApDxbr/img/messageone-1@2x.png"
            />
            <div class="text-wrapper">Send</div>
          </div>
          <p class="a-tool-for-thinkers">
            <span class="span">
              <br />
            </span>
            <span class="text-wrapper-3">A tool for </span>
            <span class="text-wrapper-4">
              thinkers
              <br />
            </span>
            <span class="text-wrapper-5">&amp; </span>
            <span class="text-wrapper-6">learners</span>
            <span class="text-wrapper-5">.</span>
          </p>
        </div>
      </div>
        <div class="overlap-2">
          <p class="a-new-way-to-learn">
            <span class="text-wrapper-7">
              <br />
            </span>
            <span class="text-wrapper-8">A New Way To Learn.</span>
          </p>
          <div class="rectangle-2" />
          <div class="rectangle-3" />
          <div class="text-wrapper-9">Socratic-Dialogue</div>
        </div>
        <div class="overlap-3">
          <img class="img" alt="Vector" src="https://c.animaapp.com/bwApDxbr/img/vector-7-1.svg" />
          <img class="vector-2" alt="Vector" src="https://c.animaapp.com/bwApDxbr/img/vector-6-1.png" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MiddleSection",
    data() {
      return {
        showMessageOne: false,
        showMessageTwo: false,
        showMessageThree: false,
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        const rect = this.$el.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setTimeout(() => {
            this.showMessageOne = true;
          }, 500);
          setTimeout(() => {
            this.showMessageTwo = true;
          }, 1000);
          setTimeout(() => {
            this.showMessageThree = true;
          }, 1500);
        }
      },
    },
  };
  </script>
  
  <style>
  .middle-section {
    height: 1536px;
    width: 100%;
    margin-left: 5%;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  
  .middle-section .overlap {
    background-image: url(https://c.animaapp.com/bwApDxbr/img/middlebackground-1.svg);
    background-size: 100% 100%;
    height: 5%;
    position: relative;
    width: 4%;
    right: 0%;
    border: none;
  }
  
  .middle-section .overlap-group {
    height: 1204px;
    left: 679px;
    position: absolute;
    top: 61px;
    width: 729px;
  }
  
  .middle-section .chat-box {
    height: 624px;
    left: 19%;
    position: absolute;
    top: 0;
    width: 729px;
  }
  
  .middle-section .div {
    height: 624px;
    position: relative;
    width: 725px;
  }
  
  .middle-section .chat-box-2 {
    background: linear-gradient(180deg, rgb(24.29, 14.46, 84.65) 0%, rgb(130.64, 9.39, 187.71) 100%);
    border-radius: 66px;
    box-shadow: 0px 4px 4px #0000004c;
    height: 624px;
    left: 0;
    position: absolute;
    top: 0;
    width: 703px;
  }
  .animated {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.animated.show {
  opacity: 1;
}
  .middle-section .input {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #000000;
    border-radius: 24px;
    height: 57px;
    left: 51px;
    position: absolute;
    top: 513px;
    width: 489px;
  }
  
  .middle-section .send-button {
    height: 57px;
    left: 553px;
    position: absolute;
    top: 513px;
    width: 130px;
  }
  
  .middle-section .message-three {
    height: 151px;
    left: 25px;
    position: absolute;
    top: 258px;
    width: 528px;
  }
  
  .middle-section .message-two {
    height: 47px;
    left: 325px;
    position: absolute;
    top: 162px;
    width: 331px;
  }
  
  .middle-section .overlap-group-2 {
    height: 47px;
    position: relative;
  }
  
  .middle-section .rectangle {
    background-color: #6f86fe;
    border-radius: 19px;
    box-shadow: 0px 4px 4px #00000040;
    height: 47px;
    left: 0;
    position: absolute;
    top: 0;
    transform: rotate(180deg);
    width: 305px;
  }
  
  .middle-section .vector {
    height: 33px;
    left: 278px;
    position: absolute;
    top: 14px;
    width: 53px;
  }
  
  .middle-section .message-one {
    height: 102px;
    left: 25px;
    position: absolute;
    top: 38px;
    width: 455px;
  }
  
  .middle-section .text-wrapper {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 40px;
    font-weight: 500;
    height: 43px;
    left: 567px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 520px;
    white-space: nowrap;
    width: 136px;
  }
  
  .middle-section .text-wrapper-2 {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 30px;
    font-weight: 600;
    height: 33px;
    left: 7%;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 8%;
    white-space: nowrap;
    width: 379px;
  }
  
  .middle-section .a-tool-for-thinkers {
    color: #000000;
    font-family: "Montserrat", Helvetica;
    font-size: 75px;
    font-weight: 400;
    height: 665px;
    left: 21%;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 667px;
    width: 603px;
  }
  
  .middle-section .span {
    text-decoration: underline;
  }
  
  .middle-section .text-wrapper-3 {
    font-size: 95px;
  }
  
  .middle-section .text-wrapper-4 {
    font-size: 100px;
    font-weight: 700;
  }
  
  .middle-section .text-wrapper-5 {
    color: #000000;
    font-family: "Montserrat", Helvetica;
    font-size: 75px;
    font-weight: 400;
    letter-spacing: 0;
  }
  
  .middle-section .text-wrapper-6 {
    font-size: 110px;
    font-weight: 900;
  }
  
  .middle-section .overlap-2 {
    height: 330px;
    left: 143px;
    position: absolute;
    top: 166px;
    width: 526px;
  }
  
  .middle-section .a-new-way-to-learn {
    color: #000000;
    font-family: "Montserrat", Helvetica;
    font-size: 74.9px;
    font-weight: 400;
    height: 330px;
    left: 8px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
    width: 510px;
  }
  
  .middle-section .text-wrapper-7 {
    font-weight: 500;
    text-decoration: underline;
  }
  
  .middle-section .text-wrapper-8 {
    font-weight: 700;
  }
  
  .middle-section .rectangle-2 {
    background-color: #000000;
    border-radius: 11.65px;
    height: 75px;
    left: 3px;
    position: absolute;
    top: 67px;
    width: 464px;
  }
  
  .middle-section .rectangle-3 {
    background-color: #ff7070;
    border-radius: 14.15px;
    height: 71px;
    left: 0;
    position: absolute;
    top: 63px;
    width: 460px;
  }
  
  .middle-section .text-wrapper-9 {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 45.8px;
    font-weight: 700;
    height: 52px;
    left: 22px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 72px;
    white-space: nowrap;
    width: 504px;
  }
  
  .middle-section .overlap-3 {
    height: 545px;
    left: 104px;
    position: absolute;
    top: 826px;
    width: 545px;
  }
  
  .middle-section .img {
    height: 509px;
    left: 0;
    position: absolute;
    top: 37px;
    width: 535px;
  }
  
  .middle-section .vector-2 {
    height: 525px;
    left: 23px;
    position: absolute;
    top: 0;
    width: 522px;
  }
  @media (max-width: 1600px) {
    .middle-section {
      height: 1536px;
      width: 100%;
      margin-left: 0%;
      overflow-y: hidden;
      }
      .middle-section .overlap-group {
      height: 1204px;
      left: 548px;
      position: absolute;
      top: 61px;
      width: 729px;
      }
    .middle-section .overlap-2 {
      height: 330px;
      left: 91px;
      position: absolute;
      top: 166px;
      width: 526px;
    }
}
@media (max-width: 1280px) {
    .middle-section {
      height: 1536px;
      width: 100%;
      margin-left: 0%;
      overflow-y: hidden;
      }
      .middle-section .overlap-group {
      height: 1204px;
      left: 400px;
      position: absolute;
      top: 61px;
      width: 729px;
      }
    .middle-section .overlap-2 {
      height: 330px;
      left: 5px;
      position: absolute;
      top: 166px;
      width: 526px;
    }
}
  </style>
  