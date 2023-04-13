import * as S from "./index.styles";
// antd
import { Button } from "antd";
// redux
import { useDispatch } from "react-redux";
import { fetchCategorys, fetchCards } from "../../redux/actions/CardActions";

const CategorysWidget = () => {
  const categoryResponse = [
    {
      title: "Tüm Kategoriler",
      link: "#",
      type: "primary",
      categoryName: "/"
    },
    {
      title: "Elektronik",
      link: "#",
      categoryName: "electronics"
    },
    {
      title: "Takı & Toka",
      link: "/#",
      categoryName: "jewelery"
    },
    {
      title: "Erkek Giyim",
      link: "/#",
      categoryName: "men's clothing"
    },
    {
      title: "Bayan Giyim",
      link: "/#",
      categoryName: "women's clothing"
    },
  ];

  const dispatch = useDispatch();

  const handleCategory = (category) => {
    if(category !== "/") {
      dispatch(fetchCategorys(category))
    } else {
      dispatch(fetchCards())
    }
  }

  return (
    <S.CategoryList>
      <div className="container">
        <div className="buttons">
          {categoryResponse.map((item, index) => (
            <Button
              href={item.link}
              key={index}
              type={item.type}
              onClick={() => handleCategory(item.categoryName)}
            >
              {item.title}
            </Button>
          ))}
        </div>
      </div>
    </S.CategoryList>
  );
};

export default CategorysWidget;
