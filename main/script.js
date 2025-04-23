// При загрузке страницы проверяем, есть ли сохранённые данные
window.onload = function() {
    const editableBlock = document.querySelector('.editable-block');
    const savedText = localStorage.getItem('editableText');
    
    if (savedText) {
      editableBlock.innerHTML = savedText;
    }
  }
  
  // Сохраняем данные в localStorage при нажатии на кнопку
  document.getElementById('save-btn').addEventListener('click', function() {
    const editableText = document.querySelector('.editable-block').innerHTML;
    localStorage.setItem('editableText', editableText);
    alert('Изменения сохранены!');
  });
  