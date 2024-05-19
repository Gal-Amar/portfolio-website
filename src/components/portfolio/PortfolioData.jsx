import { IoIosArrowDown } from "react-icons/io";

const PortfolioData = (props) => {
  return (
    <div className="container portfolio_container">
      {props.data.map(
        ({ id, image, badge, title, description, github, demo }) => {
          return (
            <div>
              <article key={id} className="portfolio_item">
                <div className="portfolio-item-top">
                  <div className="portfolio_item-image">
                    <img src={image} alt={title} />
                  </div>
                  <div className="badge">
                    <div style={{ padding: "5px" }}>{badge}</div>
                  </div>
                  <h3>{title}</h3>
                  <small style={{ fontSize: "medium" }}>{description}</small>
                  <div className="portfolio_item-cta">
                    <a
                      href={github}
                      className={github === null ? "btn btn-disabled" : "btn"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href={demo}
                      className={
                        demo === null
                          ? "btn btn-primary-disabled"
                          : "btn btn-primary"
                      }
                      target="_blank"
                      disabled={demo === "none" ? true : false}
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
                <div className="process">
                  <button
                    className="process-btn"
                    target="_blank"
                    onClick={() => props.toggleProcess(id)}
                  >
                    Work Process
                    <div className="process-btn-icon">
                      <IoIosArrowDown />
                    </div>
                  </button>
                </div>
              </article>
              <div>
                <div className="small-devices">
                  {props.openId === id && (
                    <div className="work-process-section">
                      <props.processHandler id={props.openId} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default PortfolioData;
