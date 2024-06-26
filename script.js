let data = [];

function login() {

        const name = document.getElementById('name').value.trim();
        const age = document.getElementById('age').value.trim();
        const error1 = document.getElementById('error1');
        const error2 = document.getElementById('error2');

        error1.textContent = '';
        error2.textContent = '';

        let errorMessage = '';

        if (name === "") {
            errorMessage = '! Fill this Name box';
            error1.textContent = errorMessage;
        }

        if (age === "") {
            errorMessage = '! Fill this Age box';
            error2.textContent = errorMessage;
        }

        if (errorMessage) {
            return;
        }

        const entry = { name, age };
        data.push(entry);

        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        console.log(data);
        updateTable();
    };
        function updateTable(){
         let v=""
       data.map((item) => {
             v += "<tr>"
           v += "<td>" + item.name + "</td>"
           v += "<td>" + item.age + "</td>"
           v +=
           '<td> <button type="button" class="btn btn-primary" onclick= "edit()">Edit</button>   <button type="button" class="btn btn-danger" onclick= "Delete()">Delete</button></td>';
           v += "</tr>";
          
       });
      
         document.getElementById("table-name").innerHTML = v;
       }
   
