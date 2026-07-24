import { useEffect, useState } from "react";
import API from "../api/axiosConfig";
import "../css/Services.css";

import reels from "../assets/images/youtube.jpg";
import content from "../assets/images/reels.jpg";
import editing from "../assets/images/editing.jpg";
import wedding from "../assets/images/wedding.jpg";


function Services() {

    const [services, setServices] = useState([]);


    const serviceImages = [
        reels,
        content,
        editing,
        wedding
    ];


    useEffect(() => {

        API.get("/services/all")
            .then((response) => {
                setServices(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);



    return (

        <section className="services">

            <h2>Our Services</h2>

            <div className="service-container">

                {
                    services.map((service,index)=>(

                        <div 
                            className="service-card"
                            key={service.serviceId}
                        >

                            <img 
                                src={serviceImages[index]}
                                alt={service.serviceName}
                            />


                            <div className="service-content">

                                <h3>
                                    {service.serviceName}
                                </h3>


                                <p>
                                    {service.description}
                                </p>


                                <h4>
                                    Starting ₹{service.price}
                                </h4>


                                <button>
                                    Book Now
                                </button>

                            </div>


                        </div>

                    ))
                }

            </div>

        </section>

    );

}


export default Services;