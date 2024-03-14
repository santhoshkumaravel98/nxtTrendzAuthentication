// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="home-mobile-img"
        />
        <p className="home-description">
          Fashion is part of the daily air A fashion trend signifies a specific
          look or expression that is spread across a population at a specific
          time and place. A trend is considered a more ephemeral look, not
          defined by the seasons when collections are released by the fashion
          industry. A trend can thus emerge from street style, across cultures,
          and from influencers and other celebrities.
        </p>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
