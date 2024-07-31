// card

import img1 from "../assets/images/perfume 1.jpg"
import img2 from "../assets/images/perfume 2.jpeg"
import img3 from "../assets/images/perfume 3.jpg"


function Card(){
    return(
      <div id="card">
      <div class="card-container">
          <img class="card-image" src={img1} alt="one"></img>
          <p class="hide">Victoria</p>
          <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      </div>
      <div class="card-container">
          <img class="card-image" src={img2} alt="two"></img>
          <p class="hide">Bella Vita</p>
          <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.  </p>
      </div>
      <div class="card-container">
          <img class="card-image" src={img3} alt="three"></img>
          <p class="hide">Aqua Angel</p>
          <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      </div>
    </div>
    )
  }

  export default Card