import { useState } from "react";
import "./components/card.css"

import Card  from "./components/Card";

function App() {
  const [imgUrl, SetImageUrl]=useState("https://akm-img-a-in.tosshub.com/indiatoday/images/story/202503/virat-kohli-264119713-3x4.jpg?VersionId=BUIo59wbwrhKyOUf2137N5qQjQWY.daf");
  const [name, SetName] = useState("Virat Sir")
    const [aboutToVirat, SetAboutToVirat] = useState(
        `Virat Kohli is one of the greatest
         modern-day cricketers and a former captain of the Indian cricket team. 
         Known for his aggressive batting style, he has scored over 25,000 international runs.
          He made his international debut in 2008 and quickly became a key player in all
           formats`)
  return (
    <div className="App-Containr">
    {/* <Card imgUrl={imgUrl} changeImage={SetImageUrl} vName={name}
                chnageVName={SetName}
                aboutToVirat={aboutToVirat} setAboutToVirat={SetAboutToVirat} /> */}

             
            {
                [1, 2, 4, 5].map((item, index) => (<div key={index} ><Card imgUrl={imgUrl} changeImage={SetImageUrl} vName={name}
                chnageVName={SetName}
                aboutToVirat={aboutToVirat} setAboutToVirat={SetAboutToVirat} /> </div>)
                )
            }   
    </div>
  );
}

export default App;
