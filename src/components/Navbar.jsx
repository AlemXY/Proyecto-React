export const Navbar = () => {
    const estilosNav = {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "gray",
        alignItems: "center",
        color: "white"
    }

    return(
        <nav className="nav">
            <figure>
                <img src="../../public/img/gaara.webp" width={250} height={200} alt="perro" />
            </figure>
            <p>Alex Cabana</p>
        </nav>
    )
}