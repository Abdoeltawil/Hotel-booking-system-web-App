function WriteToFile(passForm) 
{
  
    setfso  = CreateObject("Scripting.FileSystemObject")  ;
    sets   = fso.CreateTextFile("File.txt", True);
 
    var Name = document.getElementById('username');
    var pass  = document.getElementById('password');
 
    s.writeline("First Name :" + Name);
    s.writeline("Last Name :" + pass);
 
    s.writeline("-----------------------------");
    s.Close();
 }