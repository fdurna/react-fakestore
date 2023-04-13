import {Card} from 'antd'
import styled from "styled-components";

export const CardStyled = styled(Card)`
    &.ant-card {
        .ant-card-body {
            .image {
                text-align:center;
                img {
                    max-width: 200px;
                    height: 150px;
                }
            }
            .title {
                margin-top: 12px;
                color:black;
                font-size:14px;
                font-weight: bold;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .free-delivery {
                margin-top: 12px;
                color: green;
                font-weight: bold;
            }
            .price {
                margin: 10px 0;
                font-weight: 600;
            }
            .button {
            }
        }
    }
`