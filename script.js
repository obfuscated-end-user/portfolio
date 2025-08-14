// SPAGHETTI CODE
const windowDiv = document.getElementsByClassName("window")[0];
const titleBarDiv = document.getElementsByClassName("title-bar")[0];
const mainDiv = document.getElementById("main");
const loadingDiv = document.getElementById("loading");

const viewportWidth = window.innerWidth || document.documentElement.clientWidth
	|| document.body.clientWidth;

// https://www.browserstack.com/guide/common-screen-resolutions
// below 768×N is usually mobile, there may be very specific edge cases
const isMobile = viewportWidth <= 768;
if (isMobile) {
	console.log("mobile");
	windowDiv.style.width = "90%";
	// titleBarDiv.style.width = "100%"
	// mainDiv.style.width = "90%";
	// loadingDiv.style.width = "90%";
} else {
	console.log("desktop");
	windowDiv.style.width = "80%";
	// titleBarDiv.style.width = "90%"
	// mainDiv.style.width = "80%";
	// loadingDiv.style.width = "80%";
}

const loadingBarLength = Math.max(
	isMobile ? Math.floor(viewportWidth / 15) : 100, 20
);
let loadingBarProgress = 0;

let aboutMeParagraph = document.getElementById("about-me-paragraph");
aboutMeParagraph.innerHTML = atob("SGVsbG8gdGhlcmUsIEknbSBBcnR1eiBKYXJyZWQgQ2FwYXRpLiBJJ20gYSBwcm9ncmFtbWVyIGFuZCBJIGxpa2UgdG8gd3JpdGUgY29kZS4gSSBzdHVkaWVkIGNvbXB1dGVyIHNjaWVuY2UgZm9yIDQgeWVhcnMgYXQgRGUgTGEgU2FsbGUgVW5pdmVyc2l0eSDigJMgRGFzbWFyacOxYXMuIEkgY3VycmVudGx5IHJlc2lkZSBhdCBJbXVzLCBDYXZpdGUu");

let personalEmail = document.getElementById("personal-email");
personalEmail.innerHTML = atob("YXJ0dXpqYXJyZWRjYXBhdGlAZ21haWwuY29t");

let linkedInAccount = document.getElementById("linkedin-account");
linkedInAccount.href = atob("aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FydHV6LWphcnJlZC1jLTkwNDEzOTMxMA==");

let phoneNumber = document.getElementById("phone-number");
phoneNumber.innerHTML = atob("IyArNjMgOTI1IDcwNiA5MDM0IC8gMDkyNSA3MDYgOTAzNA==");

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateFakeLoadingBar() {
	const filledLength = Math.floor((loadingBarProgress / 100) * loadingBarLength);
	const emptyLength = loadingBarLength - filledLength;

	const bar = `［${"▓".repeat(filledLength)}${"░".repeat(emptyLength)}］`;
	loadingDiv.innerHTML = `For the best experience, view this site on a desktop device.<br><br>Installing dependencies...<br><br>${bar} ${loadingBarProgress}%<br><br><br><br>`;

	if (loadingBarProgress < 100) {
		loadingBarProgress += 2;
		setTimeout(updateFakeLoadingBar, randomIntFromInterval(80, 150));
	} else
		loadingDiv.innerHTML = `For the best experience, view this site on a desktop device.<br><br>Setup complete.<br><br>${bar} 100%<br><br>Initializing modules...<br><br>`
}

updateFakeLoadingBar();

function typingEffect(el, text, interval, i=0) {
	if (i === 0) {
		el.textContent = "";
		const cursor = document.createElement("span");
		cursor.classList.add("fake-cursor");
		cursor.textContent = "|";	// "█"
		el.appendChild(cursor);
	}
	const cursor = el.querySelector(".fake-cursor");
	if (cursor) el.removeChild(cursor);
	el.textContent += text[i];
	if (cursor) el.appendChild(cursor);
	if (i === text.length - 1) {
		setTimeout(() => { el.removeChild(cursor); }, 5000);
		return;
	}
	setTimeout(() => typingEffect(el, text, interval, i + 1), interval);
}

function tempStoreText(el) {
	temp = el.textContent;
	el.innerHTML = "";
	return temp;
}

function randomChars(length) {
	let result = "";
	let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	// "▁▂▃▄▅▆▇█" ".ıilI"
	for (let i = 0; i < length; i++)
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	return result;
}

let randomCharLength = 1;
let longestRandomCharsLength = Math.max(
	isMobile ? Math.floor(viewportWidth / 15) : 100, 40
);

function constantlyChangingChars(el) {
	let index = 0;
	setInterval(() => {
		el.innerHTML = randomChars(randomCharLength);
		index = (index + 1) % el.innerHTML.length;
		randomCharLength++;
		if (randomCharLength > longestRandomCharsLength)
			randomCharLength = longestRandomCharsLength;
	}, 100);
}

/* const frierenUnorderedList = document.getElementById("frieren");
frierenUnorderedList.style.display = "none"; */

/* function createFrieren() {
	const frierenString = `
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠠⠤⠤⠤⠤⠤⠤⠀⣀⣀⣀⠀⠀⢀⡀⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⡒⠉⠀⠀⠀⠒⠲⠤⡀⠀⠀⠀⠈⠙⠻⣷⠿⢄⡀⠀⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡔⡵⠋⠀⡆⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠀⠀⠀⠑⢄⠙⢪⡓⣌⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢊⠎⠀⠀⢠⠋⠦⡀⠀⠀⠀⠀⠀⠀⠈⢣⡀⢢⠀⠀⠀⠈⢣⡀⢹⣌⢯⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⢃⡎⢀⠀⢠⠇⠀⠀⠈⠒⣵⡲⣖⠖⠀⠀⠠⢣⠈⣇⠀⠀⠀⢰⣵⠀⠘⡆⢻⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⢸⠀⣞⣠⣃⠀⠀⠀⠀⠀⠋⣉⡙⠿⡦⣄⡀⠈⡇⢸⠀⠀⠀⠀⠟⣧⠀⢸⡄⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⡄⢠⢿⠯⠜⠁⠀⠀⠀⠀⢸⡇⠀⠀⠀⡀⠈⠁⢺⠘⠀⠀⠀⠀⢰⢸⠀⢸⣇⠈⢇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣬⠃⠃⢸⢯⠞⠙⠦⠀⠀⠀⠀⠈⢀⣶⢾⣿⣿⡿⣧⢾⠛⠀⠀⠀⠀⠘⢸⣠⣃⣿⡀⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠀⢰⢻⠈⢠⣐⣤⣀⠀⠀⠀⠀⠸⠃⠘⡷⢽⠿⠁⢸⣸⡆⠀⠀⠀⣤⢸⢁⣠⠤⠬⠭⠭⠭⣭⣭⠭⢭⡭⠟⣩⠆
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡀⠀⢻⣠⣿⠻⣟⢿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⢧⠀⠀⢠⢿⡏⠙⢢⠀⠀⠀⠀⠀⡼⠨⢔⣯⠴⠋⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⡀⠀⣇⠈⠙⠋⠉⢸⣇⠄⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⠸⡀⠀⡌⢸⣁⣤⣊⡀⠤⠤⣖⣪⠖⠚⠉⠁⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢤⣃⣇⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠄⠀⠀⠀⠀⠘⠀⠀⣇⣞⣄⣈⣽⠟⣆⣀⡤⠚⠁⠀⣆⠀⠀⠀⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠯⠭⠝⢻⣿⡄⢸⢧⠀⠀⠀⠀⠀⠒⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⠞⠉⠀⣷⠀⡇⡇⠀⠀⠀⢿⡆⠀⠀⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⢹⣼⠒⠳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠈⡇⠀⢸⢰⣿⢸⢹⠀⠀⠀⠀⡘⣷⠀⠀⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡌⡼⠈⠀⠀⢿⡷⢄⡀⠀⠀⠀⠀⠀⠀⢀⡠⠔⠉⠀⠀⠀⡇⠀⢸⢸⣿⣏⡇⠀⠀⠀⠀⡇⢋⠇⠀⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣧⠇⠀⠀⠀⣾⡇⠀⡉⡖⢤⣀⣀⣤⣶⣛⣀⣠⣤⣤⣤⣤⣇⠀⢸⡞⣻⡞⠀⠀⠀⠀⠀⣷⢸⡸⡀⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡘⠀⠀⠀⢰⠛⠃⣰⢁⣷⡿⣿⣉⣉⡭⠭⠭⠭⠽⠷⠯⠤⠤⡵⢸⣇⣷⠁⠀⠀⠀⠀⠀⢻⢸⡇⢣⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⠃⠀⠀⣠⠸⠀⢰⠃⡼⡸⡇⠘⣿⣿⠀⠀⠀⠀⠀⠀⠀⣀⣀⣡⣸⡿⠁⠀⠀⠀⠀⠀⢰⢸⢸⡇⢸⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡇⠀⠀⢀⣇⠇⢠⢃⠜⠹⣹⣁⣈⣉⣉⣉⣉⣉⣉⣉⣉⡁⠤⠤⠤⡼⠁⠀⠀⠀⠀⠀⠆⢸⢸⣾⢣⡎⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀⣜⡜⢠⠟⠁⣀⡀⢀⡏⡜⢡⡏⢸⠀⡇⠀⠀⠀⠀⠀⠀⢰⠃⠀⠀⠀⠀⠀⢰⠀⣸⣰⠷⠃⠀⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡜⠀⠀⠀⢠⠹⢡⠇⠀⠀⠉⠪⣽⣧⡇⠸⡇⠸⠤⡧⠤⠃⠀⠀⠀⠀⡎⠀⠀⠀⠀⠀⠀⠘⠀⣇⠋⠳⣄⠀⠀⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⠀⢀⠔⡽⠀⠀⠀⠀⣎⢀⠏⠀⠀⠀⠀⢠⠃⡘⢀⠏⢹⠀⡄⠁⠀⠀⠀⠀⠀⢰⠃⠀⠀⠀⠀⠀⠀⡇⠀⡏⠀⠀⠘⢷⡄⠀⠀⠀
	⠀⠀⠀⠀⠀⠀⡰⠋⣼⠆⠀⠀⠀⢸⡎⡜⠀⠀⠀⠀⠀⡞⢠⠇⡜⠀⢸⠀⡇⢰⠀⠀⠀⠀⠀⠸⠀⠀⠀⠀⠀⠀⠀⡇⠀⡇⠀⠀⠀⠈⢿⡀⠀⠀
	⠀⠀⠀⠀⢠⠞⠀⡸⡜⠀⠀⠀⠀⠸⢰⠁⠀⠀⠀⠀⣰⠀⡞⢰⡧⢤⢾⠀⡇⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⡇⠀⠀⠀⠀⠈⣿⠀⠀
	⠀⠀⠀⡠⠁⠀⢰⢻⠃⠀⠀⠀⢀⣇⡏⠀⠀⠀⠀⢠⠇⢠⠁⡾⠀⠘⢹⠀⡇⠘⡇⠀⠀⠀⠀⠀⡇⡇⠀⠀⠀⠀⠀⡇⠀⠁⠀⠀⠀⠀⠀⢹⣇⠀
	⠀⢀⡔⠁⠀⠀⡆⡌⠀⠀⠀⠀⢸⢸⠀⠀⠀⠀⠀⡜⠀⡞⢰⠷⠿⠿⠿⠀⢿⠀⡇⠀⠀⠀⠀⠀⡇⡇⠀⠀⠀⠀⠀⡇⠀⡀⠀⠀⠀⠀⠀⠀⣿⡄
	⢀⠎⠀⠀⠀⢸⢡⡇⠀⠀⠀⠀⡆⡆⠀⠀⠀⠀⢠⠇⢠⠁⡞⠀⠀⠀⠀⠀⢸⠀⠁⠀⠀⠀⠀⢰⡇⠁⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⢹⣇
	⠀
	`;
	if (frierenUnorderedList) {
		frierenString.trim().split("\n").forEach(line => {
			const li = document.createElement("li");
			li.textContent = line;
			li.style.fontSize = isMobile ? "6.5px" : "large";
			li.style.color = "lime";
			frierenUnorderedList.appendChild(li);
		});
	} else
		console.error("Frieren not found. ＜(´⌯ ̫⌯`)＞");
} */

/* function showFrieren() {
	if (frierenUnorderedList.style.display === "none") {
		frierenUnorderedList.style.display = "block";
		// createFrieren();
		frierenListItems = frierenUnorderedList.getElementsByTagName("li");
		const zoltraakLi = document.createElement("li");
		zoltraakLi.innerHTML = "ZOLTRAAK!"
		zoltraakLi.style.width = "100%"
		zoltraakLi.style.fontSize = "large";
		zoltraakLi.style.color = "lime";
		frierenUnorderedList.appendChild(zoltraakLi);
		Object.values(frierenListItems).forEach(
			li => typingEffect(
				li, tempStoreText(li), randomIntFromInterval(30, 50)
			)
		);
	} else {
		frierenUnorderedList.innerHTML = "";
		frierenUnorderedList.style.display = "none";
	}
} */

const showFrierenAnchor = document.getElementById("show-frieren-anchor");
// showFrierenAnchor.innerHTML = isMobile ? "Tap here!" : "Click here!";

/* showFrierenAnchor.addEventListener("click", () => {
	frierenUnorderedList.scrollIntoView({ behavior: "smooth" });
}); */

setTimeout(() => {
	mainDiv.style.display = "block";
	loadingDiv.style.display = "none";

	h1Tags = document.getElementsByTagName("h1");
	h2Tags = document.getElementsByTagName("h2");
	h3Tags = document.getElementsByTagName("h3");
	liTags = document.getElementsByTagName("li");
	aTags = document.getElementsByTagName("a");
	pTags = document.getElementsByTagName("p");
	Object.values(h1Tags).forEach(
		h1 => typingEffect(h1, tempStoreText(h1), randomIntFromInterval(30, 50))
	);
	Object.values(h2Tags).forEach(
		h2 => typingEffect(h2, tempStoreText(h2), randomIntFromInterval(30, 50))
	);
	Object.values(h3Tags).forEach(
		h3 => typingEffect(h3, tempStoreText(h3), randomIntFromInterval(30, 50))
	);
	Object.values(liTags).forEach(
		li => {
			const markerSpan = li.querySelector("span.list-marker");
			const anchor = li.querySelector("a");
			if (anchor) return;
			if (markerSpan) {
				let textNode = null;
				for (const node of li.childNodes) {
					if (node === markerSpan) {
						textNode = node.nextSibling;
						break;
					}
				}
				if (textNode && textNode.nodeType === Node.TEXT_NODE) {
					const originalText = textNode.textContent;
					textNode.textContent = "";
					const typingSpan = document.createElement("span");
					li.insertBefore(typingSpan, textNode.nextSibling);
					li.removeChild(textNode);
					typingEffect(
						typingSpan, originalText, randomIntFromInterval(30, 50)
					);
				}
			} else {
				const originalText = li.textContent;
				li.textContent = "";
				typingEffect(li, originalText, randomIntFromInterval(30, 50));
			}
		}
	);
	Object.values(aTags).forEach(
		a => typingEffect(a, tempStoreText(a), randomIntFromInterval(30, 50))
	);
	Object.values(pTags).forEach(
		p => {
			if (!p.classList.contains("divider"))
				typingEffect(p, tempStoreText(p), randomIntFromInterval(30, 50))
		}
	);

	dividerTags = document.getElementsByClassName("divider");
	Object.values(dividerTags).forEach(
		pd => constantlyChangingChars(pd)
	);

	// MATRIX BACKGROUND EFFECT
	const canvas = document.getElementById("matrix-canvas");
	const ctx = canvas.getContext("2d");

	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		columns = Math.floor(canvas.width / fontSize);
		drops.length = 0;
		for (let x = 0; x < columns; x++)
			drops[x] = Math.random() * canvas.height;
	}

	// i need it to be in fullwidth simply because they look better
	const matrixChars =
	"アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ０１２３４５６７８９";
	const matrixCharsArray = matrixChars.split("");
	const fontSize = isMobile ? 5 : 10;

	let columns = 0;
	const drops = [];

	resizeCanvas();
	window.addEventListener("resize", resizeCanvas);

	function draw() {
		ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = "lime";
		ctx.font = `${fontSize}px monospace`;

		for (let i = 0; i < drops.length; i++) {
			const text = matrixCharsArray[
				Math.floor(Math.random() * matrixCharsArray.length)
			];

			const x = i * fontSize;
			const y = drops[i] * fontSize;
			ctx.fillText(text, x, y);

			if (y > canvas.height && Math.random() > 0.975)
				drops[i] = 0;

			drops[i] += 1;
		}
		requestAnimationFrame(draw);
	}

	draw();
}, 1);	// transition to next screen after 10 seconds

let copyright = document.getElementById("copyright");
copyright.innerHTML = `©${new Date().getFullYear()} 横浜/obfuscated-end-user.`;
copyright.style.color = "azure";