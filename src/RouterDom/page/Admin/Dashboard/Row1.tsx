import React, { useContext, useMemo } from 'react'
import DashboardBox from './DashboardBox'
import {ResponsiveContainer,Line,LineChart,Bar,Legend,BarChart,AreaChart,CartesianGrid,XAxis,YAxis,Tooltip,Area } from 'recharts'
import { useTheme } from '@emotion/react';
import BoxHeader from './BoxHeader';
import { Box, useMediaQuery } from '@mui/material';
import CardColor from './CardColor';

type Props = {}
  const  datalinechat= [
    {
      name: 'Page A',
      DoanhThu: 4000,
      LoiNhuan: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      DoanhThu: 3000,
      LoiNhuan: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      DoanhThu: 2000,
      LoiNhuan: 9800,
      amt: 2290,
    },
   
  ];


  const datapiechat = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


const Row1 = (props: Props) => {
  // const conTextUser=useContext(useContext);

  const mediumscreen=useMediaQuery("(min-width:1200px)");

  return (
    <>
      <DashboardBox sx={{ gridArea: "a" }}
      >

        <Box display={"grid"} width={"100%"} height={"100%"}
        justifySelf={"center"}
        
        justifyContent={"center"}
         gap={"1.5rem"}
         sx={mediumscreen?{
          gridTemplateColumns:"repeat(3,1fr)",
          gridAutoRows:"140px",
        
      
         }:{
          gridTemplateColumns:"repeat(2,1fr)",
          gridAutoRows:"140px",

         }}
        >
     <CardColor background="#007aff" title='Tổng số người online'titleresult="Có 40 user " icon='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeUl9IZDN97pBQNgeunx6dD1df-4g7vkPFw&usqp=CAU'/>

     <CardColor background="#fec007" title='Tổng số người truy cập'titleresult="Có 539 user " icon='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDVG4Giyw1u8z6eylupI0BNuDzd59FybRXjA&usqp=CAU'/>

     
     <CardColor background="#dc3546" title='Tổng số Tour đặt 'titleresult="Có 397 Tour " icon ="data:image/jpeg;base64,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"/>

     
   <CardColor background="#27a844" title='Tổng số Tour 'titleresult="Có 978 Tour " icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEX///8AgAAAfgAAfAAAegAAgQAAgwD6/foAhQD9//32+/YAeADy+fL5/PkAhgDu9+7c7dzq9erj8uPX7Ne01bTO5M4XhxfO587F4cVwsHB9vX2+3r7i8uKeyZ6z0rPT6NNmsGaQwJBepl6n0qdSpFI+mT5brFvF48WOxo6bzJuk0qSx2LEplymDuYOczZwyljJJnkl3s3cajxprrWtFmUUbhxsjkiNvt28zlzNYrFiHwodms2YzjzMtjS1En0RSnlJ8sXw+oT663rqjx6Mh8DMAAAAUNElEQVR4nNVd6XaiShAOjYASZHNDDVFEEx1j3DVjos4k7/9OF7MK1Wg3FMncb86ZP8GmC4raq/riIgMoWrM/qGnFYiGL1X8eSqUtXeZyl+Ksu7k2bUv96Q1hQ3VXovAKQsRLYdUdXVdatvbT28JDwdWJcISAzFx+3Bm9lB1T+enNoaCVDxH4SSaRe50/nn9r/fQGU2OdgwR+kilVn/bzxn3t/8yzShx9n2QSqbp9mqx/lX56qwlxf3mGxA86xZz0sPZN7X+nUR4oX2EsneJlTv/bKJu28f/RKLUqO4GfZJJ3jfK/IHPKS+A7lTlRf+h4L82a/Y9rFHvBwaSATFGY9eYjd9gyfpqOePjcTArJzC8XnWl/WPonX6YyTf4Kj8kkgrR8WrT7z9a/JmidHgqF72QGhMqr3/2aUfxpur7gotH3SaeYu5TuHgcV01D/gfdpd0R0Et/JFPVd48UJXJSfJdOZZULgG5UBmXKgN1/Ktasf05uqB15hXhZEgvltiiTf6wQKpWb9hKi1gZwhXsWdTmZysDE0Kg8iSK72AoXi175bbzqADN2+UDTDqvj1Bz3QdKhkCvJBoWyG38izajvKpGL74+4FxajdP97pB57FZNrgv+r496ZmfIsAsuXoDqRm5BLt9n492S6r75tDojNQKPLdo1+x1YwV5yDq3JMHm3JZwb69n3YWW1lCJpPMdptyoDezI/MOyJlRbLBCKzXd0bw7zqNSGXzq+sPcLVey8cNaQFXMokwaRsEoOS9eHVnUHqgcd0a+g0/lOkoh2Zvnf6VaZqXszR8CGYRHZiDN8tvO1Md1T9Qq2KDHKuBUw2qV+zeoLzPg/upi7iDK2CG4xfg0k0ahFNXSsPFXl3I5rG8zINLFe403QM7ME1kcBXPY6I6xFAqRHCwCS0/R/UiD5KsZNb/RWTxV5dRkin+xBI4Hnt5TLd2KytWtP6rvn2QplRl0ifQSjQ7YRBvjI9dMZ+hN92M9sYuS6yNsI0BzC+7/C2fl4GUagUJJ7KKIDZRNFLzowmSMm2MqGnar6a4DvZnjIxOJQnMfvavYRlk4DEVVzWb/90zmUChIFJZ1sHBKOXMKRfO5sRsfIrMMdOZ8jFtqI2CxzTDWPQUjMA/ai+1ZhXLJYDqehzkGTIokwU5DsRx/NN8HejNeoegozlQZrJtHeXJM0K5uPxUKJFD8jUGhBsIXpPu9Ab9AoTiBQunBaCbOZ2hCOTPEWJcTRcN0pehOZBRmGkA5831MGt4JMP93GGq5AMIX4vRnai0Kf6M7yXkYn2ENhC9kNJeFDyXwGeZRdgLlzOSHmLSfzU5UHTA/CmskAGBS0cOQ6UOghZZ84Qs0XIGQtFzGWBd4hqQTDQQXa77nDYaljEPvUJIuWgjLloBnKHmRS5x2YFfJ1WWv/Yxww3h0AYV/MOJQgyhnkG2YSRV/9W40EiI3MrR1StvoVqouwrIahUlDD07x5aMrSDs7TdkHz3qBURzYBA9OCMfYnLCoraaIwJ2G2gEUzjHW9aLyi2yvQvedhHUUU6g/EWogA129R1jWhEzaDl1QArfNyih3o+VYkWedEE1Q5RVxK4ag3HSUjbDRQM0guUFYVvVg6j6s9O6jaVNxGg72l/z+AKP2uwJqBkWMeKa5A8s+hq/wo+9QrB+TU2ovq5KwHHc3tylVFwyGEQyxfR1dVchFBIkDKDx6h4W+/BZ5eK2T+TtoqYnJNEDNoLhLTNbRsnMgZx4ilpkFHu2RMbwJyVkiCrO2byZrsWkBSYoSvzBn4MFFrQgl4luR5Zcx/Aws5cOr3I2aLf5C4TJYK49RTuRCOQO0XW0Vvmj++RmqwI58p1Iaz91yi+sr0iCT3iDYpEUoZ9rgwSnD6tFbJL3K519uoTn0cRURZoup26QVq9Bhg4htDsNxakEuu4ZXqcPxJ4m5hy8CLwYnK6YDM327n/5idH/K0SAbmbE/nng0QNBgTNtQofVIcuKhj01aH2uKDQj9ASqF6nayYQi1KKAQREQx8UH4QowrEbL7N7vd46+wYj9P4du7FPSb4Zm6NQtGUijcxI1nEGPTuZY9zaXHuxVz0s4/VR7ss3ETL2CMjc9vaC4ZKTxAFPV2ObZ/8Tdg0imCrrBhYjsavjgNbcKXsxaFnksXH0Y+ei1KCOoebGHLuazPRaBwkDwdKpf4oCqyh5CgpbjUHU7OUNqxzZhxEG9oNt0N+F4w0go1UCIkj3jXMG5yvMUVtDqkK6DuZYwQFAhfCFt+zlAHM85yIDKBvuQvcNECgUltGL7YJ1mncNtYbGUOKrcg5lqA30sdwSZtLgGFSV3qwu1m3mMmcgmcIug4YQT0ih64dRpvRan5o32VqYZ2CSJZMAT1hBAnNYHnI6aM+yhm82U+plYbhLAF9f/16CWkk24rr2gCHYtRA2i1nNFOyp1qDyOLqEaEISiCECfVRmDVGU7OULUs/0aPr12D78eHOTUEx4nicG7Sr/oBRa007mKaiOToZ0jx7jFCULBESMAO1mvDdW9bjZZ0ievodRUYgkKIqlM6nLpZtJG17g81wl82ARFAJVJhCENQCBYbpUToJaP8rnXr/umM8+QV2xEwaIw6FOoIW4ElQisMhzMOtnPtzSfduedAs9tcAQoxHCcw+wI6nDVv9Gc0aGJlYRTLNGldowUgEVBCUK3oqsDhtEdP+UNT/dP+PttmVopEqCN8hjDGFql5aO2Fj8y90M10DI0NQ1AITKoB1ide6E21ekePQBxnWQL2CzzsBwS1BTqchGXouWnTkOueXV47wA4waXzPIzvWUQLJPvRxVyI2q4TYXRWBDcxjHYFJTWDpSqHwhbKJRF9IFyPATgXIMJMJgtqCA1q2t8d/16L1c2QWviuibTABnyECk1LcsW7IrdBAUjF/lI65qG3q0z5Sd2cJPOwqQloUlq0IYbfCACbdUUGtvd4GdqS83E4az+kt2WyqoFzwcVfDZSsaKIrWP9+hOfucqEhEfeenG26hwRTrND1v2CB1L/4OX1GsRz6OLxVlrkJ/EnP5375pJN4UTLHCIA4/HOj7RldtRvwZ8mG0Kg3wzEVRv3ErCV9lH6RFF+mroIpwipAelV6RCo2vjmcH5nJeiZx1XMfml7AW7OqspybwwoYxNuB1X7SOLyJV7+MRwDD5xxrCeO41eQujKF2dCBW6Dqw8opidle6XW673PwhUT0yrO2TtO/0mjzJTYFnkOL14LvZhiRBtVat/CJcRkhPvvlxEqEkBkd1NjdmjhHkFCjtxwwCaIOfRpYTmPz7c/W0cu8BnKHylUpAfGiW2uKQDXByMkC2MsensdqAyYilNOLz3fuW8ClE98MsZgqEEUpFim0M+sI4cJGJ+EqiQ09LV7oK9IHT8wjI8iSfGBr2SWAR6svNSOSU4oMyTEZKG0KPuVc7/6uj3ceqCSqQ0rpdj5U4R1O6SHULIFjorf7icFRVEeE6CkO0m7iOwYE3dIP1naIJXwFuWrm1kPhqlx5ivwAF70bnYiQ7orOx5nRXFmchcMxHimsIBN4jd9MXilHpQ7uqLAGZ/spQ4iKSGQAwQRRQQokHQWYFVA0xQbxt75uoEQn2JoKaOYAQt+8AO3CdmDLs86rC9SXrXxCOgcJ6eSW1Q1CGlyYoqV01vPxPOEkkWlB9bMBbkpg9wQWelmlLFFk3H6+pnuJVKIaiII730TEpxVnbpH5tqVQa7/KnaL9Kl/KyNNHYrhCvgrFxitIYdsvatzUqIJZJQXCLcsVsfaIKZEzJeYrtQ2+yWEvWjJLfw8gEM0KQPdUNnJVoipFqm4yTseDn8vNbvPkEiaYUV2hw8hzlCFBHMSSKh4qRCyfury7L+MKokjqtrjjfv5UOSh6wo0swBTIoR6gZjnsndsQLSyr23nRFx5aVIxBiOO+19ildCerRU0gAGaDCiiIB9NkeMoblfcyGJPE+VMNRaZa87C1z9HFlNKxRxbcGg9CO8ihcG8O71IwVUKIcGX0ppC+VVu1L2Gl5M7xMlKI0QRQRdaiFT3o5U3efTpykLRTXmeBYFjtkBQekEAO4YeTli0utoxhDBk4kFHG2PwaSAQjI+8jdVMMwsy0FYMEAjYNRCRLmUHH9qcBKWmF39BWyupgeleWGELUFSPf7SKBSGP0QV8SggSoCmj5E3L0RapUPemBbNGIbeoeq4o+nIxzqmK5sATQDruAYw4lArbpRC6es7LNWf5EO0fjHnS7zEIZMAzSuOUmYkPwzzRbSC5miG2O34owBMkLaTxm1adjWA7yu4WDObrtpvBbtE1KPl8tY8/GDFz5uWQhsKqFyt09UrDkEFzYqBSYsam2X+fPO0XG57Gyi6wmYG6X4waXSyifA6Mn3d1BJTCcq8SJ2BSZ2/A7YzpApXzWe6xCh/mftEmHx+pdRcDBHJrNE0E4l4eP5CnsGtUL1LMptfpztg0qkfWl4Os/tX00+HpxCXMTz03E85W+5fAauTWZq4DlY1Ifm956SRdVbZ60x6k47X/Ho5FnAqj7ZG5N70hT3l+woFtp2ydBrab4ldIj3V/TQ1dkXbNE37WLCVTqfTgse6qA9qHPraAa3DTL7vZwnjYdZ+A7Ok9wyFb7d86gyYrdgNcACYyrzMy+M7LrvPaOWgp7j06E1Ky8k9k9amrFdn4YByWMUE4nxjIylR1tMQxZyw888fnzIETMpU5lXoAyUqyjeOhUHkkP2wQFHMr53T5V/qKPoj0mPROdEJMm/3E3buyTQ6GzSug9gONz31SZbgXHSm4gQ4g+Xt8ZBAY6V2ZGs9roZ0InRPsB1scZKYMidFUHnzSeNBR6b0vVr1PF9eO178w1FQYGYTHSq01r+WkJ7mw3Q+j+HMdZ6ueyJTwvivqMAYG1u2ogjjHsc3FKq92IIINqhmf3bJnrwXe/QXA1ucWMNBRVDWHCVSFH87KSVr7XFJzmdD3yDR+dSCBVmMzdVFhjIeUXxwzXTcqvnzRZUtd08vMaxAXmMMyxaZJAHJzaZOys4Q0/+zYKg1oTebK1BtU491o0BlZJ7ADujy+gIArZfR2YIaOoWw8JOwzpg8+x1+QRR6o3LKuI9auh49nJ6e0Kb9rglnw7EGZeE87hMgZNnpp3U/NLMyXZ0gklpBAwYlRfrJTqAIXv8ZIuVtO05lMUM1nHXcXIEqTQcY4DKJeS56jNV2isbAohsgRNKdxxnlCJUcVZRCOcNeBFUEeoaFyFx+3Up/+nCh2VhspXBee0zzL4rwmNo68zNWNgkoFA46sls20+cjtOdR56vILTC9qXbKLexS4xiUVAajfllpJA+egxBSN5rutJcnYvBvO6KLDzgkmKe+xOT9Do/uQ6pzFyOyY1Su3Xqn7sboW0qFOE+Xmn3CuTgPMb8YNTEiO4plx7r4vwCTcnWpWZyz76Igwnb/K9PzozUw/II28uvE70GSOgGR1XWGiW1YFkn4eiuctAQebile7srJmyVPQvHA7WS+j78EW3uTQBTvPIToFQTlZL4J3woIbPoGIs7qZRN9Uk0Z+AYibx0bXCIxAhcrXYYHwpgCo1vnZZUWe0PSeRAhZYYH7A5ODefu4SqAYHJKGpeIGR4F5AwFmb/6AlZspifyBinDY8CJRrsEn8H59k5uiLlZ30RIflDM5mECYQZTjwggOb19JtnCAHAQV8IhO6CsCQeBaHWTl0UfUAIbSzi/5CqV+X0C5BC9SiFawbR1YZbw0DMw9BuPRlIF55Qxw4aTYJMuBueCYdKYuBoTHAkm5BNPQYbHcSCSmPQ0PQ0OJ00xBbmZHYmJT16Frq80TW73FobVrEi8TNjxoYHGg6RdnW9QwcxhLDCmMgEo40v2qXSPNsJzMsIUJuvFhMUXgpyyYc7weHqQ2ZFw6gicL0vGaaOX6oA1U8tHYaKOCMqZZwizLxRfz0AvkkTDi+GR7Shjni9q3JkaBgrvEmxE8cCzRumOubiwNuiORqLRMXA2aXh6Xwoozx0Z+T3qCbgLJNQEQj2/IxFsd49LY4LZMTasvchjHqVccruYNBJ+o6ZBeYWoLXGK6U/wlCNnFD5ACZb5RBtZ0tNolXcEK1ZMmxtwEmCowFEbByIKt7/5xsnEUtjj7EWG5cA4x+NQUGtsMcwczqmUlIruDCcul/oIgpVvDkrBgy4AyiHbcbhyO4xFd/Ho8MhBB2bDyATj/OJ42OX6Kh2NPJ4r7LgXosd9ZwDLma7SCB2J/SxnxYWagq0qPyW0Vn+WnEaO4XUOJZqSONLDh4I9SE6jzDqMy6CU1otJnJNkUP1JNZn2IHdsL7FwR7EyMGYiMkMdtpNpSLZKNA2G8ZMYfemgPE97STQkS7unRjt/FeVIBz6oNW/CTyNZnfV+rBEtoJn3sz3phIpiye8KvGY5eThTbmdPqY3DCNPmkiBwPbp8kywPhslJiVHq0Obwfg0E/35ozg2v69E7sVt/TP2J7GV0lhQbSusll2Alej9Gopo3dLOQ+wBXdNibBU9Gh5AJpaJIMzcxcVoy/k5VGAN7wOV6kHy7Yn8RWVAts1mPzezFdEF9N+xhnccsJ3p39HL9jhev/hA/zFSc/jRtH7CaoxlHm+EnRdJrc0PsdSJueC0dtIqXyr2iErjL9MQvbhTNAc97PA+yyvK8r2RQ/Ye04Y5jAn9O1Z/CsIsSnDvoCYyTDLOA2pz2EKLl5Ol73PpEUALXg9ssj0BEmAycJQqlF26zPEzg/h8wZc7ALncS00iE0bf7vElgOO1kvCrOXNxi+OxQsB/5MzuEZHuyJzasfo8rI0Ck3q+f3jMvDH/OrCGJtKCMg/v3oTZHCwapQ8Rq5+SAmn8atZf5TDx58H1O6HlpyqV/HlbF7eapM06ImMvpO89B6Cr+YSiWXV7fCZeXOfEDudzlZf7uxnPsxMPc/zUoRbX1fN94x2YwrFlqMWbqMxL+A7v9ncFcGREAAAAAAElFTkSuQmCC"/> 

     
     <CardColor background="#6c757d" title='Tổng số đánh giá 'titleresult="Có  215 đánh giá   " icon='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUSEhIWFhUVFxgYGBgSFhgYGBoYHhcXHRYWFxoYHCggGBsnGxgVIjEiJSkrLi4uGiAzODMsNygtLisBCgoKDQ0OFQ8PGCsZFRkrKysrKy0tKy0rNysrKzcrLSstLTctKy0rKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOkA2AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EAD0QAAEDAQUEBggFAwUBAAAAAAEAAgMRBAUSITETQVGRBiJSYXGhFBUyQlOBsdFyksHh8BYjNCQzgrLC0v/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8Al0RFpkREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARb1liaWCoBLnSD3q9VjSKUy1PmstnsrREHloJIfWp06pLDQGozaUEYim7DYoXMYSCXFrS4VOmJ2fzFB8iskd3Q4QXb6UIJ61cwPmEVAIpG32MMjBAz6oJrXrYXY/DOiyT2drTlHWkZfXre1n1cjplogikUretiYxpcwUzYDnWhIeTz6vIqKRBERAREQEREBERAREQEREBERAREQEREBERB6a8ilCRTSi+mRxrUnPXP+cSvCIPQeRoTzTaHicu9eUQexK7MYjQ65nPxQTO7RyNdTrxXhEHouO8nn/OJXlEQEREBERAREQEREBERAREQEREBERAREQEREBEU1ddzsMRntDyyPQAau/ZFQqKx+o4JxWyzdYe5Jr9x5qP9QWnFTZHxqKc6oIxFYxccEIrapusfcj/lT5LXvS52CLb2d5fHvB1b+3ighEREQREQEREBERAREQEREBERAREQEREBERAUlZ7itLwHNiNDpiIb9TVfejcAfao2uFRUmngCR5rNfV8TGeQCRzWtcWgNNBQGm7UorNZOi8lcU5bGwa9YEnlkPGq1+kN6Nlc1keUUeTRoDurThwWtZop7S7AC5/HESQO810Uw6yWSy/7p20o90aDxGnPkgrsDHkgsDqjQsBr8iFK+lW/DSs1PwmvOlVnm6VyaRRsjG7Kp/QLX/qW167QU/A2nhogi52PBJeHV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'/>

     
      <CardColor background="rgb(73 109 106 / 45%)" title='Tổng Tour hủy'titleresult="Có 10 Tour" icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqstA1vlVVxCqO73qK8vIYk3k9-1VZsO5B2Cbc6XTGqv-4N6B_H849idKkq7mwjSNGaA&usqp=CAU"/>  

     



     
          

        </Box>
      </DashboardBox>
{/* line chart  */}

      <DashboardBox sx={{ gridArea: "b" }}  >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={datalinechat}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey='DoanhThu' stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="LoiNhuan" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        
         </DashboardBox>

      {/* bieu do cot */}
      <DashboardBox sx={{ gridArea: "c" }} > 
      
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={datapiechat}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        
          <Bar dataKey="uv" fill="#82ca9d" />
          <Bar dataKey="pv" fill="#8884d8" />
          <title>Doanh thu</title>
        </BarChart>
      </ResponsiveContainer>
      </DashboardBox>

    </>
  )
}

export default Row1