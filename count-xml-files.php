<?php 
	
	if ($handle = opendir('mydesktop')) {

    while (false !== ($entry = readdir($handle))) {

        if ($entry != "." && $entry != "..") {

            echo "$entry";
        }
    }

    closedir($handle);
}

?>