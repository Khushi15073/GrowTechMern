import React, { useState } from "react";
import ImageCard from "./ImageCard";
import "./Gallery.css"; // Optional: create this for styling

const Gallery = () => {
  const [images, setImages] = useState([
    {
      name: "IMG_593265.jpg",
      date: "14/06/2025",
      size: "6.8 mb",
      url: "https://cars.tatamotors.com/content/dam/tml/pv/products/tiago/year-2025/ice/promoting-vc/lifestyle/lifestyle-02.jpg",
    },
    {
      name: "IMG_461207.jpg",
      date: "14/06/2025",
      size: "3.4 mb",
      url: "https://www.carpro.com/hs-fs/hubfs/2023-Chevrolet-Corvette-Z06-credit-chevrolet.jpeg?width=1020&name=2023-Chevrolet-Corvette-Z06-credit-chevrolet.jpeg",
    },
    {
      name: "IMG_593265.jpg",
      date: "14/06/2025",
      size: "6.8 mb",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Lykan_HyperSport.jpg/960px-Lykan_HyperSport.jpg",
    },
    {
      name: "IMG_461207.jpg",
      date: "14/06/2025",
      size: "3.4 mb",
      url: "https://cimg3.ibsrv.net/ibimg/hgm/1600x900-1/100/463/w-motors-lykan-hypersport-image-james-holm_100463467.jpg",
    },
    {
      name: "IMG_593265.jpg",
      date: "14/06/2025",
      size: "6.8 mb",
      url: "https://www.topgear.com/sites/default/files/images/news-article/carousel/2021/05/84901485b9b56e0c512e2a86abbdb217/lykan_hypersport_without_ff7_logo_1.jpg",
    },
    {
      name: "IMG_461207.jpg",
      date: "14/06/2025",
      size: "3.4 mb",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF79sfXFYGsnwOGMOTbq4TnLzyLeSdKmu3KBYeU5Z4-C__21P-TWR84-O3wy0acfEoY38&usqp=CAU",
    },
    {
      name: "IMG_593265.jpg",
      date: "14/06/2025",
      size: "6.8 mb",
      url: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg",
    },
    {
      name: "IMG_461207.jpg",
      date: "14/06/2025",
      size: "3.4 mb",
      url: "https://www.thestreet.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjA4NjE3MDQ1MDQ1MDI4MTQ3/2024-mustang-03-1.jpg",
    },
    {
      name: "IMG_593265.jpg",
      date: "14/06/2025",
      size: "6.8 mb",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF79sfXFYGsnwOGMOTbq4TnLzyLeSdKmu3KBYeU5Z4-C__21P-TWR84-O3wy0acfEoY38&usqp=CAU",
    },
    {
      name: "IMG_461207.jpg",
      date: "14/06/2025",
      size: "3.4 mb",
      url: "https://www.thestreet.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjA4NjE3MDQ1MDQ1MDI4MTQ3/2024-mustang-03-1.jpg",
    },
    {
      name: "IMG_593265.jpg",
      date: "14/06/2025",
      size: "6.8 mb",
      url: "https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2025/collections/dm/24_FRD_MST_60983_2.tif?croppathe=1_3x2&wid=900",
    },
    {
      name: "IMG_461207.jpg",
      date: "14/06/2025",
      size: "3.4 mb",
      url: "https://www.thestreet.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjA4NjE3MDQ1MDQ1MDI4MTQ3/2024-mustang-03-1.jpg",
    },
  ]);
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <ImageCard key={index} image={img} />
      ))}
    </div>
  );
};

export default Gallery;
