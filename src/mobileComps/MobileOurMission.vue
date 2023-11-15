<template>
    <div class="mobile-our-mission">
      <div class="overlap-group">
        <div class="rectangle" />
        <p class="studying-can-be-such">
          Studying can be such a chore!
          <br />
          <br />
          So we aim to help every student study more effective and efficiently.
          <br />
          <br />
          So a student can achieve higher grades and get their grades with ease. Giving them more of their life back,
          More time doing whatever a student wants to do.
        </p>
        <div class="text-wrapper">Our Mission</div>
        <div class="div">Our Vision</div>
        <div class="text-wrapper-2">Our Values</div>
        <div class="rectangle-2" />
        <div class="rectangle-3" />
        <div class="rectangle-4" />
        <div class="rectangle-5" />
        <img class="img" alt="Rectangle" src="https://c.animaapp.com/VaBvSwzV/img/rectangle-3@2x.png" />
        <div class="rectangle-6" />
        <div class="rectangle-7" />
        <div class="rectangle-8" />
        <div class="rectangle-9" />
        <div class="rectangle-10" />
        <img class="rectangle-11" alt="Rectangle" src="https://c.animaapp.com/VaBvSwzV/img/rectangle-34.png" />
        <p class="p">To create a learning experience that revolutionises how we study and test our knowledge.</p>
        <p class="we-are-a-learning">
          <span class="span">We are a</span>
          <span class="text-wrapper-3"> learning </span>
          <span class="span">
            company, having ultra focus on how we can make learning easier, more engaging and more fun.
            <br />
            <br />
            We are a student focused company.
            <br />
            <br />
            We are going to constantly iterate and improve. Your feedback matters to us. <br />{" "}
          </span>
        </p>
        <p class="text-wrapper-4">Our Mission Vision and Values.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MobileOurMission",
    methods: {
      // eslint-disable-next-line no-unused-vars
      async getPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
        
      },
      
    },
  };
  
  </script>
  
  <style>
  .mobile-our-mission {
    height: 2000px;
    overflow: hidden;
    width: 390px;
  }
  
  .mobile-our-mission .overlap-group {
    height: 1871px;
    left: -7px;
    position: relative;
    width: 400px;
  }
  
  .mobile-our-mission .rectangle {
    background-color: #4e3498;
    height: 1864px;
    left: 7px;
    position: absolute;
    top: 0;
    width: 390px;
  }
  
  .mobile-our-mission .studying-can-be-such {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 20px;
    font-weight: 500;
    left: 41px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 1056px;
    width: 340px;
  }
  
  .mobile-our-mission .text-wrapper {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 48px;
    font-weight: 900;
    left: 41px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 771px;
    width: 340px;
  }
  
  .mobile-our-mission .div {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 48px;
    font-weight: 900;
    left: 41px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 969px;
    width: 308px;
  }
  
  .mobile-our-mission .text-wrapper-2 {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 48px;
    font-weight: 900;
    left: 41px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 1363px;
    width: 340px;
  }
  
  .mobile-our-mission .rectangle-2 {
    background-color: #ecb21d99;
    border-radius: 315px;
    filter: blur(150px);
    height: 311px;
    left: 152px;
    position: absolute;
    top: 307px;
    width: 248px;
  }
  
  .mobile-our-mission .rectangle-3 {
    background-color: #de1919;
    border-radius: 175.5px;
    filter: blur(150px);
    height: 336px;
    left: 0;
    position: absolute;
    top: 66px;
    width: 205px;
  }
  
  .mobile-our-mission .rectangle-4 {
    background-color: #000000;
    border: 2px solid;
    border-radius: 13px;
    height: 210px;
    left: 41px;
    position: absolute;
    top: 135px;
    width: 340px;
  }
  
  .mobile-our-mission .rectangle-5 {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #000000;
    height: 66px;
    left: 7px;
    position: absolute;
    top: 0;
    width: 390px;
  }
  
  .mobile-our-mission .img {
    background-blend-mode: lighten;
    height: 51px;
    left: 22px;
    object-fit: cover;
    position: absolute;
    top: 10px;
    width: 132px;
  }
  
  .mobile-our-mission .rectangle-6 {
    background-color: #4a3d3d;
    border-radius: 1px;
    height: 2px;
    left: 339px;
    position: absolute;
    top: 26px;
    width: 33px;
  }
  
  .mobile-our-mission .rectangle-7 {
    background-color: #4a3d3d;
    border-radius: 1px;
    height: 2px;
    left: 339px;
    position: absolute;
    top: 31px;
    width: 33px;
  }
  
  .mobile-our-mission .rectangle-8 {
    background-color: #4a3d3d;
    border-radius: 1px;
    height: 2px;
    left: 339px;
    position: absolute;
    top: 36px;
    width: 33px;
  }
  
  .mobile-our-mission .rectangle-9 {
    background-color: #5f79ff;
    border: 2px solid;
    border-color: #000000;
    border-radius: 13px;
    height: 210px;
    left: 32px;
    position: absolute;
    top: 126px;
    width: 340px;
  }
  
  .mobile-our-mission .rectangle-10 {
    background-color: #de19193d;
    border-radius: 279px;
    filter: blur(100px);
    height: 138px;
    left: 140px;
    position: absolute;
    top: 345px;
    transform: rotate(108.91deg);
    width: 289px;
  }
  
  .mobile-our-mission .rectangle-11 {
    height: 559px;
    left: 7px;
    object-fit: cover;
    position: absolute;
    top: 201px;
    width: 390px;
  }
  
  .mobile-our-mission .p {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 20px;
    font-weight: 500;
    left: 41px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 858px;
    width: 320px;
  }
  
  .mobile-our-mission .we-are-a-learning {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 20px;
    font-weight: 400;
    left: 16px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 1450px;
    width: 342px;
  }
  
  .mobile-our-mission .span {
    font-weight: 500;
  }
  
  .mobile-our-mission .text-wrapper-3 {
    font-weight: 700;
  }
  
  .mobile-our-mission .text-wrapper-4 {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 50px;
    font-weight: 900;
    left: 44px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 129px;
    width: 344px;
  }
  </style>
  