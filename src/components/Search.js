import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {GithubContext} from "../context/github/githubContext";

export const Search = () => {
  const [value, setValue] = useState('');
  const {show} = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    if(value.trim()) {
      github.search(value.trim());
    } else {
      show('Введите данные пользователя!');
    }
  }

  return (
   <div className="col">
     <div className="form-group mt-4">
       <input
         type="text"
         className="form-control"
         placeholder="Введите ник пользователя ..."
         value={value}
         onChange={(event) => setValue(event.target.value)}
         onKeyPress={onSubmit}
       />
     </div>
   </div>
 )
};
