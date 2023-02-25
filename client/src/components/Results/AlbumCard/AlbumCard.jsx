import { Link } from "react-router-dom";
import styles from "./AlbumCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteAlbums, removeFavoriteAlbums } from "../../../redux/actions/actions";
import { useEffect, useState } from "react";

function AlbumCard({ item, getAlbum }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [isFav, setIsFav] = useState(user?.favoriteAlbums.includes(item.id));

    function addToFav() {
        dispatch(addFavoriteAlbums({ albumId: item.id, userId: user.id }));
        setIsFav(true);
    }

    function deleteFavorite() {
        dispatch(removeFavoriteAlbums({ albumId: item.id, userId: user.id }));
        setIsFav(false);
    }

    useEffect(() => {
        console.log("actualiza")
    }, [user])

    return (
        <div id={styles.albumContainer}>
            <div id={styles.albumImage}>
                <div id={styles.imageConatiner}>
                    <div id={styles.filter}></div>
                    <img src={item.cover_medium} id={styles.image} />
                </div>
                <div id={styles.playButtonContainer}>
                    <button id={styles.playButton} onClick={() => getAlbum(item)}>
                        <svg focusable="false" height="1em" role="img" width="1em" viewBox="0 0 12 12" aria-hidden="true">
                            <path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.5.5v11l9-5.5z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div id={styles.reviewButtonContainer}>
                    <button id={styles.reviewButton}>
                        <Link to={`/review/create/${item.id}`} id={styles.link}>
                            <svg focusable="false" height="100%" viewBox="1 1 15 15" aria-hidden="true">
                                <path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                    d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z">
                                </path>
                            </svg>
                        </Link>
                    </button>
                </div>
                <div id={styles.favButtonContainer}>
                    {

                        isFav ?
                            <button onClick={deleteFavorite} id={styles.addFavButton}>
                                <svg viewBox="0 0 16 16" focusable="false" id={styles.remFavSvg}>
                                    <path d="M8 3.266C2.837-2.68-2.564 4.578 1.328 8.516 5.22 12.451 8 15 8 15s2.78-2.548 6.672-6.485C18.564 4.501 13.162-2.679 8 3.265z"></path>
                                </svg>
                            </button> :
                            <button onClick={addToFav} id={styles.addFavButton}>
                                <svg viewBox="0 0 16 16" focusable="false" id={styles.favSvg}>
                                    <path d="m8 4.79-.755-.869c-1.17-1.348-2.252-1.832-3.093-1.9-.836-.067-1.59.263-2.164.858C.802 4.108.528 6.283 2.04 7.812a245.96 245.96 0 0 0 4.775 4.7c.482.46.882.837 1.186 1.122.304-.285.704-.663 1.186-1.123a238.026 238.026 0 0 0 4.771-4.695 3.545 3.545 0 0 0 .057-4.963c-.572-.589-1.324-.915-2.161-.843-.843.072-1.926.562-3.098 1.911L8 4.791zm6.672 3.725C10.78 12.452 8 15 8 15s-2.78-2.548-6.672-6.485c-3.717-3.76 1.043-10.549 5.976-5.972.232.215.464.455.696.723.232-.267.464-.508.696-.723C13.63-2.04 18.39 4.68 14.672 8.515z"></path>
                                    <path d="m8 4.79-.755-.869c-1.17-1.348-2.252-1.832-3.093-1.9-.836-.067-1.59.263-2.164.858C.802 4.108.528 6.283 2.04 7.812a245.96 245.96 0 0 0 4.775 4.7c.482.46.882.837 1.186 1.122.304-.285.704-.663 1.186-1.123a238.026 238.026 0 0 0 4.771-4.695 3.545 3.545 0 0 0 .057-4.963c-.572-.589-1.324-.915-2.161-.843-.843.072-1.926.562-3.098 1.911L8 4.791zm6.672 3.725C10.78 12.452 8 15 8 15s-2.78-2.548-6.672-6.485c-3.717-3.76 1.043-10.549 5.976-5.972.232.215.464.455.696.723.232-.267.464-.508.696-.723C13.63-2.04 18.39 4.68 14.672 8.515z">
                                    </path>
                                </svg>
                            </button>
                    }
                </div>
            </div>

            <div id={styles.infoContainer}>
                <div id={styles.info}>
                    <span id={styles.name}>{item.title}</span>
                </div>
                <div id={styles.info}>
                    <span id={styles.fans}>{"de " + item.artist.name}</span>
                </div>
                {item.explicit_lyrics && <div id={styles.explicit}>EXPLICIT</div>}
            </div>
        </div>
    )
}

export default AlbumCard;