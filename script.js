function Dynmically()
{
    const Body = document.body;
    const  Btn = document.getElementById("Btn");
    Btn.addEventListener("click", () => {
        
        Body.style.color = "red";


    } )
   
    const Add = document.getElementById("Add");
    const objects = document.getElementById("objects");


    Add.addEventListener("click", () => {
        const New = document.createElement("li");
        New.textContent = "NewItem";
        objects.appendChild(New);
        

    })

    const remove = document.getElementById("Remov")
    Remov.addEventListener("click", () => {
    if (objects.lastElementChild) {
        objects.removeChild(objects.lastElementChild);
    }
    
}
