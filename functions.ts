type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(3));
  }

  const fName = (num:number) => {
    return num > 5
};
fName.description = "is it more than 5?"

doSomething(fName)

