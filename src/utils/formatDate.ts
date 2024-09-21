import { format } from "date-fns";

const formatFotoCreateDate = (date:string):string => {
   if(date) { 
    return format(Date.parse(date), `dd MMMM yyyy, HH:mm`);}

    return "";
};

export default formatFotoCreateDate;

