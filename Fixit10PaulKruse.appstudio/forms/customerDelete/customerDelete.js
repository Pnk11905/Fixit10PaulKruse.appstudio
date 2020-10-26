customerDelete.onshow=function(){
  drpDelete.clear()
  txtDelete_contents.style.height = "100px"
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pnk11905&pass=" + pw + "&database=pnk11905&query=" + query)
  
  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(results)
    allData = results
    if (results.length == 0)
       lblDelete.textContent = "There are no customers in the database."
    else {
      let message = ""
      for (i = 0; i <= results.length - 1; i++) {
          drpDelete.addItem(results[i][1]) }
      }
  } else
      lblDelete.textContent = "There was an error."
}

drpDelete.onclick=function(selection){
  if (typeof (selection) == 'object') {
   return
  } else {
      drpDelete.value = selection
      companyName = drpDelete.selection
      console.log(companyName)
  
      query2 = `DELETE FROM customer WHERE name = "${companyName}"`
      console.log(query)
     req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pnk11905&pass=" + pw + "&database=pnk11905&query=" + query2)
  
      if (req.status == 200) {
        results = JSON.parse(req.responseText)
        console.log(results)
        if (req.responseText == 500) 
          lblDelete.textContent = "The customer was successfully deleted!"
          else
            lblDelete.textContent = "There was an error when deleting the customer."
      } else
        lblDelete.textContent = "There was an error."

  }
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pnk11905&pass=" + pw + "&database=pnk11905&query=" + query)
  
  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(results)
    if (results.length == 0)
      lblDelete.textContent = "There are no customers in the database."
      else {
        let message = ""
        for (i = 0; i <= results.length - 1; i++) {
          message = message + results[i][1] + "\n"
          txtDelete.value = message
        }
      }
  } else
      lblDelete.textContent = "There was an error."
}
btnDeleteHome.onclick=function(){
  ChangeForm(Overview)
}
