var a = "";

for(i=1; i<=10; i++) {
	for(j=1; j<=10; j++)
		a += (i*j + "  ");
	console.log(a);
	a = "";
}
