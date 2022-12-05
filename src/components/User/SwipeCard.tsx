import DidCard from '@components/Did/DidCard';
import * as React from 'react';
import Carousel from 'react-material-ui-carousel';

function SwipeCard() {
  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ];

  const carouselProps = {
    indicatorContainerProps: {
      className: 'absolute bottom-[5px] z-[2]',
    },
    activeIndicatorIconButtonProps: {
      className: 'text-fSelect',
    },
  };
  return (
    <Carousel
      className="h-[120px]"
      {...carouselProps}
      duration={800}
      animation="slide"
      autoPlay={false}
      cycleNavigation={false}
    >
      {items.map((item, i) => (
        <DidCard />
      ))}
    </Carousel>
  );
}

export default SwipeCard;
