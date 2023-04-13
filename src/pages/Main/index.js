import { useEffect } from "react";
import * as S from "./index.styles";
// antd
import { Row, Col } from "antd";
// comp
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/BreadCrumb";
// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../../redux/actions/CardActions";
// widgets
import CategorysWidget from "../../widgets/Categorys";
import CardWidget from "../../widgets/Card";
import AdvertisingWidget from "../../widgets/Advertising";

const Main = () => {
  const dispatch = useDispatch();
  const { cards, loading } = useSelector((state) => state.CardReducers);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <S.MainStyled>
      <Breadcrumb />
      <div className="container">
        <CategorysWidget />
        {loading ? (
          <div>loading</div>
        ) : (
          <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
            {cards.map((card, index) => (
              <Col span={6} key={index}>
                <CardWidget card={card} />
              </Col>
            ))}
          </Row>
        )}
        <AdvertisingWidget />
      </div>
      <Footer />
    </S.MainStyled>
  );
};

export default Main;
