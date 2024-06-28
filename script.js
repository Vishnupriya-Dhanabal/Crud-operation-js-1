let data = [];
    let editIndex = -1;

    // document.addEventListener('DOMContentLoaded', loadDataFromLocalStorage);

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

      if (editIndex >= 0) {
        data[editIndex] = entry;
        editIndex = -1;
      } else {
        data.push(entry);
      }

      document.getElementById('name').value = '';
      document.getElementById('age').value = '';

      saveToLocalStorage();
      updateTable();
    }

    function saveToLocalStorage() {
      localStorage.setItem('data', JSON.stringify(data));
    }

    function loadDataFromLocalStorage() {
      const savedData = localStorage.getItem('data');
      if (savedData) {
        data = JSON.parse(savedData);
        updateTable();
      }
    }

    function updateTable() {

      let v = "";
      data.forEach((item, index) => {
        v += "<tr>";
        v += "<td>" + item.name + "</td>";
        v += "<td>" + item.age + "</td>";
        v += '<td><button type="button" id="but" onclick="edit(' + index + ')">Edit</button>';
        v += '<button type="button" id="ton" onclick="deleteEntry(' + index + ')">Delete</button></td>';
        v += "</tr>";
      });

      document.getElementById("table-name").innerHTML = v;
    }

    function edit(index) {
      const entry = data[index];
      document.getElementById('name').value = entry.name;
      document.getElementById('age').value = entry.age;
      editIndex = index;
    }

    function deleteEntry(index) {
      data = data.filter((entry, i) => i !== index);
      saveToLocalStorage();
      updateTable();
    }





       