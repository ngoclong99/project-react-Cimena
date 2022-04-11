import { createBrowserHistory } from 'history'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checkout from './pages/Checkout/Checkout'
import Contact from './pages/Home/Contact/Contact'
import Home from './pages/Home/Home'
import MovieDetail from './pages/MovieDetail/MovieDetail'
import News from './pages/News/News'
import UserLogin from './pages/UserLogin/UserLogin'
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate'
import HomeTemplate from './templates/HomeTemplate/HomeTemplate'
import UserTemplate from './templates/UserTemplate/UserTemplate'

export const history = createBrowserHistory()

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movie/:movieID" element={<MovieDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/checkout" element={<CheckoutTemplate />}>
          <Route path="/checkout/:MaLichChieu" element={<Checkout />} />
        </Route>
        <Route path="/login" element={<UserTemplate />}>
          <Route path="/login" element={<UserLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
