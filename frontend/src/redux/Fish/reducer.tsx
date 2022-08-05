import { addFish, deleteFish, readFish } from "./action";
import { ADD_FISH, DELETE_FISH ,READ_FISH} from "./types"

type CounterAction =
  | ReturnType<typeof addFish>
  | ReturnType<typeof deleteFish>
  | ReturnType<typeof readFish>;
const initialState={
    fishList:[]
}

const FishReducer=(state=initialState,action:CounterAction)=>{
    switch(action.type){
        case ADD_FISH:
            return{
                
            }
        case DELETE_FISH:
            return{
                
            }
        case READ_FISH:
            return{

            }
    }
}