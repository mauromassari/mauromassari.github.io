fetch("./db.json") //fai una chiamata a questo indirizzo
//then= "quando hai finito"

.then((response) => response.json()) //trasforma la risposta alla chiamata in un JSON
.then((data) => {
  //quando hai finito di trasfrmare la risposta in JSON
  //console.log("Success:", data); //in JSON fai le seguenti cose

  data.utenti.forEach((element) => {
    console.log(element.nome)

    let p = document.createElement("p");
    p.innerHTML = element.nome;
    let divTest = document.querySelector("#test");
    divTest.appendChild(p);
    divTest.classList.add("mt-5");
  });
    
  /*
    data.forEach((element) => {
      let tBody = document.querySelector("tbody");
      
      let tr = document.createElement("tr");

      let td = document.createElement("td");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");
      let pulsante = document.createElement("button");
      let td6 = document.createElement("td");
      let pulsante1 = document.createElement("button");
      let linkPuls1 = document.createElement("a");
      
      let idModifyUser = element.id;
      linkPuls1.setAttribute("href", "modifyUser.html?id=" + idModifyUser)
      linkPuls1.setAttribute("target", "_blank")

      td.innerText = element.name;
      td1.innerText = element.lastname;
      td2.innerText = element.email;
      td3.innerText = element.password;
      td4.innerText = element.role.nicename;
      pulsante.innerText = "Remove";
      pulsante1.innerText = "Modify";

      pulsante.classList.add(
        "btn",
        "btn-warning",
        "btn-sm",
        "background-color"
      );
      pulsante1.classList.add(
        "btn",
        "btn-warning",
        "btn-sm",
        "background-color"
      );

      tr.appendChild(td);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5).append(pulsante);
      tr.appendChild(td6).append(pulsante1);
      pulsante1.append(linkPuls1);

      tBody.appendChild(tr);


      //PULSASNTE PER CANCELLARE USER
      pulsante.addEventListener("click", () => {

        fetch("https://sofin.wp-admin.it/public/api/v1/user/" + element.id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        })

        .then(()=>{
          tr.remove()
        })  
      }); //-------------------------------
      

      //PULSASNTE PER MODIFICARE USER
      pulsante1.addEventListener("click", () => {

        history.pushState({}, "", linkPuls1);
        location.href = linkPuls1;

      });
    });*/
  });
