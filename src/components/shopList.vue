<template>
    <div class="shopping">
            <h2 class="heading-2">My Shopping List</h2>

            <ul class="shopping__list">

                <!--
                <li class="shopping__item">
                    <div class="shopping__count">
                        <input type="number" value="500" step="100">
                        <p>g</p>
                    </div>
                    <p class="shopping__description">Pasta</p>
                    <button class="shopping__delete btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
                </li>

                <li class="shopping__item">
                    <div class="shopping__count">
                        <input type="number" value="0.5" step="0.1">
                        <p>cup</p>
                    </div>
                    <p class="shopping__description">Ricotta cheese</p>
                    <button class="shopping__delete btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
                </li>

                <li class="shopping__item">
                    <div class="shopping__count">
                        <input type="number" value="3.5" step="0.1">
                        <p>tbsp</p>
                    </div>
                    <p class="shopping__description">Toasted almond slices</p>
                    <button class="shopping__delete btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
                </li>

                <li class="shopping__item">
                    <div class="shopping__count">
                        <input type="number" value="0.5" step="0.1">
                        <p>tbsp</p>
                    </div>
                    <p class="shopping__description">Sea salt</p>
                    <button class="shopping__delete btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
                </li>

                <li class="shopping__item">
                    <div class="shopping__count">
                        <input type="number" value="0.25" step="0.1">
                        <p>cup</p>
                    </div>

                    <p class="shopping__description">Minced green onions</p>
                    <button class="shopping__delete btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
                </li>

                <li class="shopping__item">
                    <div class="shopping__count">
                        <input type="number" value="45" step="10">
                        <p>g</p>
                    </div>
                    <p class="shopping__description">Sesame seeds</p>
                    <button class="shopping__delete btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
                </li>
                -->
            </ul>

            <div class="copyright">
                &copy;Design by Jonas Schmedtmann. Powered by
                <a href="http://food2fork.com" target="_blank" class="link">Food2Fork.com</a>.
            </div>

        </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.shopping {
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column; }
  .shopping__list {
    list-style: none;
    max-height: 77rem;
    overflow: scroll; }
  .shopping__item {
    display: flex;
    align-items: flex-start;
    padding: 1.3rem 0;
    border-bottom: 1px solid #F2EFEE;
    position: relative; }
  .shopping__count {
    flex: 0 0 7.5rem;
    padding: .4rem .5rem;
    border: 1px solid #F2EFEE;
    border-radius: 3px;
    margin-right: 2rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between; }
    .shopping__count input {
      color: inherit;
      font-family: inherit;
      font-size: 1.2rem;
      text-align: center;
      border: none;
      width: 3.7rem;
      border-radius: 3px; }
      .shopping__count input:focus {
        outline: none;
        background-color: #F2EFEE; }
    .shopping__count p {
      font-size: 1.2rem; }
  .shopping__description {
    flex: 1;
    font-size: 1.3rem;
    margin-top: .4rem;
    margin-right: 1.5rem; }
  .shopping__delete {
    margin-top: .5rem;
    position: absolute;
    right: 0;
    background-image: linear-gradient(to right, transparent 0%, #fff 40%, #fff 100%);
    width: 3.75rem;
    padding-left: 2rem;
    visibility: hidden;
    opacity: 0;
    transition: all .5s; }
  .shopping__item:hover .shopping__delete {
    opacity: 1;
    visibility: visible; }

</style>
