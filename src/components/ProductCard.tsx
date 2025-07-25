import React, { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  image: string;
  hoverImage?: string;
}

interface ProductCardProps {
  product: Product;
  namePriceGap?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, namePriceGap = '0px' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <div
      className="relative bg-white overflow-hidden shadow-sm group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative bg-white flex items-center justify-center" style={{ width: '353.25px', height: '353.25px' }}>
        <img
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'all 0.3s',borderRadius: '5px' }}
        />
        {/* + Button on hover */}
        <button
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V12M12 12V20M12 12H4M12 12H20" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </button>
      </div>
      {/* Product Info below image */}
      <div
        className="product-card__info flex flex-col justify-center"
        style={{ width: '353.25px', height: 'auto', fontFamily: 'Avenir Next, sans-serif', color: '#0A0A0A', fontSize: '14px', fontWeight: 400, marginTop: '0px', padding: 0 }}
      >
        <div style={{ letterSpacing: '0.05em',paddingTop: '20px', width: '100%', height: '50px',paddingBottom: '10px',  color: '#000000', fontFamily: 'Avenir Next, sans-serif', fontSize: '16px', fontWeight: 400, textAlign: 'left',  WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', margin: 0, lineHeight: '1.2', marginBottom: '0px', padding: 0, verticalAlign: 'middle' }} title={product.name}>
          {product.name}
        </div>
        <div className="flex items-center space-x-1" style={{ paddingBottom: '20px',fontSize: '16px', color: '#0A0A0A', fontWeight: 400, flexWrap: 'wrap', marginTop: namePriceGap, paddingTop: 5, width: '100%', height: '19px', fontFamily: 'Avenir Next, sans-serif' }}>
          {product.originalPrice && (
            <span style={{ textDecoration: 'line-through', color: '#888', fontSize: '16px', minWidth: 0, marginRight: '2px' }}>
              ₹ {product.originalPrice.toLocaleString()}
            </span>
          )}
          <span style={{ color: '#0A0A0A', fontWeight: 400, minWidth: 0, marginRight: '2px', fontSize: '16px' }}>
            ₹ {product.price.toLocaleString()}
          </span>
          {product.discount && (
            <span style={{ color: '#1ca7ec', fontWeight: 400, fontSize: '16px', minWidth: '30px' }}>{product.discount}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;