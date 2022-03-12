import React, {Fragment, useContext, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import {GithubContext} from "../context/github/githubContext";

export const Profile = ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
  const params = useParams();

  useEffect(() => {
    getUser(params.name);
    getRepos(params.name);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(loading) {
    return <p className="text-center">Загрузка...</p>
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following, public_repos,
    public_gists
  } = user;

  return (
    <Fragment>
      <Link to="/" className="btn btn-link">На главную</Link>

      <div className="card bt-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt={name}
                style={{width: '150px'}}
              />
              <h1>{name}</h1>
              {location && <p>местоположение: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <Fragment>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </Fragment>
              }
              <a href={html_url} className="btn btn-dark" target="_blank" rel="noreferrer">Открыть профиль</a>
              <ul>
                {
                  login && <li><strong>Username: </strong> {login}</li>
                }

                {
                  company && <li><strong>Компания: </strong> {company}</li>
                }

                {
                  blog && <li><strong>Сайт: </strong> {blog}</li>
                }
              </ul>
              <div className="badge badge-primary">Подписчики: {followers}</div>
              <div className="badge badge-success">Подписан: {following}</div>
              <div className="badge badge-info">Репозитории: {public_repos}</div>
              <div className="badge badge-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>

      {repos.join()}
    </Fragment>
  );
};
