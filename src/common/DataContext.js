import { useState,createContext,useEffect,useCallback } from "react";
import APICalls from "./APICalls";

export const DataContext = createContext(); 


const DataContextProvider =(props)=>{
    const [reviewList,setReviewList] = useState([]);

    useEffect(() => {
        getReviewList()
        return () => {
        }
    },[])


    const getReviewList = useCallback(async () => {
        try {
          const data = await APICalls.ReviewListAPI(); 
          if (data && data.data && data.data.body.length !== 0) { 
              console.log('inside?',data.data.body)
            setReviewList(data.data.body)
          }
        } catch (err) {
          console.error(err);
        }
      }, []);

    let value = [
        reviewList,
        setReviewList,
        getReviewList
    ]

    return(
        <DataContext.Provider value={{...value}}>
            {props.children}
        </DataContext.Provider>
    )

}

export default DataContextProvider;