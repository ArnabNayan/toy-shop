import { useState } from 'react';

import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const [reviewData, setReviewData] = useState({
        name: '',
        feedback: '',
        rating: '',
    });

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReviewData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const review = {
                ...reviewData,
                image: user.photoURL,
                email: user.email,
            };
            const response = await axiosSecure.post('/reviews', review);
            if (response.data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your review has been added.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                setReviewData({
                    name: '',
                    feedback: '',
                    rating: '',
                });
            }
        } catch (error) {
            console.error('Failed to add review:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to add your review.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add Your Review</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Your Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={reviewData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Please share your experience about us and our toys?</label>
                    <textarea
                        name="feedback"
                        value={reviewData.feedback}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Rating:</label>
                    <input
                        type="number"
                        name="rating"
                        value={reviewData.rating}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        min="1"
                        max="5"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800"
                >
                    Add Review
                </button>
            </form>
        </div>
    );
};

export default AddReview;
