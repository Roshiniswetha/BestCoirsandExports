import { Carousel } from 'react-carousel-minimal';
import CocoBlock from "../../assets/images/cocopeat-block.jpg";
import Cocos from "../../assets/images/cocos.jpg";
import Pieces from "../../assets/images/pieces.jpg";
import PeatMachine from "../../assets/images/peat-machine.jpg";
import CocoPeatSealed from "../../assets/images/cocopeat-sealed.jpg";
import CoirFibre from "../../assets/images/coir-fibre.jpg";
import CocoPowder from "../../assets/images/Coco-powder.jpg";

export default function Carousell() {
 const data = [
    {
      image: `${CocoBlock}`,
      caption: "Coco Peat Block"
    },
    {
      image: `${Cocos}`,
      caption: "Coco"
    },
    {
      image: `${Pieces}`,
      caption: "Coco Peat Compost"
    },
    {
      image: `${PeatMachine}`,
      caption: "Peat Machine"
    },
    {
      image: `${CocoPeatSealed}`,
      caption: "Coco Peat Sealed"
    },
    {
      image: `${CoirFibre}`,
      caption: "Coir Fibre"
    },
    {
      image: `${CocoPowder}`,
      caption: "Coco Powder"
    },
  ];

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
          <Carousel
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
          />
        </div>
      </div>
    </div>
  );
}
