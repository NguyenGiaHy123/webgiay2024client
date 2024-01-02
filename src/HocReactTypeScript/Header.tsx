import React from 'react';

interface HeaderProps{
    title:String;
    content:String
}
const Header:React.FC<HeaderProps> = ({title, content}) => {
    return  (
      <div>
        <label htmlFor="search">{title}</label>
       
      </div>
    )
  }

  export default Header;