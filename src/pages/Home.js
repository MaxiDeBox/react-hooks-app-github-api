import React, {useContext} from "react";
import {Search} from "../components/Search";
import {Card} from "../components/Card";
import {GithubContext} from "../context/github/githubContext";

export const Home = () => {
  const {loading, users} = useContext(GithubContext);

  return (
    <>
      <div className="row">
        <Search />
      </div>
      <div className="row">
        {
          loading
            ? <p className="text-center mt-4">Загрузка...</p>
            : users.map((user, idx) => (
                <div className="col-sm-3 mt-4" key={idx}>
                  <Card user={user} />
                </div>
            ))
        }
      </div>
    </>
  );
};
