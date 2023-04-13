import { Button } from "antd";
import {AdvertisingStyled} from "./index.styles";

const Advertising = ({ image, buttonText, title }) => {
  return (
    <AdvertisingStyled>
      <div className="box">
        <div className="left">
          <img alt="" src={image} />
        </div>
        <div className="right">
          <div className="title">
            <h6>{title}</h6>
          </div>
          <Button>{buttonText}</Button>
        </div>
      </div>
    </AdvertisingStyled>
  );
};

export default Advertising;
