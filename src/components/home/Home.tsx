
import './home.scss'
import NextButton from '../NextButton'
import Title from '../Title'

const Home = ()=>{
    
    return (
        <section>

            <Title heading="SETTING UP YOUR WORK ENVIRONMENT" />

            <ol>
                <li>
                Download VSCode text editor 
                <ul>
                    <li>
                        <a href="https://code.visualstudio.com/download" title="Download VSCode">Click here to download VSCode</a>
                    </li>
                </ul>
                </li>
                <li>
                Install VSCode test editor 
                <ul>
                    <li>
                        <a href="https://support.academicsoftware.eu/hc/en-us/articles/360006916138-How-to-install-Microsoft-Visual-Studio-Code" title="VSCode Installation">How to install VSCode</a>
                    </li>
                    <li>
                    <a href="https://www.youtube.com/watch?v=VknMxAIbJj4" title="VSCode extensions">Install VSCode extensions</a>
                    </li>
                </ul>
                </li>
                <li>
                VSCode Tutorials
                <ul>
                    <li>
                        <a href="https://www.youtube.com/watch?v=WPqXP_kLzpo" title="VSCode Installation">VSCode Video Tutorials</a>
                    </li>
                </ul>
                </li>
            </ol>

            <NextButton url="about" />


        </section>
    )
} 

export default Home