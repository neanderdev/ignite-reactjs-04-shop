import Image from 'next/image';
import { Minus, Plus, TrashSimple, X } from 'phosphor-react';
import { useContext } from 'react';

import { CartShoppingContext } from '../../contexts/CartShoppingContext';

import { Actions, CartShoppingContainer, CloseButton, Item, Items, PurchaseDetails } from './styles';

interface CartShoppingProps {
    styles: any;
    closeCartShopping: () => void;
}

export function CartShopping({ styles, closeCartShopping }: CartShoppingProps) {
    const { cartShopping, removeItem } = useContext(CartShoppingContext)

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
                                            <button>
                                                <Minus weight="bold" color="white" size={18} />
                                            </button>

                                            <span>{product.quantity}</span>

                                            <button>
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

                    <span>R$ 270,00</span>
                </div>

                <button>
                    Finalizar compra
                </button>
            </PurchaseDetails>
        </CartShoppingContainer>
    )
}