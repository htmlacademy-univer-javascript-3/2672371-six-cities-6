import Review from "./review"
import { useState, FormEvent, Fragment } from 'react';
interface ReviewForm {
	rating: number;
	comment: string;
}
function ListOfReviews(): JSX.Element {

	const [commentState, setComment] = useState<boolean>(false);
		const [reviewForm, setReviewForm] = useState<ReviewForm>({
			rating: 0,
			comment:''
		});
		const [submittedReviews, setSubmittedReviews] = useState<ReviewForm[]>([]);
	
		const commentLength = reviewForm.comment.length;
		const isFormValid = reviewForm.rating > 0 && reviewForm.comment.length > 50;
	
		const handleRatingChange = (event: FormEvent<HTMLInputElement>) => {
			setReviewForm({
				...reviewForm,
				rating: parseInt(event.currentTarget.value)
			});
		};
	
		const handleCommentChange = (event: FormEvent<HTMLTextAreaElement>) => {
			setReviewForm({
				...reviewForm,
				comment: event.currentTarget.value
			});
		};
	
		const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			setSubmittedReviews([...submittedReviews, reviewForm])
			console.log('Отправка комментария: ', reviewForm);
			setReviewForm({
				rating: 0,
				comment: ''
			});
			setComment(false);
		}

	return (
			<section className="offer__reviews reviews">
					<Review user='Max' message='Amazing place!' dateTime="April 2019" rating={4}/>
					{submittedReviews.map((review, index) => (
						<Review
							user="not Logged"
							key={index}
							message={review.comment}
							dateTime={new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
							rating={review.rating}
						/>
					))}
					<form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
					<label className="reviews__label form__label" htmlFor="review">Your review</label>
					<div className="reviews__rating-form form__rating">
						{[5,4,3,2,1].map((star) => (
						<Fragment key={`rating-${star}`}>
						<input key={`input-${star}`} className="form__rating-input visually-hidden" name="rating" value={star} id={`${star}-stars`} type="radio" checked={reviewForm.rating === star} onChange={handleRatingChange}/>
						<label key={`label-${star}`} htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title={[
									'terribly',
									'badly', 
									'not bad', 
									'good', 
									'perfect'
								][star - 1]}>
						<svg className="form__star-image" width="37" height="33">
							<use xlinkHref="#icon-star"></use>
						</svg>
						</label>
						</Fragment>
						))}
					</div>
					<textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={reviewForm.comment} onChange={handleCommentChange}></textarea>
					<div className="reviews__button-wrapper">
						<p className="reviews__help">
						To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
						</p>
						<br />
						<small>Current: {commentLength}/50 characters</small>
						<button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid}>Submit</button>
					</div>
					</form>
				</section>
	)
	

}

export default ListOfReviews;