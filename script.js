//Name validation

function nameCheck ()
{
    const name1 = document.getElementsByName("name1")[0].value.trim() ;
    const name2 = document.getElementsByName("name2")[0].value.trim() ;
    const full_name = name1+" "+name2 ;

    let p=document.getElementById("nameError") ;
    let isvalid = /^[A-Za-z]+([ '-][A-Za-z]+)*$/.test(full_name) && name1.length >= 3 && name2.length >= 3;

    if (isvalid == false)
    {
        p.innerHTML="Please enter a valid name" ;
        p.style.color="red" ;
        p.style.fontSize="16px"
        return false ;
    }
    else
    {
        p.innerHTML="" ;
        return true;
    }

}

//email validation

function emailCheck ()
{
    const email = document.getElementsByName("email")[0].value.trim() ;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const p = document.getElementById ("emailError") ;

    if (! emailPattern.test(email))
    {
        p.innerHTML = "Please enter a valid email address" ;
        p.style.color="red" ;
        p.style.fontSize="16px" ;
        return false ;
    }
    else
    {
        p.innerHTML = "" ;
        return true ;
    }
}

//password validation
function passwordCheck()
{
    const password = document.getElementsByName("pass")[0].value ;
    
    const p = document.getElementById("passError") ;

    if (password.length <6 )
    {
        p.innerHTML = "Enter minimum 6 character" ;
        
        p.style.color="red" ;
        p.style.fontSize="16px" ;
        return false ;
    }
    else
    {
        p.innerHTML="" ;
        return true ;
    }
}


//all form validation

function validForm()
{
    if (nameCheck() && emailCheck() && passwordCheck())
        return true ;
    else 
    {
        alert("Your form is invalid") ;
        return false ;
    }
}