import {  Button } from "antd";
import * as S from './index.styles'
//redux
import { useDispatch } from "react-redux";
// actions
import {fetchCardAdd} from '../../redux/actions/CardActions'

const CardWidget = (props) => {
  const card = props.card;
  const dispatch = useDispatch();

  const handleCard = (card) => {
    dispatch(fetchCardAdd(card));
  }
  
  return (
    <S.CardStyled key={props.index}>
        <div className="image">
          <img src={card.image} alt="" />
        </div>
        <div className="title">{card.title}</div>
        <div className="free-delivery">
          {card.price > 300 && "Ücretsiz Teslimat"}
        </div>
        <div className="price">{card.price} TL</div>
        <Button type="primary" onClick={() => handleCard(card)}>Sepete Ekle</Button>
    </S.CardStyled>
  );
};

export default CardWidget;
