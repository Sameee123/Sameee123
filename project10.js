"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require('prompt-sync');
var myPrompt = promptSync();
var person = /** @class */ (function () {
    function person() {
        this.personality = "personality";
        this.personality = "mystery";
    }
    person.prototype.askQuestion = function (answer) {
        if (answer === 1) {
            this.personality = "extrovert";
        }
        else if (answer === 2) {
            this.personality = "introvert";
        }
        else {
            this.personality = "you are still a mystery";
        }
    };
    person.prototype.getPersonality = function () {
        return this.personality;
    };
    return person;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student() {
        var _this = _super.call(this) || this;
        _this.name = "";
        return _this;
    }
    Object.defineProperty(student.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    return student;
}(person));
var opp_intro_explained;
(function (opp_intro_explained) {
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            try {
                var input = myPrompt("Type 1 if you like to talk to others, and 2 if you prefer to keep yourself: ");
                var myperson = new person();
                myperson.askQuestion(Number.parseInt(input));
                console.log("You are: " + myperson.getPersonality());
                var name_1 = myPrompt("What is your name: ");
                var mystudent = new student();
                mystudent.Name = name_1;
                console.log("Your name is: " + mystudent.Name + " and your personality type is: " + mystudent.getPersonality());
            }
            catch (_a) {
                console.log("Please enter an integer value.");
            }
        };
        return Program;
    }());
})(opp_intro_explained || (opp_intro_explained = {}));
exports.default = person;
