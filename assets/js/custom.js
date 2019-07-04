function validateform(webform){
        var blnsubmit  = false;
        console.log(webform.firstname.value);
        console.log(webform.lastname.value);
        console.log(webform.email.value);
        if(!ValidateEmail(webform.email.value)){
            webform.email.classList.add("error");
            document.getElementById("email-error").style.display = "inline-block";
            return blnsubmit;
        }else{
            webform.email.classList.remove("error");
            document.getElementById("email-error").style.display = null;
        }
        if(!ValidatePhone(webform.phone.value)){
            webform.email.classList.add("error");
            document.getElementById("phone-error").style.display = "inline-block";
            return blnsubmit;
        }else{
            webform.email.classList.remove("error");
            document.getElementById("phone-error").style.display = null;
        }
        if(!ValidateZip(webform.zip.value)){
            webform.email.classList.add("error");
           document.getElementById("zip-error").style.display = "inline-block";
            return blnsubmit;
        }else{
            webform.email.classList.remove("error");
            document.getElementById("zip-error").style.display = null;
        }
        
        return true;
    }
    function ValidateEmail(mail)
    {
        if(/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(mail))
        {
            return true;
        }else{
            return false;
        }
    }
    function ValidatePhone(phone)
    {
        if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone))
        {
           return true;
        }else{
            return false;
        }
    }    
    function ValidateZip(zip)
    {
         if (/^[0-9]{5}(?:-[0-9]{4})?$/.test(zip))
         {
            return true;
         } else {
             return false;
         }
    }