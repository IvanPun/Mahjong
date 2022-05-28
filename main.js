	function fetch_page() {
        fetch('data/read_data.py')
        .then(Response => Response.json())
        .then(json => {

          s='';
          for(i=0;i<json.length;i++){
          	s += `<tr>`;
            s += `<th>${json[i].flight}</th><td>${json[i].start}</td><td>${json[i].end}</td><td>${json[i].stime}</td><td>${json[i].etime}</td><td style="color:blue;cursor: pointer;" onclick="dayone(this,'${json[i].flight}','${json[i].start}','${json[i].end}','${json[i].stime}','${json[i].etime}')">預約</td><td style="color:blue;cursor: pointer;" onclick="daytwo(this,'${json[i].flight}','${json[i].start}','${json[i].end}','${json[i].stime}','${json[i].etime}')">預約</td><td style="color:blue;cursor: pointer;" onclick="daythree(this,'${json[i].flight}','${json[i].start}','${json[i].end}','${json[i].stime}','${json[i].etime}')">預約</td><td><input type="text" class="form-control" aria-label="1" aria-describedby="addon-wrapping" value="1" id="${json[i].flight}"></td>`;
            s += `</tr>`;
          }

          output = document.getElementById('output').innerHTML = s;
        })
    }