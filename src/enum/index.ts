enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

namespace Weekday {
  export function isBusinessDay(day: Weekday) {
    switch (day) {
      case Weekday.Saturday:
      case Weekday.Sunday:
        return false;
      default:
        return true;
    }
  }
}

const sun = Weekday.Sunday;

console.log(Weekday.isBusinessDay(Weekday.Monday)); // true
console.log(Weekday.isBusinessDay(sun));

export {};
