import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import '../App.css';


const ProductInfo = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [params] = useSearchParams();
    const productId = params.get('productId')


    const products = async() => {
        try {
            const productData = await axios.get("https://tata-1mg-4rty.onrender.com/product/getProduct");
            setProduct(productData.data.products);
            setLoading(false);
            console.log(productData.data.products);
        } 
        catch (err) {
            console.log(err.message);
            setLoading(false);
        }

    }

    useEffect(()=> {
        products();
    },[]);


    return(
        loading ? <h2>Loading...</h2> : (
        <> 
            <main className="container">
                {
                    product
                    .filter((data)=> data._id === productId)
                    .map((data, index)=> (
                        <div className="productInfo-container" key={data._id}>
                            <div>
                                <img src={`https://tata-1mg-4rty.onrender.com${data.image}`} alt={`${data.title}`} />
                            </div>
                            <div>
                                <h2>{data.title} </h2> <br />
                                <b>{data.description}</b> <br />
                            </div>
                            <div>
                                <h2>रु {data.price}</h2>
                                <p>Inclusive of all taxes</p>
                                <select className="cart-option" id="">
                                    <option value="1">1 Bottle</option>
                                    <option value="2">2 Bottle</option>
                                    <option value="3">3 Bottle</option>
                                    <option value="4">4 Bottle</option>
                                    <option value="5">5 Bottle</option>
                                    <option value="6">6 Bottle</option>
                                    <option value="7">7 Bottle</option>
                                    <option value="8">8 Bottle</option>
                                    <option value="9">9 Bottle</option>
                                    <option value="10">10 Bottle</option>
                                </select>
                                <button className="add-cart">Add to cart</button>
                                <p>
                                    The price displayed is the MRP (inclusive of applicable taxes). 
                                    Any additional fee (such as shipping fee, handling and/or platform fee etc.) 
                                    will be clearly disclosed before you complete your purchase.
                                </p>
                            </div>
                        </div>
                    ))
                }
            </main>
        </>
        )
    )
}

export default ProductInfo;