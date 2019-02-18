CurrentPos = 0;
let Images = ["https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
              "https://fd204d43461da5218393-0b3ca8ff9ad90f3780bc876f4d2d02ae.ssl.cf1.rackcdn.com/uploads/2018/07/AV_Landscape-Hero-Contour-2993-1276x800.jpg",
              "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
              "https://upload.wikimedia.org/wikipedia/commons/e/eb/Batad_Rice_Terraces_-_different_angle_-_Adrian_Simionov.jpg",
              "http://environment.umn.edu/wp-content/uploads/2016/04/global_landscapes_initiative_directory_pages.jpg"];

function Next()
{
  Increment();
  let image = document.getElementById("Image");
  image.src = Images[CurrentPos];
}

function Previous()
{
  Decrement();
  let image = document.getElementById("Image");
  image.src = Images[CurrentPos];
}

function Increment()
{
  if(CurrentPos == 4)
  {
    CurrentPos = 0;
  }
  else
  {
    CurrentPos++;
  }
}

function Decrement()
{
  if(CurrentPos == 0)
  {
    CurrentPos = 4;
  }
  else
  {
    CurrentPos--;
  }
}
