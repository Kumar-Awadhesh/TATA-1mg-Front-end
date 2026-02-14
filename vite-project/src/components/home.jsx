import { useState, useEffect } from 'react'
import axios from 'axios';
import {jwtDecode} from "jwt-decode";
import '../App.css'


const Home = () => {
  
  const [showNutrition, setNutrition] = useState(false);
  const [showWellness, setWellness] = useState(false);
  const [showStomach, setStomach] = useState(false);
  const [showFitness, setFitness] = useState(false);
  const [showPain, setPain] = useState(false);
  const [showHealthy, setHealthy] = useState(false);
  const [showImmunity, setImmunity] = useState(false);
  const [showIndex, setIndex] = useState(0);
  const [data, setData] = useState([]);
  

  const images= [
    "/nycil.jpeg",
    "/glucond.avif",
    "/health-checkup.png",
    "/labs.png"
  ];

  const health_concern = [
    {src: "/images/health-concern1.avif", name: "Diabetes"},
    {src: "/images/health-concern2.avif", name: "Heart Care"},
    {src: "/images/health-concern3.avif", name: "Stomach Care"},
    {src: "/images/health-concern4.avif", name: "Liver Care"},
    {src: "/images/health-concern5.avif", name: "Bone, Joint & Muscle Care"},
    {src: "/images/health-concern6.avif", name: "Kidney Care"},
    {src: "/images/health-concern7.avif", name: "Derma Care"}
  ];

  const feature_brand = [
    {src: "/images/feature-brand1.avif"},
    {src: "/images/feature-brand2.avif"},
    {src: "/images/feature-brand3.avif"},
    {src: "/images/feature-brand4.avif"},
    {src: "/images/feature-brand5.avif"},
    {src: "/images/feature-brand6.avif"},
    {src: "/images/feature-brand7.avif"}
  ];

  const personl_care = [
    {src: "/images/personal-care1.avif"},
    {src: "/images/personal-care2.avif"},
    {src: "/images/personal-care3.avif"},
    {src: "/images/personal-care4.avif"},
    {src: "/images/personal-care5.avif"},
    {src: "/images/personal-care6.avif"},
    {src: "/images/personal-care7.avif"}
  ]

  


  const vitaminHandleEnter = () => {
    setVitamin(true);
  }

  const vitaminHandleLeave = () => {
    setVitamin(false);
  }

  const nutritionHandleEnter = () => {
    setNutrition(true);
  }

  const nutritionHandleLeave = () => {
    setNutrition(false);
  }

  const wellnessHandleEnter = () => {
    setWellness(true);
  }

  const wellnessHandleLeave = () => {
    setWellness(false);
  }

  const stomachHandleEnter = () => {
    setStomach(true);
  }

  const stomachHandleLeave = () => {
    setStomach(false);
  }

  const fitnessHandleEnter = () => {
    setFitness(true);
  }

  const fitnessHandleLeave = () => {
    setFitness(false);
  }

  const painHandleEnter = () => {
    setPain(true);
  }

  const painHandleLeave = () => {
    setPain(false);
  }

  const healthyHandleEnter = () =>{
    setHealthy(true);
  }

  const healthyHandleLeave = () => {
    setHealthy(false);
  }

  const immunityHandleEnter = () => {
    setImmunity(true);
  }

  const immunityHandleLeave = () => {
    setImmunity(false);
  }

  const nextHandle = () => {
    setIndex(prevIndex => (prevIndex + 1) % images.length);
  }

  const prevHandle = () => {
    setIndex(prevIndex => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  }


  useEffect(() => {
    axios.get("https://tata-1mg-4rty.onrender.com/product/getProduct")
      .then((res) => {
        setData(res.data.products)
        
      })
      .catch((err => console.err("failed to fetch the data", err)))
  },[])


  const savingDealHandle = (id) => {
    alert(id)
  }


  return (
    <>
      <div className='container'>

        <div className='product-nodal-container'>

          <div className='product-section'>
            
            <div>
              <button onMouseOver={nutritionHandleEnter} onMouseLeave={nutritionHandleLeave} className='nutrition-btn nodal-btn'>Nutritional Drinks <b>⌄</b></button>
                {
                  showNutrition &&
                  <div className='products' onMouseOver={nutritionHandleEnter} onMouseLeave={nutritionHandleLeave}>
                    <div>
                      <h4>Green Tea & Herbal Tea</h4>
                      <h4>Adult Daily Nutrition</h4>
                      <h4>Kids Nutrition (2-15 Yrs)</h4>
                      <h4>Women Nutrition</h4>
                      <h4>Apple Cider Vinegar</h4>
                      <h4>Diabetes Nutrition</h4>
                      <h4>Specialized Nutrition</h4>
                      <h4>Green Coffee</h4>
                    </div>
                  </div>
                }
            </div>

            <div>
              <button onMouseOver={wellnessHandleEnter} onMouseLeave={wellnessHandleLeave} className='wellness-btn nodal-btn'>Sexual Wellness <b>⌄</b></button>
                {
                  showWellness &&
                  <div className='products' onMouseOver={wellnessHandleEnter} onMouseLeave={wellnessHandleLeave}>
                    <div>
                      <h4>Condoms</h4>
                      <h4>Lubricants & Massage Gels</h4>
                      <h4>Sexual Wellness Devices</h4>
                      <h4>Performance Enhancers</h4>
                      <h4>Pregnancy & Ovulation Kit</h4>
                      <h4>Oral Contraceptives</h4>
                    </div>
                  </div>
                }
              </div>
        

            <div>
              <button onMouseOver={stomachHandleEnter} onMouseLeave={stomachHandleLeave} className='stomach-btn nodal-btn'>Stomach Care <b>⌄</b></button>
                {
                  showStomach &&
                  <div className='products' onMouseOver={stomachHandleEnter} onMouseLeave={stomachHandleLeave}>
                    <div>
                      <h4>Constipation</h4>
                      <h4>Acidity</h4>
                      <h4>Pre and Probiotics</h4>
                      <h4>Indigestion</h4>
                      <h4>Diarrhoea</h4>
                      <h4>Bloating</h4>
                    </div>
                  </div>
                }
            </div>
             
             <div>
                <button onMouseOver={fitnessHandleEnter} onMouseLeave={fitnessHandleLeave} className='fitness-btn nodal-btn'>Fitness Supplements <b>⌄</b></button>
                {
                  showFitness &&
                  <div className='products' onMouseOver={fitnessHandleEnter} onMouseLeave={fitnessHandleLeave}>
                    <div>
                      <h4>Whey Protein</h4>
                      <h4>Fat Burners</h4>
                      <h4>Protein Supplements</h4>
                      <h4>Workout Essentials</h4>
                      <h4>Mass Gainers</h4>
                      <h4>Amino Acids</h4>
                      <h4>Sports</h4>
                      <h4>Plant Protein</h4>
                    </div>
                  </div>
                }
             </div>
            
            <div>
              <button onMouseOver={painHandleEnter} onMouseLeave={painHandleLeave} className='pain-btn nodal-btn'>Pain Relief <b>⌄</b></button>
              {
                showPain &&
                <div className='products' onMouseOver={painHandleEnter} onMouseLeave={painHandleLeave}>
                  <div>
                    <h4>Gel & Sprays</h4>
                    <h4>Oils For Pain Relief</h4>
                    <h4>Heating Aids & Belts</h4>
                    <h4>Pain Balm & Ointment</h4>
                    <h4>Pain Relief Tablets</h4>
                  </div>
                </div>
              }
            </div>
            
            <div>
              <button onMouseOver={healthyHandleEnter} onMouseLeave={healthyHandleLeave} className='healthy-btn nodal-btn'>Healthy Snacks <b>⌄</b></button>
              {
                showHealthy &&
                <div className='healthy' onMouseOver={healthyHandleEnter} onMouseLeave={healthyHandleLeave}>
                  <div>
                    <h4>Granola & Protein Bars</h4>
                    <h4>Peanut Butter</h4>
                    <h4>Honey</h4>
                    <h4>Dry Fruits & Berries</h4>
                    <h4>Cookies</h4>
                  </div>
                  <div>
                    <h4>Oats</h4>
                    <h4>Muesli & Cereals</h4>
                    <h4>Edible Seeds & Nuts</h4>
                    <h4>Superfoods</h4>
                    <h4>Quinoa</h4>
                  </div>
                </div>
              }
            </div>
            
            <div>
              <button onMouseOver={immunityHandleEnter} onMouseLeave={immunityHandleLeave} className='immunity-btn nodal-btn'>Immunity Boosters <b>⌄</b></button>
              {
                showImmunity &&
                <div className='products' onMouseOver={immunityHandleEnter} onMouseLeave={immunityHandleLeave}>
                  <div>
                    <h4>Chyawanprash</h4>
                    <h4>Antioxidant Supplements</h4>
                    <h4>Ayurvedic Supplements</h4>
                    <h4>Herbal Tea</h4>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
        <div className='front-img'>
          <div className='slider-container'>
            <button className='prev-btn' onClick={prevHandle}>o</button>
            <img src={images[showIndex]} alt="slider" className='slider-img'/>
            <button className='nxt-btn' onClick={nextHandle}>o</button>
          </div>
          <div className='nppa-container'><img src="/nppa.webp" alt="" className='nppa-img' /></div>
        </div>
        <div className='lending-tag'><h2>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</h2></div>
        <div className='know-more'><img src="images/know-more.avif" alt="" /></div>
        <div className='health-concern-tag'><h3>Shop by health concerns</h3></div>
        <main className='product-container'>
          <div>
            <div>
              {health_concern.map((item, index) => (
                      <div className='product-item' key={index}>
                        <img className='product-img' src={item.src} alt={item.name}></img>
                        <h4>{item.name}</h4>
                      </div>
                    ))}
            </div>
          </div>
          <div className='feature-brand-tag'><h3>Full body health checkups</h3></div>
          <div>
            <div className='health-data'>
                {data
                .filter((item) => item.category === "health_checkup")
                .map((item, index) => (
                  <div className='product-data' key={index}>
                    <h4>{item.title}</h4>
                    <p>{`रु${item.price}`}</p>
                  </div>
                ))}
                  
            </div>
          </div>
          <div className='feature-brand-tag'><h3>Featured brands</h3></div>
          <div>
            <div>
                {feature_brand.map((item, index) => (
                        <div className='product-item' key={index}>
                          <img className='product-img' src={item.src} alt={item.name}></img>
                        </div>
                      ))}
              </div>
          </div>
          <div className='feature-brand-tag'><h3>Personal care</h3></div>
          <div>
            <div>
                {personl_care.map((item, index) => (
                        <div className='product-item' key={index}>
                          <img className='product-img' src={item.src} alt={item.name}></img>
                        </div>
                      ))}
              </div>
          </div>
          <div className='feature-brand-tag'><h3>Pathology Tests | Up to 70% off</h3></div>
          <div>
            <div className='health-data'>
                {data
                .filter((item) => item.category === "test")
                .map((item, index) => (
                  <div className='product-data' key={index}>
                    <h4>{item.title}</h4>
                    <p>{`रु${item.price}`}</p>
                  </div>
                ))}
                  
            </div>
          </div>
          <div className='feature-brand-tag'><h3>Super saving deals</h3></div>
          <div className='saving-deal-container'>
            <div className='health-data'>
                {data
                .filter((item) => item.category === "saving_deal")
                .map((item, index) => (
                  <div className='product-deals' key={item._id} onClick={(e)=>savingDealHandle(item._id)}>
                    <img src={`https://tata-1mg-4rty.onrender.com${item.image}`} alt={item.title} />
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>{`रु${item.price}`}</p>
                  </div>
                ))} 
            </div>
          </div>
          <div className='feature-brand-tag'><h3>Trending now</h3></div>
          <div className='saving-deal-container'>
            <div className='health-data'>
                {data
                .filter((item) => item.category === "trending")
                .map((item, index) => (
                  <div className='product-deals' key={index}>
                    <img src={`https://tata-1mg-4rty.onrender.com${item.image}`} alt={item.title} />
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>{`रु${item.price}`}</p>
                  </div>
                ))} 
            </div>
          </div>
          <div className='feature-brand-tag'><h3>Skin care products</h3></div>
          <div className='saving-deal-container'>
            <div className='health-data'>
                {data
                .filter((item) => item.category === "skin_care")
                .map((item, index) => (
                  <div className='product-deals' key={index}>
                    <img src={`https://tata-1mg-4rty.onrender.com${item.image}`} alt={item.title} />
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>{`रु${item.price}`}</p>
                  </div>
                ))} 
            </div>
          </div>
          <div className='feature-brand-tag'><h3>Popular Combo Deals</h3></div>
          <div className='saving-deal-container'>
            <div className='health-data'>
                {data
                .filter((item) => item.category === "combo_deal")
                .map((item, index) => (
                  <div className='product-deals' key={index}>
                    <img src={`https://tata-1mg-4rty.onrender.com${item.image}`} alt={item.title} />
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>{`रु${item.price}`}</p>
                  </div>
                ))} 
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
