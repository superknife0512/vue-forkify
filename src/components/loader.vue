<template>
    <div class="loader">
            <i class="fas fa-spinner"></i>
    </div>
</template>

<style lang="scss">
.loader {
  margin: 5rem auto;
  text-align: center; }
  .loader i {
    font-size: 5.5rem;
    color: #F59A83;
    animation: rotate 1.5s infinite linear; }

@keyframes rotate {
  0% {
    transform: rotate(0); }
  100% {
    transform: rotate(360deg); } }

</style>
