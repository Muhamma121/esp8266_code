const LedOnButton = document.getElementById('ledOn');
// const unlockCheck = document.getElementById('leave-unlocked-check');
const LedOffButton = document.getElementById('ledOff');

LedOnButton.addEventListener('click', e => {
	console.log('on');
	
	// if (unlockCheck.checked) {
	// 	console.log('checked');
	// 	unlockTime = null;
	// }	
	
	fetch(`http://Ip address here?led=1`, {method: 'post'})
	.then(res => {
		console.log(res);
	})
	.catch(err => {
		console.log(err);
	});
});

LedOffButton.addEventListener('click', e => {
	console.log('off')
	fetch('http://Ip address here?led=0', {method: 'post'})
	.then(res => {
		console.log(res);
	})
	.catch(err => {
		console.log(err);
	});	
});