import "../css/WhyChooseUs.css";


function WhyChooseUs() {

    const stats = [
        {
            number: "100+",
            title: "Videos Created"
        },
        {
            number: "4K",
            title: "Cinematic Quality"
        },
        {
            number: "24/7",
            title: "Creative Support"
        }
    ];


    return (

        <section className="why-section">


            <div className="why-content">


                <span className="why-tag">
                    WHY THE DESTINATION
                </span>


                <h2>
                    We don't just create videos.
                    <br />
                    We create memories.
                </h2>


                <p>
                    Every story deserves to be captured beautifully.
                    We transform ideas, emotions and moments into
                    cinematic experiences that connect with people.
                </p>


            </div>



            <div className="stats-container">


                {
                    stats.map((item,index)=>(

                        <div 
                        className="stat-item"
                        key={index}
                        >

                            <h3>
                                {item.number}
                            </h3>


                            <p>
                                {item.title}
                            </p>


                        </div>

                    ))
                }


            </div>

            



        </section>

        

    );

}


export default WhyChooseUs;