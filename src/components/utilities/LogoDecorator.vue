<template>
    <div class="decorator p-16 flex justify-center items-center md:min-h-[50vh] rounded-lg shadow-xl tr:w-[55%] sm:w-[75%] w-[85%] mx-auto mb-6">
      <img src="../../assets/images/logos/logo.png" class="max-w-sm w-[65%]">
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  .decorator {
      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
      background-size: 400% 400%;
      animation: gradient 12s ease-in infinite;
  }
  
  @keyframes gradient {
      0% {
          background-position: 0% 50%;
      }
      50% {
          background-position: 100% 50%;
      }
      100% {
          background-position: 0% 50%;
      }
  }
  </style>