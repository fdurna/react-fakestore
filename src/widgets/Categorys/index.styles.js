import styled from 'styled-components';


export const CategoryList = styled.div`
    margin: 30px 0;
    .buttons {
        display: flex;
        flex-wrap: wrap;
        .ant-btn {
            margin-right: 15px;
            margin-bottom: 15px;
            width: 100%;
            flex: 12%;
            &:nth-child(7) {
                margin-right: 0;
            }
        }
    }
`