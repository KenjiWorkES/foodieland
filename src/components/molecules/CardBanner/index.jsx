import { useEffect, useRef, useState } from "react";

import "./CardHomeHeader.scss";

export default function CardHomeHeader(props) {
  const totalItem = props.data.length;
  const [currentIten, setCurrentIten] = useState(0);

  const slider = useRef(null);
  const newBanner = props.data.slice(currentIten, currentIten + 1);

  /* mostrar que tem mais a ser exebido */
  useEffect(() => {
    const time = setTimeout(() => {
      if (totalItem - 1 === currentIten) {
        setCurrentIten(0);
      } else {
        setCurrentIten(currentIten + 1);
      }
    }, 5000);
    () => {
      time.clearTimeOut();
    };
  }, [currentIten]);

  return (
    <div ref={slider} className="sliderBanner">
      {newBanner.map((dado) => (
        <div key={dado.id} className="banner">
          <div className="banner__header">
            <img className="banner__mainCourse" src={dado.img} />
            <img
              className="banner__recipesLike"
              src="/assets/recipesLike.png"
            />
            {/* top container com bot fazendo modificador */}
            <div className="banner__topContainer">
              {/* não é modificador */}
              <img
                className="banner__topContainer--icon"
                src="/assets/folhaPequena.png"
              />
              <p className="banner__topContainer--title">Hot Recipes</p>
            </div>
          </div>

          <div className="banner__botContainer">
            <h2 className="banner__botContainer--title">{dado.title}</h2>

            <p className="banner__botContainer--description">{dado.desc}</p>

            {/* nao sao modificadores */}
            <div className="banner__informations">
              <div className="banner__card">
                <img className="banner__card--icons" src={dado.iconTimer} />
                <p className="banner__card--content"> {dado.time}</p>
              </div>
              <div className="banner__card">
                <img className="banner__card--icons" src={dado.iconCategory} />
                <p className="banner__card--content"> {dado.category}</p>
              </div>
            </div>
            {/* corrigir modificador */}
            <div className="banner__footer">
              <div className="banner__authorInformations">
                <img src={dado.avatar} />
                <div className="banner__authorData">
                  <h3 className="banner__authorData--name">{dado.author}</h3>
                  <h4 className="banner__authorData--date">{dado.date}</h4>
                </div>
              </div>

              <button className="banner__button">
                <p className="banner__textButton">View Recipes</p>

                <span className="banner__button--play"></span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}