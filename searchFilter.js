function search()

{

    

    const searchbox = document.getElementById("search-box").value.toLowerCase();
    const recipeItems =  document.querySelectorAll(".category");
    const recipes = document.querySelectorAll(".recipeItem");
    const recipeName = document.getElementsByTagName("h4");
	let searchResults = document.getElementById("sResults");
    var category = document.getElementsByClassName("btn active")[0].innerHTML;
   
   if( category.includes("all"))
    	category = "";

    let matchCount = 0;

    for(var i=0; i < recipes.length; i++)
    {
        let match = recipes[i].getElementsByTagName('h4')[0]; //get the first h4 element, index[0]

        if(match)
        {
          //  alert(" match.innerHTML : " +  match.innerHTML);
            
            let textvalue = ( match.textContent || match.innerHTML).toLowerCase();
            
          //  alert("textValue : " + textvalue);
            
            if(textvalue.indexOf(searchbox) > -1  recipeItems[i].className.includes(category) )
            {
				matchCount+=1;
                recipeItems[i].style.display = "block";
            //    alert(searchbox + "is in " + textvalue);
			
            }
            else
            {
				
				
                recipeItems[i].style.display = "none";
              //  alert(searchbox + "is NOT in " + textvalue);
              //  alert(searchbox.value + "is in " + textvalue);
			  //document.getElementsByClassName("main").innerHTML = "<div><h2> Sorry, No match Found!</h2></div>";
            }
        }
		
    }
	if(matchCount == 0)
	{
		searchResults.style.display = "";
		searchResults.innerHTML = "Sorry, No match Found!";
	}
	else
	{
		searchResults.style.display = "none";
	}
		//alert("No match found");
	
	//alert("Match Count:" + matchCount);
	
}
