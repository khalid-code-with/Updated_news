
// import React from 'react';

// const Card = ({ data }) => {
//   console.log(data);

//   const readmore = (url) => {
//     window.open(url, "_blank"); // Opens in a new tab
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         {Array.isArray(data) && data.length > 0 ? (
//           data
//             .filter((currentiten) => currentiten.urlToImage) // Filter out items without valid image URLs
//             .map((currentiten, index) => (
//               <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
//                 <div className="card custom-card shadow-lg">
//                   <img
//                     src={currentiten.urlToImage}
//                     className="card-img-top custom-card-img"
//                     alt={currentiten.title || "Card Image"}
//                   />
//                   <div className="card-body">
//                     <h5
//                       className="card-title text-primary"
//                       onClick={() => window.open(currentiten.url)}
//                     >
//                       {currentiten.title || "No Title"}
//                     </h5>
//                     <p className="card-text text-muted">
//                       {currentiten.description || "No Description Available."}
//                     </p>
//                     <button
//                       className="btn btn-outline-primary"
//                       onClick={() => window.open(currentiten.url)}
//                     >
//                       Read More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//         ) : (
//           <p className="text-center text-danger">No Data Available</p>
//         )}
//       </div>
//       <div className="container ">
//       <footer className='btn btn-info'>Find on me these platform</footer>
//     <ul>
//     <li className="ftco-animate"><a href="https://www.youtube.com/@KhalidKhan-jc9ut"><span class="icon-youtube"></span></a></li>
// 					  <li className="ftco-animate"><a href="https://www.linkedin.com/in/khalid-khan-5626532bb?utm_source=share&utm_campaign=share_via&utm_conte
// 						nt=profile&utm_medium=android_ap"><span class="icon-linkedin"></span></a></li>  
// 					  <li className="ftco-animate"><a href="https://twitter.com/1234khalidkjan?t=AXPkRW15WGZKydIATMW2Vg&s=09"><span class="icon-twitter"></span></a></li>
// 					  <li className="ftco-animate"><a href="https://www.facebook.com/profile.php?id=100087273513127 "><span class="icon-facebook"></span></a></li>
// 				      <li className="ftco-animate"><a href="https://www.instagram.com/bharatpur_aale?utm_source=qr&igsh=MWkwZHIweHZwaHYyNg=="><span class="icon-instagram"></span></a></li>
// 			</ul>
//       </div>
//     </div>
//   );
// };

// export default Card;
import React from "react";

const Card = ({ data }) => {
  console.log(data);

  const readmore = (url) => {
    window.open(url, "_blank"); // Opens in a new tab
  };

  return (
    <>
      {/* Add Font Awesome for icons */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        rel="stylesheet"
      />

      <div className="container mt-5">
        <div className="row">
          {Array.isArray(data) && data.length > 0 ? (
            data
              .filter((currentiten) => currentiten.urlToImage) // Filter out items without valid image URLs
              .map((currentiten, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                  <div className="card custom-card shadow-lg">
                    <img
                      src={currentiten.urlToImage}
                      className="card-img-top custom-card-img"
                      alt={currentiten.title || "Card Image"}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title text-primary"
                        onClick={() => window.open(currentiten.url)}
                      >
                        {currentiten.title || "No Title"}
                      </h5>
                      <p className="card-text text-muted">
                        {currentiten.description ||
                          "No Description Available."}
                      </p>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => window.open(currentiten.url)}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <p className="text-center text-danger">No Data Available</p>
          )}
        </div>
        <div className="container">
          <ul className="gap_icon" style={{ listStyleType: "none", padding: 2, display: "flex", gap: "15px"}}>
            <span className="btn btn-warning">Find Us</span>
            <li>
              <a
                href="https://www.youtube.com/@KhalidKhan-jc9ut"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube fa-2x" style={{ color: "red" }}></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/khalid-khan-5626532bb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-linkedin fa-2x"
                  style={{ color: "#0077b5" }}
                ></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/1234khalidkjan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-twitter fa-2x"
                  style={{ color: "#1DA1F2" }}
                ></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100087273513127"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-facebook fa-2x"
                  style={{ color: "#4267B2" }}
                ></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/bharatpur_aale"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-instagram fa-2x"
                  style={{
                    color:
                      "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Card;
