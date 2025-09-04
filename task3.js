// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg


    this.printMail = function (){
      console.log(this.subject + ":" + this.message)
    }
}

  const subj = process.argv[2];
  const msg = process.argv[3];
   
  const newMail = new Mail(subj, msg);

  // Type your code above this line!
  

  newMail.printMail()
  
