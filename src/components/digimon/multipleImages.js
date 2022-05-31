import { Carousel, Image } from "react-bootstrap"

function MultipleImages(props) {

    const data = props.imageData

            return (
                <>
                <Carousel fade>
                      {data?.map((image) => (   
                          <Carousel.Item>
                            <Image                        
                            className="d-block w-100"
                            src={image.image_url}
                            alt={image.id}
                            />   
                            </Carousel.Item>                                          
                      ))}   
                      </Carousel>                                                  
        </>
)
}

export default MultipleImages