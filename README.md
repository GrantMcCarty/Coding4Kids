# Coding4Kids
Web-app for the coding4kids site

To deploy changes:
make sure you have angular cli installed. any changes to the AngularProject will need to be built by running:
ng build

This will create a dist folder in AngularProject. Delete the previous one outside of this folder and then replace it with the newly generated one. 

Link to site: https://coding-4-kids-qariq.ondigitalocean.app/

RELEASE NOTES FOR CODING MILESTONE 1
For milestone 1, we have implemented a login page that prompts the user for their username and password, if they do not already have an account it also allows for a user to create one. The password information is hashed and salted for security. 
Once logged in, the user will see the Coding4Kids dashboard where they are able to "Start Next Lesson" by clicking the Start button in the middle of the screen. This route will allow the user to navigate through Lesson 1 through clicking the next button. Halfway through the lesson, there is a prompt that asks the user if they have heard of coding before, the user can click one of the choices: Yes, No, or I'm not sure. Then they can click next and continue with the lesson. Once the lesson is completed, the user can take Quiz 1 which is a 3 question quiz. If the user chooses the correct answer, they see "Correct :)". If they do not choose the correct answer choice, they see "Incorrect :(". Once the user answers the question, they can click the "Next Question button" that will lead them to the next question. At the end of the Quiz, the user sees how many questions they got correct. If the users gets 3/3 questions on the quiz correct, then they see a "Next Lesson" button where they will be able to navigate to future Lessons. If the user gets less than 3 questions correct, then they are prompted to "Repeat the Quiz" where they can retake the quiz. The user must get all questions on the quiz correct to proceed to the Next Lesson. The next lesson is not currently added to the site so right now the "Next Lesson" button does not do anything. By navigating to the upper-left hand corner of the site, the user will be able to see links to the Lessons and Dashboard page. Currently this function does not link to a Lessons page but it does lead you back to the Dashboard with the Dashboard link. 
For this milestone, with the content of Lesson 1 we thought it was best to only have 1 interactive Quiz, but make that Quiz 3 questions long. Everything else for Milestone 1 we were able to accomplish. 
