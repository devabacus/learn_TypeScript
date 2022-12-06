function doSomething(fn) {
    console.log(fn.description + " returned " + fn(3));
}
const fName = (num) => {
    return num > 5;
};
fName.description = "is it more than 5?";
doSomething(fName);
//# sourceMappingURL=hello.js.map