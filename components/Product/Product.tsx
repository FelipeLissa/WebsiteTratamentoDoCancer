import { ReactNode } from "react";
import { GiAlarmClock, GiShoppingCart, GiArrowDunk } from "react-icons/gi";
import { ProductCard } from "./styles";

interface ProductProps {
  children: ReactNode;
  title: string;
  oldPrice: string;
  newPrice: string;
  discount: string;
  img: string;
}

export function Product({
  img,
  newPrice,
  title,
  oldPrice,
  discount,
}: ProductProps) {
  return (
    <ProductCard imgUrl={img}>
      <div className="Card-PromoBox">
        <a className="Card-PromoBox-a1">{discount}</a>
        <div className="Card-PromoBox-icon">
          <GiArrowDunk color="white"></GiArrowDunk>
        </div>
      </div>
      <div className="Card-img"></div>
      <div className="Card-Description">
        <h1 className="Card-Description-title">{title}</h1>
        <a className="Card-Description-oldPrice">{oldPrice}</a>
        <a className="Card-Description-newPrice">{newPrice}</a>
        <a className="Card-Description-a1">À vista no PIX</a>
      </div>
      <div className="Card-button">
        <div className="Card-button-icon-clock">
          <GiAlarmClock color="white"></GiAlarmClock>
        </div>
        <div className="Card-button-text">
          <a className="Card-button-text-a1">Termina em:</a>
          <a className="Card-button-text-a2">(Timer Here)</a>
        </div>
        <div className="Card-button-hover">
          <div className="Card-button-hover-icon-cart">
            <GiShoppingCart color="white"></GiShoppingCart>
          </div>
          <a className="Card-button-text-a1">Comprar</a>
        </div>
      </div>
    </ProductCard>
  );
}
