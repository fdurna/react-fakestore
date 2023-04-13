// antd
import { Row, Col } from "antd";
// comp
import Advertising from '../../components/Advertising'
const AdvertisingWidget = () => {
    return(
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Advertising
              image="https://www.incimages.com/uploaded_files/image/1920x1080/getty_168325476_349217.jpg"
              buttonText="Detaylı Bilgi"
              title="75 TL Üzerine Teslimat Ücreti Bizden"
            />
          </Col>
          <Col span={8}>
            <Advertising
              image="https://www.incimages.com/uploaded_files/image/1920x1080/getty_168325476_349217.jpg"
              buttonText="Detaylı Bilgi"
              title="Hediye Kategorisi için Sepette %15 İndirim"
            />
          </Col>
          <Col span={8}>
            <Advertising
              image="https://www.incimages.com/uploaded_files/image/1920x1080/getty_168325476_349217.jpg"
              buttonText="Detaylı Bilgi"
              title="Kırtasiye Kategorisi için Sepette %15 İndirim"
            />
          </Col>
        </Row>
    )
}

export default AdvertisingWidget;