import { DATA } from "./dataaction";

const init={data:{}}

export const datareducer=(store=init,{type,payload})=>{

    switch(type){
        case DATA:{
            return{...store,data:payload}
        }

        default:{
            return store;
        }
    }

}