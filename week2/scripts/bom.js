const button = document.querySelector('button');
const input = document.querySelector('#favchap');
button.addEventListener('click', function() {
    if(input.value.trim() !== '') {
        // fill the blank with the new list
        const list = document.querySelector('');
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        
    } else {
        input.focus();
    }
});
deleteButton.addEventListener('click', function() {
    list.removeChild(li);
    input.focus()
});
input.value ='';
input.focus();