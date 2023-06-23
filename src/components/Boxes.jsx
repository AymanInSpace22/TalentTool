import React from "react";
import '../styles/Boxes.css';


// function Boxes() {
//     return (
//         <>
//             <div className="flex-container">
//                 <a href="https://www.youtube.com/" className="box">Text Box</a>
//                 <a href="https://www.youtube.com/" className="box">Text Box</a>
//                 <a href="https://www.youtube.com/" className="box">Text Box</a>
//                 <a href="https://www.youtube.com/" className="box">Text Box</a>
//                 <a href="https://www.youtube.com/" className="box">Text Box</a>
//                 <a href="https://www.youtube.com/" className="box">Text Box</a>
//             </div>
//         </>
//     );
// }

function Box({ image, url, text }) {
    return (
      <a href={url} className="box" style={{ backgroundImage: `url(${image})` }} target="_blank">
        {text}
      </a>
    );
  }
  
  function Boxes() {
    const boxesData = [
      { image: 'image1.jpg', url: 'https://talent.capgemini.com/americas/pages/us_and_canada/links_and_tools/', text: 'Talent Portal' },
      { image: 'image2.jpg', url: 'https://gfs.capgemini.com/OA_HTML/OA.jsp?OAFunc=OAHOMEPAGE', text: 'GTE' },
      { image: 'image3.jpg', url: 'https://edifra-bpmaas-prod2.pegacloud.net/prweb/PRAuth/app/JobFeed/Pxhl4ERF5awYUSa_gLOM61Nz52h1NO9_*/!STANDARD?App=JobFeed', text: 'JobFeed' },
      { image: 'image4.jpg', url: 'https://myconnect.capgemini.com/irj/portal', text: 'My Path' },
      { image: 'image5.jpg', url: 'https://capgemini.sumtotal.host/rcore/c/dash/learningfocus/iniitial?isDeepLink=1', text: 'My Learning' },
      { image: 'image6.jpg', url: 'https://capgemini.udemy.com/organization/home/', text: 'Udemy Business' },
    ];
  
    return (
      <>
        <div className="flex-container">
          {boxesData.map((box, index) => (
            <Box key={index} image={box.image} url={box.url} text={box.text} />
          ))}
        </div>
      </>
    );
  }


export default Boxes;