import React,{useEffect,useState,useReducer}from "react";
import axios from 'axios';
import Information from '../../components/Infomation'
import FishList from '../../components/FishList'
import './style.css'
import NaviBar from "../../components/NaviBar";


export type TodoType ={ id:number;name:string;username:string;email:string;address:any}

export default function Home() {
  const [button,setButton]=useState(false);
  const [refresh,setRefresh]=useState(false);
  const [fishList,setFishList]=useState<TodoType[]>([]);
  const [clickInformation,setClickInformation]=useState<any[]>();
  const reducer=(state:any,action:any)=>{
    switch(action.type){
        
        case 'fishClick':
            console.log(action.id)
            return{
                fish:(fishList.filter(apiData=>apiData.id === action.id))
            };
        default:
            return state;
    }
  }
  const initialState ={
    fish:{}
  }

  const [state,dispatch]=useReducer(reducer,initialState);

  useEffect(()=>{
    axios.get('http://localhost:3001/data') //더미 api사용
    .then(res=>{setFishList(res.data)})
    .catch(err=> console.log(err));
  },[refresh])

  const fishClick=(id:number)=>{
    setButton(true);
    dispatch({
      type:"fishClick",
      id
    })
  }

  const fishDelete=(id:number)=>{
    axios.delete(`http://localhost:3001/data/${id}`)      
      .then(()=>{
        setRefresh(!refresh)
      })
      .catch((error)=>{
        console.log(error);
      })
    
  }
  return (
    <>
    <NaviBar />
    <div className="page">
        <div className='concon'>
          <span className="fishList">Myfish List</span>
          {fishList.map((apiData)=>{
            return(<FishList fishDelete={fishDelete} apiData={apiData} fishClick={fishClick}/>);
          })}
        </div>
        {
          !button
          ? <div></div>
          : state.fish.map((apiData: any)=>{
            return(<Information apiData={apiData}/>);
          })
        }
          {}
      </div>
      <img className="displayPort" src="img/displayPort.png" alt="이미지오류"></img>
    </>
  );
}