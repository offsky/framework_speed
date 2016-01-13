<html><head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

<style>
span.cell { cursor:pointer; display:inline-block; border: 1px solid black; padding: 2px; margin-left: 5px;}

</style>
</head><body>
<div id="loading">Loading</div>
<?

$data = array();

for($i=0;$i<5000;$i++) {
	$data[$i] = array("name"=>"Item".$i,"text"=>"This is ".$i." comment");

	$html = '<div>
	<span class="cell" data-num="1">'.$data[$i]['name'].' = <i>1</i></span>
	<span class="cell" data-num="1">'.$data[$i]['text'].' = <i>1</i></span>
	<span class="cell" data-num="1">a = <i>1</i></span>
	<span class="cell" data-num="1">b = <i>1</i></span>
	<span class="cell" data-num="1">c = <i>1</i></span>
	<span class="cell" data-num="1">d = <i>1</i></span>
	<span class="cell" data-num="1">e = <i>1</i></span>
	<span class="cell" data-num="1">f = <i>1</i></span>
	<span class="cell" data-num="1">g = <i>1</i></span>
	<span class="cell" data-num="1">h = <i>1</i></span>
	<span class="cell" data-num="1">i = <i>1</i></span>
	<span class="cell" data-num="1">j = <i>1</i></span>
	<span class="cell" data-num="1">k = <i>1</i></span>
	</div>';
	echo $html;
}

?>


<script>

$('.cell').on("click",function(e) {
	var cell = $(e.target);
	var data = cell.data("num");
	data++;
	cell.data("num",data);
	cell.find("i").html(data);
})

$( document ).ready(function() {
  $('#loading').html("ready");
});

</script>
</body></html>