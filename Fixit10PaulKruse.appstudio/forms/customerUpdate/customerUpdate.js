let oldName = ""
customerUpdate.onshow=function(){
  drpUpdate.clear()
  txtUpdate_contents.style.height = "100px"
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pnk11905&pass=" + pw + "&database=pnk11905&query=" + query)
  
  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(results)
    allData = results
    if (results.length == 0)
       lblUpdate.textContent = "There are no customers in the database."
    else {
      let message = ""
      for (i = 0; i <= results.length - 1; i++) {
          drpUpdate.addItem(results[i][1]) }
      }
  } else
    lblUpdate.textContent = "There was an error."
}

drpUpdate.onclick=function(selection){
  if (typeof (selection) == 'object') {
    return
  } else {
      drpUpdate.value = selection
      oldName = drpUpdate.selection
      console.log(oldName)
      }
    lblUpdate.textContent = oldName
}

btnUpdate.onclick=function(){
    let newName = inptUpdate.value
    let oldNameBtn = oldName
    query2 = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldNameBtn + '"'
     req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pnk11905&pass=" + pw + "&database=pnk11905&query=" + query2)

     if (req.status == 200) {
       if (req.responseText == 500) {
         lblUpdate.textContent = "You successfully updated the name!"
        } else 
          lblUpdate.textContent = "There was a problem updating the name."
     } else
         lblUpdate.textContent = "There was an error."
         
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pnk11905&pass=" + pw + "&database=pnk11905&query=" + query)
  
  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(results)
    if (results.length == 0)
      lblUpdate.textContent = "There are no customers in the database."
      else {
        let message = ""
        for (i = 0; i <= results.length - 1; i++) {
          message = message + results[i][1] + "\n"
          txtUpdate.value = message
        }
      }
  } else
      lblUpdate.textContent = "There was an error."
}
  


btnUpdateHome.onclick=function(){
  ChangeForm(Overview)
}
