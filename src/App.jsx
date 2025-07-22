import Header from "./components/Header"
import MainPage from "./components/MainPage"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <section className="vh-100">
      <Header />
      <MainPage />
    </section>
  )
}

export default App