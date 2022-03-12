import React, {useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Search = () => {
  const {show} = useContext(AlertContext);
  const onSubmit = (event) => {
    if (event.key === 'Enter') {
      show('This is Alert');
    }
  }

  return (
   <div className="col">
     <div className="form-group mt-4">
       <input
         type="text"
         className="form-control"
         placeholder="Введите ник пользователя ..."
         onKeyPress={onSubmit}
       />
     </div>
   </div>
 )
};
