//L502 დაწერეთ კოდი რომელიც ამოწმებს ცარიელია თუ არა მოცემული ელემენტი


let isEmpty = document.getElementById("empty-list");

if(isEmpty.children.length == 0){
    alert(" ცარიელია");
}

else if (isEmpty.children.length > 0){
    alert("ცარიელი სია ცარიელი არ არის !.");
}