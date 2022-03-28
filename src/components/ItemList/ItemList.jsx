import Item from "../Items/Item";

export default function ItemList({ product }) {

    return (
        <>{product && product.map(item => <Item items={item} key={item.id} />)}</>
    )
}