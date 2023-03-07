import image from "../Assets/img.jpg";

export default function Card() {
  return (
    <div className="container">
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={image} alt="profile one" />
          </div>
          <ul className="social-icons">
            <li>
              <a href="https://www.instagram.com/levillainalexandre/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/alexandre-levillain/">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Newaluigi">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              Alexandre Levillain
              <p className="job-title">Web Developer</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
