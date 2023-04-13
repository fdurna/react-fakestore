import styled from 'styled-components';

export const AdvertisingStyled = styled.div`
    margin-top: 30px;
    .box {
        display: flex;
        align-items: center;
        .left {
            img {
                max-width: 150px;
            }
        }
        .right {
            margin-left: 20px;
            .title {
                h6 {
                    font-size: 15px;
                    margin-bottom: 10px;
                }
            }
            .ant-btn {
            }
        }
    }
`