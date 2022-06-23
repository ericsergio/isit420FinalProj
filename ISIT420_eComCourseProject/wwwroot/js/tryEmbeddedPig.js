importPackage(Packages.org.apache.pig.scripting.js)
pig = org.apache.pig.scripting.js.JSPig;

helloworld.outputSchema = "word:chararray"
function helloworld() {
    return 'Hello, World';
}

function mainPigJS() {
    var P = pig.compile(" a = load '1.txt' as (a0, a1);”+
    “b = foreach a generate helloworld(); ”+
    “store b into 'myoutput'; ");

    var result = P.bind().runSingle();
}
