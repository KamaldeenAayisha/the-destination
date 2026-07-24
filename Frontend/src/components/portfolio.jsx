import "../css/Portfolio.css";

function Portfolio(){

    const videos = [

        "/videos/wedding.mp4",
        "/videos/reels.mp4",
        "/videos/content.mp4",
        "/videos/editing.mp4"

    ];


    return(

        <section className="portfolio">


            {
                videos.map((video,index)=>(

                    <div 
                    className="portfolio-video-section"
                    key={index}
                    >

                        <video
                            src={video}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />

                    </div>

                ))
            }


        </section>

    );

}


export default Portfolio;