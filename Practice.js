function FirstTrial()
{

    let age = 200; // can be modified
    const name = 'Ngenoh';
    console.log(age + name);
    
    let Aron = {name: 'Ngeno', age: 20, role: 'CEO'} ;// Creating objects
    let Names = ['Aron','Kipk','her'];
    console.log(Aron.name);


}

function FirstTrial2()
{
    let avilable = true;
    let ready = false;
    console.log(avilable&& ready);// and
    console.log(avilable||ready);// or
    console.log(!(avilable&& ready));// logicallly not
}

function FirstTrial3()
// Nullish Coalescing Operator
{
    let Name = null;
    let defaultname = Name ?? 'Guest';
    console.log(defaultname);
}
function FirstTrial4(Name)
{
   // return `Hello, ${Name}`;
    //Function Expression
const add = function(a,b){
    return a+b;
};

// function arrow
console.log(add(2,3));

const ger = (a,b,c) => a*b - c;
console.log(ger(1,2,3))
    
}
//console.log(FirstTrial4('Aregn'));





