export const makelist=(list,flaglist)=>{
    
    // const findFlag=(item)=>
    // { 
    //     console.log("item",item)
    //     const obj=defaultList?.find((flaglist)=>{
    //         return flaglist?.name===item?.name
    //     })
    //     return obj;
    // }

    // const display=(flag)=>{
    //     return(
    //         <div>
    //             <img src={`${flag}`} alt="img"/>
    //         </div>
    //     )
    // }

    const arr=list.map((item)=>{
        // const obj =findFlag(item)
        // console.log("obj",obj)
        let flag;
        for(let i=0;i<flaglist?.length;i++)
        {
            if(flaglist[i].name===item.name)
            {
                flag=flaglist[i].flag;
            }
        }
       return{
       ...item,
       name:item.name? item.name :item,
       label: item.currency ? item.name.concat(` - ${item.currency}`):item,
       value: item.name? item.name :item,
       flag:flag,
   }
   
   }
   )
   console.log("--",arr)
   return arr;
 }