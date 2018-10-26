<template>
    <div class="recipe">

            <!--
            <figure class="recipe__fig">
                <img src="img/test-1.jpg" alt="Tomato" class="recipe__img">
                <h1 class="recipe__title">
                    <span>Pasta with tomato cream sauce</span>
                </h1>
            </figure>
            <div class="recipe__details">
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-stopwatch"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--minutes">45</span>
                    <span class="recipe__info-text"> minutes</span>
                </div>
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-man"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--people">4</span>
                    <span class="recipe__info-text"> servings</span>

                    <div class="recipe__info-buttons">
                        <button class="btn-tiny">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-minus"></use>
                            </svg>
                        </button>
                        <button class="btn-tiny">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-plus"></use>
                            </svg>
                        </button>
                    </div>

                </div>
                <button class="recipe__love">
                    <svg class="header__likes">
                        <use href="img/icons.svg#icon-heart-outlined"></use>
                    </svg>
                </button>
            </div>



            <div class="recipe__ingredients">
                <ul class="recipe__ingredient-list">
                    <li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__count">1000</div>
                        <div class="recipe__ingredient">
                            <span class="recipe__unit">g</span>
                            pasta
                        </div>
                    </li>

                    <li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__count">1/2</div>
                        <div class="recipe__ingredient">
                            <span class="recipe__unit">cup</span>
                            ricotta cheese
                        </div>
                    </li>

                    <li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__count">1</div>
                        <div class="recipe__ingredient">
                            <span class="recipe__unit"></span>
                            can of tomatoes, whole or crushed
                        </div>
                    </li>


                    <li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__count">1</div>
                        <div class="recipe__ingredient">
                            <span class="recipe__unit"></span>
                            can tuna packed in olive oil
                        </div>
                    </li>

                    <li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__count">1/2</div>
                        <div class="recipe__ingredient">
                            <span class="recipe__unit">cup</span>
                            grated parmesan cheese
                        </div>
                    </li>

                    <li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__count">1/4</div>
                        <div class="recipe__ingredient">
                            <span class="recipe__unit">cup</span>
                            fresh basil, chopped or torn
                        </div>
                    </li>
                </ul>

                <button class="btn-small recipe__btn">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-shopping-cart"></use>
                    </svg>
                    <span>Add to shopping list</span>
                </button>
            </div>

            <div class="recipe__directions">
                <h2 class="heading-2">How to cook it</h2>
                <p class="recipe__directions-text">
                    This recipe was carefully designed and tested by
                    <span class="recipe__by">The Pioneer Woman</span>. Please check out directions at their website.
                </p>
                <a class="btn-small recipe__btn" href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/" target="_blank">
                    <span>Directions</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>

                </a>
            </div>
            -->
        </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.recipe {
  background-color: #F9F5F3;
  border-top: 1px solid #fff; }
  .recipe__fig {
    height: 30rem;
    position: relative;
    transform: scale(1.04) translateY(-1px);
    transform-origin: top; }
    .recipe__fig::before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: linear-gradient(to right bottom, #FBDB89, #F48982);
      opacity: .6; }
  .recipe__img {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover; }
  .recipe__title {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 20%) skewY(-6deg);
    color: #fff;
    font-weight: 700;
    font-size: 2.75rem;
    text-transform: uppercase;
    width: 70%;
    line-height: 1.95;
    text-align: center; }
    .recipe__title span {
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
      padding: 1.3rem 2rem;
      background-image: linear-gradient(to right bottom, #FBDB89, #F48982); }
  .recipe__details {
    display: flex;
    align-items: center;
    padding: 8rem 3rem 3rem 3rem; }
  .recipe__info {
    font-size: 1.5rem;
    text-transform: uppercase;
    display: flex;
    align-items: center; }
    .recipe__info:not(:last-child) {
      margin-right: 4rem; }
  .recipe__info-icon {
    height: 2rem;
    width: 2rem;
    fill: #F59A83;
    margin-right: 1rem; }
  .recipe__info-data {
    margin-right: .4rem;
    font-weight: 600; }
  .recipe__info-buttons {
    display: flex;
    margin-left: 1.5rem;
    visibility: hidden;
    opacity: 0;
    transform: translateY(5px);
    transition: all .4s; }
  .recipe:hover .recipe__info-buttons {
    visibility: visible;
    opacity: 1;
    transform: translateY(0); }
  .recipe__love {
    background-image: linear-gradient(to right bottom, #FBDB89, #F48982);
    border-radius: 50%;
    border: none;
    cursor: pointer;
    height: 4.5rem;
    width: 4.5rem;
    margin-left: auto;
    transition: all .2s;
    display: flex;
    align-items: center;
    justify-content: center; }
    .recipe__love:hover {
      transform: scale(1.07); }
    .recipe__love:focus {
      outline: none; }
    .recipe__love svg {
      height: 2.75rem;
      width: 2.75rem;
      fill: #fff; }
  .recipe__ingredients {
    padding: 4rem 5rem;
    font-size: 1.5rem;
    line-height: 1.4;
    background-color: #F2EFEE;
    display: flex;
    flex-direction: column;
    align-items: center; }
  .recipe__ingredient-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.5rem;
    grid-row-gap: 2.5rem;
    list-style: none;
    margin-bottom: 3rem; }
  .recipe__item {
    display: flex; }
  .recipe__icon {
    height: 1.8rem;
    width: 1.8rem;
    fill: #F59A83;
    border: 1px solid #F59A83;
    border-radius: 50%;
    padding: 2px;
    margin-right: 1rem;
    flex: 0 0 auto;
    margin-top: .1rem; }
  .recipe__count {
    margin-right: .5rem;
    flex: 0 0 auto; }
  .recipe__directions {
    padding: 4rem;
    padding-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center; }
  .recipe__directions-text {
    font-size: 1.5rem;
    text-align: center;
    width: 90%;
    margin-bottom: 3rem;
    color: #968B87; }
  .recipe__by {
    font-weight: 700; }
</style>

