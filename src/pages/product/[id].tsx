import { GetStaticPaths, GetStaticProps } from "next";
import Head from 'next/head';
import Image from "next/image";
import { useContext } from 'react';
import Stripe from "stripe";

import { CartShoppingContext } from '../../contexts/CartShoppingContext';

import { stripe } from "../../lib/stripe";

import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

interface ProductProps {
    product: {
        id: string
        name: string
        imageUrl: string
        unitAmount: number
        price: string
        description: string
        defaultPriceId: string
        quantity: number
    }
}

export default function Product({ product }: ProductProps) {
    const { addItem } = useContext(CartShoppingContext);

    const title = `${product.name} | Ignite Shop`

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt="" />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>

                    <span>{product.price}</span>

                    <p>{product.description}</p>

                    <button onClick={() => addItem(product)}>
                        Colocar na sacola
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: { id: 'prod_MQ7KdhgmpkBgWy' }
            }
        ],
        fallback: 'blocking',
    }
}


export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    });

    const price = product.default_price as Stripe.Price;

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                unitAmount: price.unit_amount,
                price: new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(price.unit_amount / 100),
                description: product.description,
                defaultPriceId: price.id,
                quantity: 1,
            }
        },
        revalidate: 60 * 60 * 1 // 1 hours
    }
}
