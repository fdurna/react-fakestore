import { Button } from "antd";
import {BoxInfoStyled} from "./index.styles";

const BoxInfo = ({ image, buttonText, title }) => {
  return (
    <BoxInfoStyled>
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
    </BoxInfoStyled>
  );
};

export default BoxInfo;
