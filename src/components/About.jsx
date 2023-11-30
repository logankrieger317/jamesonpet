import Header from "./Header"
import Footer from "./Footer"

export default function About() {

    return(
        <div>
        <Header/>

        <h1 className="text-4xl font-bold text-center">About</h1>
        <p className="text-center">This is the about page</p>
        <Footer/>
        </div>    
        
    )
}