

const ReviewList = (props) => {
    const { reviews } = props

    console.log('reviews',reviews)
    return (
        <section className="w-full py-12 bg-white lg:py-24">
        <div className="max-w-6xl px-12 mx-auto text-center">
            <div className="space-y-12 md:text-center">
                <div className="max-w-3xl mb-20 space-y-5 sm:mx-auto sm:space-y-4">
                    <h2 className="relative text-4xl font-extrabold tracking-tight sm:text-5xl">Our Reviews</h2>
                </div>
            </div>
    
            {reviews && reviews.length && <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {/* item 1 */}
                {reviews.map((reviewItem)=>{
                    return (
                        <div key={reviewItem.date} className="w-full border border-gray-200 rounded-lg shadow-sm">
                            <div className="flex flex-col items-center justify-center p-10">
                                <h2 className="text-lg font-medium">{reviewItem.message}</h2>
                                <p className="text-blue-500 font-medium">{new Date(reviewItem.date).toDateString()} 
                                </p>
                            </div>
                        </div>
                    )
                })}
                

            </div>}
    
        </div>
    </section>
      
    );
  };
  
  
  
  export default ReviewList;