ride;
function scuberGreetingForFeet(feet = 199){
    if (feet <= 400){
      return "This one is on me!";

    } else if (feet >= 400 && feet <= 2000){
      return "That will be twenty bucks.";

    } else if (feet > 2000 && feet <= 2500){
      return "I will gladly take your thirty bucks.";

    } else {
      return "No can do.";
    }
}

function ternaryCheckCity(city="Pittsburgh"){
    return (city === "NYC") ? "Ok, sounds good." : "No go."
  }


  function switchOnCharmFromTip(response = "not as generous"){
    // Write your code here!
      switch (response){
        case 'generous':
              return 'Thank you so much.';
        case 'not as generous':
              return 'Thank you.';
        default:
              return 'Bye.';
      }
  
      }

