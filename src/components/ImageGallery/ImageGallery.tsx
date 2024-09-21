import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import {ModalData,Image } from '../../App.types'

interface ImageGalleryProps {
  data: Image[];
  openModal:(data:ModalData)=>void
}

const  ImageGallery:React.FC<ImageGalleryProps>=({ data, openModal })=> {
  const handleClick = (clickedImage:Image):void => {
    openModal({
      description: clickedImage.description,
      urlRegular: clickedImage.urls.regular,
      likes: clickedImage.likes,
      createdAt: clickedImage.created_at,
      userProfileImage: clickedImage.user.profile_image.small,
      authorName: clickedImage.user.name,
      userSocial: clickedImage.user.social.portfolio_url,
    });
  };

  return (
    <ul className={css.imageGallery} >
      {data.map((item, index) => {
        return (
          <li
            key={item.id}
            onClick={() => {
              handleClick(item);
            }}
          >
            <ImageCard
              url={item.urls.small}
              alt={item.alt_description}
              id={`${index}`}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;


