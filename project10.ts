var promptSync = require('prompt-sync');
var myPrompt = promptSync();
class person {
    private personality: string = "personality";

    constructor() {
        this.personality = "mystery";
    }

    public askQuestion(answer: number) {
        if (answer === 1) {
            this.personality = "extrovert";
        } else if (answer === 2) {
            this.personality = "introvert";
        } else {
            this.personality = "you are still a mystery";
        }
    }

    public getPersonality() {
        return this.personality;
    }
}

class student extends person {
    private name: string;

    constructor() {
        super();
        this.name = "";
    }

    public get Name() {
        return this.name;
    }

    public set Name(value) {
        this.name = value;
    }
}

namespace opp_intro_explained {
    class Program {
        static Main() {
            try {
                const input =myPrompt("Type 1 if you like to talk to others, and 2 if you prefer to keep yourself: ");
                const myperson = new person();
                myperson.askQuestion(Number.parseInt(input));
                console.log("You are: " + myperson.getPersonality());

                const name = myPrompt("What is your name: ");
                const mystudent = new student();
                mystudent.Name = name;
                console.log("Your name is: " + mystudent.Name + " and your personality type is: " + mystudent.getPersonality());
            } catch {
                console.log("Please enter an integer value.");
            }
        }
    }
}

export default person;