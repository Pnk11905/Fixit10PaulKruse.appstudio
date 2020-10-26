// global variables
let req = ""
let query = ""
let query2 = ""
let results = ""
let allData = []
let pw = "Hoffenheim1899!"

customerSelect.onshow=function(){
  drpSelect.clear()
  txtSelect_contents.style.height = "100px"
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pnk11905&pass=" + pw + "&database=pnk11905&query=" + query)
  
  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(results)
    allData = results
  
    if (results.length == 0)
       lblSelect.textContent = "There are no customers in the database."
    else {
      let message = ""
      for (i = 0; i <= results.length - 1; i++) {
          drpSelect.addItem(results[i][1]) }
      }
  } else
      lblSelect.textContent = "There was an error."
}

drpSelect.onclick=function(selection){
  let companyName = ""
  let state = ""
  let fstate = ""
  let finalNames = []
  
  if (typeof (selection) == 'object') {
    return
  } else {
      drpSelect.value = selection
      companyName = drpSelect.selection
      for (i = 0; i <= allData.length - 1; i++) {
        if (companyName == allData[i][1]) {
          state = allData[i][4]
        } else
          fstate = allData[i][4]
      }
      
      query2 = `SELECT name FROM customer WHERE state = "${state}"`
      console.log(query2)
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pnk11905&pass=" + pw + "&database=pnk11905&query=" + query2)
          
      if (req.status == 200) {
        results = JSON.parse(req.responseText)
        console.log(results)
        if (results.length == 0) {
          lblSelect.textContent = "There are no customers in the database."
        } else {
            let message = ""
            for (i = 0; i <= results.length - 1; i++) {
              message = message + results[i][0] + "\n"
              txtSelect.value = message 
              }
            }
      } else
              lblSelect.textContent = "There was an error."
  }
}
btnSelectHome.onclick=function(){
  ChangeForm(Overview)
}
