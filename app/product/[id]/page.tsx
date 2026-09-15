import React from 'react';
import { PRODUCTS } from '@/data/products';
import ProductDetailView from './ProductDetailView';

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  return <ProductDetailView id={params.id} />;
}
