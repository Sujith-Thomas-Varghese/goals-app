import { useState, useEffect, useCallback } from 'react';
import ReviewList from "./components/ReviewList";
import toast from 'react-hot-toast';
import APICalls from '../../common/APICalls';

const Reviews = (props) => {
    const [messageValue, setMessageValue] = useState('');
    const [reviews, setReviews] = useState([]);

    const getReviews = useCallback(async () => {
        try {
          const data = await APICalls.ReviewListAPI();
          console.log("api call",data.data.body)
          setReviews(data.data.body);
        } catch (err) {
          console.error(err);
        }
      }, []);

    const putReview = useCallback(async (value) => {
        console.log('starting')
        try { 
            let payload = {
                "message": value
            }
            console.log('payload',payload)
            await APICalls.AddReview(payload).then((res)=>{ 
              if(res && res.data && (res.status === 200 || res.status === 201)){
                toast.success('Your Review Has Been Recorded');
                setMessageValue('');
                getReviews()
              }else{
               if (res.status === 400){
                 console.log('e',res)
                 if(res.body.hasOwnProperty('Message')){
                   toast.error(res.body.Message)
                 }
                 let errorMessage = res.body.Error.split(":");
                 toast.error(errorMessage[errorMessage.length - 1]);
               } else {
                 toast.error('common:common.Something went wrong');
               }

              }
              
            })
          }catch(err){
               console.error(err);
               toast.error('common:common.Something went wrong');
          }
      }, []);

    useEffect(() => {
        getReviews()
        return () => {
        }
    },[]);

    const onChange = (event) => {
        console.log(messageValue)
        setMessageValue(event.target.value);
      };
    const buttonClick =(event) => {
        event.preventDefault();
        putReview(messageValue)
    }




  return (<>
    <section className="px-2 py-32 bg-white md:px-0">
  <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
    <div className="flex flex-wrap items-center sm:-mx-3">
      <div className="w-full md:w-1/2 md:px-3">
        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">Post your Reviews!</span>
          </h1>
        <input type="text" name="review" onChange={onChange} value={messageValue} className="block w-full px-4 py-3 mb-4  border-2  border-gray-300 rounded-lg focus:ring focus:ring-gray-400 focus:outline-none" placeholder="Enter your review!"></input>

          <div className="relative flex flex-col sm:flex-row sm:space-x-4">
            <button onClick={(e)=>{buttonClick(e)}} className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
            <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" alt="sample"/>
          </div>
      </div>
    </div>
  </div>
</section>
{reviews && reviews.length && <ReviewList reviews={reviews}/>}
</>
    
  );
};



export default Reviews;
