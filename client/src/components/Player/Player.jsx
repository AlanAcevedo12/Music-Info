import styles from "./Player.module.css";

function Player({ track }) {
    return (
        <div className={styles.Player}>
            <div>
                <div>
                    <button class="svg" type="button">
                        <svg viewBox="0 0 16 16" focusable="false" class="chakra-icon css-c1x3e4" data-testid="PlayIcon">
                            <path d="m3 1 12 7-12 7V1z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div>
                <span></span>
                <div></div>
                <span></span>
            </div>
        </div>
    )
}

export default Player;