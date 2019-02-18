function Validate()
{
  let field1 = document.getElementById("field1");
  let field2 = document.getElementById("field2");

  if(field1.value.length < 8)
  {
    window.alert("Password needs to be at least 8 characters long.");
  }
  else
  {
    if(field1.value != field2.value)
    {
      window.alert("Passwords do not match.");
    }
    else
    {
      window.alert("Passwords match.");
    }
  }
}
