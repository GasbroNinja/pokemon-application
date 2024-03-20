import React from 'react'


const PokemonCard = () => {
  return (
    <main class="container">
      <section class="card">
        <div class="product-image">
          <img
            src="https://i.ibb.co/cNWqxGx/red.png"
            alt="OFF-white Red Edition"
            draggable="false"
          />
        </div>
        <div class="product-info">
          <h2>Nike X OFF-white</h2>
          <p>The 10: Air Jordan 1 off-white - Chicago</p>
          <div class="price">$999</div>
        </div>
        <div class="btn">
          <button class="buy-btn">Buy Now</button>
          <button class="fav">
            <svg
              class="svg"
              id="i-star"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
}

export default PokemonCard