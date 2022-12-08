import './index.css'


function Home({ user }) {
  if (user) {
    return <h1></h1>;
  } else {
    return <h1>LOG IN!</h1>;
  }
}

export default Home;