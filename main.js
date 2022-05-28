function fetch_page() {
       fetch('data/read_data.py')
       .then(Response => Response.json())
       .then(json => {

         s='';
         for(i=0;i<json.length;i++){
         	num = i+1;
         	s += `<tr>`;
         	s += `<th>${num}</th><td>${json[i].name}</td><td>${json[i].data}</td>`;
         	s += `</tr>`;
         }

         output = document.getElementById('output').innerHTML = s;
       })
   }

fetch_page();