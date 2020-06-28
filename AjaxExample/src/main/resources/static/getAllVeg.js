GET:
$(document).ready(
		
		
		function(){
		
			$("#getAllVegetables").click(function(event){
				event.preventDefault();
				ajaxGet();
			});
			
			function ajaxGet(){
				$.ajax({
					type:"GET",
					url:"getVeg",
					success:function(result){
						$.each(result,function(i,order){
							var data="  vegetables:  " + order;
							$('#getAllVegetablesDiv').append(data);
						})
						
						console.log(result);
					},
				error: function(e){
					console.log("error block");
				}
				});
			}
			
		})
		
		
		$(document).ready(
		function(){
			
			$("#getAllSweets").click(function(event){
				event.preventDefault();
				ajaxGet();
			});
			
			function ajaxGet(){
				$.ajax({
					type:"GET",
					url:"getSweets",
					success:function(result){
						$.each(result,function(i,order){
							var data="  sweets:  " + order;
							$('#getAllSweetsDiv').append(data);
						})
						
						console.log(result);
					},
				error: function(e){
					console.log("error block");
				}
				});
			}
			
		})
		
		
		$(document).ready(
		function(){
			
			$("#getAllGroceries").click(function(event){
				event.preventDefault();
				ajaxGet();
			});
			
			function ajaxGet(){
				$.ajax({
					type:"GET",
					url:"getGroceries",
					success:function(result){
						$.each(result,function(i,order){
							var data="  groceries:  " + order;
							$('#getAllGroceriesDiv').append(data);
						})
						
						console.log(result);
					},
				error: function(e){
					console.log("error block");
				}
				});
			}
			
		})
		
		
			$(document).ready(
		function(){
			
			$("#getAllFlowers").click(function(event){
				event.preventDefault();
				ajaxGet();
			});
			
			function ajaxGet(){
				$.ajax({
					type:"GET",
					url:"getFlowers",
					success:function(result){
						$.each(result,function(i,order){
							var data="  flowers:  " + order;
							$('#getAllFlowersDiv').append(data);
						})
						
						console.log(result);
					},
				error: function(e){
					console.log("error block");
				}
				});
			}
			
		})
		
		