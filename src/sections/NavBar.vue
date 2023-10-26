<template>
    <div class="navbar">
      <img class="rectangle" alt="Rectangle" src="https://c.animaapp.com/C0OzaKms/img/rectangle-3-1@2x.png" />
      <div class="group">
        <div class="frame">
          <div class="text-wrapper">Home</div>
          <div class="div">Our Mission</div>
          <div class="text-wrapper-2">Premium</div>
        </div>
      </div>
      <div class="buttons">
        <div class="overlap" @click="startLearning">
          <div :class="['rectangle-2', rectangleClassName]" />
          <div class="rectangle-3" />
          <div class="text-wrapper-3">Start Learning</div>
        </div>
        <div class="overlap-group" @click="signIn">
          <div :class="['rectangle-4', rectangleClassNameOverride]" />
          <div class="rectangle-5" />
          <div class="text-wrapper-4">Sign in</div>
        </div>
    </div>
  </div>
</template>


  <script>
import { signInWithGoogle } from "@/firebase";  // Update the import path as needed

export default {
  name: "NavBar",
  props: {
    rectangleClassName: {
      type: String,
      default: "",
    },
    rectangleClassNameOverride: {
      type: String,
      default: "",
    },
  },
  methods: {
    async signIn() {
      try {
        const user = await signInWithGoogle();
        if (user) {
          // You can redirect the user here
          console.log("User signed in: ", user);
          window.location.href = 'https://socraticdialogue.vercel.app/';

        }
      } catch (error) {
        console.error("Failed to sign in: ", error);
      }
    },
  },
};
</script>

  <style>
  .navbar {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #000000;
    height: 111px;
    position: relative;
    width: 100%;
  }
  
  .navbar .rectangle {
    background-blend-mode: lighten;
    height: 70px;
    left: 76px;
    object-fit: cover;
    position: absolute;
    top: 19px;
    width: 212px;
  }
  
  .navbar .group {
    height: 110px;
    left: 30%;
    position: absolute;
    top: 0;
    width: 375px;
  }
  
  .navbar .frame {
    align-items: flex-start;
    display: inline-flex;
    gap: 19px;
    position: relative;
    top: 36%;
  }
  
  .navbar .text-wrapper {
    -webkit-text-stroke: 1px #ffffff;
    color: #000000;
    font-family: "Montserrat", Helvetica;
    font-size: 20px;
    font-weight: 700;
    height: 110px;
    letter-spacing: 0;
    line-height: normal;
    margin-left: -1px;
    margin-top: -2px;
    position: relative;
    text-align: center;
    text-decoration: underline;
    width: 67px;
  }
  
  .navbar .div {
    -webkit-text-stroke: 1px #ffffff;
    color: #000000;
    font-family: "Montserrat", Helvetica;
    font-size: 20px;
    font-weight: 400;
    height: 110px;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -2px;
    position: relative;
    text-align: center;
    width: 171px;
  }
  
  .navbar .text-wrapper-2 {
    -webkit-text-stroke: 1px #ffffff;
    color: #000000;
    font-family: "Montserrat", Helvetica;
    font-size: 20px;
    font-weight: 400;
    height: 109px;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -2px;
    position: relative;
    text-align: center;
    width: 99px;
  }
  
  .navbar .buttons {
    height: 110px;
    right: 2%;
    position: absolute;
    top: -5px;
    width: 353px;
  }
  
  .navbar .overlap {
    height: 110px;
    left: 178px;
    position: absolute;
    top: 0;
    width: 171px;
  }
  
  .navbar .rectangle-2 {
    background-color: #000000;
    border: 1px solid;
    border-color: #000000;
    height: 37px;
    left: 0;
    position: absolute;
    top: 39px;
    width: 171px;

    
  }
  
  .navbar .rectangle-3 {
    background-color: #9cb6fa;
    border: 1px solid;
    border-color: #000000;
    height: 34px;
    left: 0;
    position: absolute;
    top: 39px;
    width: 168px;
    cursor: pointer;

  }
  
  .navbar .text-wrapper-3 {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 20px;
    font-weight: 600;
    height: 25px;
    left: 4px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 46px;
    width: 163px;
    cursor: pointer;

  }
  
  .navbar .overlap-group {
    height: 110px;
    left: 0;
    position: absolute;
    top: 0;
    width: 118px;
  }
  
  .navbar .rectangle-4 {
    background-color: #000000;
    border: 1px solid;
    border-color: #000000;
    height: 37px;
    left: 0;
    position: absolute;
    top: 39px;
    width: 118px;
    cursor: pointer;

  }
  
  .navbar .rectangle-5 {
    background-color: #fcc0c0;
    border: 1px solid;
    border-color: #000000;
    height: 34px;
    left: 0;
    position: absolute;
    top: 39px;
    width: 115px;
    cursor: pointer;


  }
  
  .navbar .text-wrapper-4 {
    color: #000000;
    font-family: "Montserrat", Helvetica;
    font-size: 20px;
    font-weight: 500;
    height: 110px;
    left: 20px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 46px;
    width: 71px;
    cursor: pointer;

  }
  </style>
  