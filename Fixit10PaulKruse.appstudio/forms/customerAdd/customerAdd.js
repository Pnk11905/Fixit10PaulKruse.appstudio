customerAdd.onshow=function(){
  drpAdd.clear()
  txtAdd_contents.style.height = "100px"
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pnk11905&pass=" + pw + "&database=pnk11905&query=" + query)
  
  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(results)
    allData = results
    if (results.length == 0)
       lblAdd.textContent = "There are no customers in the database."
    else {
      let message = ""
      for (i = 0; i <= results.length - 1; i++) {
          drpAdd.addItem(results[i][1]) }
      }
  } else
      lblAdd.textContent = "There was an error."
}

btnAdd.onclick=function(){
  query2 = `INSERT INTO customer (name, street, city, state, zipcode) VALUES ("Jesse Antiques", "1113 F St", "Omaha", "NE", "68178")`
  console.log(query)
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pnk11905&pass=" + pw + "&database=pnk11905&query=" + query2)
  
  if (req.status == 200) {
        results = JSON.parse(req.responseText)
        console.log(results)
        if (req.responseText == 500) 
          lblAdd.textContent = "The customer was successfully added!"
          else
            lblAdd.textContent = "There was an error when adding the customer."
      } else
        lblAdd.textContent = "There was an error."
  
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pnk11905&pass=" + pw + "&database=pnk11905&query=" + query)
  
  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(results)
    if (results.length == 0)
      NSB.MsgBox("There are no customers in the database.")
      else {
        let message = ""
        for (i = 0; i <= results.length - 1; i++) {
          message = message + results[i][1] + "\n"
          txtAdd.value = message
        }
      }
  } else
      lblAdd.textContent = "There was an error."
}


btnAddHome.onclick=function(){
  ChangeForm(Overview)
}
