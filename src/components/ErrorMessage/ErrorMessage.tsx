import toast from "react-hot-toast";

interface ErrorMessageProps {
  toggleState: (isError:boolean)=>void;
}

const  ErrorMessage:React.FC<ErrorMessageProps>=({ toggleState }) =>{
  toast.error(`Error.Try again.`, {
    position: "top-left",
  });
  toggleState(false);
  return <></>;
}
export default ErrorMessage;

