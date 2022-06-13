function go_add_people(){
  document.location.href="add_people.html"
}

function add_people(){
  s = `<div class="card">
          <div class="card-body">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"><h5>賭鬼的稱號</h5></label>
              <input type="text" class="form-control" id="exampleFormControlInput1">
            </div>
          </div>
        </div>`
  document.getElementById("add-people").innerHTML += s;
}