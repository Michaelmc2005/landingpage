<template>
    <div class="hero">
      <div class="overlap-group">
        <img
          class="homepage-container"
          alt="Homepage container"
          src="../assets/homepageContainer.jpg"
        />
        <img class="ellipse" alt="Ellipse" src="https://c.animaapp.com/g6t9Fn8X/img/ellipse-2-1.png" />
        <img class="img" alt="Ellipse" src="https://c.animaapp.com/g6t9Fn8X/img/ellipse-1-1.png" />
        
        <transition name="fade" appear>
            <img class="vector" alt="Vector" src="https://c.animaapp.com/g6t9Fn8X/img/vector-3-1.svg" />
        </transition>
        <transition name="fade" appear>
            <img class="vector-2" alt="Vector" src="https://c.animaapp.com/g6t9Fn8X/img/vector-2-1.svg" />
        </transition>

        <transition name="stagger-fade" appear>
            <div class="text-wrapper">Study</div>
        </transition>
        <transition name="stagger-fade" appear>
            <div class="text-wrapper-5">Smarter</div>
        </transition>
        <transition name="stagger-fade" appear>
            <p class="not-harder">
            <span class="span">not</span>
            <span class="text-wrapper-2">&nbsp;</span>
            <span class="text-wrapper-3">Harder</span>
            <span class="text-wrapper-4">.</span>
            </p>
        </transition>
        <transition name="fade" appear>
            <div class="start-learning-back">
                <div class="start-learning">
                <div class="text-wrapper-6">Start Learning</div>
                </div>
            </div>
        </transition>
        <p class="div">Redefining the Learning Experience with Socratic Dialogue.</p>
        <div class="rectangle" />
        <div class="text-wrapper-5">Smarter</div>
        <img class="message" alt="Message" src="https://c.animaapp.com/g6t9Fn8X/img/message2-1@2x.png" />
        <img class="message-2" alt="Message" src="https://c.animaapp.com/g6t9Fn8X/img/message-1@2x.png" />
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HeroSect",
  };
  </script>
  
  <style>
  .hero {
    height: 784px;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
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
    left: 100px;
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
    animation: fadeIn 1s ease-out forwards;
    animation-delay: 2.7s;
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
    left: 91px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 198px;
    width: 320px;
  }
  
  .hero .not-harder {
    color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 64px;
    font-weight: 400;
    height: 312px;
    left: 91px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 32%;
    width: 633px;

  }
  
  .hero .span {
    font-weight: 900;
  }
  
  .hero .text-wrapper-2 {
    font-style: italic;
    font-weight: 900;
  }
  
  .hero .text-wrapper-3 {
    font-size: 75px;
    font-style: italic;
    font-weight: 900;
  }
  
  .hero .text-wrapper-4 {
    font-size: 75px;
    font-weight: 900;
  }
  
  .hero .div {
    color: #99cece;
    font-family: "Montserrat", Helvetica;
    font-size: 30px;
    font-weight: 600;
    height: 95px;
    left: 91px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 510px;
    width: 590px;

  }
  
  .hero .rectangle {
    background-color: #5f79ff;
    border: 2px solid;
    border-color: #000000;
    border-radius: 13px;
    height: 119px;
    left: 84px;
    position: absolute;
    top: 280px;
    width: 500px;
  }
  
  .hero .text-wrapper-5 {
        color: #ffffff;
    font-family: "Montserrat", Helvetica;
    font-size: 120px;
    font-weight: 900;
    height: 324px;
    left: 100px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 274px;
    width: 559px;
  }
  /* Add initial opacity 0 for elements that need to fade in */
.vector, .vector-2, .text-wrapper, .text-wrapper-5, .not-harder {
  opacity: 0;
}

/* Existing animation styles */

.vector, .vector-2 {
  animation: fadeIn 1s ease-out forwards;
}

.text-wrapper, .text-wrapper-5, .not-harder {
  animation: staggerFadeIn 1.5s ease-out forwards;
}

.text-wrapper {
  animation-delay: 0.5s;
}

.text-wrapper-5 {
  animation-delay: 1s;
}

.not-harder {
  animation-delay: 1.5s;
}

/* Existing keyframes */

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes staggerFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
  </style>
  