import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 20px 0;
  .logo-search-basket {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
    }
    .search {
    }
    .basket {
        position: relative;
        .ant-dropdown {
          .ant-space {
            width: 100%;
            padding: 12px 15px;
            background-color: #f54257;
            border-radius:6px;
            display: flex;
            flex-direction: column;
            .ant-space-item {
              width: 100%;
              .ant-btn {
                background-color: transparent;
                color: white;
                box-shadow: none;
                font-size: 13px;
              }
            
            }
          }
        }
      .ant-dropdown-trigger {
        > .ant-space {
          background-color: #1677ff;
          color: white;
          text-decaration: none;
          gap: 0px !important;
          padding: 10px 20px;
          border-radius: 20px;
          .ant-space-item {
            text-decoration: none;
            .anticon.anticon-down {
              display: none;
            }
          }
        }
        .number {
            position:absolute;
            top: -8px;
            right: -4px;
            background-color: #242424;
            border-radius: 100%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: white;
        }
      }
    }
  }
`;
