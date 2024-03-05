console.log('bobbyhadz.com');

const element = document.getElementById('first_name');

console.log(element.disabled); // 👉️ true

if (element.disabled) {
  console.log('✅ element is disabled');
} else {
  console.log('⛔️ element is not disabled');
}

// ✅ Set attribute disabled
// element.setAttribute('disabled', '')

// ✅ Remove the attribute disabled
// element.removeAttribute('disabled');
