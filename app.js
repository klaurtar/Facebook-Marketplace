//const express = require('express');
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

//const app = express();

nightmare
//set viewport size
.viewport(1000, 1000)

    //go to facebook.com
  .goto('https://www.facebook.com')

    //type email in the email input #email
  .type('#email', 'emailHere')

    //type password in the password input #pass
  .type('#pass', 'passwordHere')

  //click the login button #loginbutton
  .click('#loginbutton')

  //wait for page to load
  .wait(3000)

  //click on marketplace button
  .click('div.linkWrap.noCount:nth-of-type(3)')
  
  //.click('div')
  //.goto('https://www.facebook.com/marketplace/selling/')

  .wait(5000)

 
  //.wait(10000)
  
  .end()
  .then(console.log('Nightmare has ended'))
  .catch(error => {
    console.error('Search failed:', error)
  });

//app.listen(3001, console.log("The app has started"));