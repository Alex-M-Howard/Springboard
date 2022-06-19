function createMeme(imgURL) {
	const body = document.querySelector('body');
	const div = document.createElement('div');
	const img = document.createElement('img');
	const topText = document.createElement('div');
	const bottomText = document.createElement('div');
	const remove = document.createElement('button');

	div.classList.add('generated-memes');
	img.setAttribute('src', imgURL.value);
	img.classList.add('generated-meme');
	remove.classList.add('remove');
	topText.innerText = document.getElementById('top-text').value.toUpperCase();
	bottomText.innerText = document.getElementById('bottom-text').value.toUpperCase();
	remove.innerText = 'Remove';
	topText.classList.add('top-text');
	bottomText.classList.add('bottom-text');

	body.append(div);
	div.append(img);
	div.append(topText);
	div.append(remove);
	div.append(bottomText);

	imgURL.value = '';
	document.getElementById('top-text').value = '';
	document.getElementById('bottom-text').value = '';
}

function removeMeme(event) {
	const div = event.target.parentElement;
	const body = event.target.parentElement.parentElement;
	const removeButton = event.target;
	const image = event.target.previousElementSibling.previousElementSibling;
	const topText = event.target.previousElementSibling;
	const bottomText = event.target.nextElementSibling;

	div.removeChild(removeButton);
	div.removeChild(image);
	div.removeChild(topText);
	div.removeChild(bottomText);
	body.removeChild(div);

	saveToStorage();
}

const createButton = document.getElementById('create-button');
createButton.addEventListener('click', function(event) {
	event.preventDefault();

	const imgURL = document.getElementById('image-src');
	if (!imgURL.value) {
		window.alert('Please paste an image URL!');
	}
	else {
		createMeme(imgURL);
		saveToStorage();
	}
});

function loadFromStorage() {
	try {
		const stored = JSON.parse(localStorage.memes);

		for (meme in stored) {
			const body = document.querySelector('body');
			const div = document.createElement('div');
			const img = document.createElement('img');
			const topText = document.createElement('div');
			const bottomText = document.createElement('div');
			const remove = document.createElement('button');

			div.classList.add('generated-memes');
			img.setAttribute('src', meme);
			img.classList.add('generated-meme');
			remove.classList.add('remove');
			topText.innerText = stored[meme][0];
			bottomText.innerText = stored[meme][1];
			remove.innerText = 'Remove';
			topText.classList.add('top-text');
			bottomText.classList.add('bottom-text');

			body.append(div);
			div.append(img);
			div.append(topText);
			div.append(remove);
			div.append(bottomText);
		}
	} catch (err) {
		const body = document.querySelector('body');
		const div = document.createElement('div');
		const img = document.createElement('img');
		const topText = document.createElement('div');
		const bottomText = document.createElement('div');
		const remove = document.createElement('button');

		div.classList.add('generated-memes');
		img.setAttribute('src', 'https://c.tenor.com/9LBVvWv0XwgAAAAC/confused-han-solo.gif');
		img.classList.add('generated-meme');
		remove.classList.add('remove');
		topText.innerText = 'JUST SAVED THE GALAXY';
		bottomText.innerText = 'STILL CALLED SCRUFFY LOOKING';
		remove.innerText = 'Remove';
		topText.classList.add('top-text');
		bottomText.classList.add('bottom-text');

		body.append(div);
		div.append(img);
		div.append(topText);
		div.append(remove);
		div.append(bottomText);
	}
}

function saveToStorage() {
	localStorage.clear();
		const memes = document.querySelectorAll('.generated-memes');
		const store = {};

		for (let meme of memes) {
			console.log(meme);
			const image = meme.firstElementChild.getAttribute('src');
			const topText = meme.firstElementChild.nextElementSibling.innerText;
			const bottomText = meme.lastElementChild.innerText;
			store[image] = [ topText, bottomText ];
		}
	
	localStorage.setItem('memes', JSON.stringify(store));
    if (localStorage.memes === "{}") {
        localStorage.clear();
    }    
    
}

loadFromStorage();

const body = document.querySelector('body');
body.addEventListener('mouseover', function(event) {
	if (event.target.tagName === 'IMG') {
		const image = event.target;
		const remove = image.nextElementSibling.nextElementSibling;
		image.style.opacity = '0.3';
		remove.style.opacity = '1.0';
	}
	else if (event.target.classList.contains('remove')) {
		const remove = event.target;
		const image = event.target.previousElementSibling.previousElementSibling;
		image.style.opacity = '0.3';
		remove.style.opacity = '1.0';
	}
});
body.addEventListener('mouseout', function(event) {
	if (event.target.tagName === 'IMG' && !event.target.classList.contains('remove')) {
		const image = event.target;
		const remove = image.nextElementSibling.nextElementSibling;
		image.style.opacity = '1.0';
		remove.style.opacity = '0';
	}
});

body.addEventListener('click', function(event) {
	if (event.target.classList.contains('remove')) {
		removeMeme(event);
	}
	else {
		return;
	}
});
