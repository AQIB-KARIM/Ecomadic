import React from 'react'
import Slider from "react-slick";
import { Box, Image, Text } from '@chakra-ui/react';
import './ImageSlider.css'
import { imageData } from './ImageSliderData';
import { Container } from 'react-bootstrap';

const ImageSlider = () => {

  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <React.Fragment>
      <Container>
        <Slider {...settings}>

          {imageData.map((data) => {
            const { id, img, imageAlt } = data
            return (
              <Box key={id} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={img} alt={imageAlt} />

                <Box p='6'>
                  <Box display='flex' alignItems='baseline'>
                    <Box
                      display="flex"
                      color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='xs'
                      textTransform='uppercase'
                     
                    >
                      <Text fontWeight={600} color={'gray.500'} height={6} padding={"0px 5px"} size="md" textColor={"white"} bgColor={"blue.800"} margin={2}>
                        4.8
                      </Text>
                      <Text fontWeight={500} fontSize={13} color={'gray.500'} size="sm" margin={2} mb={4}>
                        (206 Reviews)
                      </Text>
                    </Box>
                  </Box>

                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                  >
                    Hotel Name
                  </Box>

                  <Box>
                    $54,0000
                    <Box as='span' color='gray.600' fontSize='sm'>
                      / wk
                    </Box>
                  </Box>
                </Box>
              </Box>

            )
          })}

        </Slider>
      </Container>
    </React.Fragment>
  )
}

export default ImageSlider