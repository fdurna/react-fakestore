import * as S from "./index.styles";
import { Breadcrumb } from "antd";

const BreadCrumb = () => {
  return (
    <S.BreadCrumb>
    <div className="container">
      <div className="breadcrumb">
        <div className="title">
          <h1>Kategoriler</h1>
        </div>
      </div>
      <Breadcrumb>
        <Breadcrumb.Item>Market</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/">Istanbul</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/">Kategori</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
    </S.BreadCrumb>
  );
};

export default BreadCrumb;
