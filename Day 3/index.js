


// DAY 3 Interview Questions

//1. Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button
//2. Write code to get 1st H1 element from a webpage using DOM
//3. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
//4. Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
//5. Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text




    // ******************************* SOLUTIONS ******************************************************************


//1. Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button


function addHeading() {
    // Create a new <h1> element
    const newHeading = document.createElement('h1');
    
    // Set the text of the new <h1> tag
    newHeading.textContent = 'MERN stack';
    
    // Get the container div where the heading will be added
    const container = document.getElementById('container');
    
    // Append the new heading to the container
    container.appendChild(newHeading);
  }
  
  addHeading();


// 2. Write code to get 1st H1 element from a webpage using DOM.

// get the first h1 element from the webpage

   const firstH1 = document.querySelector('h1');
   console.log(firstH1);



   //3. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

   function ShowTime() {

    var date = new Date(); 
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var time = h + ':' + m + ':' + s + '';
    document.getElementById("MyClock").innerText = time;
    setTimeout(ShowTime , 1000);
}
ShowTime();




// 4. Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"


    // Function to replace the content of the h1 element
    function replaceText() {
      // Get the h1 element by its id
      const contentElement = document.getElementById('content');
      
    
      contentElement.textContent = 'Welcome to Elevation academy';
    }




    //5.  Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

    function hideText(){
        const contentElement = document.getElementById('content2');
        contentElement.style.display = 'none';
    }