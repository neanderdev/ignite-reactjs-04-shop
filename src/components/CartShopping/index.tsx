import axios from 'axios';
import Image from 'next/image';
import { CircleNotch, Minus, Plus, TrashSimple, X } from 'phosphor-react';
import { useContext, useState } from 'react';

import { CartShoppingContext } from '../../contexts/CartShoppingContext';

import { Actions, CartShoppingContainer, CloseButton, Item, Items, PurchaseDetails } from './styles';

interface CartShoppingProps {
    styles: any;
    closeCartShopping: () => void;
}

export function CartShopping({ styles, closeCartShopping }: CartShoppingProps) {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    const { amount, cartShopping, removeItem, decreaseItemQuantity, increaseItemQuantity } = useContext(CartShoppingContext)

    async function handleBuyProduct() {
        try {
            setIsCreatingCheckoutSession(true)

            const orderList = cartShopping.map(product => {
                return {
                    price: product.defaultPriceId,
                    quantity: product.quantity,
                }
            })

            const response = await axios.post('/api/checkout', { orderList })

            const { checkoutUrl } = response.data

            window.location.href = checkoutUrl
        } catch (err) {
            // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)

            setIsCreatingCheckoutSession(false)

            alert('Falha ao redirecionar ao checkout!')
        }
    }

    return (
        <CartShoppingContainer style={styles}>
            <CloseButton
                onClick={closeCartShopping}
            >
                <X weight="bold" size={24} />
            </CloseButton>

            <h2>Sacola de compras</h2>

            <Items>
                {
                    cartShopping.map(product => {
                        return (
                            <Item key={product.id}>
                                <div className="image-container">
                                    <Image src={product.imageUrl} width={100} height={100} alt="" />
                                </div>

                                <div className="info">
                                    <div>
                                        <span>{product.name}</span>

                                        <strong>{product.price}</strong>
                                    </div>

                                    <Actions>
                                        <div className="quantity">
                                            <button onClick={() => decreaseItemQuantity(product)}>
                                                <Minus weight="bold" color="white" size={18} />
                                            </button>

                                            <span>{product.quantity}</span>

                                            <button onClick={() => increaseItemQuantity(product)}>
                                                <Plus weight="bold" color="white" size={18} />
                                            </button>
                                        </div>

                                        <button
                                            className="remove"
                                            onClick={() => removeItem(product)}
                                        >
                                            <TrashSimple weight="bold" color="white" size={18} />

                                            Remover
                                        </button>
                                    </Actions>
                                </div>
                            </Item>
                        )
                    })
                }
            </Items>

            <PurchaseDetails>
                <div>
                    <p>Quantidade</p>

                    <span>{cartShopping.length} items</span>
                </div>

                <div>
                    <p>Valor total</p>

                    <span>{amount}</span>
                </div>

                <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession} >
                    {
                        isCreatingCheckoutSession
                            ?
                            <CircleNotch className="loading" weight="bold" />
                            :
                            'Finalizar compra'
                    }
                </button>
            </PurchaseDetails>
        </CartShoppingContainer>
    )
}