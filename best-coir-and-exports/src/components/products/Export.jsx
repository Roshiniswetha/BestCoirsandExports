import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Logistics, ContainerExports, ExportsContainers,Cargo, CargoContainer, Ship } from '../../assets/images';

export default function Exports() {
  return (
    <div className="exports">
    <ImageList sx={{ width: '100%', height: '100%' }} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: `${Logistics}`,
    title: 'Logistics',
  },
  {
    img: `${ContainerExports}`,
    title: 'Exports',
  },
  {
    img: `${ExportsContainers}`,
    title: 'Container',
  },
  {
    img: `${Cargo}`,
    title: 'Cargo',
  },
  {
    img: `${CargoContainer}`,
    title: 'Cargo Containers',
  },
  {
    img: `${Ship}`,
    title: 'Cargo Ship',
  },
];
