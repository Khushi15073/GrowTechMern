import "./card.css";

function Card({ imgUrl, changeImage, vName, chnageVName, aboutToVirat, setAboutToVirat }) {
  return (
    <div className="card-container">
      <div>
        <img src={imgUrl} alt="demo" />
        <p>{vName}</p>
        <p>{aboutToVirat}</p>
         <div className="btns">
          <button className="change-name-button" onClick={() => {
                setAboutToVirat(`Virat Kohli कई बिज़नेस में इन्वेस्ट कर चुके हैं, 
                    जिनमें उनकी खुद की फैशन ब्रांड WROGN और फिटनेस चेन Chisel Gym शामिल हैं।
                    वो One8 ब्रांड के तहत परफ्यूम,
                     फुटवियर और रेस्तरां जैसी कई लाइफस्टाइल कैटेगरी में भी एक्टिव हैं।`)
            }}>change language</button>
            <button className="change-name-button" onClick={()=>{
                chnageVName("Cheeku ")
            }}>Change Name</button>
         </div>
      </div>
    </div>
  );
}

export default Card;
