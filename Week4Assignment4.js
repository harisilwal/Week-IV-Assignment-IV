const gameEvents = new Map([
  [17, "⚽GOAL"],
  [36, "🔃 Substitution"],
  [47, "⚽GOAL"],
  [61, "🔃 Substitution"],
  [64, "🔸 Yellow Card"],
  [69, "🔴 Red Card"],
  [70, "🔃 Substitution"],
  [72, "🔃 Substitution"],
  [76, "⚽GOAL"],
  [80, "⚽GOAL"],
  [92, "🔸 Yellow Card"],
]);

//Question 1
let eventsAll = [];
const iterator = gameEvents.values();
let i = 0;
while (i < gameEvents.size) {
  eventsAll.push(iterator.next().value);
  i++;
}
events = [...new Set(eventsAll)];
console.log(events);

//Question 2
gameEvents.delete(64);
console.log(gameEvents);

//Question 3
let totalEvent = gameEvents.size;
console.log(`An event happened, on average, every ${90 / totalEvent} minutes`);

//Question 4
