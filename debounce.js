const debounce = (callback, wait) => {
	let timeoutId = null;
	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(
			() => callback.apply(null, args),
			wait
		);
	};
};

const eventListener = debounce(
	() => console.log("radhe radhe"),
	2000
);

const eventListener1 = debounce((arr) => {
	console.log(arr.reduce((acc, curr) => acc + curr));
}, 2300);

// eventListener();
// directly bhi use kar sakte hai ,if cb is already a function
// agar koi modify karke cb  ko call karna hai toh ek aur func me wrap karne ka
// smja kya!?
// setTimeout(eventListener, 2000);
eventListener();

// In summary, the first form executes the eventListener function immediately after the delay, while the second form delays the execution of an arrow function that calls the eventListener function.

eventListener1([1, 2, 3]);
