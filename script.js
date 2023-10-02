const header = document.getElementById("header");
const body = document.getElementById("body");
// String.fromCharCode(65) is A
// String.fromCharCode(90) is Z

// creating the header section
for (let i = 65; i <= 90; i++) {
  let char = String.fromCharCode(i);
  const bold = document.createElement("b");
  bold.innerText = char;
  header.appendChild(bold);
}


// function below is to create the rest of the table
function createAndAppendRow(rownumber) {
  const row = document.createElement("div");
  row.className = "row";

  for (let i = 64; i <= 90; i++) {
    // console.log("asdasd");
    if (i == 64) {
      const b = document.createElement("b");
      b.innerText = rownumber;
      row.appendChild(b);
    } else {
      const cell = document.createElement("div"); 
      cell.id = `${String.fromCharCode(i)}${rownumber}`;//this is how you get the location of the cell
      cell.addEventListener("focus",onCellFocus);
      cell.style.overflowY = "scroll";
      cell.style.overflow = "hidden";
      cell.contentEditable = "true";
    //the above lets us type inside the cell   

      row.appendChild(cell);
    }
  }
  body.appendChild(row);
}


for (let i = 1; i <=100; i++) {
    createAndAppendRow(i);
}


