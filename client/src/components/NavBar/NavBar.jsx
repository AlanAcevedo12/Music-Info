import styles from "./NavBar.module.css"


function NavBar() {
    return (
        <div id={styles.navBarContainer}>
            <div id={styles.logoContainer}>
                <h1>Home</h1>
            </div>
            <div id={styles.listContainer}>
                <ul id={styles.navList}>
                    <li id={styles.navItem}>
                        <div className={styles.itemContainer}>
                            <svg class="svg-icon" focusable="false" height="24" role="img" width="24" viewBox="0 0 24 24" >
                                <path clip-rule="evenodd" fill-rule="evenodd"
                                    d="m12 7.463-.764-.905c-1.497-1.773-2.903-2.437-4.028-2.53-1.117-.092-2.127.363-2.893 1.18-1.573 1.676-1.948 4.666.066 6.761a301.42 301.42 0 0 0 5.974 6.047c.692.68 1.249 1.22 1.645 1.601.396-.381.953-.921 1.645-1.6a301.444 301.444 0 0 0 5.97-6.044 4.963 4.963 0 0 0 .072-6.8c-.763-.809-1.771-1.258-2.89-1.16-1.127.1-2.535.77-4.033 2.545L12 7.463zM12 21s-3.475-3.276-8.34-8.338C-1.034 7.778 5.087-1.08 11.32 5.17c.226.227.453.474.68.743a12.9 12.9 0 0 1 .68-.744c6.233-6.256 12.354 2.513 7.66 7.493C15.475 17.724 12 21 12 21z">
                                </path>
                            </svg>
                        <span id={styles.itemText}>Favoritos</span>
                        </div>
                    </li>
                    <li id={styles.navItem}>
                        <span id={styles.itemText}>Busqueda</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;