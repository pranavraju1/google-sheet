// we manage the option related problems

// active cell defines which cell is selected / active initially it will be null indicating that no cell is selected
let activeCell = null;
const activeCellelement = document.getElementById("active-cell");


const initialoptionsstate = {
    fontFamily:"",
    isBoldSelected:false,
    isItalicSelected:false,
    isUnderlineSelected:false,
    textAlign:'left',//it can have left center and right
    textColor:"#000",
    backgroundColor:"#fff",
    fontSize:14,
};


// this function gets the value of the cell id
// below function will be trigered when the cell is focused
function onCellFocus(e){

    // whenever the cell is focused change the value of the active cell to the value of the id
    activeCell = e.target;
    activeCellelement.innerHTML=e.target.id;    
    let a =document.getElementsByClassName("Q")
    console.log(a)
}


// this function will be triggered when the user clicks on the bold button
function onClickBold(boldButton){

    // this is used to toggle the button ie on the first click the class is added
    // on the second click the class is removed
    // the toggle adds and removes the class active-option
    boldButton.classList.toggle("active-option");

    // this condition is to check the font-weight and change it
    if(activeCell){
        const fontweight = getComputedStyle(activeCell).fontWeight;
        if(fontweight === "400"){
            activeCell.style.fontWeight = "600";
        }else{
            activeCell.style.fontWeight = "400";
        }
    }
}


function onClickItalic(italicbutton){
    italicbutton.classList.toggle("active-option");
    if(activeCell){
        const fontstyle = getComputedStyle(activeCell).fontStyle;
        if(fontstyle == "normal"){
            activeCell.style.fontStyle = "italic";
        }else{
            activeCell.style.fontStyle = "normal";
        }
    }
}

function onClickUndreline(undbutton){
    undbutton.classList.toggle("active-option");
    if(activeCell){
        const underline = getComputedStyle(activeCell).textDecoration;
        if(underline == "none solid rgb(0, 0, 0)"){
            activeCell.style.textDecoration = "underline solid rgb(0, 0, 0)";
        }else{
            activeCell.style.textDecoration = "none solid rgb(0, 0, 0)";
        }
    }
}

function onClickLeft(leftbutton){
    leftbutton.classList.toggle("active-option");
    if(activeCell){
        const leftalign = getComputedStyle(activeCell).textAlign;
        if(leftalign != "start")activeCell.style.textAlign = "start";
    }
}

function onClickCenter(centerbutton){
    centerbutton.classList.toggle("active-option");
    if(activeCell){
        const centeralign = getComputedStyle(activeCell).textAlign;
        if(centeralign != "center")activeCell.style.textAlign = "center";
    }
}

function onClickRight(rightbutton){
    rightbutton.classList.toggle("active-option");
    if(activeCell){
        const rightalign = getComputedStyle(activeCell).textAlign;
        if(rightalign != "end")activeCell.style.textAlign = "end";
    }
}

function onChangeTextColor(colors){
    let selectedcolor = colors.value
    if(activeCell){
        console.log(colors.value);
        activeCell.style.color = selectedcolor;
    }
}

function onChangeBGColor(colors){
    let selectedcolor = colors.value
    if(activeCell){
        console.log(colors.value);
        activeCell.style.backgroundColor = selectedcolor;
    }
}



function fontsize(selectElement) {
    // Get the selected option
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var selectedValue = selectedOption.value;
    changefontsize(selectedValue);
  }
 function changefontsize(value){
    if(activeCell){
        if(value == "14"){
            activeCell.style.fontSize = "14px";
            console.log(activeCell.style.fontSize);
        }else if(value == "16"){
            activeCell.style.fontSize = "16px";
            console.log(activeCell.style.fontSize);
        }else if(value == "18"){
            activeCell.style.fontSize = "18px";
            console.log(activeCell.style.fontSize);
        }
    }
 }
  


  function funt(selectElement){
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var selectedValue = selectedOption.value;
    changefont(selectedValue);
  }
  function changefont(value){
    if(activeCell){
        if(value == "MonoSpace"){
            activeCell.style.fontFamily = "MonoSpace";
        }else if(value == "Sans-serif"){
            activeCell.style.fontFamily = "Sans-serif";
        }else if(value == "Fantasy"){
            activeCell.style.fontFamily = "Fantasy";
        }
    }
 }

let text;
 function onClickcut(val){
    text = activeCell.innerText;
    activeCell.innerText="";
 }
 function onClickCopy(val){
    text = activeCell.innerText;
 }
 function onClickPaste(val){
    activeCell.innerText=text;
 }