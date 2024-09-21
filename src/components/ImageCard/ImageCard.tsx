import css from "./ImageCard.module.css";

interface ImageCardProps {
  url:string; 
  alt:string;
  id:string;
}

const ImageCard:React.FC<ImageCardProps>=({ url, alt, id })=> {
  
  return (
    
    <div className={css.container}>
      <img src={url} alt={alt} id={id} className={css.image} />
    </div>
  );
}

export default ImageCard;


