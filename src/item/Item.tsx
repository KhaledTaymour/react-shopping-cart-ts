import { Button } from "@material-ui/core";
// Types
import { CartItemType } from "../App";
// styles
import { Wrapper } from "./Item.styles";

type PropsType = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<PropsType> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.description} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;
