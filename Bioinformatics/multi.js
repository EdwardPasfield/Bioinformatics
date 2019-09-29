function loopcon(){

var res = document.getElementById("pseq").value;

var resarray = res.split("\n");

for(i=0; i < resarray.length; i++){
	resarray[i];
	var s = "<div id='results' class='container-fluid'>   <div class='container-fluid bg-grey'>  <div class='row'> <div class='col-sm-10' width=65%;>    <h2>RESULTS</h2><br>     <h4><strong>Protein Name:</strong> e.g. TAU HUMAN</h4><br>	  <h4><strong>UniProt Accession Code:</strong>  eg P10636</h4><br>	  <h4><strong>Sequence Motif Matches:</strong>  eg 333 --> 339(KDHFHF)</h4><br>	  <h4><strong>Protein Sequence:</strong>  eg MADEJFENGNEGJEMGDMBEGNEGJENVNAAGGGTTTCCCGGGGGGGGGGGGGGGCCCTTTAAAAATTTTTTTTTTTGGDEBERETEBTHREWHWGWRGWRETWGWRRHERHERHERHBERBK</h4><br>	  </div>  </div>  </div></div>";
//' + myvar +  '
document.getElementById("big").innerHTML += s;
	
}
}