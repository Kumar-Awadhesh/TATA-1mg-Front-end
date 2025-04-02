import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'


function App() {
  const [showHealth, setHealth] = useState(false);
  const [showVitamin, setVitamin] = useState(false);
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

  const healthHandleEnter = () => {
    setHealth(true);
  }

  const healthHandleLeave = () => {
    setHealth(false);
  }

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
        console.log(setData, "Helath Data");
      })
      .catch((err => console.err("failed to fetch the data", err)))
  },[])

  return (
    <>
      <div className='container'>
        <nav className='navbar'>
          <div className='logo-section'>
            <img className='mgLogo' src="images/tata_1mg_logo.svg" alt="tata_1mg_logo" />
            <h3>MEDICINES</h3>
            <h3>LAB TESTS</h3>
            <h3>CONSULT DOCTORS</h3>
            <h3>CANCER CARE</h3>
            <h3>AYURVEDA</h3>
            <h3>PARNERSHIPS</h3>
            <h3>CARE PLAN</h3>
          </div>
          <div className='login-section'>
            <h4>Login</h4>
            <p>|</p>
            <h4>Sign Up</h4>
          </div>
          <div className='cart-section'>
            <h4>Offers</h4>
            <img src="" alt="" />
            <h4>Need Help?</h4>
          </div>
        </nav>
        <div className='search-section'>
          <div className='location'>
            <div className='map-icon-containe'>
              <img className='map-icon' src="images/map-icon.png" alt="map-icon" />
            </div>
            <select name="locatio" id="location">
              <option value="">TOP CITIES</option>
              <option value="new delhi">New Delhi</option>
              <option value="gurgaon">Gurgaon</option>
              <option value="pune">Pune</option>
              <option value="mumbai">Mumbai</option>
              <option value="bengaluru">Bengaluru</option>
              <option value="kolkata">Kolkata</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="ahmedabad">Ahmedabad</option>
              <option value="chennai">Chennai</option>
              <option value="indore">Indore</option>
              <option value="lucknow">Lucknow</option>
              <option value="jaipur">Jaipur</option>
              <option value="chandigarh">Chandigarh</option>
              <option value="bhopal">Bhopal</option>
              <option value="noida">Noida</option>
              <option value="navi mumbai">Navi Mumbai</option>
              <option value="surat">Surat</option>
              <option value="patna">Patna</option>
              <option value="ludhiana">Ludhiana</option>
              <option value="bhubneshwar">Bhubneshwar</option>
            </select>
            <div className='search-input'>
              <input type="text" placeholder='Search for Medicines and Health Products' className='search' />
              <div className='search-icon-container'>
                <img className='search-icon' src="images/search-icon.png" alt="search-icon" />  
              </div>
            </div>
          </div>
          <div className='quick-order'>
            <p>QUICK BUY! Get up to 25% off on medicines</p>
            <button className='quick-order-btn'>Quick order</button>
          </div>
        </div>
        <div className='product-nodal-container'>
          <div className='product-section'>
            <div>
              <button onMouseOver={healthHandleEnter} onMouseLeave={healthHandleLeave} className='health-btn nodal-btn'>Health Resource Center <b>⌄</b></button>
                {
                showHealth && 
                <div className='products' onMouseOver={healthHandleEnter} onMouseLeave={healthHandleLeave}>
                  <div>
                    <h4>All Diseases</h4>
                    <h4>All Medicines</h4>
                    <h4>Medicines by Therapeutic Class</h4>
                  </div>
                </div>
                }
            </div>
            <div>
                <button onMouseOver={vitaminHandleEnter} onMouseLeave={vitaminHandleLeave} className='vitamin-btn nodal-btn'>Vitamins & Nutrition <b>⌄</b></button>
                  {
                    showVitamin && 
                    <div className='vitamin' onMouseOver={vitaminHandleEnter} onMouseLeave={vitaminHandleLeave}>
                      <div>
                        <h4>Multivitamins</h4>
                        <h4>Kids</h4>
                        <h4>Men</h4>
                        <h4>Women</h4>
                        <h4>Sports</h4>
                        <h4>Vegetarian</h4>
                        <h4>Omega & Fish Oil</h4>
                        <h4>Fish Oil</h4>
                        <h4>Cod Liver Oil</h4>
                        <h4></h4>
                        <h4>Flax Seed Oil</h4>
                        <h4>Calcium</h4>
                        <h4>Minerals</h4>
                        <h4>Iron</h4>
                        <h4>Vitamin B</h4>
                      </div>
                      <div>
                        <h4>Vitamin D</h4>
                        <h4>Vitamin C</h4>
                        <h4>Vitamin A</h4>
                        <h4>Global Supplements</h4>
                        <h4>Now Foods</h4>
                        <h4>Now Foods</h4>
                        <h4>Nordic naturals</h4>
                        <h4>Hair & Skin Supplements</h4>
                        <h4>Specialty Supplements</h4>
                        <h4>Antioxidants</h4>
                        <h4>Glucosamine</h4>
                        <h4>Vitamin K</h4>
                        <h4>Gummies Vitamins</h4>
                      </div>
                    </div>
                  }
              </div>

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
                  <div className='product-deals' key={index}>
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
        <footer className='footer'>
          <div>
            <h3>Stay Healthy with Tata 1mg: Your Favourite Online Pharmacy and Healthcare Platform</h3>
            <h4>We Bring Care to Health.</h4>
            <p>Tata 1mg is India's leading digital healthcare platform. From doctor consultations on chat to online pharmacy and lab tests at 
              home: we have it all covered for you. Having delivered over 25 million orders in 1000+ cities till date, we are on a mission to 
              bring "care" to "health" to give you a flawless healthcare experience.</p>
            <h4>Tata 1mg: Your Favourite Online Pharmacy!</h4>
            <p>Tata 1mg is India's leading online chemist with over 2 lakh medicines available at the best prices. We are your one-stop 
              destination for other healthcare products as well, such as over the counter pharmaceuticals, healthcare devices and homeopathy 
              and ayurveda medicines.</p>
            <p>With Tata 1mg, you can buy medicines online and get them delivered at your doorstep anywhere in India! But, is ordering medicines 
              online a difficult process? Not at all! Simply search for the products you want to buy, add to cart and checkout. Now all you need 
              to do is sit back as we get your order delivered to you.</p>
            <p>In case you need assistance, just give us a call and we will help you complete your order.
                And there is more! At Tata 1mg, you can buy health products and medicines online at best discounts.
                Now, isn't that easy? Why go all the way to the medicine store and wait in line, when you have Tata 1mg Pharmacy at your service.</p>
            <h4>The Feathers in Our Cap</h4>
            <p>At Tata 1mg, our goal is to make healthcare understandable, accessible and affordable in India. We set out on our journey in 2015, 
              and have come a long way since then. Along the way, we have been conferred with prestigious titles like BML Munjal Award for 
              'Business Excellence through Learning and Development', Best Online Pharmacy in India Award and Top 50 venture in The Smart 
              CEO-Startup50 India. We have been selected as the only company from across the globe for SD#3 "Health & Well Being for all" by 
              Unreasonable group, US State Department. In 2019 alone we received three awards including the BMW Simply Unstoppable Award.</p>
            <h4>The Services We Offer</h4>
            <p>Tata 1mg is India's leading digital healthcare platform, where you can buy medicines online with discount. Buy medicine 
              online in Delhi, Mumbai, Bangalore, Hyderabad, Pune, Gurgaon, Noida, Kolkata, Chennai, Ahmedabad, Lucknow and around a 1000 more 
              cities. Besides delivering your online medicine order at your doorstep, we provide accurate, authoritative & trustworthy information 
              on medicines and help people use their medicines effectively and safely.
                We also facilitate lab tests at home. You can avail over 2,000 tests and get tested by 120+ top and verified labs at the best 
                prices. Need to consult a doctor? On our platform, you can talk to over 20 kinds of specialists in just a few clicks.
                Customer centricity is the core of our values. Our team of highly trained and experienced doctors, phlebotomists and pharmacists 
                looks into each order to give you a fulfilling experience.
                We’ve made healthcare accessible to millions by giving them quality care at affordable prices. Customer centricity is the core of 
                our values. Our team of highly trained and experienced doctors, phlebotomists and pharmacists looks into each order to give you a 
                fulfilling experience.
                Visit our online medical store now, and avail online medicine purchase at a discount. Stay Healthy!</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
