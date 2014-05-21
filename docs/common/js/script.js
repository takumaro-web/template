/* ----------------------------------------------------------------------------------
　KIRIN Future Checker
---------------------------------------------------------------------------------- */
/*
javascript:

var DD,Year,Month,Day,l;

DD = new Date();
Year = DD.getFullYear();
Month = DD.getMonth()+1;
Month = "0"+ Month;
Day = DD.getDate()+1;
l=location.href;

	if(l.match(/\?date=/)) {
		
		l = l.replace(/\?date=/,"");
		l = l.replace(Year,"");
		dateTime = window.prompt("日付と時間を入力してください。",l.match(/\d{8}/));
		l = l.replace(/\d{8}/,"");
		if(dateTime.match(/^\d{8}$/)){
			location.href = l + '?date='+ Year + dateTime;
		}else if(dateTime != "" && dateTime != null){
			window.alert(dateTime + '\n error!!');
		}else{
			window.alert('cancellation');
		}

	}else{
		if(Day===31){
			dateTime = window.prompt("日付と時間を入力してください。\n ex)05210000", Month+"01"+"0000");			
		}else{
			dateTime = window.prompt("日付と時間を入力してください。\n ex)05210000", Month+Day+"0000");
		}	
		
		if(dateTime.match(/^\d{8}$/)){
			location.href = document.URL + '?date='+ Year + dateTime;
		}else if(dateTime != "" && dateTime != null){
			window.alert(dateTime + '\n error!!');
		}else{
			window.alert('cancellation');
		}
	}
*/

//Bookmarklet
//javascript:var DD,Year,Month,Day,l;DD=new Date();Year=DD.getFullYear();Month=DD.getMonth()+1;Month="0"+Month;Day=DD.getDate()+1;l=location.href;if(l.match(/\?date=/)){l=l.replace(/\?date=/,"");l=l.replace(Year,"");dateTime=window.prompt("日付と時間を入力してください。",l.match(/\d{8}/));l=l.replace(/\d{8}/,"");if(dateTime.match(/^\d{8}$/)){location.href=l+'?date='+Year+dateTime;}else if(dateTime !="" && dateTime !=null){window.alert(dateTime+'\n error!!');}else{window.alert('cancellation');}}else{if(Day===31){dateTime=window.prompt("日付と時間を入力してください。\n ex)05210000",Month+"01"+"0000");}else{dateTime=window.prompt("日付と時間を入力してください。\n ex)05210000",Month+Day+"0000");}if(dateTime.match(/^\d{8}$/)){location.href=document.URL+'?date='+Year+dateTime;}else if(dateTime !="" && dateTime !=null){window.alert(dateTime+'\n error!!');}else{window.alert('cancellation');}}

/* ----------------------------------------------------------------------------------
　KIRIN Test Server Switcher
---------------------------------------------------------------------------------- */

/*
javascript:
l=location.href;

if (l.match(/.test/)){
	l = l.replace(/.test/,"");
	location.href=l;
}else{
	l = l.replace(/www./,"www.test.");
	location.href=l;
}

//Bookmarklet
javascript:var l=location.href;if(l.match(/.test/)){l=l.replace(/.test/,"");location.href=l;}else{l=l.replace(/www./,"www.test.");location.href=l;}

*/

