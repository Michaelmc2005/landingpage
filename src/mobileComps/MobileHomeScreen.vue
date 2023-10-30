<template>
    <div class="mobile-home-screen">
      <div class="overlap-group">
        <img class="img" alt="Rectangle" src="https://c.animaapp.com/yV9C6fSs/img/rectangle-51.png" />
        <div class="rectangle-5" />
        <div class="rectangle-6" />
        <div class="rectangle-7" />
        <img class="rectangle-8" alt="Rectangle" src="https://c.animaapp.com/yV9C6fSs/img/rectangle-3@2x.png" />
        <div class=hamburger>
            <div class="rectangle-9" />
            <div class="rectangle-10" />
            <div class="rectangle-11" />
        </div>
        
        <div class="rectangle-12" />
        <div class="text-wrapper-12">Smarter</div>
        <img class="ellipse" alt="Ellipse" src="https://c.animaapp.com/yV9C6fSs/img/ellipse-2.png" />
        <img class="vector" alt="Vector" src="https://c.animaapp.com/yV9C6fSs/img/vector-3.svg" />
        <img class="vector-2" alt="Vector" src="https://c.animaapp.com/yV9C6fSs/img/vector-2.svg" />
        <div class="rectangle-13" />
        <AToolForThinkers />
        <ANewWayToLearn />
        <div class="socraticDialogue">
            <div class="rectangle-14" />
            <div class="rectangle-15" />
            <div class="text-wrapper-13">Socratic-Dialogue</div>
        </div>
        <div class="rectangle-16" />
        <img class="group" alt="Group" src="https://c.animaapp.com/yV9C6fSs/img/group-6@2x.png" />
        <img class="group-2" alt="Group" src="https://c.animaapp.com/yV9C6fSs/img/group-4@2x.png" />
        <img class="group-3" alt="Group" src="https://c.animaapp.com/yV9C6fSs/img/group-5@2x.png" />
        <p class="p">What subject would you like to learn about?</p>
        <div class="text-wrapper-14">Photosynthesis</div>
        <img class="vector-3" alt="Vector" src="https://c.animaapp.com/yV9C6fSs/img/vector-7.svg" />
        <img class="vector-4" alt="Vector" src="https://c.animaapp.com/yV9C6fSs/img/vector-6@2x.png" />
        <div class="rectangle-17" />
        <div class="rectangle-18" />
        <NotHarder />
        <p class="text-wrapper-15">Redefining the Learning Experience with Socratic Dialogue.</p>
        <div class="text-wrapper-16">Start Learning</div>
        <div class="text-wrapper-17">Study</div>
        <div class="rectangle-19" />
        <img class="rectangle-20" alt="Rectangle" src="https://c.animaapp.com/yV9C6fSs/img/rectangle-26.svg" />
        <div class="text-wrapper-18">Send</div>
      </div>
      <SubScribe />
    </div>
  </template>
  
  <script>
  import AToolForThinkers from "./AToolForThinkers.vue";
  import  ANewWayToLearn from "./ANewWayToLearn.vue";
  import NotHarder from "./NotHarder.vue";
  import SubScribe from "../sections/SubScribe.vue";
  
  export default {
    name: "MobileHomeScreen",
    components: {
      AToolForThinkers,
      ANewWayToLearn,
      NotHarder,
      SubScribe,
    },
  };
  </script>
  
  <style>
  .mobile-home-screen {
    height: 3052px;
    overflow: hidden;
    width: 100%;
    overflow-x: hidden;
  }
  
  .mobile-home-screen .overlap-group {
    height: 2400px;
    left: -13px;
    position: relative;
    width: 1252px;
    
  }
  .mobile-home-screen .rectangle {
    background-color: #4e3498;
    height: 680px;
    left: 13px;
    position: absolute;
    top: 2372px;
    width: 389px;
    
  }
  .hamburger{
    position: relative;
    top: 0;
    left: 85vw;
    width: 100px;
    height: 100px;
    cursor: pointer;
  }
  .socraticDialogue{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .mobile-home-screen .div {
    background-color: #ff2e2e;
    filter: blur(150px);
    height: 204px;
    left: 38px;
    position: absolute;
    top: 2831px;
    width: 340px;
  }
  
  .mobile-home-screen .rectangle-2 {
    background-color: #27097d;
    border-radius: 148px;
    filter: blur(160px);
    height: 444px;
    left: 20px;
    position: absolute;
    top: 2487px;
    width: 399px;
  }
  
  .mobile-home-screen .rectangle-3 {
    background-color: #ffa929;
    filter: blur(150px);
    height: 244px;
    left: 0;
    position: absolute;
    top: 2301px;
    width: 191px;
  }
  
  .mobile-home-screen .rectangle-4 {
    background-color: #1fde77;
    filter: blur(150px);
    height: 259px;
    left: 218px;
    position: absolute;
    top: 2292px;
    width: 201px;
  }
  
  .mobile-home-screen .text-wrapper-11 {
    color: #ffffff;
    font-family: "Montserrat Alternates-Medium", Helvetica;
    font-size: 40px;
    font-weight: 500;
    height: 137px;
    left: 38px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-shadow: 0px 4px 4px #00000040;
    top: 2830px;
    width: 1214px;
  }
  
  .mobile-home-screen .img {
    height: 893px;
    left: 13px;
    position: absolute;
    top: 0;
    width: 100%;
  }
  
  .mobile-home-screen .rectangle-5 {
    background-color: #ed1717bf;
    border-radius: 36px;
    filter: blur(250px);
    height: 350px;
    left: 42px;
    position: absolute;
    top: 137px;
    width: 276px;
  }
  
  .mobile-home-screen .rectangle-6 {
    background-color: #000000;
    border: 2px solid;
    border-color: #070707;
    border-radius: 13px;
    height: 86px;
    left: 38px;
    position: absolute;
    top: 223px;
    width: 328px;
  }
  
  .mobile-home-screen .rectangle-7 {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #000000;
    height: 66px;
    left: 13px;
    position: absolute;
    top: 0;
    width: 100%;
  }
  
  .mobile-home-screen .rectangle-8 {
    background-blend-mode: lighten;
    height: 51px;
    left: 28px;
    object-fit: cover;
    position: absolute;
    top: 10px;
    width: 132px;
  }
  
  .mobile-home-screen .rectangle-9 {
    background-color: #4a3d3d;
    border-radius: 1px;
    height: 2px;
    position: absolute;
    top: 26px;
    width: 33px;
  }
  
  .mobile-home-screen .rectangle-10 {
    background-color: #4a3d3d;
    border-radius: 1px;
    height: 2px;
    position: absolute;
    top: 31px;
    width: 33px;
  }
  
  .mobile-home-screen .rectangle-11 {
    background-color: #4a3d3d;
    border-radius: 1px;
    height: 2px;
    position: absolute;
    top: 36px;
    width: 33px;
  }
  
  .mobile-home-screen .rectangle-12 {
    background-color: #5f79ff;
    border: 2px solid;
    border-color: #000000;
    border-radius: 13px;
    height: 79px;
    left: 32px;
    position: absolute;
    top: 224px;
    width: 326px;
  }
  
  .mobile-home-screen .text-wrapper-12 {
    color: #ffffff;
    font-family: "Montserrat-Black", Helvetica;
    font-size: 72px;
    font-weight: 900;
    height: 178px;
    left: 38px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 128px;
    width: 552px;
  }
  
  .mobile-home-screen .ellipse {
    height: 878px;
    left: 13px;
    position: absolute;
    top: 209px;
    width: 100%;
  }
  
  .mobile-home-screen .vector {
    height: 383px;
    left: 17px;
    position: absolute;
    top: 495px;
    width: 372px;
  }
  
  .mobile-home-screen .vector-2 {
    height: 364px;
    left: 13px;
    position: absolute;
    top: 495px;
    width: 366px;
  }
  
  .mobile-home-screen .rectangle-13 {
    background-color: #ffffff;
    height: 1478px;
    left: 13px;
    position: absolute;
    top: 894px;
    width: 389px;
  }
  
  .mobile-home-screen .rectangle-14 {
    background-color: #000000;
    border-radius: 14px;
    height: 49px;
    left: 35px;
    position: absolute;
    top: 961px;
    width: 335px;
  }
  
  .mobile-home-screen .rectangle-15 {
    background-color: #ff7070;
    border-radius: 17px;
    height: 49px;
    left: 32px;
    position: absolute;
    top: 959px;
    width: 335px;
  }
  
  .mobile-home-screen .text-wrapper-13 {
    color: #ffffff;
    font-family: "Montserrat-Bold", Helvetica;
    font-size: 35px;
    font-weight: 700;
    height: 32px;
    left: 42px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 967px;
    white-space: nowrap;
    width: 333px;
  }
  
  .mobile-home-screen .rectangle-16 {
    background: linear-gradient(180deg, rgb(24.29, 14.46, 84.65) 0%, rgb(130.64, 9.39, 187.71) 100%);
    border-radius: 66px;
    box-shadow: 0px 4px 4px #0000004c;
    height: 429px;
    left: 33px;
    position: absolute;
    top: 1180px;
    width: 337px;
  }
  
  .mobile-home-screen .group {
    height: 56px;
    left: 40px;
    position: absolute;
    top: 1219px;
    width: 235px;
  }
  
  .mobile-home-screen .group-2 {
    height: 83px;
    left: 40px;
    position: absolute;
    top: 1376px;
    width: 287px;
  }
  
  .mobile-home-screen .group-3 {
    height: 37px;
    left: 207px;
    position: absolute;
    top: 1318px;
    width: 165px;
  }
  
  .mobile-home-screen .p {
    color: #ffffff;
    font-family: "Montserrat-SemiBold", Helvetica;
    font-size: 16px;
    font-weight: 600;
    height: 83px;
    left: 65px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 1207px;
    width: 214px;
  }
  
  .mobile-home-screen .text-wrapper-14 {
    color: #ffffff;
    font-family: "Montserrat-SemiBold", Helvetica;
    font-size: 16px;
    font-weight: 600;
    height: 33px;
    left: 224px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 1322px;
    width: 213px;
  }
  
  .mobile-home-screen .vector-3 {
    height: 391px;
    left: 13px;
    position: absolute;
    top: 1934px;
    width: 382px;
  }
  
  .mobile-home-screen .vector-4 {
    height: 403px;
    left: 13px;
    position: absolute;
    top: 1906px;
    width: 390px;
  }
  
  .mobile-home-screen .rectangle-17 {
    background-color: #1d3557;
    border: 1px solid;
    border-color: #000000;
    border-radius: 18px;
    height: 38px;
    left: 35px;
    position: absolute;
    top: 418px;
    width: 169px;
  }
  
  .mobile-home-screen .rectangle-18 {
    background-color: #8dacfa;
    border: 1px solid;
    border-color: #000000;
    border-radius: 18px;
    height: 36px;
    left: 33px;
    position: absolute;
    top: 416px;
    width: 168px;
  }
  
  .mobile-home-screen .text-wrapper-15 {
    color: #99cece;
    font-family: "Montserrat-SemiBold", Helvetica;
    font-size: 16px;
    font-weight: 600;
    height: 95px;
    left: 39px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 326px;
    width: 315px;
  }
  
  .mobile-home-screen .text-wrapper-16 {
    color: #ffffff;
    font-family: "Montserrat-ExtraBold", Helvetica;
    font-size: 20px;
    font-weight: 800;
    height: 24px;
    left: 23px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 423px;
    width: 187px;
  }
  
  .mobile-home-screen .text-wrapper-17 {
    color: #ffffff;
    font-family: "Montserrat-Black", Helvetica;
    font-size: 40px;
    font-weight: 900;
    height: 102px;
    left: 39px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 83px;
    width: 308px;
  }
  
  .mobile-home-screen .rectangle-19 {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #000000;
    border-radius: 24px;
    height: 33px;
    left: 50px;
    position: absolute;
    top: 1526px;
    width: 235px;
  }
  
  .mobile-home-screen .rectangle-20 {
    height: 33px;
    left: 294px;
    position: absolute;
    top: 1526px;
    width: 70px;
  }
  
  .mobile-home-screen .text-wrapper-18 {
    color: #ffffff;
    font-family: "Montserrat-Medium", Helvetica;
    font-size: 20px;
    font-weight: 500;
    height: 33px;
    left: 306px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 1530px;
    width: 54px;
  }
  
  .mobile-home-screen .rectangle-21 {
    background-color: #000000;
    border-radius: 29px;
    height: 68px;
    left: 43px;
    position: absolute;
    top: 2397px;
    width: 342px;
  }
  
  .mobile-home-screen .rectangle-22 {
    background-color: #8dacfa;
    border-radius: 27px;
    height: 61px;
    left: 36px;
    position: absolute;
    top: 2397px;
    width: 343px;
  }
  
  .mobile-home-screen .text-wrapper-19 {
    color: #ffffff;
    font-family: "Montserrat Alternates-SemiBold", Helvetica;
    font-size: 48px;
    font-weight: 600;
    height: 65px;
    left: 43px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 2389px;
    width: 349px;
  }
  
  .mobile-home-screen .rectangle-23 {
    background-color: #9fb1ef;
    border: 1px solid;
    border-color: #000000;
    border-radius: 24px;
    height: 31px;
    left: 38px;
    position: absolute;
    top: 2974px;
    width: 248px;
  }
  
  .mobile-home-screen .rectangle-24 {
    height: 31px;
    left: 306px;
    position: absolute;
    top: 2974px;
    width: 74px;
  }
  
  .mobile-home-screen .text-wrapper-20 {
    color: #ffffff;
    font-family: "Montserrat-Medium", Helvetica;
    font-size: 14px;
    font-weight: 500;
    height: 20px;
    left: 318px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 2976px;
    width: 60px;
  }
  
  .mobile-home-screen .group-4 {
    height: 36px;
    left: 13px;
    position: absolute;
    top: 604px;
    width: 49px;
  }
  
  .mobile-home-screen .group-5 {
    height: 36px;
    left: 75px;
    position: absolute;
    top: 664px;
    width: 87px;
  }
  
  .mobile-home-screen .we-would-love-to {
    color: #ffffff;
    font-family: "Montserrat-Medium", Helvetica;
    font-size: 24px;
    font-weight: 500;
    height: 362px;
    left: 44px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 2520px;
    width: 335px;
  }
  </style>
  