<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Document</title>
</head>
<body>
 <form action="insert.php" method="post">
  <label>First name: </label><input type="text" name="firstname"><br/>
  <label>Last name: </label><input type="text" name="lastname"><br/>
  <label>Gender</label>
  <input type="radio" name="male"><label>Male</label>
  <input type="radio" name="female"><label>Female</label>
  <input type="radio" name="other"><label>Others</label><br/>
  <label>User email: </label><input type="text" name="useremail"><br/>
  <label>Password: </label><input type="password" name="passsword"><br/>
  <input type="submit" name="submit">
 </form>
</body>
</html>