// 宣告變數
var allData = [];
var selectList = document.querySelector('.select-list');
var buttonList = document.querySelector('.hotSopc');
var list = document.querySelector('.list');

// 獲取JSON資料
var xhr = new XMLHttpRequest();
xhr.open('get','https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97',true);
xhr.send(null);
xhr.onload = function() {
	var data = JSON.parse(xhr.responseText);
	allData = data.result.records;
	// console.log(allData);
	// updateList();
}

// 更新
function updateList(e) {
	var areaTitle = document.querySelector('.areaTitle');
	var area = e.target.value;
	var str ='';
	for (var i=0; i<allData.length; i++) {
		if (allData[i].Zone == area) {
			str+=  '<div class="col-xs-12 col-sm-6">\
					<div class="item">\
						<div class="thumbnail">\
							<div class="locationPhoto">\
								<img src="'+allData[i].Picture1+'" alt="'+allData[i].Name+'" class="img-responsive center-block">\
							</div>\
							<div class="photoTitle">\
								<h3>'+allData[i].Name+'</h3>\
								<h4>'+allData[i].Zone+'</h4>\
							</div>\
								<div class="des">\
									<p class="openTime icons-icons_clock"><time>'+allData[i].Opentime+'</time></p>\
									<p class="address icons-icons_pin">'+allData[i].Add+'</p>\
									<p class="telephone icons-icons_phone"><a href="tel:'+allData[i].Tel+'">'+allData[i].Tel+'</a></span></p>\
									<p class="Ticke_tcurrentdata">'+allData[i].Travellinginfo+'</p>\
								</div>\
							</div>\
						</div>\
					</div>'
			areaTitle.textContent = allData[i].Zone;
		}
	}
	list.innerHTML = str;
}

function clickButton(e) {
	e.preventDefault();
	var area = e.target.value;
	if (e.target.nodeName !== 'BUTTON') {return;}
	// console.log(e.target.value);
	updateList(e);
}
selectList.addEventListener('change',updateList,false);
buttonList.addEventListener('click',clickButton,false);