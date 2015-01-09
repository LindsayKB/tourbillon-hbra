function init(){
	var bSupportsLocal = (('localStorage' in window) && window['localStorage'] != null);

	if(!bSupportsLocal){
		document.getElementById('dataForm').innerHTML = "<p>Sorry, local storage is not supported</p>";
		return;
	}

	if(window.localStorage.length != 0){
		
		var checkBoxesArr = $("input[name='option1']").map(function(){
			return $(this).val();
		}).get();
		console.log(checkBoxesArr);

		var loopThrough = 0;
		var val0 = window.localStorage.getItem('check0');
		var val1 = window.localStorage.getItem('check1');
		var val2 = window.localStorage.getItem('check2');
		var val3 = window.localStorage.getItem('check3');
		var val4 = window.localStorage.getItem('check4');
		var val5 = window.localStorage.getItem('check5');
		var val6 = window.localStorage.getItem('check6');
		var val7 = window.localStorage.getItem('check7');
		var val8 = window.localStorage.getItem('check8');
		var val9 = window.localStorage.getItem('check9');
		var val10 = window.localStorage.getItem('check10');
		var val11 = window.localStorage.getItem('check11');
		var val12 = window.localStorage.getItem('check12');
		var val13 = window.localStorage.getItem('check13');
		var val14 = window.localStorage.getItem('check14');
		var val15 = window.localStorage.getItem('check15');
		var val16 = window.localStorage.getItem('check16');
		var val17 = window.localStorage.getItem('check17');
		var val18 = window.localStorage.getItem('check18');
		var val19 = window.localStorage.getItem('check19');


		$.each(checkBoxesArr, function(){
			var valueSet = checkBoxesArr[loopThrough];
			

			console.log(valueSet);
			
			if(val0 == valueSet){
				
				$("input[value='" + val0 + "']").prop('checked', true);
				
			}
			if(val1 == valueSet){
				
				$("input[value='" + val1 + "']").prop('checked', true);
				
			}
			if(val2 == valueSet){
				
				$("input[value='" + val2 + "']").prop('checked', true);
				
			}
			if(val3 == valueSet){
				
				$("input[value='" + val3 + "']").prop('checked', true);
				
			}
			if(val4 == valueSet){
				
				$("input[value='" + val4 + "']").prop('checked', true);
				
			}
			if(val5 == valueSet){
				
				$("input[value='" + val5 + "']").prop('checked', true);
				
			}
			if(val6 == valueSet){
				
				$("input[value='" + val6 + "']").prop('checked', true);
				
			}
			if(val7 == valueSet){
				
				$("input[value='" + val7 + "']").prop('checked', true);
				
			}
			if(val8 == valueSet){
				
				$("input[value='" + val8 + "']").prop('checked', true);
				
			}
			if(val9 == valueSet){
				
				$("input[value='" + val9 + "']").prop('checked', true);
				
			}
			if(val10 == valueSet){
				
				$("input[value='" + val10 + "']").prop('checked', true);
				
			}
			if(val11 == valueSet){
				
				$("input[value='" + val11 + "']").prop('checked', true);
				
			}
			if(val12 == valueSet){
				
				$("input[value='" + val12 + "']").prop('checked', true);
				
			}
			if(val13 == valueSet){
				
				$("input[value='" + val13 + "']").prop('checked', true);
				
			}
			if(val14 == valueSet){
				
				$("input[value='" + val14 + "']").prop('checked', true);
				
			}
			if(val15 == valueSet){
				
				$("input[value='" + val15 + "']").prop('checked', true);
				
			}
			if(val16 == valueSet){
				
				$("input[value='" + val16 + "']").prop('checked', true);
				
			}
			if(val17 == valueSet){
				
				$("input[value='" + val17 + "']").prop('checked', true);
				
			}
			if(val18 == valueSet){
				
				$("input[value='" + val18 + "']").prop('checked', true);
				
			}
			if(val19 == valueSet){
				
				$("input[value='" + val19 + "']").prop('checked', true);
				
			}

			loopThrough++;
		});		

	}
	
}

function storeLocalContent(){
		
		    var checkedValues = $("input[name='option1']:checked").map(function(){
		      return $(this).val();
		    }).get(); // <----
		    console.log(checkedValues);

		    var count = 0;

		    $.each(checkedValues, function(){
		    	var name = "check" + count;
		    	var value = checkedValues[count];
		    	window.localStorage.setItem(name, value);
		    	count++;
		    	console.log(value);
		    });
}

function clearLocalContent(){
	window.localStorage.clear();
}

window.onload = init;
