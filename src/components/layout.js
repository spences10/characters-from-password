import React from 'react'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'

const AppStyles = styled.main`
  position: relative;
  min-width: 300px;
  max-width: 700px;
  margin: 0 auto;
  padding: 1rem;
  input,
  select,
  button {
    outline: none;
    &:focus {
      box-shadow: ${({ theme }) => theme.boxShadow.outline};
    }
  }
  fieldset {
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing[3]};
    select {
      margin-left: ${({ theme }) => theme.spacing['4']};
    }
  }

  hr {
    margin: 60px 0;
    opacity: 0.5;
    color: ${({ theme }) => theme.colours.grey[300]};
  }
  input {
    text-align: center;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    border-style: none;
    border: solid 1px ${({ theme }) => theme.colours.grey[500]};
    padding: ${({ theme }) => theme.spacing[3]};
    ${down('sm')} {
      font-size: ${({ theme }) => theme.fontSize['1xl']};
      margin-top: ${({ theme }) => theme.spacing[2]};
      width: 100%;
    }
    ${up('md')} {
      font-size: ${({ theme }) => theme.fontSize['2xl']};
      margin-top: ${({ theme }) => theme.spacing[4]};
      width: 100%;
    }
    ${up('lg')} {
      font-size: ${({ theme }) => theme.fontSize['3xl']};
      margin-top: ${({ theme }) => theme.spacing[8]};
      width: 100%;
    }
    ${up('xl')} {
      font-size: ${({ theme }) => theme.fontSize['4xl']};
      margin-top: ${({ theme }) => theme.spacing[16]};
      margin-left: -${({ theme }) => theme.spacing[64]};
      margin-right: -${({ theme }) => theme.spacing[64]};
    }
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.base};
    margin-top: ${({ theme }) => theme.spacing[3]};
    strong {
      font-weight: bold;
    }
    em {
      font-style: italic;
    }
    img {
      width: 100%;
    }
    word-break: break-word;
  }
  ul {
    margin-top: 30px;
    margin-top: ${({ theme }) => theme.spacing[3]};
    li {
      list-style-type: disc;
      margin-left: ${({ theme }) => theme.spacing['8']};
      p {
        margin-top: 10px;
      }
    }
  }
  ${down('sm')} {
    /* background-color: seagreen; */
  }
  ${up('md')} {
    /* background-color: dodgerblue; */
  }
  ${up('lg')} {
    /* background-color: rebeccapurple; */
  }
  ${up('xl')} {
    /* background-color: hotpink; */
  }
`

export const Layout = ({ children }) => {
  return <AppStyles>{children}</AppStyles>
}
