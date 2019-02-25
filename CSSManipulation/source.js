function Manipulate()
{
  let BorderRedValue = document.getElementById("redValueBorder").value;
  let BorderGreenValue = document.getElementById("greenValueBorder").value;
  let BorderBlueValue = document.getElementById("blueValueBorder").value;
  let BorderWidthValue = document.getElementById("widthBorder").value;
  let BackgroundRedValue = document.getElementById("redValueBackground").value;
  let BackgroundGreenValue = document.getElementById("greenValueBackground").value;
  let BackgroundBlueValue = document.getElementById("blueValueBackground").value;
  let p = document.getElementById("paragraph");

  if(InputCheck(BorderRedValue, BorderGreenValue, BorderBlueValue, BorderWidthValue, BackgroundRedValue, BackgroundGreenValue, BackgroundBlueValue))
  {
    p.style.borderColor = "rgb(" + BorderRedValue + ", " + BorderBlueValue + ", " + BorderGreenValue + ")";
    p.style.borderWidth = BorderWidthValue;
    p.style.backgroundColor = "rgb(" + BackgroundRedValue + ", " + BackgroundBlueValue + ", " + BackgroundGreenValue + ")";
  }
}

function InputCheck(BorderRed, BorderGreen, BorderBlue, BorderWidth, BackRed, BackGreen, BackBlue)
{
  if(BorderRed < 0 || BorderRed > 255)
  {
    window.alert("Please enter a valid value for Border Red Value.");
    return false;
  }
  if(BorderGreen < 0 || BorderGreen > 255)
  {
    window.alert("Please enter a valid value for Border Green Value.");
    return false;
  }
  if(BorderBlue < 0 || BorderBlue > 255)
  {
    window.alert("Please enter a valid value for Border Blue Value.");
    return false;
  }
  if(BorderWidth < 0 || BorderWidth > 100)
  {
    window.alert("Please enter a valid value for Border Width Value.");
    return false;
  }
  if(BackRed < 0 || BackRed > 255)
  {
    window.alert("Please enter a valid value for Background Red Value.");
    return false;
  }
  if(BackGreen < 0 || BackGreen > 255)
  {
    window.alert("Please enter a valid value for Background Green Value.");
    return false;
  }
  if(BackBlue < 0 || BackBlue > 255)
  {
    window.alert("Please enter a valid value for Background Blue Value.");
    return false;
  }
  return true;
}
