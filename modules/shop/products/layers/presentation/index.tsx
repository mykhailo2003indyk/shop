import React from 'react';
//context
import { ProductsBLContext } from '@md-modules/shop/products/layers/businnes';
import { ProductsAPIContext } from '@md-modules/shop/products/layers/api/products';
// components
import Slider from '@md-ui/slider/main';
import SimpleVideoPlayer from '@md-ui/video-player';
import { ContentLoader } from '@md-ui/loaders/content-loader';
import ProductsCard from '@md-modules/shop/products/components/card';
// views
import { ProductsContainer, SliderWrapper, Wrapper } from './views';

const ProductsPresentation = () => {
  const { productsList } = React.useContext(ProductsBLContext);
  const { isLoading } = React.useContext(ProductsAPIContext);

  // @ts-ignore
  const productsListComponents = productsList.map((element) => <ProductsCard key={element.id} {...element} />);

  return (
    <ContentLoader isLoading={isLoading}>
      <Wrapper>
        <SimpleVideoPlayer video='https://c1.poddev.xyz/companies/00u4eau73miMyxgBI5d7/video/1653415663536-YLkSX6VPkCzkab8HNI64BhHKzU8FAk8BIX6Qg1DPLJClfAiKPf' />

        <SliderWrapper>
          <Slider items={productsListComponents} />
        </SliderWrapper>

        <ProductsContainer>{productsListComponents}</ProductsContainer>
      </Wrapper>
    </ContentLoader>
  );
};

export default ProductsPresentation;
