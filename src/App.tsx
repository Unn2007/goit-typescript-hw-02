import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import fetchArticlesWithTopic from "./utils/images-api";
import { InfinitySpin } from "react-loader-spinner";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import {Image,ModalData,Data} from './App.types'
import "./App.css";



function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [imageModalIsOpen, setIsOpen] = useState<boolean>(false);
  const [imageModalData, setimageModalData] = useState<object>({});

  const loadMoreButton = useRef<HTMLButtonElement| null>(null);
  

  

  
  function closeimageModal():void {
    setIsOpen(false);
  }

  const scrollImages = ():void => {
    if (loadMoreButton.current) {
    const beginImages:HTMLButtonElement = loadMoreButton.current;
    beginImages.scrollIntoView({
      behavior: "smooth",
    });
  }
  };

  const onFind = (topic:string):void => {
    setQuery(topic);
    setPage(1);
    setImages(() => {
      return [];
    });
  };

  const findMore = ():void => {
    setPage(page + 1);
  };

  const handleClickImage = (modalData:ModalData):void => {
    setimageModalData(modalData);
    setIsOpen(true);
  };

  useEffect(():void => {
    const handleSearch = async ():Promise<void> => {
      try {
        if (query) {
          setError(false);
          setLoading(true);
          const data:Data = await fetchArticlesWithTopic(query, page);
          if (data.results.length === 0) {
            toast.error(`Error.Nothing find`, { position: "top-left" });
          }
          setImages((prevImages:Image[]) => {
            return [...prevImages, ...data.results];
          });
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    handleSearch();
  }, [query, page]);

  useEffect(():void => {
    page > 1 && scrollImages();
  });

  return (
    <div id="app">
      {error && <ErrorMessage toggleState={setError} />}

      <SearchBar onSearch={onFind} />

      {images.length > 0 && (
        <>
          <ImageGallery data={images} openModal={handleClickImage} />
          <LoadMoreBtn searchMore={findMore} ref={loadMoreButton} />
        </>
      )}

      <div className="loaderWrap">
        {loading && (
          <InfinitySpin
            // visible={true}
            width="100"
            color="#4fa94d"
            // ariaLabel="infinity-spin-loading"
          />
        )}
      </div>
      {imageModalIsOpen && (
        <ImageModal
          modalIsOpen={imageModalIsOpen}
          closeModal={closeimageModal}
          modalData={imageModalData}
        />
      )}
    </div>
  );
}

export default App;
