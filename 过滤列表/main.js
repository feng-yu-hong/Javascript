
//get input element
let fliterinput =document.getElementById("fliterinput");

//add event listenner
fliterinput.addEventListener('keyup',fliterNames);

function fliterNames(){
    //get value of input
    let fliterValue = document.getElementById('fliterinput').value.toUpperCase();

    //get ul names
    let ul = document.getElementById('names');

    //get li form ul
    let li = ul.querySelectorAll('li.collection-item');

    //loop through collection-item li

    for(let i = 0;i < li.length; i++){
        let a = li[i].getElementsByTagName("a")[0];

        //if matched
        if(a.innerHTML.toUpperCase().indexOf(fliterValue) > -1){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }
}