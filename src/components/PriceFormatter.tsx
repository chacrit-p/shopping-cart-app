import React from "react";

type PriceFormatterProps = {
  price: number;
};

const PriceFormatter: React.FC<PriceFormatterProps> = ({ price }) => {
  const formattedPrice = price.toLocaleString();

  return <span>{formattedPrice}</span>;
};

export default PriceFormatter;
