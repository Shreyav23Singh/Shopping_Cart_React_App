export const Reducer = (state , action) =>{
    if(action.type === "Remove_item"){
        return {
            ...state ,
            item:state.item.filter((currElem)=>{
                return currElem.id !== action.payload;
            }),
        };
    }
    if(action.type === "CLEAR_CART"){
        return  {...state,item: []};
    }

    if(action.type === "INCREMENT"){
        const updatedCart =state.item.map((currElem) => {
            if(currElem.id===action.payload){
                return {...currElem , quantity : currElem.quantity + 1};
            }
            return currElem;
        })
        return {...state , item:updatedCart};
    }


    if(action.type === "DECREMENT"){
        const decrementCart =state.item.map((curElem) => {
            if(curElem.id===action.payload){
                return {...curElem , quantity : curElem.quantity - 1};
            }
            return curElem;
        }).filter((curElem) => curElem.quantity!==0)
        return {...state , item:decrementCart};
    };

    if(action.type === "GET_TOTAL"){
        let { totalItem ,totalAmount} =state.item.reduce(
            (accum,curVal) =>{
                let {price ,quantity} =curVal;

                let updatedTotalAmount = price * quantity;
                accum.totalAmount +=updatedTotalAmount;
                accum.totalItem += quantity;
                return accum
            },{
                totalItem:0 ,
                totalAmount:0,
            });
            return {...state,totalItem ,totalAmount};
    };

      



    return state;
};
