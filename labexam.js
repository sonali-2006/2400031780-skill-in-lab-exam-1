<!DOCTYPE html>
<html>
<head>
  <title>Employee Table</title>
  <style>
    table { border-collapse: collapse; width: 60%; margin: 20px auto; }
    th, td { border: 1px solid #888; padding: 8px; text-align: left; }
    th { background: #ddd; cursor: pointer; }
    tr:nth-child(even) { background: #f9f9f9; }
    tr:hover { background: #eee; }
  </style>
</head>
<body>
  <table id="empTable">
    <tr>
      <th onclick="sortTable('name')">Name</th>
      <th onclick="sortTable('dept')">Department</th>
      <th onclick="sortTable('salary')">Salary</th>
    </tr>
  </table>

  <script>
    let data = [
      {name:"Alice", dept:"HR", salary:50000},
      {name:"Bob", dept:"IT", salary:65000},
      {name:"Charlie", dept:"Finance", salary:55000},
      {name:"Diana", dept:"Marketing", salary:60000}
    ], sortKey=null, asc=true;

    function render(){
      let t=document.getElementById("empTable");
      t.innerHTML=`<tr>
        <th onclick="sortTable('name')">Name</th>
        <th onclick="sortTable('dept')">Department</th>
        <th onclick="sortTable('salary')">Salary</th></tr>` +
        data.map(d=>`<tr><td>${d.name}</td><td>${d.dept}</td><td>${d.salary}</td></tr>`).join('');
    }

    function sortTable(k){
      asc = (sortKey===k)?!asc:true;
      sortKey=k;
      data.sort((a,b)=>(a[k]>b[k]?1:-1)*(asc?1:-1));
      render();
    }

    render();
  </script>
</body>
</html>
