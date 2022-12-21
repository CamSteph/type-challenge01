import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background .5s ease;
  font-weight: 500;
  display: flex;
  align-items: center;
  font-size: ${props => {
    switch(props.btnSize) {
      case 'sm':
        return '12px';
      case 'md':
        return '16px';
      case 'lg':
        return '20px';
      case 'xlg':
        return '24px';
      default:
        return '28px';
    }
  }};
  padding: ${props => {
    switch(props.btnSize) {
      case 'sm':
        return '5px 10px';
      case 'md':
        return '10px 20px';
      case 'lg':
        return '15px 30px';
      case 'xlg':
        return '20px 40px';
      default:
        return '5px 10px';
    }
  }};
  background-color: ${props => {
    switch(props.btnAction) {
      case 'primary':
        return '#1d8dd8';
      case 'success':
        return '#3bb14e';
      case 'warning':
        return '#d8b61d';
      case 'danger':
        return '#d8291d';
      case 'dark':
        return '#121213';
      default:
        return '#1d8dd8';
    }
  }};
  ${props => props.btnInverted ? 'background: transparent' : ''};
  ${props => {
      if(props.btnInverted){
        switch(props.btnAction) {
          case 'primary':
            return 'color: #1d8dd8';
          case 'success':
            return 'color: #3bb14e';
          case 'warning':
            return 'color: #d8b61d';
          case 'danger':
            return 'color: #d8291d';
          case 'dark':
            return 'color: #121213';
          default:
            return 'color: #1d8dd8';
        }
      }
  }};
  ${props => {
      if(props.btnInverted){
      switch(props.btnAction) {
        case 'primary':
          return 'border: 1px solid #1d8dd8';
        case 'success':
          return 'border: 1px solid #3bb14e';
        case 'warning':
          return 'border: 1px solid #d8b61d';
        case 'danger':
          return 'border: 1px solid #d8291d';
        case 'dark':
          return 'border: 1px solid #121213';
        default:
          return 'border: 1px solid #1d8dd8';
      }
    }
  }};

  &:hover {
    background-color: ${props => {
      switch(props.btnAction) {
        case 'primary':
          return '#1674b3';
        case 'success':
          return '#288337';
        case 'warning':
          return '#ac9015';
        case 'danger':
          return '#a31d13';
        case 'dark':
          return '#000000';
        default:
          return '#1674b3';
      }
    }};

  ${props => {
      if(props.btnInverted){
        return 'color: #fff;'
      }
    }};
  }

  .btn-text {
    margin-right: .25em;
    display: flex;
    align-items: center;

    .btn-icon {
      margin-left: .25em;
    }
  }
`;

const Button = ({
  btnText, 
  btnSize, 
  btnAction, 
  btnInverted,
  btnIcon,
  btnOnClick,
}) => {
  return (
    <BtnContainer
      btnSize={btnSize}
      btnAction={btnAction}
      btnInverted={btnInverted}
      onClick={btnOnClick}
    >
      <span className='btn-text'>{btnText}<span className='btn-icon'>{btnIcon}</span></span>
    </BtnContainer>
  );
};

export default Button;