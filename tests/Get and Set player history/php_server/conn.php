<?php

$pdo_host = '?????';
$pdo_user = '?????';
$pdo_pass = '????';
$pdo_database = 'dice_db';

function connData($dataSQL,$params,$isShowEcho,$isReturned){
	global $pdo_host, $pdo_user, $pdo_pass, $pdo_database;
	try {
	   $pdo_dns = 'mysql:host='.$pdo_host.';dbname='.$pdo_database;
		$pdo_db = new PDO($pdo_dns, $pdo_user, $pdo_pass);
		$pdo_db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		$pdo_sql = $pdo_db->prepare($dataSQL);
		$pdo_sql->execute($params);
		if($isReturned){
			return $pdo_sql->fetchAll(PDO::FETCH_ASSOC);
		}
		$pdo_db = null;
		if($isShowEcho){
			echo "Connected successfully";
		}
	}
	catch(PDOException $e)
	{
    	if($isShowEcho){
			echo '{"error": "'. $e->getMessage().'","history":[]}' ;
		}
    }
}

function getData($dataSQL,$params,$isShowEcho){
	return connData($dataSQL,$params,$isShowEcho,true);
}

function setData($dataSQL,$params,$isShowEcho){
	connData($dataSQL,$params,$isShowEcho,false);
}

?>