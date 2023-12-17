// import { Carousel } from 'react-carousel-minimal';
import { Carousel, Image } from "antd";
import { CoconutField, CocoBg, Pieces, GrowBags, CoirBlocks, HangingCoir, CoirFarm, Coconut} from '../../assets/images';

const imageStyle = {
  flex: 1,
  width: '100%',
  height: '100%',
  resizeMode: 'center',
  }

  const carouselData = [
    {
      image: `${CoconutField}`,
      caption: "Coco Farm"
    },
    // {
    //   image: `${Coconut}`,
    //   caption: "Coconut"
    // },
    {
      image: `${Pieces}`,
      caption: "Coir Blocks"
    },
    {
      image: `${GrowBags}`,
      caption: "Grow Bags"
    },
    {
      image: `${CoirBlocks}`,
      caption: "Coir Blocks"
    },
    // {
    //   image: `${HangingCoir}`,
    //   caption: "Coir Fibre"
    // },
    {
      image: `${CoirFarm}`,
      caption: "Coco Processing"
    },
  ];
  
export default function Carousell() {

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel autoplay >
        {carouselData.map((data) => (
          <div>
            <div>
            <Image
              style={imageStyle}
              src={data.image}
            />
            </div>
          </div>
        ))}
      </Carousel>
          {/* <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}
