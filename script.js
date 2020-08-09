				function generateInfo(){
					var gender = document.getElementById("gender-select").value;
					let country = document.getElementById("country-list").value;
					let xhttp = new XMLHttpRequest();
					xhttp.onreadystatechange = function(){
						if(xhttp.readyState == 4 && xhttp.status == 200){
							let info = JSON.parse(this.responseText);
							document.getElementById('img').innerHTML = "<img class='img-thumbnail' src='" + info['photo'] + "'></img>";
							document.getElementById('name').innerHTML = info['name'];
							document.getElementById('surname').innerHTML = info['surname'];
							document.getElementById('gender').innerHTML = info['gender'];
							document.getElementById('region').innerHTML = info['region'];
							document.getElementById('title').innerHTML = info['title'];
							document.getElementById('age').innerHTML = info['age'];
							document.getElementById('phone').innerHTML = info['phone'];
							document.getElementById('birthday').innerHTML = info['birthday']['mdy'];		document.getElementById('email').innerHTML = info['email'];
							document.getElementById('password').innerHTML = info['password'];
							document.getElementById('credit_cardnumber').innerHTML = info['credit_card']['number'];
							document.getElementById('expiration').innerHTML = info['credit_card']['expiration'];
							document.getElementById('pin').innerHTML = info['credit_card']['pin'];
							document.getElementById('security').innerHTML = info['credit_card']['security'];
							

						}
					}
					xhttp.open("GET","https://uinames.com/api/?ext&gender=" + gender + "&country=" + country,true);
					xhttp.send();
				}
