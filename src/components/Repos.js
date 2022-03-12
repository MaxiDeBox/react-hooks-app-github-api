import React, {Fragment} from "react";

export const Repos = ({repos}) => {
  return (
    <Fragment>
      {
        repos.map((repo, idx) => {
          return (
            <div className="card mt-4" key={idx}>
              <div className="card-body">
                <h5>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
                </h5>
                {
                  repo.language && <p className="badge bg-danger"><strong>Язык: </strong> {repo.language}</p>
                }
                <p>{repo.description}</p>
              </div>
            </div>
          );
        })
      }
    </Fragment>
  )
};
