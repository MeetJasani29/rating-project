import React from "react";
import './ratinglist.css'
import { FaStar } from "react-icons/fa";

function Ratinglist({ ratings = [] }) {
    return (
        <div className="card">
            {ratings.map((review, index) => (
                <div key={index} className="card-list">
                    <h3>{review.username}</h3>
                    <p>{review.reviewText}</p>
                    <div className="stars">
                        {[...Array(5)].map((_, starIndex) => {
                            return (
                                <FaStar
                                    key={starIndex}
                                    className={starIndex < review.rating ? 'active' : 'inactive'}
                                />
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Ratinglist;