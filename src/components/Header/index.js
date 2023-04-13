import React, { useEffect, useState } from "react";
import * as S from "./index.styles";
import { Input, Button, Progress, Dropdown, Space } from "antd";
// redux
import { useSelector, useDispatch } from "react-redux";
// actions
import { searchCards } from "../../redux/actions/CardActions";

const { Search } = Input;

const Header = () => {
  const dispatch = useDispatch();
  const { localStorageCard } = useSelector((state) => state.CardReducers);
  const [item, setItem] = useState(0);
  const [percent, setPercent] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  useEffect(() => {
    const getItem = JSON.parse(localStorage.getItem("cart"));
    setItem(getItem);
    let number = 0;
    getItem && 
    getItem.forEach((element) => {
      number += element.price;
      setTotalPrice(number);
    });
    if (totalPrice > 500) {
      setPercent(100);
    } else {
      const x = ~~totalPrice;
      setPercent(x / 5);
    }
  }, [localStorageCard, totalPrice]);

  if (totalPrice < 500) {
    var price = `${500 - totalPrice} TL ürün daha ekleyin kargo bedava`;
  } else {
    var price = `Kargo Bedava` ;
  }


  useEffect(() => {
    dispatch(searchCards(search));
  }, [dispatch, search]);

  return (
    <S.HeaderStyled>
      <div className="container">
        <div className="logo-search-basket">
          <div className="logo">logo</div>
          <div className="search">
            <Search
              placeholder="input search text"
              allowClear
              onChange={onSearch}
              style={{
                width: 304,
              }}
            />
          </div>
          <div className="basket">
            <Dropdown
              getPopupContainer={(trigger) => {
                return trigger;
              }}
              dropdownRender={() => (
                <div>
                  <Space>
                    <Button type="primary">
                      {price}
                    </Button>
                    <Progress percent={percent}  max={500} />
                  </Space>
                </div>
              )}
            >
              <a href="/">
                <Space>Sepetim</Space>
                {
                  item &&
                  <span className="number">{item.length}</span>
                }
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </S.HeaderStyled>
  );
};

export default Header;
