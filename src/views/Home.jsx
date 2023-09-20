import Gallery from '../components/Gallery'


const Home = () => {
    return (
        <>
        <div className="container-home text-center">
            <h1 className="fw-bold">Creaciones P&J !</h1>
            <span className="fw-bold">Produccion de muebles a pedido.</span>
            <hr />
            <br />
        </div>
        <Gallery />
        </>
    )
}

export default Home