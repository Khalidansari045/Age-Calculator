function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);


    if (isNaN(day) || isNaN(month) || isNaN(year) || 
        day < 1 || day > 31 || 
        month < 1 || month > 12 || 
        year < 1900 || year > new Date().getFullYear()) {
        document.getElementById('ageResult').innerText = "Please enter a valid date.";
        return;
    }


    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById('ageResult').innerText = `You are ${age} years old.`;
}
