import { useState } from "react"
import Card from './Card'
function Cards(){
    const theCards = [
        {id: 1, img:'/img/real madrid.png',stat: ""},
        {id: 2, img:'/img/barcelona.png',stat: ""},
        {id: 3, img:'/img/chelsea.png',stat: ""},
        {id: 4, img:'/img/man city.png',stat: ""},
        {id: 5, img:'/img/man united.png',stat: ""},
        {id: 6, img:'/img/bayren muinch.png',stat: ""},  
        {id: 7, img:'/img/psg.png',stat: ""},  
        {id: 8, img:'/img/luverpool.png',stat: ""},  
        {id: 1, img:'/img/real madrid.png',stat: ""},
        {id: 2, img:'/img/barcelona.png',stat: ""},
        {id: 3, img:'/img/chelsea.png',stat: ""},
        {id: 4, img:'/img/man city.png',stat: ""},
        {id: 5, img:'/img/man united.png',stat: ""},
        {id: 6, img:'/img/bayren muinch.png',stat: ""}, 
        {id: 7, img:'/img/psg.png',stat: ""},  
        {id: 8, img:'/img/luverpool.png',stat: ""},              
            ]
            const[items,setItems] = useState(theCards.sort(()=> Math.random()-0.5))
    

    const [prev,setPrev] = useState(-1)

    function check(current){
        if(items[current].id ==items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setPrev(-1)
        }else{
            items[current].stat ="wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(()=>{
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            },1000)

        }
    }
    function handleClick(id){
if(prev ===-1){
    items[id].stat = "active"
    setItems([...items])
    setPrev(id)
 } else{
        check(id)
    }
    }
    return (
        <div className="container">
{items.map((item,index)=>(
<Card key ={index} item={item} id = {index} handleClick={handleClick}/>
))}
</div>
    )
}
export default Cards