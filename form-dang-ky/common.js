function validateRegister(){
	var name, phone, birthday,content , male, female, other, check;
	name   = document.getElementById('name').value;
	phone  = document.getElementById('phone').value;
	birthday  = document.getElementById('bithday').value;
	content  = document.getElementById('content').value;
	male   = document.getElementById('male').checked;
	female = document.getElementById('female').checked;
	other  = document.getElementById('other').checked;
	check = true;
	if(name == ''){
		 alert('Bạn chưa nhập tên đăng nhập');
		document.getElementById('error_name').innerHTML = 'Please input your name!';
		check = false;
	}else{
		document.getElementById('error_name').innerHTML = '';
	}
	if(phone == ''){
		 alert('Bạn chưa nhập SDT đăng nhập');
		document.getElementById('error_phone').innerHTML = 'Please input your phone!';
		check = false;
	}else{
		document.getElementById('error_phone').innerHTML = '';
	}
	if(bithday == ''){
		 alert('Bạn chưa nhập ngay sinh đăng nhập');
		document.getElementById('error_phone').innerHTML = 'Please input your birthday!';
		check = false;
	}else{
		document.getElementById('error_phone').innerHTML = '';
	}

	if(content == ''){
		 alert('Bạn chưa nhập noi dung đăng nhập');
		document.getElementById('error_phone').innerHTML = 'Please input your birthday!';
		check = false;
	}else{
		document.getElementById('error_phone').innerHTML = '';
	}
	// if(male == false && female == false && other == false){
	if(!male && !female && !other){
		document.getElementById('error_gender').innerHTML = 'Please choose your gender!';
		check = false;
	}else{
		document.getElementById('error_gender').innerHTML = '';
	}
	if(check){
		document.getElementById('registerForm').style.display = 'none';
		document.getElementById('success').style.display = 'block';
	}

}