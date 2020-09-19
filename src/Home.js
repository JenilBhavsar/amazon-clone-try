import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            id="12345678"
            title="The lean startup"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="89012345"
            title="Chanel Perfume"
            price={99.99}
            rating={5}
            image="https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=348&q=80"
          />
        </div>

        <div className="home__row">
          <Product
            id="56789012"
            title="Backpack"
            price={49.99}
            rating={4}
            image="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=369&q=80"
          />
          <Product
            id="23456789"
            title="Wireless headsets"
            price={79.99}
            rating={5}
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          />
          <Product
            id="01234567"
            title="Apple watch"
            price={129.99}
            rating={5}
            image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=989&q=80"
          />
        </div>
        <div className="home__row">
          <Product
            id="89012345"
            title="Nike Air max"
            price={99.99}
            rating={5}
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
