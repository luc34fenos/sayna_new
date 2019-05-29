// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

let imgs = document.getElementsByClassName("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

for (let id in imgs) {
	let img = document.getElementsByClassName("myImg")[id];
	img.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

console.log(span);

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}