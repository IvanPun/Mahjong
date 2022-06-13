function go_add_people(){
  document.location.href="add_people.html"
}

function add_people(){
  s = `<div class="card">
          <div class="card-body">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"><h5>賭鬼的稱號</h5></label>
              <button type="button" class="btn btn-danger" onclick="delete_form()" id="delete_form"><i class="bi bi-person-x-fill"></i></button>
              <input type="text" class="form-control" id="exampleFormControlInput1">
            </div>
          </div>
        </div>`
  document.getElementById("add-people").innerHTML += s;
}

function delete_form(){
  s = `<div class="card">
          <div class="card-body">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"><h5>賭鬼的稱號</h5></label>
              <button type="button" class="btn btn-danger" onclick="delete_form()" id="delete_form"><i class="bi bi-person-x-fill"></i></button>
              <input type="text" class="form-control" id="exampleFormControlInput1">
            </div>
          </div>
        </div>`
  document.getElementById("add-people").innerHTML -= s;
}