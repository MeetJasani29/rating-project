import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './rating.css';

function Review({ noOfStar = 5 , addForm}) {

    const [review, setreview] = useState('0')
    const [username , setusername]= useState('')
    const [reviewText , setreviewText]= useState('')
    const [rating , setrating]= useState('0')

    const handlesubmit = (e) => {
        e.preventDefault();
        if (username && reviewText && rating > 0){
            const form = {username , reviewText , rating };
            addForm(form);
            setusername('');
            setreviewText('');
            setrating(0);
            setreview(0);
        }
        else(
            alert("please enter all fields")
        )
    };

    const handleClick = (click) => {
        setreview(click);
        setrating(click);
    }

    return (
        <div className="ratig-form">
            <h2>Review</h2>

            <form onSubmit={handlesubmit} >
                <input type="text" onChange={(e) => setusername(e.target.value)} value={username}  placeholder="Name" /> <br /><br />
                <textarea value={reviewText} onChange={(e) => setreviewText(e.target.value)} placeholder="Review"></textarea> <br /><br />
                <div value={rating} className="rating" onChange={(e) => setrating(e.target.value)}>
                    {[...Array(noOfStar)].map((_, index) => {
                        index += 1;
                        return <FaStar key={index}
                            className={index <= (review) ? 'active' : 'inactive'}
                            onClick={() => handleClick(index)} />

                    })

                    }
                </div>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default Review;