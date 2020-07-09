import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import "./Dashboard.css";
import "./DashboardSass.css";
import axios from "axios";

function Dashboard(props) {
  const [category, setCategory] = useState("Vocabulary");
  const [resources, setResources] = useState([]);

  const getResourceCategory = (e) => {
    axios
      .get(`/api/resourcesbycat?category=${category}`)
      .then((res) => {
        console.log(res.data);
        setResources(res.data);
        props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getResourceCategory();
  }, [category]);

  return (
    <div className="Dash">
      <div className="TopDash">
        <div className="Welcome">
          <h1>Bienvenue, {props.username}!</h1>
          <Link to="/resourcelist">
            <p>VIEW ALL RESOURCES</p>
          </Link>
          <Link to="/Downloads">
            <p>VIEW DOWNLOADABLE CONTENT</p>
          </Link>
          <Link to="/profile">
          <p>VIEW PROFILE</p>
          </Link>
        </div>
        <div className="addResource">
          <Link to="/AddResource">
            <button>Add New Resource</button>
          </Link>
        </div>
      </div>
      <br />
      <div className="ResourceList">
        <div className="Vocabulary" onClick={() => setCategory("Vocabulary")}>
          <h2>Vocabulary</h2>
          {category === "Vocabulary" ? (
            <>
              {resources.map((element, index) => {
                if (index < 4) {
                  return (
                    <div>
                      <h3>{element.title}</h3>
                      <p>{element.description}</p>
                      <a href={element.resource_url} target="_blank">Allez-y!</a>
                    </div>
                  );
                }
              })}
            </>
          ) : null}

          <div className="VocRes">
            {/* {this.props.category}
              {this.getResourceCategory([
                title,
                description,
                url,
                "Vocabulary", */}
          </div>
        </div>
        <div className="Verbs" onClick={() => setCategory("Verbs")}>
          <h2>Verbs</h2>
          {category === "Verbs" ? (
            <>
              {resources.map((element, index) => {
                if (index < 4) {
                  return (
                    <div>
                      <h3>{element.title}</h3>
                      <p>{element.description}</p>
                      <a href={element.resource_url} target="_blank">Allez-y!</a>
                    </div>
                  );
                }
              })}
            </>
          ) : null}
        </div>
        <div onClick={() => setCategory("Adjectives")} className="Adjectives">
          <h2>Adjectives</h2>
          {category === "Adjectives" ? (
            <>
              {resources.map((element, index) => {
                if (index < 4) {
                  return (
                    <div>
                      <h3>{element.title}</h3>
                      <p>{element.description}</p>
                      <a href={element.resource_url} target="_blank">Allez-y!</a>
                    </div>
                  );
                }
              })}
            </>
          ) : null}
        </div>
        <div onClick={() => setCategory("Adverbs")} className="Adverbs">
          <h2>Adverbs</h2>
          {category === "Adverbs" ? (
            <>
              {resources.map((element, index) => {
                if (index < 4) {
                  return (
                    <div>
                      <h3>{element.title}</h3>
                      <p>{element.description}</p>
                      <a href={element.resource_url} target="_blank">Allez-y!</a>
                    </div>
                  );
                }
              })}
            </>
          ) : null}
        </div>
        <div onClick={() => setCategory("Pronunciation")} className="Pronunciation">
          <h2>Pronunciation</h2>
          {category === "Pronunciation" ? (
            <>
              {resources.map((element, index) => {
                if (index < 4) {
                  return (
                    <div>
                      <h3>{element.title}</h3>
                      <p>{element.description}</p>
                      <a href={element.resource_url} target="_blank">Allez-y!</a>
                    </div>
                  );
                }
              })}
            </>
          ) : null}
        </div>
        <div
          onClick={() => setCategory("Podcasts and Videos")}
          className="PodVid"
        >
          <h2>Podcasts and Videos</h2>
          {category === "Podcasts and Videos" ? (
            <>
              {resources.map((element, index) => {
                if (index < 4) {
                  return (
                    <div>
                      <h3>{element.title}</h3>
                      <p>{element.description}</p>
                      <a href={element.resource_url} target="_blank">Allez-y!</a>
                    </div>
                  );
                }
              })}
            </>
          ) : null}
        </div>
        <div onClick={() => setCategory("Miscellaneous")} className="Misc">
          <h2>Miscellaneous</h2>
          {category === "Miscellaneous" ? (
            <>
              {resources.map((element, index) => {
                if (index < 4) {
                  return (
                    <div>
                      <h3>{element.title}</h3>
                      <p>{element.description}</p>
                      <a href={element.resource_url} target="_blank">Allez-y!</a>
                    </div>
                  );
                }
              })}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (reduxState) => {
  return {
    username: reduxState.username,
    profile_pic: reduxState.profile_pic,
  };
};

export default connect(mapStateToProps)(Dashboard);
