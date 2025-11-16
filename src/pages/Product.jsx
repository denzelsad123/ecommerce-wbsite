import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('')
  const [size,setSize] = useState('');
  const [showQR, setShowQR] = useState(false);

  const fetchProductData = async () => {
    products.map((item)=>{
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* -------------------------product images----------------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item,index)=>(
              <img onClick={()=>setImage(item)} src={item} key={index} className='w-{24%} sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* ---------- Product info ---------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

          <div className='flex item-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(122)</p>
          </div>

          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-pink-400' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>

          {/* ------- ADD TO CART + QR BUTTON ------- */}
          <div className="flex items-center gap-3">
            <button 
              onClick={()=>addToCart(productData._id,size)} 
              className='bg-black text-white px-8 py-3 text-sm active:bg-pink-700'>
              ADD TO CART
            </button>

            <button 
              onClick={()=>setShowQR(true)} 
              className='border border-black px-6 py-3 text-sm hover:bg-gray-200'>
              QR CODE
            </button>
          </div>

          <hr className='mt-8 sm:w-4/5' />

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>Scan QR code to view product in real environment</p>
              <p>100% Handmade crochet product</p>
              <p>Cash in delivery is available on this product.</p>
              <p>Easy return and exchange policy within 6 days.</p>
          </div>
        </div>
      </div>

      {/* ---------- Description Section ---------- */}
      <div className='mt-20'>
          <div className='flex'>
              <b className='border px-5 py-3 text-sm'>Description</b>
              <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
          </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>Aninaya.co is an innovative online marketplace dedicated to elevating Baguio’s local crochet artistry through technology and culture...</p>
            <p>With the integration of Augmented Reality (AR), buyers can preview crochet products in real environments...</p>
            <p>Every stitch tells a story of passion, tradition, and artistry—now brought to life in a more immersive way.</p>
          </div>
      </div>

      {/* ---------- Related Products ---------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

      {/* ---------- QR POPUP MODAL ---------- */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
            
            <button 
              className="absolute top-2 right-3 text-xl"
              onClick={() => setShowQR(false)}
            >
              ✖
            </button>

            <h2 className="text-lg font-medium mb-4">Scan to view product</h2>

            {/* Replace with your QR asset */}
            <img 
              src={assets.qr_code}
              alt="QR Code"
              className="w-48 h-48 mx-auto"
            />

            <p className='mt-2 text-sm text-gray-500'>Scan the QR code to view this item on your device.</p>
          </div>
        </div>
      )}

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
