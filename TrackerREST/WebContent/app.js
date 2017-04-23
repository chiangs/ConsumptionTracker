$(document).ready(function() {
	load();
});

var load = function() {
	console.log('loaded');

	$.ajax({
		type : 'GET',
		url : 'api/consumables',
		dataType : 'JSON'
	}).done(function(data, status) {
		console.log('Great Success!');
		createTable(data);
	}).fail(function(xhr, status, error) {
		console.log('Darn it');
		console.log(error);
	})
}

var createTable = function(data) {
	$('#content2').empty();
	var $table = $('<table>');
	var $th1 = $('<th>');
	var $th2 = $('<th>');
	var $th3 = $('<th>');
	var $th4 = $('<th>');
	var $th5 = $('<th>');
	var $th6 = $('<th>');
	var $th7 = $('<th>');
	
	var $createButton = $('<button type="submit" name="create" class="btn btn-primary">Add +</button>');
	
	$th1.text('ID');
	$th2.text('Name');
	$th3.text('Product Number');
	$th4.text('Description');
	$th5.text('Cost');
	$th6.text('Edit');
	$th7.text('Delete');
	$($table).append($th1, $th2, $th3, $th4, $th5, $th6, $th7);
	$table.addClass('table table-inverse');

	data.forEach(function(elem){
		var $editButton = $('<button type="submit" name="edit" class="btn btn-warning">•</button>');
		var $deleteButton = $('<button type="submit" name="delete" class="btn btn-danger">x</button>');
		var $td1 = $('<td>');
		var $td2 = $('<td>');
		var $td3 = $('<td>');
		var $td4 = $('<td>');
		var $td5 = $('<td>');
		var $td6 = $('<td>');
		var $td7 = $('<td>');
		var $tr = $('<tr>');

		var current = elem;

		$($td1).text(elem.id);
		$($td2).text(elem.name);
		$($td3).text(elem.productNum);
		$($td4).text(elem.description);
		$($td5).text(elem.cost);
		$td6.append($editButton);
		$td6.attr('id', 'editButton');
		$td7.append($deleteButton);
		$td7.attr('id', 'deleteButton');
		$($tr).append($td1, $td2, $td3, $td4, $td5, $td6, $td7);
		$($table).append($tr);

		createEditForm($editButton, current);
		destroy($deleteButton, current);
	});
	sortId($th1);
	sortName($th2);
	sortNum($th3);
	sortDesc($th4);
	sortCost($th5);
	createAddForm($createButton);
	$('#content2').append($table);
	$('#content2').append($createButton);	
}

var sortNum = function(sorter) {
	sorter.on('click', function(e){
		$.ajax({
			type : 'GET',
			url : 'api/consumables/sortNum',
			dataType : 'JSON'
		}).done(function(data, status) {
			console.log('Great Success!');
			createTable(data);
		}).fail(function(xhr, status, error) {
			console.log('Darn it');
			console.log(error);
		})
	});
}

var sortId = function(sorter) {
	sorter.on('click', function(e){
		$.ajax({
			type : 'GET',
			url : 'api/consumables/sortId',
			dataType : 'JSON'
		}).done(function(data, status) {
			console.log('Great Success!');
			createTable(data);
		}).fail(function(xhr, status, error) {
			console.log('Darn it');
			console.log(error);
		})
	});
}

var sortName = function(sorter) {
	sorter.on('click', function(e){
		$.ajax({
			type : 'GET',
			url : 'api/consumables/sortName',
			dataType : 'JSON'
		}).done(function(data, status) {
			console.log('Great Success!');
			createTable(data);
		}).fail(function(xhr, status, error) {
			console.log('Darn it');
			console.log(error);
		})
	});
}

var sortDesc = function(sorter) {
	sorter.on('click', function(e){
		$.ajax({
			type : 'GET',
			url : 'api/consumables/sortDesc',
			dataType : 'JSON'
		}).done(function(data, status) {
			console.log('Great Success!');
			createTable(data);
		}).fail(function(xhr, status, error) {
			console.log('Darn it');
			console.log(error);
		})
	});
}

var sortCost = function(sorter) {
	sorter.on('click', function(e){
		$.ajax({
			type : 'GET',
			url : 'api/consumables/sortCost',
			dataType : 'JSON'
		}).done(function(data, status) {
			console.log('Great Success!');
			createTable(data);
		}).fail(function(xhr, status, error) {
			console.log('Darn it');
			console.log(error);
		})
	});
}

var destroy = function(button, current) {
	button.on('click', function() {
		var confirmDestroy = confirm('Are you sure?');

		if (confirmDestroy) {
			$.ajax({
				type : 'DELETE',
				url : 'api/consumables/' + current.id,
				dataType : 'JSON'
			}).done(function(data, status) {
				console.log(data);
				console.log('GREAT SUCCESS');
				load();
			}).fail(function(xhr, status, error) {
				console.log('Darn it');
				console.log(error);
			})
		}
	});
}

var createEditForm = function(editButton, current) {
	editButton.on('click', function() {
		$('footer').load('partials.html #editConsumable', function() {
			$('#name').attr('value', current.name);
			$('#productNum').attr('value', current.productNum);
			$('#description').attr('value', current.description);
			$('#cost').attr('value', current.cost);
			$('#contact').attr('value', current.contact);
			edit($('#submitEdit'), current);
		});
	});
}

var edit = function(submitEdit, current) {
	submitEdit.on('click', function(e) {
		e.preventDefault();
	
		var newName = $(document.editConsumable.cname).val();
		var newProdNum = $(document.editConsumable.productNum).val();
		var newDesc = $(document.editConsumable.description).val();
		var newCost = $(document.editConsumable.cost).val();
		var newContact = $(document.editConsumable.contact).val();
		
		var $editedCon = {
			id : current.id,
			name : newName,
			productNum : newProdNum,
			description : newDesc,
			cost : newCost,
			contact : newContact
		}

		$.ajax({
			type : 'PUT',
			url : 'api/consumables/' + current.id,
			dataType : 'JSON',
			contentType : 'application/json',
			data : JSON.stringify($editedCon)
		}).done(function(data, status) {
			console.log(data);
			console.log('GREAT SUCCESS');
			load();
		}).fail(function(xhr, status, error) {
			console.log('Darn it');
			console.log(error);
		})
	});
}

var createAddForm = function(addButton) {
	addButton.on('click', function(){
		$('footer').load('partials.html #createConsumable', function() {
			var $submitAdd = $('#submitAdd');
			create($submitAdd);
		});
	});
}

var create = function(submitAddButton) {
	submitAddButton.on('click', function(e) {
		e.preventDefault();
		
		var newName = $(document.createConsumable.cname).val();
		var newProdNum = $(document.createConsumable.productNum).val();
		var newDesc = $(document.createConsumable.description).val();
		var newCost = $(document.createConsumable.cost).val();
		var newContact = $(document.createConsumable.contact).val();
		
		var $newCon = {
				name : newName,
				productNum : newProdNum,
				description : newDesc,
				cost : newCost,
				contact : newContact
			}
		
		$.ajax({
			type : 'POST',
			url : 'api/consumables',
			dataType : 'JSON',
			contentType : 'application/json',
			data : JSON.stringify($newCon)
		}).done(function(data, status) {
			console.log(data);
			console.log('GREAT SUCCESS');
			load();
		}).fail(function(xhr, status, error) {
			console.log('Darn it');
			console.log(error);
		})
	});
}