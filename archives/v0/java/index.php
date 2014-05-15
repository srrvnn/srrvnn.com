<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<?php
        	
        // Show whoami
        $output = shell_exec("whoami");
        echo "<strong>WHOAMI</strong>";
        echo "<hr/>";
        echo "$output<br/><br/><br/><br/>";

        // Show The Java Version Before Setting Environmental Variable
        $output = shell_exec("java -Xmx64m -version 2>&1");
        echo "<strong>Java Version Before Setting Environmental Variable</strong>";
        echo "<hr/>";
        echo "$output<br/><br/><br/><br/>";

        // Set Enviromental Variable
        $JAVA_HOME = "/usr/local/jdk1.5.0_15";
        $PATH = "$JAVA_HOME/bin:/usr/local/bin:/usr/bin:/bin";
        putenv("JAVA_HOME=$JAVA_HOME");
        putenv("PATH=$PATH");

        // Show The Java Version After Setting Environmental Variable
        $output = shell_exec("java -Xmx64m -version 2>&1");
        echo "<strong>Java Version After Setting Environmental Variable</strong>";
        echo "<hr/>";
        echo "$output<br/><br/><br/><br/>";
		
		// Show The Java Version After Setting Environmental Variable
        $output = shell_exec("java -Xmx64m -jar Print.jar");
        echo "<strong>The page says:</strong>";
        echo "<hr/>";
        echo "$output<br/><br/><br/><br/>";
		
		
?>

<body>
</body>
</html>