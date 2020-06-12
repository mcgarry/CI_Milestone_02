<?php
	include 'conn.php';

	$sql = "SELECT * FROM `routlette_data_tbl`";

	$params = array();

	$data = getData($sql,$params,false);

	//var_dump($data);

	echo '{"error":"","history":[';

	for ($i = 0; $i < count($data); $i++) {

	    echo $data[$i]["winning_no"];

	    if((count($data)-1) != $i){
	        echo ",";
	    }

        /*
        foreach ($data[$i] as &$value) {
            echo $i.'-'.$value.'<br />';
        }
        */
    }

	echo ']}';

?>