function openNewPage(id){
	$('.page').hide();
	$('#'+ id).show();


	if (id == "page_bahee_list") {


		$("#table_bahee_list tbody").html('');

 let bahee_list = store.get('bahee_list');
    if (typeof bahee_list == "undefined") {
    	$("#table_bahee_list tbody").html('<tr><td colspan="3">No record found...</td></tr>');
    } else {

    	let html = '';
    	let i = 0;
    	for(let r of bahee_list){
    		i++;

    		html += "<tr>";
			html += "<td>"+ i +"</td>";
			html += '<td><span onclick="openBaheeRecord('+ r.id +')">'+ r.bahee_name +'</span></td>';
			html += '<td><button onclick="deleteBahee('+ r.id +')">X</button></td>';
    		html += "</tr>";

    	}
    	$("#table_bahee_list tbody").html(html);

    }


	}
}

function deleteBahee(id){
	if (id && confirm("क्या आप इसे हटाना चाहते है ?")) {

		let bahee_list = store.get('bahee_list');
		if (typeof bahee_list != "undefined") {
			for(let index in bahee_list){
				if (bahee_list[index].id == id) {
				bahee_list.splice(index, 1);
				break;
				}
			}
		}
store.set('bahee_list', bahee_list);
setTimeout(()=>{
openNewPage('page_bahee_list');
},1000);
	}
}


function openBaheeRecord(id){
	if (id) {
		let bahee_detail = null;
		let bahee_list = store.get('bahee_list');
		if (typeof bahee_list != "undefined") {
			for(let index in bahee_list){
				if (bahee_list[index].id == id) {
					bahee_detail = bahee_list[index];
				break;
				}
			}
		}

		if (bahee_detail) {
 $('#b_rec_name').html(bahee_detail.bahee_name);
 $('#b_rec_detail').html(bahee_detail.bahee_detail);

openNewPage('page_b_rec_list');
		}
	}
}



var default_page = "page_bahee_list";

// var default_page = "page_b_rec_list";

$(document).ready(function(){
  

openNewPage(default_page);


$('#form_new_bahee').on('submit', function(e){
   e.preventDefault();
   
    var form = $(this);

    var bahee_name = $('#bahee_name').val();    
    var bahee_detail = $('#bahee_detail').val();
    var id = Date.now();

    var data = {id,bahee_name,bahee_detail};

    console.log(data);
    let bahee_list = store.get('bahee_list');
    if (typeof bahee_list == "undefined") {
    	bahee_list = [];
    }
    bahee_list.push(data);
    alert("Success...");

    store.set('bahee_list', bahee_list);
    setTimeout(()=>{
openNewPage('page_bahee_list');
},1000);
  });
});

