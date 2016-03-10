
function valid (form) {
	var fail = false;
	var name = form.name.value;
	var password = form.password.value;
	var Repassword = form.Repassword.value;
	if(name == "" || name == "")
		fail = "Вы не ввели свое имя";
	 else if(password == "")
		fail = "Вы не ввели пароль"; 
	else if(password == Repassword)
		fail = "пароль не совпадают"; 
	if(fail) {   
		alert(fail);
	return false;
}else {
	return true;
}
	});    

