import { CartShoppingContainer, CloseButton, Item, Items, PurchaseDetails } from './styles';

interface CartShoppingProps {
    styles: any;
    closeCartShopping: () => void;
}

export function CartShopping({ styles, closeCartShopping }: CartShoppingProps) {
    return (
        <CartShoppingContainer style={styles}>
            <CloseButton
                onClick={closeCartShopping}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.5455 4.4545C19.9848 4.89384 19.9848 5.60616 19.5455 6.0455L6.0455 19.5455C5.60616 19.9848 4.89384 19.9848 4.4545 19.5455C4.01517 19.1062 4.01517 18.3938 4.4545 17.9545L17.9545 4.4545C18.3938 4.01517 19.1062 4.01517 19.5455 4.4545Z" fill="#8D8D99" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.4545 4.4545C4.89384 4.01517 5.60616 4.01517 6.0455 4.4545L19.5455 17.9545C19.9848 18.3938 19.9848 19.1062 19.5455 19.5455C19.1062 19.9848 18.3938 19.9848 17.9545 19.5455L4.4545 6.0455C4.01517 5.60616 4.01517 4.89384 4.4545 4.4545Z" fill="#8D8D99" />
                </svg>
            </CloseButton>

            <h2>Sacola de compras</h2>

            <Items>
                <Item>
                    <div className="image-container" />

                    <div className="info">
                        <div>
                            <span>Camiseta Explorer</span>

                            <strong>R& 79,90</strong>
                        </div>

                        <button>
                            Remover
                        </button>
                    </div>
                </Item>

                <Item>
                    <div className="image-container" />

                    <div className="info">
                        <div>
                            <span>Camiseta Explorer</span>

                            <strong>R& 79,90</strong>
                        </div>

                        <button>
                            Remover
                        </button>
                    </div>
                </Item>

                <Item>
                    <div className="image-container" />

                    <div className="info">
                        <div>
                            <span>Camiseta Explorer</span>

                            <strong>R& 79,90</strong>
                        </div>

                        <button>
                            Remover
                        </button>
                    </div>
                </Item>

                <Item>
                    <div className="image-container" />

                    <div className="info">
                        <div>
                            <span>Camiseta Explorer</span>

                            <strong>R& 79,90</strong>
                        </div>

                        <button>
                            Remover
                        </button>
                    </div>
                </Item>

                <Item>
                    <div className="image-container" />

                    <div className="info">
                        <div>
                            <span>Camiseta Explorer</span>

                            <strong>R& 79,90</strong>
                        </div>

                        <button>
                            Remover
                        </button>
                    </div>
                </Item>
            </Items>

            <PurchaseDetails>
                <div>
                    <p>Quantidade</p>

                    <span>3 items</span>
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