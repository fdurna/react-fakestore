import * as S from "./index.styles";
// comp
import Header from "../Header";

const Layout = ({children}) => {
  return (
    <S.LayoutStyled>
      <Header />
     {children}
    </S.LayoutStyled>
  );
};

export default Layout;
