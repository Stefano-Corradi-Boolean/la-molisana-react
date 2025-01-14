import Alert from "./partials/Alert"

const Main = () => {
  return (
    <main>
      <section id="products">
        <h2>Lista Prodotti</h2>
        <Alert message="Devi effettuare una nuova ricerca" />
        <Alert message="Non sono prosenti prodotti" type="error" />
        <Alert message="Registrazione effettuata con successo" type="success" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quod commodi nisi laboriosam quasi quae maxime impedit itaque, ab labore error reiciendis quo ducimus consequuntur similique distinctio culpa neque architecto?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vel non, molestiae tempora quaerat corrupti natus distinctio consectetur ducimus deleniti alias nisi modi amet maiores aliquid nobis dignissimos minima. Distinctio.
        </p>
      </section>
    </main>
  )
}

export default Main
