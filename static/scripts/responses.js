function getBotResponse(input) {
    if (input == "I have some queries about your college!") 
    {
        return "We would be happy to hear you out!";
    }
    else if (input == "Thank you!") 
    {
        return "Hope you got your queries cleared.";
    } 
    else if (input == "I want to know about your college fee structure") 
    {
        retrun("Feel free to mail us at" + txt.link('NEC@gmail.com'));
         
    } 

    // Simple responses
    if (input == "hello") 
    {
        return "Hello there!";
    } 
    else if (input == "goodbye") 
    {
        return "Talk to you later!";
    } 
    else 
    {
        return "We are happy to help you out!";
    }
}