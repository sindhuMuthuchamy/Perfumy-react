import Navbar from './components/navbar'
import Search from './components/searchbar';
import Card from './components/card';
import About from './components/about';
import Contact from './components/footer';

function App(){
    return(
    <>
    <Navbar></Navbar>
    <Search></Search>
    <Card></Card>
    <About></About>
    <Contact></Contact>
    </>
    )
}

export default App