import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';

import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import Button from 'common/components/Button';

import {SectionHeader} from '../../PricingPage/pricing.style';
import SectionWrapper, { CarouselWrapper } from './testimonial.style';

import { testimonial } from 'common/data/appData';

// ANIMATION IMPORTS
import NextImage from 'common/components/NextImage';
import GlideCarousel from 'common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import Rating from 'common/components/Rating';

const PricingTestimonials = () => {
  const { slogan, title, reviews } = testimonial;
  const glideOptions = {
    type: 'carousel',
    gap: 0,
    autoplay: 5000,
    perView: 2.5,
    animationDuration: 1000,
    breakpoints: {
      991: {
        perView: 1,
      },
    },
  };
  return (
    <SectionWrapper id="testimonials_section">
          <SectionHeader>
          <Fade up>
            <Heading className="slogan" as="h5" content={slogan} />
            <Heading content={title} />
          </Fade>         
        </SectionHeader>

        <CarouselWrapper>
          <Fade up delay={100}>
            <GlideCarousel options={glideOptions} 
                nextButton={<Button icon={<i className="flaticon-next" />} aria-label="Next" variant="fab" />}
                prevButton={ <Button icon={<i className="flaticon-left-arrow" />} aria-label="Prev" variant="fab" />}
            >
            <Fragment>
            {reviews.map((item) => (
                <GlideSlide key={`testimonial--key${item.id}`}>
                    <div className="review-card">
                        <div className="review-card-header">
                            <div className="image">
                                <img src={item.avatar} alt="Client Image" />
                            </div>
                            <div className="reviewer-info">
                                <Text content={item.review} />
                                <Rating rating={item.review} />
                            </div>
                        </div>
                        <div className="review-card-content">
                        <Heading as="h4" content={item.name} />
                        <Heading as="h5" content={item.designation} />
                        <Text as="p" content={item.description} />
                        </div>                        
                    </div>
                </GlideSlide>
            ))}
            </Fragment>
            </GlideCarousel>
          </Fade>
        </CarouselWrapper>    
    </SectionWrapper>
  );
};

export default PricingTestimonials;
