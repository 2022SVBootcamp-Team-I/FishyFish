import React,{useEffect,useState,useReducer}from "react";
import axios from 'axios';
import Information from '../../components/Infomation'
import FishList from '../../components/FishList'
import './style.css'
import NaviBar from "../../components/NaviBar";
import InformationBlank from "../../components/infomationBlank"
import userEvent from "@testing-library/user-event";
import { useSelector } from "react-redux";



export type TodoType ={ id:number;name:string;username:string;email:string;address:any}

export default function Home() {
  const [button,setButton]=useState(true);
  const reducer=(state:any,action:any)=>{
    switch(action.type){
        case 'FISH_LOADED':
          return{
            ...state,
            data:action.data
          }
        case 'ERROR':
          console.log("api연결실패!")
          return
        case 'FISH_CLICK':
          console.log(action.id)
          return{
            ...state,
            selectFish:(state.data.filter(apiData=>apiData.id === action.id)),
            selectFishBoolean:false
          };
        case 'FISH_DELETE':
          return{
            ...state,
            data:state.data.filter(data=>data.id !== action.id),
            selectFishBoolean:true
          }
        default:
          return state;
    }
  }
  const initialState ={
    data:[],
    selectFish:{},
    selectFishBoolean:true
  }

  const [state,dispatch]=useReducer(reducer,initialState);

  const fetchFishes =async()=>{
    try{
      const response=await axios.get("http://localhost:8000/api/v1/myfish/", { withCredentials: true})
      dispatch({type:"FISH_LOADED",data:response.data});
    } catch(e){
      dispatch({type:'ERROR',error:e});
    }
  }

  const aToken = useSelector((state: any) => state.persistedReducer.tokenSlice.accessToken);

  useEffect(()=>{
    fetchFishes();
    console.log(111);
    console.log(state);

  },[])

  const fishClick=(id:number)=>{
    
    dispatch({
      type:"FISH_CLICK",
      id
    })

    setButton(false);
  }

  const fishDelete=(id:number)=>{
    
    dispatch({type:"FISH_DELETE",id})
    axios.delete(`http://localhost:3001/data/${id}`)      
      .then(()=>{
      })
      .catch((error)=>{
        console.log(error);
      })
    setButton(true);
  }
  return (
    <>
    <NaviBar />
    <div className="page">
        <div className='concon'>
          <span className="fishList">Myfish List</span>
          {
          /* {state.data.map((apiData)=>{
            return(<FishList fishDelete={fishDelete} apiData={apiData} fishClick={fishClick}/>);
          })} */}
        </div>
        {
          !button
          //state.selectFishBoolean
          ? <InformationBlank/>
          : null //  state.selectFish.map((apiData)=>
          // {
          //   return (<Information apiData={apiData} />);
          // })
        }
      </div>
      <img className="displayPort" src="img/displayPort.png" alt="이미지오류"></img>
    </>
  );
}