let globalId = 1;

function createChild(title, description, id) {
  const child = document.createElement("div");
  const firstGrandParent = document.createElement("div");
  firstGrandParent.innerHTML = title;
  const secondGrandParent = document.createElement("div");
  secondGrandParent.innerHTML = description;
  const thirdGrandParent = document.createElement("button");
  thirdGrandParent.innerHTML = "Mark as done";
  thirdGrandParent.setAttribute("onclick", `markAsDone(${id})`);
  child.appendChild(firstGrandParent);
  child.appendChild(secondGrandParent);
  child.appendChild(thirdGrandParent);
  child.setAttribute("id", id);
  return child;
}

function updateDomAccToState(state) {
  const parent = document.getElementById("todos");
  parent.innerHTML = "";
  for (let i = 0; i < state.length; i++) {
    const child = createChild(
      state[i].title,
      state[i].description,
      state[i].id,
    );
    parent.appendChild(child);
  }
}

window.setInterval(async ()=>{
  const res  =await fetch("http://localhost:3000/sumserver/randomTodo")
  const json = await res.json();
  updateDomAccToState(json)
},1000)



