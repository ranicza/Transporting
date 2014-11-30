$(document).ready(function(){
	$('form#information').submit(function(event){
		event.preventDefault();

		var from = $("select#from-city").val();
		var to = $("select#to-city").val();
		var number_pack = parseInt($("#package").val());
		var weig = parseInt($('#weight').val());
		var date = parseInt($('#data').val());

        // 0,8$ за 1 км
		var cost_city ={
			minsk: 20,
			brest: 282,
			vitebsk: 232,
			grodno: 270,
			mogilev: 134,
			gomel: 256
		}
		var order = {
			form_city: from,
			to_city: to,
			number_of_pack: number_pack,
			weight: weig,
			days: date,
			cost_for_city: function(){
				if(this.form_city == "minsk" && this.to_city == "minsk"){
					return 20;
				}else if(this.form_city == "minsk" && this.to_city == "brest" || this.form_city == "brest" && this.to_city == "minsk"){
					return 282;
				}
				else if(this.form_city == "minsk" && this.to_city == "vitebsk" || this.form_city == "vitebsk" && this.to_city == "minsk"){
					return 232;
				}
				else if(this.form_city == "minsk" && this.to_city == "grodno" || this.form_city == "grodno" && this.to_city == "minsk"){
					return 270;
				}else if(this.form_city == "minsk" && this.to_city == "mogilev" || this.form_city == "mogilev" && this.to_city == "minsk"){
					return 134;
				}else if(this.form_city == "minsk" && this.to_city == "gomel" || this.form_city == "gomel" && this.to_city == "minsk"){
					return 256;
				}else if(this.form_city == "brest" && this.to_city == "brest" || this.form_city == "gomel" && this.to_city == "gomel" ||
					this.form_city == "vitebsk" && this.to_city == "vitebsk" ||	this.form_city == "mogilev" && this.to_city == "mogilev" ||
					this.form_city == "grodno" && this.to_city == "grodno"){
					return 10;
				}else if(this.form_city == "brest" && this.to_city == "grodno" || this.form_city == "grodno" && this.to_city == "brest"){
					return 212;
				}else if(this.form_city == "brest" && this.to_city == "vitebsk" || this.form_city == "vitebsk" && this.to_city == "brest"){
					return 509;
				}else if(this.form_city == "brest" && this.to_city == "gomel" || this.form_city == "gomel" && this.to_city == "brest"){
					return 472;
				}else if(this.form_city == "brest" && this.to_city == "mogilev" || this.form_city == "mogilev" && this.to_city == "brest"){
					return 430;
				}else if(this.form_city == "gomel" && this.to_city == "vitebsk" || this.form_city == "vitebsk" && this.to_city == "gomel"){
					return 265;
				}else if(this.form_city == "gomel" && this.to_city == "mogilev" || this.form_city == "mogilev" && this.to_city == "gomel"){
					return 140;
				}else if(this.form_city == "gomel" && this.to_city == "grodno" || this.form_city == "grodno" && this.to_city == "gomel"){
					return 476;
				}else if(this.form_city == "mogilev" && this.to_city == "vitebsk" || this.form_city == "vitebsk" && this.to_city == "mogilev"){
					return 131;
				}else if(this.form_city == "mogilev" && this.to_city == "grodno" || this.form_city == "grodno" && this.to_city == "mogilev"){
					return 418;
				}else if(this.form_city == "vitebsk" && this.to_city == "grodno" || this.form_city == "grodno" && this.to_city == "vitebsk"){
					return 497;
				}else return;
			},
			cost_for_days: function(){
				if(this.days == 1){
					return 30;
				}else if (this.days == 2){
					return  20;
				}else if(this.days == 3){
					return 10;
				}else{
					return 0;
				}
			},
			cost_for_weight: function(){
				if(this.weight > 10){
					return 10;
				}else if(this.weight <= 8 && this.weight >= 5){
					return 8;
				}else if(this.weight < 5 && this.weight >=2){
					return  5;
				}else if(this.weight < 2){
					return 0;
				}
			},
			cost_for_days: function(){
				if(this.days == 1){
					return 30;
				}else if(this.days == 2){
					return 20;
				}else if(this.days == 3){
					return 10;
				}else{
					return 0;
				}
			},
			full_cost: function(){
				return order.cost_for_city() + order.cost_for_days() + order.cost_for_weight();
			}
		};

		$(".result").append('<p>' + 'From:' +'&nbsp;&nbsp;&nbsp;'+ order.form_city.charAt(0).toUpperCase().concat(order.form_city.slice(1).toLowerCase())+ '</p>');
		$(".result").append('<p>' + 'To:' +'&nbsp;&nbsp;&nbsp;' + order.to_city.charAt(0).toUpperCase().concat(order.to_city.slice(1).toLowerCase())+ '</p>');
		$(".result").append('<p>' + '№ of packages:'+'&nbsp;&nbsp;&nbsp;' +order.number_of_pack + '</p>');
		$(".result").append('<p>' + 'Weight, kg:'+'&nbsp;&nbsp;&nbsp;' +order.weight + '</p>');
		$(".result").append('<p>' + 'How many days for delivery:' +'&nbsp;&nbsp;&nbsp;'+ order.days+'</p>' );
		$(".result").append('<p id = "cool-cost">' + 'Cost:'+'&nbsp;&nbsp;&nbsp;'+ order.full_cost()+ '$' + '</p>' );

		$("select#from-city").val('minsk');
		$("select#to-city").val('minsk');
		$("#package").val('');
		$('#weight').val('');
		$('#data').val('');
	});

})