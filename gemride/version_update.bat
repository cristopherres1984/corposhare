echo off
if "x%1" == "x" (
	echo "Please set the new version number as a parameter"
	exit;
)
call mvn -B versions:set -DnewVersion=%1
call mvn -B versions:commit
cd web-frontend
call npm version %1
