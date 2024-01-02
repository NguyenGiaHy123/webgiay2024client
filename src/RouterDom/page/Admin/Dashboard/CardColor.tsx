import styled from "@emotion/styled";
import { Box } from "@mui/material";

import "../Dashboard/DashBoard.css"
import React from 'react'

type Props = {
    background:string
    title:string
    titleresult:string
    icon:string
}

const CardColor = ({background,title,titleresult,icon}: Props) => {
    const CardStyle=styled(Box)({
        borderRadius: '1rem',
        padding: '1rem',
        border:"solid 0.1px #80808059",
        backgroundColor:`${background}`,
        boxShadow: "0px 10px 30px rgba(100, 99, 99, 0.392)"
       
        
    })
  
  return (
   <>
   <CardStyle>
         <p className="cardSastastic" style={{color:"white"}}>{title}</p>

      <span className="custome_width_image mt-6">
        <div className="content_image">
          <img width={"50px"} height={"50px"}   src={icon?icon:""}/>
        </div><p className="text-md mt-3 shadow-sm" style={{color:"white"}}>{titleresult}</p></span>  
   </CardStyle>
   </>
  )
}

export default CardColor