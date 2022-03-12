import React from "react";
import {Search} from "../components/Search";
import {Card} from "../components/Card";

export const Home = () => {
  const cards = new Array(15).fill('').map((_, idx) => idx);
  return (
    <>
      <div className="row">
        <Search />
      </div>
      <div className="row">
        {
          cards.map((card, idx) => {
            return (
              <div className="col-sm-4 mt-4" key={idx}>
                <Card />
              </div>
            );
          })
        }
      </div>
    </>
  );
};
