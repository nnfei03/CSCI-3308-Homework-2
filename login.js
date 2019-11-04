function openModal() {
    /* Note that you do NOT have to do a document.getElementById anywhere in this exercise. Use the elements below */ 

    var myInput = document.getElementById("psw");

    var confirmMyInput = document.getElementById("cpsw");
    var letter = document.getElementById("letter");
    
    var capital = document.getElementById("capital");
    
	var number = document.getElementById("number");
	var length = document.getElementById("length");    
    var match = document.getElementById("match");



myInput.onfocus = function() {
        document.getElementById("message").style.display = "block";
    }
    // When the user clicks outside of the password field, hide the message box
    myInput.onblur = function() {
        document.getElementById("message").style.display = "none";
    } 

	// When the user starts to type something inside the password field
	myInput.onkeyup = function() {
       console.log('helllooo')
        
        /* TODO: Question 1.1: Starts here */
        var lowerCaseLetters = /[a-z]/g; // : Fill in the regular experssion for lowerCaseLetters
        var upperCaseLetters = /[A-Z]/g; // : Fill in the regular experssion for upperCaseLetters
        var numbers = /[0-9]/g; // : Fill in the regular experssion for digits
        var minLength = 8; // : Change the minimum length to what what it needs to be in the question 
        /* TODO: Question 1.1: Ends here */
        

        /* TODO: Question 1.2:  Starts here */
         /*
         - So first read up on classList.  s
         - Perform a console.log(letter.classList) and check the array that you see. By default the first time, there should be just 1 element and it should be
         "invalid". "invalid" is a class that is present in login.css. 
         - Below, there are a bunch of if blocks and else blocks.
         - Each if block means that some successful condition is satisfied for our password conditon. So the red cross need to be converted to a check mark.
         - Each else block stands for a failed condition, so the green check mark needs to be a red cross again.
         - All that you need to do is, in each of the blocks, fill in the correct classNames for the remove and the add methods.
         */

        // Validate lowercase letters
        
        var lowerCaseLetters = /[a-z]/g;     
        if(myInput.value.match(lowerCaseLetters)) {             
            letter.classList.remove("invalid"); 
            letter.classList.add("valid"); 
        } else {
            letter.classList.remove("valid"); 
            letter.classList.add("invalid"); 
        }

        // Validate capital letters 
           var upperCaseLetters = /[A-Z]/g;
        if(myInput.value.match(upperCaseLetters)) { 
            capital.classList.remove("invalid"); 
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        // Validate numbers        
        var numbers = /[0-9]/g;
        if(myInput.value.match(numbers)) { 
            number.classList.remove("invalid"); 
            number.classList.add("valid"); 
        } else {
            number.classList.remove("valid"); 
            number.classList.add("invalid");
        }

        // Validate length
        var minLength = 8;
        if(myInput.value.length >= minLength) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
        /* TODO: Question 1.2:  Ends here */
    }
    
    /* TODO Question 1.3: Starts here */
    
    confirmMyInput.onkeyup = function() {
       
        var passEqualsConfPass = (myInput.value == confirmMyInput.value && myInput.value.length == confirmMyInput.value.length);
        // Validate password and confirmPassword
                // TODO: Change this to the condition that needs to be checked so that the text entered in password equals the text in confirm password
                if(passEqualsConfPass) { 
                    match.classList.remove("invalid"); 
                    match.classList.add("valid"); 
                } else {
                    match.classList.remove("valid"); 
                    match.classList.add("invalid"); 
                }        
    
       // Disable or Enable the button based on the elements in classList

                enableButton(letter, capital, number, length, match);
    };
}


function enableButton(letter, capital, number, length, match) {
    // TODO: Clear this function for students to implement    
    var button = document.getElementById('my_submit_button');
    var condition = ((letter.classList.contains("valid")) && (capital.classList.contains("invalid")) && (number.classList.contains("valid")) && (length.classList.contains("valid")) && (match.classList.contains("valid")));

     // TODO: Replace false with the correct condition
    if(condition) {       
            button.disabled = false;
        }        
        else
        {
            button.disabled = true;
        }
    }    


function onClickFunction() {

    alert("Hey! I'm all green! Well done.")
}