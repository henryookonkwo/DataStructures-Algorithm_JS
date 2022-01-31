//Sets- these are kind of an array, except there are no duplicate items and the values are not in any particular order
// The common use of sets is to check for the presence of an item

function mySet() {
  //the var collection will hold set
  let collection = [];

  //this method will check for the presence of an element and return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  //this method will return all the values in the set
  this.values = function () {
    return collection;
  };

  //this method will add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  //this method will remove an element from a set
  //in ES6, remove is "delete"
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element); //find what index of element is
      collection.splice(index, 1); //Remove the element from the array starting at the index
      return true;
    }
    return false;
  };

  //this method will return the sixe of the collection
  this.size = function () {
    return collection.length;
  };

  //The following methods below are not in the ES6 implementaion of the Set, but are ofton included in Sets
  //this will return the union of two sets
  this.union = function (otherSet) {
    var unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  //this method will return the intersection of two sets as a new set
  this.intersection = function (otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  //this method will return the difference of two sets as a new set
  this.difference = function (otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return differenceSet;
  };

  //this method will test if the set is a subset of a different set
  this.subset = function (otherSet) {
    let firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

let setA = new mySet();
let setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setA.difference(setB).values());

let setC = new Set();
let setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values()); // The ES6 implemetation shows the Set iterator for the values
setD.delete("a"); // Here we use delete in ES6
console.log(setD.values());
console.log(setD.has("a"));
console.log(setD.add("d "));
