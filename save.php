<?php


		$data = $_RERQUEST['base64data'];
		$image = explode('base64,',$data);
		file_put_contents('image.jpg',base64_decode(\$image[1]));
	?>