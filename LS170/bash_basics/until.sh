counter=10
countdown=0

until [ $counter -lt $countdown ]
do
  echo $counter
  ((counter--))
done