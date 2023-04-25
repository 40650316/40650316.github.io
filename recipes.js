function search()

{

    

    const searchbox = document.getElementById("search-box").value.toLowerCase();
    const recipeItems = document.getElementById("recipesAll");
    const recipes = document.querySelectorAll(".recipeItem");
    const recipeName = document.getElementsByTagName("h3");

  

    for(var i=0; i < recipeName.length; i++)
    {
        let match = recipes[i].getElementsByTagName('h3')[0]; //get the first h3 element, index[0]

        

        

        if(match)
        {
          //  alert(" match.innerHTML : " +  match.innerHTML);
            
            let textvalue = ( match.textContent || match.innerHTML).toLowerCase();
            
          //  alert("textValue : " + textvalue);
            
            if(textvalue.indexOf(searchbox) > -1)
            {
                recipes[i].style.display = "";
            //    alert(searchbox + "is in " + textvalue);
            }
            else
            {

                recipes[i].style.display = "none";
              //  alert(searchbox + "is NOT in " + textvalue);
              //  alert(searchbox.value + "is in " + textvalue);
            }
        }
    }
}