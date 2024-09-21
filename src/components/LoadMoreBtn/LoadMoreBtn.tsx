import { forwardRef, useRef,ForwardedRef} from "react";
interface LoadMoreBtnProps {
  searchMore:()=>void;
  
}

const LoadMoreBtn = forwardRef<HTMLButtonElement, LoadMoreBtnProps>(
  ({ searchMore }, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button ref={ref} type="button" onClick={searchMore}>
        Load more
      </button>
    );
  }
);









export default LoadMoreBtn;






