var display = document.getElementById("alert")
var pay = document.getElementById("alert")
var count = 0


function note()
{
	count = count + 1

	display.innerHTML = count
}
function note1()
{
	count = count - 1
    pay.innerHTML = count

   
}
function note3()
{
	if(count > 0)
	{
	alert("sucessfully ordered")


   }

    else
   { 

   
     alert("Enter any values")

   }
}

