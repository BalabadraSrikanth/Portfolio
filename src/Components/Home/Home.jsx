import Img from './Img';    
import './Home.css';

function Home() {
    return (
        <>
            <div className="displayitem">
                <div className='nama'>
                    <p className='greet'>Hello!</p>
                    <p className="nameDisplay">I'm Srikanth Balabadra</p>
                    <p className='intro'>Java Full Stack Developer</p>
                  

                </div>
                <Img />

            </div>
        </>
    );
}

export default Home;
