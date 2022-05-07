
import './gettingstarted.scss'
import Underconstruction from '../underconstruction/Underconstruction'
import Title from '../../title/Title'
import NextButton from '../../nextbutton/NextButton'


const Gettingstarted = () => {

    return (
        <section>
        <Title heading="Getting Started" />

        <div className="para">

            <h2>Understanding the nature of computers</h2>

    

            <p>
            Two important points to note about computers are "Data Storage" and "Data Output" data in this context means codes and codes are nothing but a combination of keyboard characters and numbers.
            </p>

            <p>
            Codes are placed in files and the nature of a code will determine the name of it file for example a code created or typed to produce a web page that code is called an "HTML CODE" or in correct term "HTML TAGS" if a code is created to handle server side operations using PHP that code is considered to be a "PHP CODE". More on codes latter keep reading. 
            </p>


            <h2>How to create folders </h2>

            <p>
            To create a web page you need to create some files, depending on the size of your project 
            you can create hundreds of files. 
            </p>

            <p>
            Wouldn't it be nice if we place these files in their appropriate folders to keep our project organized
            </p>

            <p>
            For example we can create an image folder and keep all our images in that folder, we can also create 
            an HTML folder and put all our HTML files in that folder. More on HTML files latter. 
            </p>


            <h4>Creating Folders: </h4>

            <ol>
                <li>
                On your computer desktop right click on an empty space 
                </li>
                <li>
                Click on "New"
                </li>
                <li>
                Click on "Folder"
                </li>
            </ol>

            <picture>
                <img src="https://www.isunshare.com/images/article/windows-8/create-open-and-delete-a-folder-using-command-prompt/create-a-folder-from-context-menu.png" alt="Creating Folders" />
            </picture>


            <h2>How to rename folders </h2>

            <ol>
                <li>
                Right click on your folder
                </li>
                <li>
                Click on "Rename"
                </li>
                <li>
                Enter a nam for your folder example "website"
                </li>
                <li>
                Hit enter to complete 
                </li>
            </ol>

            <picture>
                <img src="https://ugetfix.com/wp-content/uploads/articles/askit/cant-rename-folders-windows-10_en.png.webp" alt="Rename Folders" />
            </picture>




            <h2>How to create files </h2>

            <p>
            Throughout the course we will be working with files and folders so it's important to 
            know how to create these two things.
            </p>

            <p>
                Using a text editor like "notepad" or "VSCode" you can create any file you want 
                including image files, word document, video files, photoshoshop files, web files and 
                any file you can think of. 
            </p>

            <h4>Let's create a video file </h4>

            <ol>
                <li>
                Openy VSCode text editor 
                </li>
                <li>
                Click on "File" located at the top left of VSCode
                </li>
                <li>
                Click on "New File"
                </li>
                <li>
                Save your file by clicking on "File" and click on "Save as"
                </li>
                <li>
                For "File name" type video.mp4
                </li>
                <li>
                Choose a location where you want to save your file and click on "Save"
                </li>
            </ol>


            <h4>Let's create an image file</h4>

            <ol>
                <li>
                Openy VSCode text editor 
                </li>
                <li>
                Click on "File" located at the top left of VSCode
                </li>
                <li>
                Click on "New File"
                </li>
                <li>
                Save your file by clicking on "File" and click on "Save as"
                </li>
                <li>
                For "File name" type image.jpg
                </li>
                <li>
                Choose a location where you want to save your file and click on "Save"
                </li>
            </ol>



            <h4>Let's create a web file</h4>

            <ol>
                <li>
                Openy VSCode text editor 
                </li>
                <li>
                Click on "File" located at the top left of VSCode
                </li>
                <li>
                Click on "New File"
                </li>
                <li>
                Save your file by clicking on "File" and click on "Save as"
                </li>
                <li>
                For "File name" type contact.html
                </li>
                <li>
                Choose a location where you want to save your file and click on "Save"
                </li>
            </ol>


            <div className="exercise">
                <h4>Exercise</h4>
                Using your knowledge of creating files and folders try if you can create a folder 
                called "project" on your desktop and in the "project" folder create 3 additional 
                folders "css" "images" "js". In the same project folder create a file and save it 
                to the "project" folder name the file index.html 
            </div>









        </div>
        <NextButton url="introductiontohtml" />
        </section>
    )

}

export default Gettingstarted