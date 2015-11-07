$(document).ready(function(){
    $("#submit").click(function(){
		var q = $("#users").val();
				
		$("#t1").empty();
		$("#t2").empty();
        $.ajax({
			type: "GET",
			data: "q=" + q,
			url: 'babynames.php',
			success: function(data){
				
				var text1= "<table>"+"<tr>"+"<th>Year</th>"+"<th>Ranking</th>"+"<th>Name</th>"+"<th>Gender</th>";
				var text2= "<table>"+"<tr>"+"<th>Year</th>"+"<th>Ranking</th>"+"<th>Name</th>"+"<th>Gender</th>";
				//var obj = jquery.parseJSON(data);
				
				
				$.each(JSON.parse(data), function(idx, obj) {
					if(obj.gender=='f')
					{
						var text = "<tr>"+ 
								"<td>"+ obj.year + "</td>" +
								"<td>"+ obj.ranking + "</td>"+
								"<td>"+ obj.name + "</td>" +
								"<td>"+ obj.gender + "</td>" +
								
								"</tr>";
								text1+=text;
						
					
					}
					
					$("#1").html(text1);
					if(obj.gender=='m')
					{
						var text = "<tr>"+ 
								"<td>"+ obj.year + "</td>" +
								"<td>"+ obj.ranking + "</td>"+
								"<td>"+ obj.name + "</td>" +
								"<td>"+ obj.gender + "</td>" +
								
								"</tr>";
						text2+=text;
						
					}
					
					$("#2").html(text2);
										
				});
				
			}
		});
    });
});