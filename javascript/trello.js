/**
 * simple trello
 */
let myTodos = {
  day: "Monday",
  meetings: 0,
  meetDone: 0,

  addMeeting: function (num) {
    this.meetings = this.meetings + num;
  },

  addMeetingDone: function (num1) {
    this.meetDone += num1;
  },

  reset: function () {
    return `${(this.meetings = 0)} ${(this.meetDone = 0)} ${(this.day =
      "Monday")}`;
  },

  summary: function () {
    return {
      meetingPending: `${this.meetings - this.meetDone}`,
      totalMeeting: `${this.meetDone + this.meetings}`,
      day: `${this.day}`,
    };
  },
};

myTodos.addMeeting(2);
myTodos.addMeetingDone(1);
// console.log(myTodos.summary())
console.log(myTodos.reset());
