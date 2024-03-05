import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import sliderImg from '../images/girl.png'
import Image from 'next/image';

const CarouselComponent = () => {
  const items = [
    {
      image: sliderImg
    },
    {
      image: sliderImg
    },
    {
      image: sliderImg
    },
    {
      image: sliderImg
    }
    
  ];

  return (
    <Carousel  className=" w-[100%]" 
        autoPlay
        showArrows={true}
        showStatus={true}
        width={960}
        stopOnHover={false}
        interval={1000}
        >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <>
      <Image src={props.item.image} className='mx-auto'  alt={props.item.name} />

    </>
  );
}

export default CarouselComponent;