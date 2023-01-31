function ReviewsCardsList({ reviews }) {
    return (
        <div>
            <h1>Lista de reseñas</h1>
            {
                reviews?.map(
                    (r, k) => {
                        return (
                            <div>
                                <h1>{r.title}</h1>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default ReviewsCardsList;