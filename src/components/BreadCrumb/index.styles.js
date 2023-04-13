import styled from 'styled-components'

export const BreadCrumb = styled.div`
    background-color: #ebebeb;
    padding: 20px 0;
    .title {
        h1 {
            font-size: 24px;
        }
    }
    .ant-breadcrumb {
        ol {
            li {
                span {
                    a {
                        color: #505050;
                    }
                }
            }
        }
    }
`